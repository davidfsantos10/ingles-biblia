// Stub necessário só para o arquivo do plugin @capacitor-firebase/
// authentication (js/vendor/capacitor-firebase-auth-plugin.js) carregar sem
// erro dentro do Capacitor no Android.
//
// Esse arquivo do plugin espera, como terceiro parâmetro global, o SDK JS
// completo do Firebase Auth (o que os documentos do Firebase chamam de
// "firebase/auth") -- usado só pela classe de fallback "FirebaseAuthenticationWeb",
// para quando o app roda num navegador comum sem Capacitor. Essa classe só é
// instanciada sob demanda, e nunca no Android nativo: lá, toda chamada
// (signInWithGoogle, signInWithEmailAndPassword etc.) é roteada direto para
// o Java nativo do plugin, que usa o SDK nativo de verdade do Firebase Auth
// (com.google.firebase:firebase-auth, resolvido pelo Gradle) -- sem
// depender de nada deste arquivo.
//
// Por isso, em vez de empacotar o SDK JS inteiro do Firebase (que exigiria
// um bundler, algo que este projeto deliberadamente evita -- ver
// docs/ANDROID.md), este stub só existe pra satisfazer a referência ao
// carregar o script; qualquer propriedade acessada nele vira uma função que
// nunca deveria ser chamada de verdade dentro do app Android. Confirmado
// por teste (ver relatório da tarefa) que o plugin carrega e registra
// window.Capacitor.Plugins.FirebaseAuthentication normalmente com isso.
window.firebaseAuthExports = new Proxy(
  {},
  {
    get: () =>
      function firebaseAuthStub() {
        throw new Error(
          "Firebase Auth (versão web/JS) não está disponível neste app -- o login só funciona dentro do app Android instalado."
        );
      },
  }
);
