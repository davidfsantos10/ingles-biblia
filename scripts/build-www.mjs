// Copia os arquivos da aplicação web existente (a fonte de verdade continua
// sendo a raiz do repositório) para www/, o diretório que o Capacitor
// empacota dentro do app Android. www/ é gerado por este script e não é
// versionado -- rode `npm run build:www` (ou `npm run cap:sync`) sempre que
// index.html, css/, js/ ou data/ mudarem.
//
// Além de copiar os arquivos, injeta na CÓPIA de index.html (nunca no
// index.html da raiz, que continua servindo o site no GitHub Pages sem
// nenhuma alteração) duas tags <script> com a ponte JS do Capacitor e do
// plugin @capacitor/app -- usadas só pelo tratamento do botão "voltar"
// nativo do Android (ver js/app.js). Isso mantém a versão web exatamente
// como estava: ela nunca carrega esses arquivos.
import { cpSync, rmSync, mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(import.meta.url), "..", "..");
const wwwDir = path.join(root, "www");

const ENTRIES_TO_COPY = ["index.html", "css", "js", "data"];

const CAPACITOR_VENDOR_FILES = [
  {
    src: path.join(root, "node_modules/@capacitor/core/dist/capacitor.js"),
    dest: "js/vendor/capacitor.js",
  },
  {
    src: path.join(root, "node_modules/@capacitor/app/dist/plugin.js"),
    dest: "js/vendor/capacitor-app-plugin.js",
  },
];

rmSync(wwwDir, { recursive: true, force: true });
mkdirSync(wwwDir, { recursive: true });

for (const entry of ENTRIES_TO_COPY) {
  const src = path.join(root, entry);
  if (!existsSync(src)) {
    throw new Error(`Esperava encontrar ${entry} na raiz do projeto, mas não existe.`);
  }
  cpSync(src, path.join(wwwDir, entry), { recursive: true });
}

for (const { src, dest } of CAPACITOR_VENDOR_FILES) {
  if (!existsSync(src)) {
    throw new Error(`Esperava encontrar ${src} (rode "npm install" antes).`);
  }
  cpSync(src, path.join(wwwDir, dest));
}

const indexPath = path.join(wwwDir, "index.html");
const original = readFileSync(indexPath, "utf8");
const scriptTag = '<script src="js/app.js"></script>';
if (!original.includes(scriptTag)) {
  throw new Error(`Não encontrei '${scriptTag}' em index.html -- ajuste este script.`);
}
const withCapacitorBridge = original.replace(
  scriptTag,
  '<script src="js/vendor/capacitor.js"></script>\n' +
    '  <script src="js/vendor/capacitor-app-plugin.js"></script>\n' +
    `  ${scriptTag}`
);
writeFileSync(indexPath, withCapacitorBridge);

console.log(`www/ preparado com: ${ENTRIES_TO_COPY.join(", ")} + ponte Capacitor (js/vendor)`);
