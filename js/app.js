// Lista dos 66 livros da Bíblia, com nome em inglês/português, um "slug"
// usado para montar o caminho do arquivo de dados e o número de capítulos.
// Por enquanto só existe conteúdo carregado para Gênesis 1 (data/genesis-1.json).
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
const readingView = document.querySelector(".reading-view");
const emptyStateEl = document.getElementById("empty-state");
const goToSampleBtn = document.getElementById("go-to-sample");
const wordPopupEl = document.getElementById("word-popup");
const wordPopupOriginalEl = document.getElementById("word-popup-original");
const wordPopupTranslationEl = document.getElementById("word-popup-translation");
const viewTabButtons = document.querySelectorAll(".view-tab");
const readingContainerEl = document.getElementById("reading-container");
const vocabularyViewEl = document.getElementById("vocabulary-view");
const vocabularyListEl = document.getElementById("vocabulary-list");
const vocabularyEmptyEl = document.getElementById("vocabulary-empty");
const vocabularyNoMatchEl = document.getElementById("vocabulary-no-match");
const vocabularySearchEl = document.querySelector(".vocabulary-search");
const vocabularyFilterEl = document.getElementById("vocabulary-filter");
const vocabCountEl = document.getElementById("vocab-count");

// Palavra en/pt -> tradução, carregado a partir do "glossary" do capítulo atual.
let currentGlossary = { en: {}, pt: {} };
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
  titleEnEl.textContent = data.titleEn || book.en;
  titlePtEl.textContent = data.titlePt || book.pt;
  currentGlossary = data.glossary || { en: {}, pt: {} };
  currentSource = { book: book.pt, chapter };

  versesEnEl.innerHTML = "";
  versesPtEl.innerHTML = "";

  for (const verse of data.verses) {
    versesEnEl.appendChild(buildVerseEl(verse.number, verse.en, "en"));
    versesPtEl.appendChild(buildVerseEl(verse.number, verse.pt, "pt"));
  }
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

function showWordPopup(anchorEl, word, translation) {
  wordPopupOriginalEl.textContent = word;
  wordPopupTranslationEl.textContent = translation || "tradução não encontrada";
  wordPopupEl.classList.toggle("word-popup--missing", !translation);
  wordPopupEl.hidden = false;
  positionWordPopup(anchorEl.getBoundingClientRect());
}

function positionWordPopup(anchorRect) {
  const margin = 8;
  const popupRect = wordPopupEl.getBoundingClientRect();

  let top = anchorRect.top - popupRect.height - margin;
  if (top < margin) {
    top = anchorRect.bottom + margin;
  }

  let left = anchorRect.left + anchorRect.width / 2 - popupRect.width / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - popupRect.width - margin));

  wordPopupEl.style.top = `${top}px`;
  wordPopupEl.style.left = `${left}px`;
}

function hideWordPopup() {
  wordPopupEl.hidden = true;
  document.querySelectorAll(".word--active").forEach((el) => el.classList.remove("word--active"));
}

function handleWordActivate(span) {
  document.querySelectorAll(".word--active").forEach((el) => el.classList.remove("word--active"));
  span.classList.add("word--active");

  const word = span.dataset.word;
  const lang = span.dataset.lang;

  if (lang === "en") {
    const translation = currentGlossary.en[word];
    speakWord(word);
    showWordPopup(span, word, translation);
    addToVocabulary(word, translation);
  } else {
    showWordPopup(span, word, currentGlossary.pt[word]);
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

document.addEventListener("click", (event) => {
  if (!wordPopupEl.hidden && !event.target.closest(".word")) {
    hideWordPopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideWordPopup();
});

for (const column of document.querySelectorAll(".column")) {
  column.addEventListener("scroll", hideWordPopup, { passive: true });
}

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

function addToVocabulary(word, translation) {
  const list = loadVocabulary();
  if (list.some((entry) => entry.word === word)) return;

  list.unshift({
    word,
    translation: translation || null,
    book: currentSource.book,
    chapter: currentSource.chapter,
    savedAt: Date.now(),
  });
  saveVocabulary(list);
  renderVocabularyBadge();
  if (!vocabularyViewEl.hidden) renderVocabularyList();
}

function removeFromVocabulary(word) {
  const list = loadVocabulary().filter((entry) => entry.word !== word);
  saveVocabulary(list);
  renderVocabularyBadge();
  renderVocabularyList();
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
