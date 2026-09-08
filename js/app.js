// Lista dos 66 livros da Bíblia, com nome em inglês/português, um "slug"
// usado para montar o caminho do arquivo de dados (data/{slug}-{capítulo}.json)
// e o número de capítulos de cada livro.
const BOOKS = [
  { slug: "genesis", en: "Genesis", pt: "Gênesis", chapters: 50 },
  { slug: "exodus", en: "Exodus", pt: "Êxodo", chapters: 40 },
  { slug: "leviticus", en: "Leviticus", pt: "Levítico", chapters: 27 },
  { slug: "numbers", en: "Numbers", pt: "Números", chapters: 36 },
  { slug: "deuteronomy", en: "Deuteronomy", pt: "Deuteronômio", chapters: 34 },
  { slug: "joshua", en: "Joshua", pt: "Josué", chapters: 24 },
  { slug: "judges", en: "Judges", pt: "Juízes", chapters: 21 },
  { slug: "ruth", en: "Ruth", pt: "Rute", chapters: 4 },
  { slug: "1-samuel", en: "1 Samuel", pt: "1 Samuel", chapters: 31 },
  { slug: "2-samuel", en: "2 Samuel", pt: "2 Samuel", chapters: 24 },
  { slug: "1-kings", en: "1 Kings", pt: "1 Reis", chapters: 22 },
  { slug: "2-kings", en: "2 Kings", pt: "2 Reis", chapters: 25 },
  { slug: "1-chronicles", en: "1 Chronicles", pt: "1 Crônicas", chapters: 29 },
  { slug: "2-chronicles", en: "2 Chronicles", pt: "2 Crônicas", chapters: 36 },
  { slug: "ezra", en: "Ezra", pt: "Esdras", chapters: 10 },
  { slug: "nehemiah", en: "Nehemiah", pt: "Neemias", chapters: 13 },
  { slug: "esther", en: "Esther", pt: "Ester", chapters: 10 },
  { slug: "job", en: "Job", pt: "Jó", chapters: 42 },
  { slug: "psalms", en: "Psalms", pt: "Salmos", chapters: 150 },
  { slug: "proverbs", en: "Proverbs", pt: "Provérbios", chapters: 31 },
  { slug: "ecclesiastes", en: "Ecclesiastes", pt: "Eclesiastes", chapters: 12 },
  { slug: "song-of-solomon", en: "Song of Solomon", pt: "Cânticos", chapters: 8 },
  { slug: "isaiah", en: "Isaiah", pt: "Isaías", chapters: 66 },
  { slug: "jeremiah", en: "Jeremiah", pt: "Jeremias", chapters: 52 },
  { slug: "lamentations", en: "Lamentations", pt: "Lamentações", chapters: 5 },
  { slug: "ezekiel", en: "Ezekiel", pt: "Ezequiel", chapters: 48 },
  { slug: "daniel", en: "Daniel", pt: "Daniel", chapters: 12 },
  { slug: "hosea", en: "Hosea", pt: "Oséias", chapters: 14 },
  { slug: "joel", en: "Joel", pt: "Joel", chapters: 3 },
  { slug: "amos", en: "Amos", pt: "Amós", chapters: 9 },
  { slug: "obadiah", en: "Obadiah", pt: "Obadias", chapters: 1 },
  { slug: "jonah", en: "Jonah", pt: "Jonas", chapters: 4 },
  { slug: "micah", en: "Micah", pt: "Miquéias", chapters: 7 },
  { slug: "nahum", en: "Nahum", pt: "Naum", chapters: 3 },
  { slug: "habakkuk", en: "Habakkuk", pt: "Habacuque", chapters: 3 },
  { slug: "zephaniah", en: "Zephaniah", pt: "Sofonias", chapters: 3 },
  { slug: "haggai", en: "Haggai", pt: "Ageu", chapters: 2 },
  { slug: "zechariah", en: "Zechariah", pt: "Zacarias", chapters: 14 },
  { slug: "malachi", en: "Malachi", pt: "Malaquias", chapters: 4 },
  { slug: "matthew", en: "Matthew", pt: "Mateus", chapters: 28 },
  { slug: "mark", en: "Mark", pt: "Marcos", chapters: 16 },
  { slug: "luke", en: "Luke", pt: "Lucas", chapters: 24 },
  { slug: "john", en: "John", pt: "João", chapters: 21 },
  { slug: "acts", en: "Acts", pt: "Atos", chapters: 28 },
  { slug: "romans", en: "Romans", pt: "Romanos", chapters: 16 },
  { slug: "1-corinthians", en: "1 Corinthians", pt: "1 Coríntios", chapters: 16 },
  { slug: "2-corinthians", en: "2 Corinthians", pt: "2 Coríntios", chapters: 13 },
  { slug: "galatians", en: "Galatians", pt: "Gálatas", chapters: 6 },
  { slug: "ephesians", en: "Ephesians", pt: "Efésios", chapters: 6 },
  { slug: "philippians", en: "Philippians", pt: "Filipenses", chapters: 4 },
  { slug: "colossians", en: "Colossians", pt: "Colossenses", chapters: 4 },
  { slug: "1-thessalonians", en: "1 Thessalonians", pt: "1 Tessalonicenses", chapters: 5 },
  { slug: "2-thessalonians", en: "2 Thessalonians", pt: "2 Tessalonicenses", chapters: 3 },
  { slug: "1-timothy", en: "1 Timothy", pt: "1 Timóteo", chapters: 6 },
  { slug: "2-timothy", en: "2 Timothy", pt: "2 Timóteo", chapters: 4 },
  { slug: "titus", en: "Titus", pt: "Tito", chapters: 3 },
  { slug: "philemon", en: "Philemon", pt: "Filemom", chapters: 1 },
  { slug: "hebrews", en: "Hebrews", pt: "Hebreus", chapters: 13 },
  { slug: "james", en: "James", pt: "Tiago", chapters: 5 },
  { slug: "1-peter", en: "1 Peter", pt: "1 Pedro", chapters: 5 },
  { slug: "2-peter", en: "2 Peter", pt: "2 Pedro", chapters: 3 },
  { slug: "1-john", en: "1 John", pt: "1 João", chapters: 5 },
  { slug: "2-john", en: "2 John", pt: "2 João", chapters: 1 },
  { slug: "3-john", en: "3 John", pt: "3 João", chapters: 1 },
  { slug: "jude", en: "Jude", pt: "Judas", chapters: 1 },
  { slug: "revelation", en: "Revelation", pt: "Apocalipse", chapters: 22 },
];

const DEFAULT_BOOK_SLUG = "genesis";
const DEFAULT_CHAPTER = 1;

const bookSelect = document.getElementById("book-select");
const chapterSelect = document.getElementById("chapter-select");
const titleEnEl = document.getElementById("title-en");
const titlePtEl = document.getElementById("title-pt");
const versesEnEl = document.getElementById("verses-en");
const versesPtEl = document.getElementById("verses-pt");
const columnEnEl = document.querySelector(".column-en");
const columnPtEl = document.querySelector(".column-pt");
const readingView = document.querySelector(".reading-view");
const emptyStateEl = document.getElementById("empty-state");
const goToSampleBtn = document.getElementById("go-to-sample");
const wordPopupBackdropEl = document.getElementById("word-popup-backdrop");
const wordPopupEl = document.getElementById("word-popup");
const wordPopupCloseEl = document.getElementById("word-popup-close");
const wordPopupOriginalEl = document.getElementById("word-popup-original");
const wordPopupTranslationEl = document.getElementById("word-popup-translation");
const wordPopupSaveEl = document.getElementById("word-popup-save");
const viewTabButtons = document.querySelectorAll(".view-tab");
const readingContainerEl = document.getElementById("reading-container");
const vocabularyViewEl = document.getElementById("vocabulary-view");
const vocabularyListEl = document.getElementById("vocabulary-list");
const vocabularyEmptyEl = document.getElementById("vocabulary-empty");
const vocabularyNoMatchEl = document.getElementById("vocabulary-no-match");
const vocabularySearchEl = document.querySelector(".vocabulary-search");
const vocabularyFilterEl = document.getElementById("vocabulary-filter");
const vocabCountEl = document.getElementById("vocab-count");

let currentSource = { book: "", chapter: 0 };

// Uma "palavra" pode incluir hífen/apóstrofo interno (ex.: "ajuntem-se", "don't").
const WORD_PATTERN = /[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['-][A-Za-zÀ-ÖØ-öø-ÿ]+)*/g;

function populateBookSelect() {
  for (const book of BOOKS) {
    const option = document.createElement("option");
    option.value = book.slug;
    option.textContent = `${book.pt} (${book.en})`;
    bookSelect.appendChild(option);
  }
  bookSelect.value = DEFAULT_BOOK_SLUG;
}

function populateChapterSelect(book) {
  chapterSelect.innerHTML = "";
  for (let i = 1; i <= book.chapters; i++) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `Cap. ${i}`;
    chapterSelect.appendChild(option);
  }
}

function getSelectedBook() {
  return BOOKS.find((book) => book.slug === bookSelect.value);
}

function renderChapter(book, chapter, data) {
  titleEnEl.textContent = `${book.en} ${chapter}`;
  titlePtEl.textContent = `${book.pt} ${chapter}`;
  currentSource = { book: book.pt, chapter };

  versesEnEl.innerHTML = "";
  versesPtEl.innerHTML = "";

  for (const verse of data.verses) {
    versesEnEl.appendChild(buildVerseEl(verse.number, verse.en, "en"));
    versesPtEl.appendChild(buildVerseEl(verse.number, verse.pt, "pt"));
  }

  applyWordHistoryStyles();
}

function buildVerseEl(number, text, lang) {
  const p = document.createElement("p");
  p.className = "verse";
  const sup = document.createElement("span");
  sup.className = "verse-number";
  sup.textContent = number;
  p.appendChild(sup);

  let lastIndex = 0;
  WORD_PATTERN.lastIndex = 0;
  let match;
  while ((match = WORD_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      p.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
    }
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = match[0];
    span.dataset.word = match[0].toLowerCase();
    span.dataset.lang = lang;
    span.tabIndex = 0;
    span.setAttribute("role", "button");
    p.appendChild(span);
    lastIndex = WORD_PATTERN.lastIndex;
  }
  if (lastIndex < text.length) {
    p.appendChild(document.createTextNode(text.slice(lastIndex)));
  }
  return p;
}

async function loadChapter(book, chapter) {
  try {
    const response = await fetch(`data/${book.slug}-${chapter}.json`);
    if (!response.ok) throw new Error("not found");
    const data = await response.json();
    readingView.hidden = false;
    emptyStateEl.hidden = true;
    hideWordPopup();
    renderChapter(book, chapter, data);
  } catch (err) {
    readingView.hidden = true;
    emptyStateEl.hidden = false;
    hideWordPopup();
  }
}

// --- Pronúncia e tradução ao clicar em uma palavra ---

function speakWord(word) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

// Palavra atualmente mostrada no popup, usada pelo botão "Salvar".
let currentPopupWord = null;
let currentPopupLang = null;

function showWordPopup(word, lang, translation, isLoading) {
  currentPopupWord = word;
  currentPopupLang = lang;

  wordPopupOriginalEl.textContent = word;
  wordPopupTranslationEl.textContent = isLoading
    ? "traduzindo…"
    : translation || "tradução não encontrada";
  wordPopupEl.classList.toggle("word-popup--missing", !isLoading && !translation);
  wordPopupSaveEl.hidden = lang !== "en";
  wordPopupBackdropEl.hidden = false;
  wordPopupEl.hidden = false;
}

function hideWordPopup() {
  wordPopupEl.hidden = true;
  wordPopupBackdropEl.hidden = true;
  document.querySelectorAll(".word--active").forEach((el) => el.classList.remove("word--active"));
  currentPopupWord = null;
  currentPopupLang = null;
}

function handleSaveWordClick() {
  if (!currentPopupWord || currentPopupLang !== "en") return;
  recordWordClick(currentPopupWord);
  hideWordPopup();
}

// --- Tradução de palavras sob demanda (APIs públicas gratuitas) ---
//
// Com a Bíblia inteira carregada, não é viável manter um dicionário
// palavra-a-palavra pronto para todos os 66 livros. Em vez disso, a
// tradução de cada palavra é buscada na hora e guardada em cache local
// para não repetir a consulta.
//
// Fonte principal: o endpoint público do Google Translate (o mesmo
// truque "client=gtx" usado por várias extensões/ferramentas gratuitas
// de tradução), que traduz pelo sentido da palavra. O MyMemory (memória
// de tradução por correspondência difusa) é só uma reserva: sozinho ele
// costuma ecoar a palavra em inglês sem traduzir ou "alucinar" um trecho
// de outra frase parecida do banco dele, principalmente com uma palavra
// solta e sem contexto.

const TRANSLATION_CACHE_KEY = "ingles-biblia.translations.v2";

function loadTranslationCache() {
  try {
    const raw = localStorage.getItem(TRANSLATION_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

function saveTranslationCache(cache) {
  try {
    localStorage.setItem(TRANSLATION_CACHE_KEY, JSON.stringify(cache));
  } catch (err) {
    // Cache indisponível (ex.: armazenamento cheio): segue sem persistir.
  }
}

const translationCache = loadTranslationCache();

async function translateWithGoogle(word, from, to) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(word)}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
  if (!response.ok) throw new Error("Falha na consulta ao Google Translate");

  const data = await response.json();
  const translated = data && data[0] && data[0].map((segment) => segment[0]).join("");
  if (!translated) throw new Error("Resposta vazia do Google Translate");
  return translated;
}

async function translateWithMyMemory(word, from, to) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${from}|${to}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
  if (!response.ok) throw new Error("Falha na consulta ao MyMemory");

  const data = await response.json();
  const translated = data && data.responseData && data.responseData.translatedText;
  if (!translated) throw new Error("Resposta sem tradução");
  return translated;
}

async function translateWord(word, from, to) {
  const cacheKey = `${from}|${to}:${word}`;
  if (translationCache[cacheKey]) return translationCache[cacheKey];

  let translated;
  try {
    translated = await translateWithGoogle(word, from, to);
  } catch (err) {
    translated = await translateWithMyMemory(word, from, to);
  }

  const result = translated.toLowerCase();
  translationCache[cacheKey] = result;
  saveTranslationCache(translationCache);
  return result;
}

// Evita que a resposta de um clique antigo (ainda em andamento) sobrescreva
// o popup depois que o usuário já clicou em outra palavra.
let activeWordRequestId = 0;

async function handleWordActivate(span) {
  document.querySelectorAll(".word--active").forEach((el) => el.classList.remove("word--active"));
  span.classList.add("word--active");

  const word = span.dataset.word;
  const lang = span.dataset.lang;
  const requestId = ++activeWordRequestId;

  if (lang === "en") {
    speakWord(word);
  }

  showWordPopup(word, lang, null, true);

  try {
    const translation =
      lang === "en" ? await translateWord(word, "en", "pt") : await translateWord(word, "pt", "en");
    if (lang === "en") updateVocabularyTranslation(word, translation);
    if (requestId !== activeWordRequestId) return;
    if (!wordPopupEl.hidden) showWordPopup(word, lang, translation, false);
  } catch (err) {
    if (requestId !== activeWordRequestId) return;
    if (!wordPopupEl.hidden) showWordPopup(word, lang, null, false);
  }
}

function handleVersesClick(event) {
  const span = event.target.closest(".word");
  if (!span) return;
  handleWordActivate(span);
}

function handleVersesKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const span = event.target.closest(".word");
  if (!span) return;
  event.preventDefault();
  handleWordActivate(span);
}

for (const versesEl of [versesEnEl, versesPtEl]) {
  versesEl.addEventListener("click", handleVersesClick);
  versesEl.addEventListener("keydown", handleVersesKeydown);
}

wordPopupBackdropEl.addEventListener("click", hideWordPopup);
wordPopupCloseEl.addEventListener("click", hideWordPopup);
wordPopupSaveEl.addEventListener("click", handleSaveWordClick);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideWordPopup();
});

for (const column of document.querySelectorAll(".column")) {
  column.addEventListener("scroll", hideWordPopup, { passive: true });
}

// No layout empilhado (retrato), cada coluna rola de forma independente;
// sincronizamos pela proporção rolada para o outro lado acompanhar junto.
// Em telas largas as colunas não têm scroll próprio (a página toda rola),
// então esses eventos simplesmente não disparam ali.
//
// Em vez de uma flag por tempo (que pode falhar com muitos eventos de
// scroll em sequência durante um gesto de toque), comparamos a proporção
// atual dos dois lados: só corrigimos quando elas realmente divergem, o
// que também impede o loop de retroalimentação entre os dois listeners.
function syncScroll(source, target) {
  const sourceRange = source.scrollHeight - source.clientHeight;
  const targetRange = target.scrollHeight - target.clientHeight;
  if (sourceRange <= 0 || targetRange <= 0) return;

  const sourceRatio = source.scrollTop / sourceRange;
  const targetRatio = target.scrollTop / targetRange;
  if (Math.abs(sourceRatio - targetRatio) < 0.001) return;

  target.scrollTop = sourceRatio * targetRange;
}

columnEnEl.addEventListener("scroll", () => syncScroll(columnEnEl, columnPtEl), { passive: true });
columnPtEl.addEventListener("scroll", () => syncScroll(columnPtEl, columnEnEl), { passive: true });

// Em telas pequenas as colunas empilham e é a página inteira que rola,
// não os elementos .column individualmente.
window.addEventListener("scroll", hideWordPopup, { passive: true });
window.addEventListener("resize", hideWordPopup);

// --- Vocabulário salvo (localStorage) ---

const VOCABULARY_STORAGE_KEY = "ingles-biblia.vocabulary";

function loadVocabulary() {
  try {
    const raw = localStorage.getItem(VOCABULARY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function saveVocabulary(list) {
  localStorage.setItem(VOCABULARY_STORAGE_KEY, JSON.stringify(list));
}

// Registra um clique no histórico: cria a entrada na primeira vez (1 clique)
// ou soma mais um clique se a palavra já estava salva. Chamado na hora do
// clique, sem esperar a tradução, para a cor no texto reagir na hora.
function recordWordClick(word) {
  const list = loadVocabulary();
  const existing = list.find((entry) => entry.word === word);

  if (existing) {
    existing.timesClicked = (existing.timesClicked || 1) + 1;
  } else {
    list.unshift({
      word,
      translation: null,
      book: currentSource.book,
      chapter: currentSource.chapter,
      savedAt: Date.now(),
      timesClicked: 1,
    });
  }

  saveVocabulary(list);
  renderVocabularyBadge();
  if (!vocabularyViewEl.hidden) renderVocabularyList();
  applyWordHistoryStyles();
}

// Preenche a tradução assim que ela chega, sem mexer na contagem de cliques.
function updateVocabularyTranslation(word, translation) {
  if (!translation) return;
  const list = loadVocabulary();
  const entry = list.find((e) => e.word === word);
  if (!entry || entry.translation === translation) return;

  entry.translation = translation;
  saveVocabulary(list);
  if (!vocabularyViewEl.hidden) renderVocabularyList();
}

function removeFromVocabulary(word) {
  const list = loadVocabulary().filter((entry) => entry.word !== word);
  saveVocabulary(list);
  renderVocabularyBadge();
  renderVocabularyList();
  applyWordHistoryStyles();
}

// Pinta no texto as palavras em inglês já clicadas: verde na primeira vez,
// vermelho a partir da segunda (e some quando a palavra é apagada do
// vocabulário). Roda em toda palavra em inglês visível no capítulo atual.
function applyWordHistoryStyles() {
  const clickCounts = {};
  for (const entry of loadVocabulary()) {
    clickCounts[entry.word] = entry.timesClicked || 1;
  }

  for (const span of document.querySelectorAll('.word[data-lang="en"]')) {
    const count = clickCounts[span.dataset.word] || 0;
    span.classList.toggle("word--history-new", count === 1);
    span.classList.toggle("word--history-repeated", count >= 2);
  }
}

function renderVocabularyBadge() {
  const count = loadVocabulary().length;
  vocabCountEl.textContent = String(count);
  vocabCountEl.hidden = count === 0;
}

function renderVocabularyList() {
  const list = loadVocabulary();
  const filterText = vocabularyFilterEl.value.trim().toLowerCase();
  const filteredList = filterText
    ? list.filter(
        (entry) =>
          entry.word.toLowerCase().includes(filterText) ||
          (entry.translation || "").toLowerCase().includes(filterText)
      )
    : list;

  vocabularyListEl.innerHTML = "";
  vocabularySearchEl.hidden = list.length === 0;
  vocabularyEmptyEl.hidden = list.length > 0;
  vocabularyNoMatchEl.hidden = list.length === 0 || filteredList.length > 0;

  for (const entry of filteredList) {
    const li = document.createElement("li");
    li.className = "vocabulary-item";

    const wordEl = document.createElement("span");
    wordEl.className = "vocabulary-word";
    wordEl.textContent = entry.word;

    const translationEl = document.createElement("span");
    translationEl.className = "vocabulary-translation";
    translationEl.textContent = entry.translation || "tradução não encontrada";

    const sourceEl = document.createElement("span");
    sourceEl.className = "vocabulary-source";
    sourceEl.textContent = entry.book ? `${entry.book} ${entry.chapter}` : "";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "vocabulary-remove";
    removeBtn.setAttribute("aria-label", `Remover "${entry.word}" do vocabulário`);
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => removeFromVocabulary(entry.word));

    li.append(wordEl, translationEl, sourceEl, removeBtn);
    vocabularyListEl.appendChild(li);
  }
}

function setActiveView(view) {
  const isReading = view === "reading";
  readingContainerEl.hidden = !isReading;
  vocabularyViewEl.hidden = isReading;
  for (const btn of viewTabButtons) {
    btn.setAttribute("aria-pressed", String(btn.dataset.view === view));
  }
  if (!isReading) renderVocabularyList();
  hideWordPopup();
}

for (const btn of viewTabButtons) {
  btn.addEventListener("click", () => setActiveView(btn.dataset.view));
}

vocabularyFilterEl.addEventListener("input", renderVocabularyList);

bookSelect.addEventListener("change", () => {
  const book = getSelectedBook();
  populateChapterSelect(book);
  chapterSelect.value = "1";
  loadChapter(book, 1);
});

chapterSelect.addEventListener("change", () => {
  const book = getSelectedBook();
  loadChapter(book, Number(chapterSelect.value));
});

goToSampleBtn.addEventListener("click", () => {
  bookSelect.value = DEFAULT_BOOK_SLUG;
  const book = getSelectedBook();
  populateChapterSelect(book);
  chapterSelect.value = String(DEFAULT_CHAPTER);
  loadChapter(book, DEFAULT_CHAPTER);
});

populateBookSelect();
populateChapterSelect(getSelectedBook());
chapterSelect.value = String(DEFAULT_CHAPTER);
loadChapter(getSelectedBook(), DEFAULT_CHAPTER);
renderVocabularyBadge();
