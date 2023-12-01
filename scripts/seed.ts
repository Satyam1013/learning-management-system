const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      { name: "Computer Science" },
      { name: "Music" },
      { name: "Fitness" },
      { name: "Photography" },
      { name: "Accounting" },
      { name: "Engineering" },
      { name: "Filming" },
    ];

    // Iterate through categories and perform upsert
    await Promise.all(
      categories.map(async (category) => {
        await database.category.upsert({
          where: { name: category.name },
          create: category,
          update: category,
        });
      })
    );
    console.log('Success')
  } catch (err) {
    console.log("Error seeding the database categories", err);
  } finally {
    await database.$disconnect();
  }
}

main();
