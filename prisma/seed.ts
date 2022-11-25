import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const Darshani = await prisma.user.upsert({
    where: { email: "dkakade@cemtrexlabs.com" },
    update: {},
    create: {
      email: "dkakade@cemtrexlabs.com",
      name: "Darshani",
      password: "Pass@1234",
      bio: "Quos quia provident conse culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita."
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      password: "Pass@1234",
      bio: "Bob Quos quia provident conse culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita."
    },
  });
  const category = await prisma.category.createMany({
    data: [
      {
        name: "Web development",
      },
      {
        name: "Web design",
      },
      {
        name: "Nature",
      },
    ],
  });

  const posts = await prisma.post.createMany({
    data: [
      {
        title: "Shin Chan",
        content:
          "Crayon Shin-chan, is a Japanese manga series written and illustrated by Yoshito Usui",
        published: true,
        image: "",
        userId: bob.id,
        categoryId: 1,
      },
      {
        title: "Doremon",
        content:
          "Doraemon is a Japanese manga series written and illustrated by Fujiko F. Fujio",
        published: true,
        image: "",
        userId: Darshani.id,
        categoryId: 2,
      },

      {
        title: "Pikachu",
        content:
          "Pikachu is a fictional species in the Pokémon media franchise.",
        published: true,
        image: "",
        userId: Darshani.id,
        categoryId: 3,
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
