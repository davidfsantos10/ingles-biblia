# Shell Android (Capacitor)

Este documento explica como rodar o app "Inglês com a Bíblia" como aplicativo
Android, usando [Capacitor](https://capacitorjs.com/). **A aplicação em si
continua sendo `index.html` + `css/` + `js/` + `data/` na raiz do repositório
— o Capacitor só empacota essa mesma aplicação dentro de um WebView nativo.**
Nenhuma lógica foi reescrita; veja "O que o Capacitor mudou" no fim deste
documento para a lista exata de ajustes feitos.

## Requisitos

- **Node.js 22+** e **npm** (os pacotes `@capacitor/*` exigem Node ≥ 22).
- **JDK 21** (o mesmo que o Android Gradle Plugin 8.13 usa).
- **Android Studio** atual (traz o Android SDK, o emulador e o `adb`). Ao
  abrir o projeto pela primeira vez, deixe o Android Studio instalar/aceitar:
  - Android SDK Platform **36** (compileSdk/targetSdk)
  - Android SDK Build-Tools compatível com AGP 8.13.0
  - Um emulador, ou um aparelho físico com Depuração USB ativada.
- minSdk = **24** (Android 7.0), ou seja, o app roda a partir daí.

## Instalação

```bash
npm install
```

Isso instala `@capacitor/core`, `@capacitor/cli`, `@capacitor/android` e
`@capacitor/app` (usado só para o botão "voltar" nativo — veja abaixo).

## Preparar o conteúdo web e sincronizar com o Android

O diretório `www/` (o que o Capacitor empacota dentro do app) é **gerado**,
não é versionado no Git. Ele é uma cópia de `index.html`, `css/`, `js/` e
`data/` da raiz, mais dois arquivos pequenos do Capacitor necessários só para
o botão "voltar" (veja a última seção). Sempre que qualquer um desses
arquivos mudar, rode de novo:

```bash
npm run cap:sync
```

(equivalente a `npm run build:www && npx cap sync android` — o primeiro
prepara `www/`, o segundo copia `www/` para dentro do projeto Android em
`android/app/src/main/assets/public` e atualiza a lista de plugins nativos).

## Abrir no Android Studio

```bash
npm run android:open
```

Isso roda `cap:sync` e depois abre `android/` no Android Studio
(equivalente a `npx cap open android`). De lá, use o botão Run ▶ com um
emulador ou um aparelho conectado.

## Rodar num aparelho físico (ex.: Galaxy A56)

1. Ative "Opções do desenvolvedor" e "Depuração USB" no aparelho.
2. Conecte por USB e autorize o computador quando o Android pedir.
3. Confirme que o aparelho aparece:
   ```bash
   adb devices
   ```
4. Rode pelo Android Studio (Run ▶) ou via CLI:
   ```bash
   npx cap run android
   ```

## Gerar um APK de debug (sem Android Studio)

```bash
cd android
./gradlew assembleDebug
```

O APK fica em `android/app/build/outputs/apk/debug/app-debug.apk`. Instale
com `adb install -r android/app/build/outputs/apk/debug/app-debug.apk`.

Isso é só para **teste** — um APK de debug não é assinado para a Play
Store. Publicação usa um AAB assinado com uma chave de produção própria,
gerada à parte (fora deste repositório) numa etapa futura.

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
- **`www/index.html` (gerado, não versionado)**: recebe duas tags `<script>`
  a mais, injetadas só na cópia gerada por `scripts/build-www.mjs` — carregam
  a ponte JS do Capacitor e do plugin `@capacitor/app`, necessárias para o
  item 2 acima funcionar. O `index.html` da raiz (o que o GitHub Pages serve)
  **não é tocado**.

Tudo o mais (leitura, traduções, Lições, Flashcards, Gramática, Favoritos,
Anotações, compartilhamento, "Entender trecho", TTS, localStorage) continua
sendo exatamente o código já existente, sem alteração.
