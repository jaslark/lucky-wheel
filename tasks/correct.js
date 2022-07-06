const cheerio = require("cheerio");
const ts = require("typescript");
const gulp = require("gulp");
const fs = require("fs");

const APP_PATH = "./";

gulp.task("correct", done => {
  //   let files = [...getFilesInPath(APP_PATH, ".html")];
  let path = "./translations.json";
  let content = fs.readFileSync(path, "utf8");

  content = content.replace(
    /\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/g,
    " "
  );
  content = content.replace(/\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/g, " ");
  content = content.replace(/\\n\\t\\t\\t\\t\\t\\t\\t\\t/g, " ");
  content = content.replace(/\\n\\t\\t\\t\\t\\t\\t\\t/g, " ");
  content = content.replace(/ \\t\\t/g, " ");
  content = content.replace(/ \\t/g, " ");
  content = content.replace(/ \(\*\)/g, "");
  content = content.replace(/\(\*\)/g, "");
  content = JSON.parse(content);
  let newObject = {};
  for (let [key, value] of Object.entries(content)) {
    key.trim();
    key = key.replace(/\s\s+/g, " ");
    key.trim();
    value.trim();
    value = value.replace(/\s\s+/g, " ");
    value.trim();

    let objNew = new Object();
    objNew[key] = value;
    newObject = Object.assign(newObject, objNew);
  }
  newObject = JSON.stringify(newObject);
  setTimeout(() => {
    fs.writeFileSync("./translations-corrrect.json", newObject, "utf8");
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
