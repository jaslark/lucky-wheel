const cheerio = require("cheerio");
const ts = require("typescript");
const gulp = require("gulp");
const fs = require("fs");

const APP_PATH = "./";

gulp.task("append", done => {
  //   let files = [...getFilesInPath(APP_PATH, ".html")];
  let path = "./translations-corrrect.json";
  let content1 = fs.readFileSync(path, "utf8");
  let path2 = "./src/assets/i18n/vi.json";
  console.log(path2);
  let content2 = fs.readFileSync(path2, "utf8");
  content1 = JSON.parse(content1);
  content2 = JSON.parse(content2);
  newObject = { ...content1, ...content2 };
  newObject = JSON.stringify(newObject);
  setTimeout(() => {
    fs.writeFileSync("./translations-append.json", newObject, "utf8");
    done();
  }, 500);
});

function trimData(value) {
  value.trim();
  value = value.replace(/\s\s+/g, " ");
  return value;
}

/**
 * Get a list of all files with matching extension is specified directory.\
 * @return string[];
 */
function getFilesInPath(dir, extension, filelist) {
  if (dir[dir.length - 1] !== "/") dir = dir.concat("/");

  const files = fs.readdirSync(dir);
  filelist = filelist || [];

  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = getFilesInPath(dir + file + "/", extension, filelist);
    } else {
      if (file.indexOf(extension) > -1) {
        filelist.push(dir + file);
      }
    }
  });

  return filelist;
}
