let fs = require("fs");
let filename = "build/search-index-docs-default-current.json";
let a = fs.readFileSync(filename);
let b = JSON.parse(a);
b.documents.forEach((element) => {
  const regex = new RegExp("docs", "gi");
  let c = (element.sectionRoute.match(regex) || []).length;
  if (c === 2) {
    let d = element.sectionRoute.split("docs");
    let e = "/docs" + d[2];
    element.sectionRoute = e;
  }
});
fs.writeFileSync(filename, JSON.stringify(b));
