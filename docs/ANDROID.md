# Shell Android (Capacitor)

Este documento explica como rodar o app "Inglês com a Bíblia" como aplicativo
Android, usando [Capacitor](https://capacitorjs.com/). **A aplicação em si
continua sendo `index.html` + `css/` + `js/` + `data/` na raiz do repositório
— o Capacitor só empacota essa mesma aplicação dentro de um WebView nativo.**
Nenhuma lógica foi reescrita; veja "O que o Capacitor mudou" no fim deste
documento para a lista exata de ajustes feitos.

Se você nunca usou o terminal do Linux Mint para programação, comece pela
seção **"Passo a passo no Linux Mint"** abaixo — ela tem todos os comandos,
na ordem certa, prontos para copiar e colar.

## Requisitos

- **Node.js 22+** e **npm** (os pacotes `@capacitor/*` exigem Node ≥ 22).
- **JDK 21** (o mesmo que o Android Gradle Plugin 8.13 usa).
- **Android Studio** atual, baixado do
  [site oficial](https://developer.android.com/studio) — é o jeito mais
  simples de obter o Android SDK e o `adb` (não instale nada disso por
  script; use o instalador oficial do Android Studio e deixe ele mesmo
  te guiar). Ao abrir o projeto pela primeira vez, deixe o Android Studio
  instalar/aceitar:
  - Android SDK Platform **36** (compileSdk/targetSdk)
  - Android SDK Build-Tools compatível com AGP 8.13.0
  - Um emulador, ou um aparelho físico com Depuração USB ativada.
- minSdk = **24** (Android 7.0), ou seja, o app roda a partir daí.

## Passo a passo no Linux Mint

Sequência completa de comandos, do zero até um APK de debug instalado no
celular. Rode cada bloco no terminal, um de cada vez, e confira a saída antes
de seguir para o próximo.

**1. Clonar o repositório**

```bash
git clone https://github.com/davidfsantos10/ingles-biblia.git
```

**2. Entrar na pasta do projeto**

```bash
cd ingles-biblia
```

**3. Verificar se o Node está instalado (precisa ser 22 ou mais novo)**

```bash
node --version
```

Se aparecer `command not found` ou uma versão menor que `v22`, instale/
atualize o Node antes de continuar (pelo site oficial nodejs.org ou pelo
gerenciador de versões de sua preferência) — este documento não faz essa
instalação por você.

**4. Verificar se o Java 21 está instalado**

```bash
java -version
javac -version
```

A saída deve mostrar algo como `21.x.x`. Se não tiver Java 21, instale-o
(pelo site oficial do OpenJDK ou pelo Gerenciador de Programas do Linux
Mint) antes de continuar.

**5. Instalar as dependências do projeto (Capacitor)**

```bash
npm install
```

Isso baixa `@capacitor/core`, `@capacitor/cli`, `@capacitor/android`,
`@capacitor/app` (botão "voltar" nativo) e
`@capacitor-community/text-to-speech` (áudio nativo do Android — veja "O
que o Capacitor mudou" no fim deste documento) dentro de `node_modules/`
(não vai para o Git).

**6. Preparar o conteúdo web (`www/`)**

```bash
npm run build:www
```

Isso copia `index.html`, `css/`, `js/` e `data/` da raiz para dentro de
`www/` (uma pasta gerada, que também não vai para o Git). Rode este comando
de novo sempre que qualquer um desses arquivos mudar.

**7. Sincronizar com o projeto Android**

```bash
npx cap sync android
```

Copia `www/` para dentro de `android/app/src/main/assets/public` e atualiza
a lista de plugins nativos que o Android vai usar.

**8. Conectar o Galaxy A56 e conferir se o computador o reconhece**

No celular: Ajustes → Sobre o telefone → toque 7 vezes em "Número da versão"
para ativar as "Opções do desenvolvedor"; depois Ajustes → Opções do
desenvolvedor → ative "Depuração USB". Conecte o cabo USB e, quando aparecer
um aviso na tela do celular perguntando se autoriza este computador, toque em
"Permitir".

```bash
adb devices
```

O Galaxy A56 deve aparecer na lista, com `device` na frente do número de
série (não `unauthorized` nem `offline` — se aparecer isso, olhe de novo a
tela do celular e autorize).

**9. Compilar o APK de debug**

```bash
cd android
./gradlew assembleDebug
```

A primeira vez demora mais (baixa dependências do Gradle/Android). Espere
terminar com `BUILD SUCCESSFUL`.

**10. Caminho exato do APK gerado**

```
android/app/build/outputs/apk/debug/app-debug.apk
```

**11. Instalar o APK no Galaxy A56 (com o aparelho já conectado e autorizado)**

```bash
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

(rode este comando ainda dentro da pasta `android/`; se você já saiu dela,
use o caminho completo `android/app/build/outputs/apk/debug/app-debug.apk`
a partir da raiz do projeto).

## Alternativa: usar o Android Studio em vez da linha de comando

Depois dos passos 1 a 7 acima, você também pode abrir o projeto no Android
Studio em vez de usar `gradlew`/`adb` direto no terminal:

```bash
npm run android:open
```

Isso roda `cap:sync` de novo e abre `android/` no Android Studio
(equivalente a `npx cap open android`). De lá, use o botão Run ▶ com o
Galaxy A56 conectado (ou um emulador).

## Gerar um APK de debug — o que ele é (e o que não é)

O APK gerado pelo passo 9 é só para **teste** — um APK de debug não é
assinado para a Play Store. Publicação usa um AAB assinado com uma chave de
produção própria, gerada à parte (fora deste repositório) numa etapa futura.

## O que o Capacitor mudou

- **`package.json`, `capacitor.config.json`, `scripts/build-www.mjs`**:
  infraestrutura nova, não afeta a versão web.
- **`android/`**: projeto Android padrão, gerado por `npx cap add android`
  (Application ID `com.davidfsantos.inglesbiblia`, nome "Inglês com a
  Bíblia"). Removida manualmente uma única linha de boilerplate do template
  (`classpath 'com.google.gms:google-services:...'` em `android/build.gradle`)
  porque não é usada e este projeto não integra Firebase/Google Services.
- **`js/app.js`**: duas mudanças pequenas, as únicas no código da aplicação:
  1. `closeActivePopup()` agora retorna se fechou algo (antes não retornava
     nada) — usado só pelo item 2 abaixo; nenhum dos chamadores existentes
     usa o retorno, então o comportamento deles não muda.
  2. Um bloco novo, só ativado quando o app roda dentro do Capacitor no
     Android, trata o botão/gesto "voltar" do sistema: fecha um
     popup/menu/seleção aberto primeiro; senão volta a tela anterior
     (reaproveitando o histórico de navegação que já existia); senão sai do
     app. **Sem isso, o botão voltar fecharia o app inteiro instantaneamente
     em qualquer tela** — o WebView nativo não tem nenhum tratamento próprio
     para isso (confirmado lendo o código-fonte do `@capacitor/android`; não
     havia nada preservável aqui). Na versão web (GitHub Pages) esse bloco
     não faz nada, porque `window.Capacitor` não existe lá.
  3. `speakText()` (áudio de palavra e de versículo) agora decide sozinho
     entre o TTS nativo do Android (`@capacitor-community/text-to-speech`,
     que usa o motor `TextToSpeech` do próprio sistema operacional — funciona
     offline com a voz já instalada) e o Web Speech (`window.speechSynthesis`,
     inalterado) usado na versão web. Tenta `en-US`, depois `en-GB`; se o
     aparelho não tiver nenhuma voz em inglês instalada, mostra um aviso com
     um botão "Instalar voz em inglês" que abre a tela de instalação do
     próprio Android (`openInstall()`). Ver `docs/TTS.md` para detalhes.
- **`www/index.html` (gerado, não versionado)**: recebe três tags `<script>`
  a mais, injetadas só na cópia gerada por `scripts/build-www.mjs` — carregam
  a ponte JS do Capacitor e dos plugins `@capacitor/app` e
  `@capacitor-community/text-to-speech`, necessárias para os itens 2 e 3
  acima funcionarem. O `index.html` da raiz (o que o GitHub Pages serve)
  **não é tocado**.

Tudo o mais (leitura, traduções, Lições, Flashcards, Gramática, Favoritos,
Anotações, compartilhamento, "Entender trecho", localStorage) continua
sendo exatamente o código já existente, sem alteração.
