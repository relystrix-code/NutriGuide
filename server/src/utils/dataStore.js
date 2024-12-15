const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(
  __dirname,
  "../../public/database/articles.json"
);

const readData = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const fileData = fs.readFileSync(dataFilePath);
  return JSON.parse(fileData);
};

const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
