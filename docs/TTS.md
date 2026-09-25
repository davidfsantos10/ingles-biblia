# Áudio / TTS (pronúncia de palavra e de versículo)

Este documento explica como a pronúncia em inglês funciona no app — no
navegador e dentro do shell Android — e o que foi avaliado, mas não
implementado.

## Causa do problema original

No Chrome/WebView do Android, `speechSynthesis.getVoices()` costuma
retornar uma lista **vazia** logo depois da página carregar — as vozes
carregam de forma assíncrona, e chamar `.speak()` antes delas chegarem não
produz som nenhum (sem erro, sem aviso). Isso já foi corrigido no Web Speech
(camada 2 abaixo). Mas mesmo corrigido, depender só do Web Speech dentro de
um WebView tem limites reais de confiabilidade entre fabricantes/versões do
Android — por isso a camada 1 (TTS nativo) passou a ser a via principal
dentro do app Android.

## Arquitetura em camadas

Uma única função (`speakText(text, rate)`, em `js/app.js`) decide sozinha
qual camada usar — quem chama (toque em palavra, botão de ouvir versículo,
"Entender trecho", Lições) nunca precisa saber qual é. `stopSpeech()` e
`checkSpeechSupport()` seguem a mesma lógica.

### Camada 1 — Android nativo (`@capacitor-community/text-to-speech`)

- Usa o motor **`android.speech.tts.TextToSpeech`** do próprio sistema
  operacional Android — o mesmo mecanismo usado por qualquer app Android,
  disponível desde o Android 1.6 (API 4), bem abaixo do `minSdk 24` deste
  app.
- **Funciona offline** sempre que o aparelho já tem a voz baixada — não é
  uma chamada de rede, é o serviço de TTS do sistema.
- Só ativa dentro do Capacitor no Android (`window.Capacitor.isNativePlatform()`
  + `window.Capacitor.Plugins.TextToSpeech` presentes). A versão web nunca
  carrega esse plugin, então sempre cai na camada 2.
- Tenta `en-US`; se não suportado, tenta `en-GB`; se nenhum dos dois estiver
  disponível, mostra um aviso com o botão **"Instalar voz em inglês"**, que
  chama `openInstall()` — a própria tela do sistema Android para
  instalar/ativar dados de voz (`Intent.ACTION_CHECK_TTS_DATA`). Nada é
  baixado manualmente pelo app nem versionado no repositório.
- Antes de cada fala, `stop()` é chamado (evita sobreposição), e
  `queueStrategy: Flush` garante que uma fala nova sempre interrompe a
  anterior mesmo que o `stop()` não seja suficiente.
- Erros do plugin (aparelho sem motor de TTS configurado, engine que falha,
  etc.) são capturados e viram um aviso (`toast`) — nunca travam o app nem
  quebram o botão de áudio.

### Camada 2 — Web Speech (`window.speechSynthesis`)

- Usada na versão web (GitHub Pages) e como o que já existia antes desta
  tarefa — inalterada.
- Mesmo fix de espera de vozes assíncronas de uma tarefa anterior (dispara
  `getVoices()` cedo; se estiver vazio na hora de falar, espera
  `voiceschanged` com um teto de 300ms; escolhe explicitamente uma voz
  `en-*`).

### Camada 3 — fallback online (avaliada, **não implementada**)

Avaliada porque o item 1 da tarefa pediu explicitamente uma comparação antes
de implementar qualquer serviço pago. Opções consideradas:

| Opção | Custo | Privacidade | Precisa de backend? |
|---|---|---|---|
| Google Cloud Text-to-Speech | Pago por caractere (tem cota gratuita mensal) | Texto enviado ao Google | Sim — a chave de API não pode ficar no frontend |
| Amazon Polly | Pago por caractere (tem cota gratuita no 1º ano) | Texto enviado à AWS | Sim, pelo mesmo motivo |
| ElevenLabs | Pago (plano gratuito bem limitado) | Texto enviado a terceiro | Sim |
| Reaproveitar `mymemory.translated.net` (já usado para tradução) | Não é um serviço de TTS — não se aplica | — | — |

**Nenhuma dessas foi implementada.** Todas exigiriam: (1) uma chave de API,
que nunca pode ficar exposta no frontend (viola a seção de segurança desta
tarefa); (2) por consequência, um backend/proxy só para esconder essa
chave — que este app não tem e que é um projeto à parte, não uma correção
de TTS; (3) enviar o texto do usuário a um serviço de terceiros, o que
precisaria ser informado claramente na tela antes de qualquer envio. Dado
que a camada 1 (TTS nativo do Android, offline) já cobre o caso real — um
aparelho Android moderno sem nenhuma voz em inglês instalável é raríssimo —
o custo/complexidade de um backend só para isso não se justificou nesta
fase. Fica proposto para uma etapa futura, se a telemetria real mostrar que
usuários batem nesse caso com frequência.

## O que funciona offline

- **Palavra e versículo, com voz em inglês instalada no Android**: 100%
  offline (camada 1, motor nativo do sistema).
- **Versão web**: depende do navegador — a maioria dos navegadores desktop
  também tem vozes offline instaladas pelo sistema operacional, mas isso
  não é controlado por este app.
- **Sem voz em inglês instalada**: nenhuma camada implementada aqui fala o
  texto — o app mostra o aviso de instalação em vez de tentar qualquer
  coisa pela rede.

## Compatibilidade com Android mais antigo

O plugin nativo usado (`android.speech.tts.TextToSpeech`,
`android.speech.tts.Voice`, `Locale.forLanguageTag`) funciona em toda a
faixa suportada pelo app (`minSdk 24` = Android 7.0 em diante — API do
`Voice` exige só API 21+, já coberta). O que **não** é garantido em nenhuma
versão do Android, nova ou antiga, é o aparelho ter uma voz em inglês
baixada — por isso a checagem (`isLanguageSupported`) e o aviso com
`openInstall()` existem, em vez de assumir que a voz sempre está presente.

## O que precisa de teste real (não verificável neste ambiente)

- Áudio de palavra e de versículo tocando de fato num Android real (Galaxy
  A56 e, se possível, um aparelho mais antigo dentro do `minSdk 24`).
- Comportamento do botão "Instalar voz em inglês" em fabricantes diferentes
  (a tela que abre é decidida pelo Android/fabricante, não por este app).
- Troca de fala em sequência rápida (toques repetidos) num aparelho real.
