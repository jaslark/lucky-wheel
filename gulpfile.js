const gulp = require("gulp");
const HubRegistry = require("gulp-hub");

const cheerio = require("cheerio");
const rimraf = require("rimraf");
const fs = require("fs");

const hub = new HubRegistry(["tasks/*.js"]);
gulp.registry(hub);
