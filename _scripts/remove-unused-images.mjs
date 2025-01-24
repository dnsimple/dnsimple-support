import fs from "fs";
import path from "path";

const imgDir = "./content/files";
const mdDir = "./content/articles";
const removedImages = [];

const articles = fs
  .readdirSync(mdDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => fs.readFileSync(path.join(mdDir, file), { encoding: "utf8", flag: "r" }));

fs.readdirSync(imgDir)
  .filter((img) => img.endsWith(".jpg") || img.endsWith(".png"))
  .forEach((img) => {
    const used = articles.find((content) => content.includes(`/files/${img}`));
    if (!used) {
      removedImages.push(img);
      fs.rmSync(path.join(imgDir, img));
    }
  });

console.log(`${removedImages.length} Images Removed`);
if (removedImages.length) console.log(removedImages);
