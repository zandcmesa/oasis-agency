#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../public/work");
const chunksDir = path.join(dir, "_chunks");
if (fs.existsSync(path.join(chunksDir, "manifest.json"))) {
  const manifest = JSON.parse(fs.readFileSync(path.join(chunksDir, "manifest.json"), "utf8"));
  for (const m of manifest) {
    let s = "";
    for (const p of m.parts) s += fs.readFileSync(path.join(chunksDir, p.file), "utf8");
    if (s.length !== m.total) throw new Error(m.name + " " + s.length + "!=" + m.total);
    fs.writeFileSync(path.join(dir, m.name), s);
    console.log("assembled", m.name, s.length);
  }
}
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".jpg.b64"))) {
  const jpg = f.replace(/\.b64$/, "");
  const buf = Buffer.from(fs.readFileSync(path.join(dir, f), "utf8"), "base64");
  fs.writeFileSync(path.join(dir, jpg), buf);
  fs.unlinkSync(path.join(dir, f));
  console.log("decoded", jpg, buf.length);
}
