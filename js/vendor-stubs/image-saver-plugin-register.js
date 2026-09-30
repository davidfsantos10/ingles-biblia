// O plugin "ImageSaver" (usado pelo botão "Baixar imagem" pra salvar direto
// na galeria, sem abrir o menu de compartilhar) é feito só de código nativo
// (android/app/src/main/java/com/davidfsantos/inglesbiblia/ImageSaverPlugin.java),
// registrado direto no MainActivity -- não existe um pacote npm nem um
// dist/plugin.js pra ele. Mesmo assim, o lado JS precisa chamar
// Capacitor.registerPlugin() pra criar o proxy em window.Capacitor.Plugins
// que encaminha as chamadas pro nativo (é o que os dist/plugin.js dos
// outros plugins fazem por baixo); este arquivo é só esse registro mínimo.
// Precisa carregar DEPOIS de js/vendor/capacitor.js (que define window.Capacitor).
if (window.Capacitor && typeof window.Capacitor.registerPlugin === "function") {
  window.Capacitor.registerPlugin("ImageSaver");
}
