// Generates redirects.txt (Netlify/Cloudflare "_redirects" syntax) for the
// static export, which cannot issue redirects itself. Run:
//   node scripts/generate-redirects.mjs > redirects.txt
// Then translate to your host's format (nginx `return 301`, Apache RewriteRule,
// Vercel `redirects` in vercel.json, ...). Put the result in effect at the host.
import { _allMachines } from "../data/machines.js";

const slug = m => String(m).trim().replace(/\s+/g, "-");
const out = [];
out.push("# Old URLs with spaces -> new hyphenated slugs");
for (const m of _allMachines) {
  if (slug(m.model) !== m.model) {
    for (const prefix of ["", "/en"]) {
      out.push(`${prefix}/janome-sewing-machine-model/${encodeURI(m.model)}/ ${prefix}/janome-sewing-machine-model/${slug(m.model)}/ 301`);
    }
  }
}
out.push("", "# Duplicate listing -> canonical listing");
out.push("/janome-sewing-machine-model/ /products/ 301");
out.push("", "# Duplicate product pages -> canonical product pages");
for (const m of _allMachines) {
  const s = slug(m.model);
  out.push(`/products/${s}/ /janome-sewing-machine-model/${s}/ 301`);
  out.push(`/en/products/${s}/ /en/janome-sewing-machine-model/${s}/ 301`);
}
console.log(out.join("\n"));
