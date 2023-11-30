import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();
    const { courseId } = params;
    console.log('userId:', userId);

    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existingCourse = await db.course.findFirst({
      where: {
        id: courseId,
        userId: String(userId),
      },
    });

    if (!existingCourse) {
      return new NextResponse("Course not found", { status: 404 });
    }

    // Proceed with the update since the record exists
    const updatedCourse = await db.course.update({
      where: {
        id: courseId,
        userId: String(userId),
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (err) {
    console.log("[COURSE_ID] Error:", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}