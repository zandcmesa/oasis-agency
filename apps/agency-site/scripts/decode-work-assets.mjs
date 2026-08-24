#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../public/work");
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".jpg.b64"))) {
  const jpg = f.replace(/\.b64$/, "");
  const buf = Buffer.from(fs.readFileSync(path.join(dir, f), "utf8"), "base64");
  fs.writeFileSync(path.join(dir, jpg), buf);
  fs.unlinkSync(path.join(dir, f));
  console.log(jpg, buf.length);
}
