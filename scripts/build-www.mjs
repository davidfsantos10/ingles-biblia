// Copia os arquivos da aplicação web existente (a fonte de verdade continua
// sendo a raiz do repositório) para www/, o diretório que o Capacitor
// empacota dentro do app Android. www/ é gerado por este script e não é
// versionado -- rode `npm run build:www` (ou `npm run cap:sync`) sempre que
// index.html, css/, js/ ou data/ mudarem.
//
// Além de copiar os arquivos, injeta na CÓPIA de index.html (nunca no
// index.html da raiz, que continua servindo o site no GitHub Pages sem
// nenhuma alteração) tags <script> com a ponte JS do Capacitor e dos
// plugins @capacitor/app (botão "voltar" nativo), @capacitor-community/
// text-to-speech (áudio nativo no Android), @capacitor/local-notifications
// (lembretes locais), @capacitor-firebase/authentication (login),
// @capacitor/filesystem e @capacitor/share (compartilhar a imagem do
// versículo) e o registro do ImageSaver, plugin nativo próprio do app pra
// salvar a imagem direto na galeria (ver js/app.js). Isso mantém a versão
// web exatamente como estava: ela nunca carrega esses arquivos.
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
  {
    src: path.join(root, "node_modules/@capacitor-community/text-to-speech/dist/plugin.js"),
    dest: "js/vendor/capacitor-tts-plugin.js",
  },
  {
    src: path.join(root, "node_modules/@capacitor/local-notifications/dist/plugin.js"),
    dest: "js/vendor/capacitor-notifications-plugin.js",
  },
  {
    // Stub próprio (não vem do node_modules) -- ver o comentário no próprio
    // arquivo. Precisa carregar ANTES do plugin.js do Firebase Auth abaixo.
    src: path.join(root, "js/vendor-stubs/firebase-auth-stub.js"),
    dest: "js/vendor/firebase-auth-stub.js",
  },
  {
    src: path.join(root, "node_modules/@capacitor-firebase/authentication/dist/plugin.js"),
    dest: "js/vendor/capacitor-firebase-auth-plugin.js",
  },
  {
    // @capacitor/filesystem está fixado (sem "^") em 7.0.1 no package.json de
    // propósito: a partir da 7.1.0 o plugin passou a depender de um terceiro
    // global "synapse" (pacote @capacitor/synapse) que só existe quando um
    // bundler de verdade monta o app -- carregado como <script> avulso (como
    // este projeto faz, sem bundler), o plugin.js quebra na primeira linha
    // ("synapse is not defined") e nem chega a registrar o plugin. A 7.0.1 é
    // a última versão estável antes dessa dependência, e cobre integralmente
    // o único método usado aqui (writeFile). Não atualize essa versão sem
    // resolver esse problema primeiro.
    src: path.join(root, "node_modules/@capacitor/filesystem/dist/plugin.js"),
    dest: "js/vendor/capacitor-filesystem-plugin.js",
  },
  {
    src: path.join(root, "node_modules/@capacitor/share/dist/plugin.js"),
    dest: "js/vendor/capacitor-share-plugin.js",
  },
  {
    // ImageSaver não tem pacote npm nem plugin.js -- é só código nativo (ver
    // o comentário dentro do próprio arquivo). Precisa carregar depois de
    // capacitor.js.
    src: path.join(root, "js/vendor-stubs/image-saver-plugin-register.js"),
    dest: "js/vendor/image-saver-plugin-register.js",
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
    '  <script src="js/vendor/capacitor-tts-plugin.js"></script>\n' +
    '  <script src="js/vendor/capacitor-notifications-plugin.js"></script>\n' +
    '  <script src="js/vendor/firebase-auth-stub.js"></script>\n' +
    '  <script src="js/vendor/capacitor-firebase-auth-plugin.js"></script>\n' +
    '  <script src="js/vendor/capacitor-filesystem-plugin.js"></script>\n' +
    '  <script src="js/vendor/capacitor-share-plugin.js"></script>\n' +
    '  <script src="js/vendor/image-saver-plugin-register.js"></script>\n' +
    `  ${scriptTag}`
);
writeFileSync(indexPath, withCapacitorBridge);

console.log(`www/ preparado com: ${ENTRIES_TO_COPY.join(", ")} + ponte Capacitor (js/vendor)`);
