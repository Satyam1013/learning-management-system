import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    console.log("userId:", userId); // Add logging for debugging

    const { title } = await req.json();

    const course = await db.course.create({
      data: {
        userId: String(userId),
        title,
      },
    });

    return NextResponse.json(course);
  } catch (err) {
    console.log("[COURSES]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}