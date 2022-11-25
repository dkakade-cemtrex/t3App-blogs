import formidable from "formidable";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

// fields===> {
//   email: 'dkakade@cemtrexlabs.com',
//   title: 'llll',
//   category: '1',
//   content: 'hhh',
//   published: 'true'
// }

export default function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    console.log("fields===>", fields);
    const user = await prisma.user.findFirstOrThrow({
      where: {
        email: fields.email,
      },
    });
    const published = true;

    await saveFile(files.image);

    await prisma.post.create({
      data: {
        title: fields.title,
        content: fields.content,
        published: JSON.parse(fields.published),
        image: files.image ? files.image.originalFilename : '',
        userId: "cla6gf16l0000jxnw9c602wic",
        categoryId: 1,
      },
    });

    return res.status(201).send("Blog added successfully.");
  });
}

// const post = async (req, res) => {

// };

const saveFile = async (file) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  return;
};
