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
const favoritesViewEl = document.getElementById("favorites-view");
const favoritesListEl = document.getElementById("favorites-list");
const favoritesEmptyEl = document.getElementById("favorites-empty");
const favoritesCountEl = document.getElementById("favorites-count");
const notesViewEl = document.getElementById("notes-view");
const notesListEl = document.getElementById("notes-list");
const notesEmptyEl = document.getElementById("notes-empty");
const notesCountEl = document.getElementById("notes-count");
const notePopupEl = document.getElementById("note-popup");
const notePopupCloseEl = document.getElementById("note-popup-close");
const notePopupReferenceEl = document.getElementById("note-popup-reference");
const notePopupTextareaEl = document.getElementById("note-popup-textarea");
const notePopupDeleteEl = document.getElementById("note-popup-delete");
const notePopupSaveEl = document.getElementById("note-popup-save");
const sharePopupEl = document.getElementById("share-popup");
const sharePopupCloseEl = document.getElementById("share-popup-close");
const shareCanvasEl = document.getElementById("share-canvas");
const shareBackgroundsEl = document.getElementById("share-backgrounds");
const shareFontSliderEl = document.getElementById("share-font-slider");
const shareFontDecreaseEl = document.getElementById("share-font-decrease");
const shareFontIncreaseEl = document.getElementById("share-font-increase");
const shareDownloadBtnEl = document.getElementById("share-download-btn");
const shareNativeBtnEl = document.getElementById("share-native-btn");
const shareWhatsappBtnEl = document.getElementById("share-whatsapp-btn");
const shareTelegramBtnEl = document.getElementById("share-telegram-btn");
const toastEl = document.getElementById("toast");

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
    versesEnEl.appendChild(buildVerseEl(verse, "en", book, chapter));
    versesPtEl.appendChild(buildVerseEl(verse, "pt", book, chapter));
  }

  applyWordHistoryStyles();
}

function buildVerseEl(verse, lang, book, chapter) {
  const container = document.createElement("div");
  container.className = "verse";

  const verseKey = `${book.slug}-${chapter}-${verse.number}`;
  container.dataset.verseKey = verseKey;
  container.appendChild(buildVerseToolbar(verse, book, chapter, verseKey));
  container.appendChild(buildVerseText(verse, lang));

  return container;
}

function buildVerseText(verse, lang) {
  const text = lang === "en" ? verse.en : verse.pt;
  const p = document.createElement("p");
  p.className = "verse-text";

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

// --- Painel de ações do versículo: compartilhar, ouvir, anotar, favoritar ---

const ICON_SHARE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><line x1="8.3" y1="10.6" x2="15.7" y2="6.4"/><line x1="8.3" y1="13.4" x2="15.7" y2="17.6"/></svg>';

const ICON_LISTEN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.2 8.8a5 5 0 0 1 0 6.4"/><path d="M18.8 6.2a8.5 8.5 0 0 1 0 11.6"/></svg>';

const ICON_NOTE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3.2V8a1 1 0 0 0 1 1h4.8"/><path d="M6.5 3h7.4L19 8.1V20a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><line x1="8.2" y1="13" x2="15.8" y2="13"/><line x1="8.2" y1="16.4" x2="13.2" y2="16.4"/></svg>';

const ICON_HEART =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5S3.8 15 3.8 9.4C3.8 6.4 6.1 4 9 4c1.6 0 2.8 0.8 3 1c0.2-0.2 1.4-1 3-1c2.9 0 5.2 2.4 5.2 5.4C20.2 15 12 20.5 12 20.5z"/></svg>';

function buildVerseToolbar(verse, book, chapter, verseKey) {
  const toolbar = document.createElement("div");
  toolbar.className = "verse-toolbar";

  const badge = document.createElement("span");
  badge.className = "verse-number-badge";
  badge.textContent = verse.number;
  toolbar.appendChild(badge);

  const actions = document.createElement("div");
  actions.className = "verse-actions";

  const shareBtn = document.createElement("button");
  shareBtn.type = "button";
  shareBtn.className = "verse-action";
  shareBtn.setAttribute("aria-label", "Compartilhar versículo");
  shareBtn.title = "Compartilhar";
  shareBtn.innerHTML = ICON_SHARE;
  shareBtn.addEventListener("click", () => openSharePopup(verse, book, chapter));
  actions.appendChild(shareBtn);

  const listenBtn = document.createElement("button");
  listenBtn.type = "button";
  listenBtn.className = "verse-action";
  listenBtn.setAttribute("aria-label", "Ouvir versículo em inglês");
  listenBtn.title = "Ouvir em inglês";
  listenBtn.innerHTML = ICON_LISTEN;
  listenBtn.addEventListener("click", () => speakText(verse.en));
  actions.appendChild(listenBtn);

  const noteBtn = document.createElement("button");
  noteBtn.type = "button";
  noteBtn.className = "verse-action verse-action--note";
  noteBtn.setAttribute("aria-label", "Anotação do versículo");
  noteBtn.title = "Anotação";
  noteBtn.innerHTML = ICON_NOTE;
  if (getNote(verseKey)) noteBtn.classList.add("has-note");
  noteBtn.addEventListener("click", () => openNotePopup(verseKey, verse, book, chapter, noteBtn));
  actions.appendChild(noteBtn);

  const favoriteBtn = document.createElement("button");
  favoriteBtn.type = "button";
  favoriteBtn.className = "verse-action verse-action--favorite";
  favoriteBtn.setAttribute("aria-label", "Favoritar versículo");
  favoriteBtn.title = "Favoritar";
  favoriteBtn.innerHTML = ICON_HEART;
  if (isFavorite(verseKey)) favoriteBtn.classList.add("is-active");
  favoriteBtn.addEventListener("click", () => toggleFavorite(verseKey, verse, book, chapter, favoriteBtn));
  actions.appendChild(favoriteBtn);

  toolbar.appendChild(actions);
  return toolbar;
}

// --- Navegar até um versículo salvo (a partir de Favoritos/Anotações) ---

async function goToVerse(bookSlug, chapter, verseKey) {
  const book = BOOKS.find((b) => b.slug === bookSlug);
  if (!book) return;

  setActiveView("reading");
  bookSelect.value = bookSlug;
  populateChapterSelect(book);
  chapterSelect.value = String(chapter);
  await loadChapter(book, chapter);

  const verseEl = versesEnEl.querySelector(`[data-verse-key="${verseKey}"]`);
  if (verseEl) verseEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

// --- Favoritos (localStorage) ---

const FAVORITES_STORAGE_KEY = "ingles-biblia.favorites";

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (err) {
    // Armazenamento indisponível: segue sem persistir.
  }
}

function isFavorite(verseKey) {
  return Boolean(loadFavorites()[verseKey]);
}

function toggleFavorite(verseKey, verse, book, chapter, button) {
  const favorites = loadFavorites();
  if (favorites[verseKey]) {
    delete favorites[verseKey];
    button.classList.remove("is-active");
  } else {
    favorites[verseKey] = {
      book: book.pt,
      bookSlug: book.slug,
      chapter,
      number: verse.number,
      en: verse.en,
      pt: verse.pt,
      savedAt: Date.now(),
    };
    button.classList.add("is-active");
  }
  saveFavorites(favorites);
  renderFavoritesBadge();
  if (!favoritesViewEl.hidden) renderFavoritesList();
}

function removeFavorite(verseKey) {
  const favorites = loadFavorites();
  delete favorites[verseKey];
  saveFavorites(favorites);
  renderFavoritesBadge();
  renderFavoritesList();

  const button = document.querySelector(`.verse[data-verse-key="${verseKey}"] .verse-action--favorite`);
  if (button) button.classList.remove("is-active");
}

function renderFavoritesBadge() {
  const count = Object.keys(loadFavorites()).length;
  favoritesCountEl.textContent = String(count);
  favoritesCountEl.hidden = count === 0;
}

function renderFavoritesList() {
  const favorites = loadFavorites();
  const entries = Object.entries(favorites).sort((a, b) => b[1].savedAt - a[1].savedAt);

  favoritesListEl.innerHTML = "";
  favoritesEmptyEl.hidden = entries.length > 0;

  for (const [verseKey, entry] of entries) {
    const li = document.createElement("li");
    li.className = "favorite-item";

    const header = document.createElement("div");
    header.className = "favorite-header";

    const referenceBtn = document.createElement("button");
    referenceBtn.type = "button";
    referenceBtn.className = "favorite-reference";
    referenceBtn.textContent = `${entry.book} ${entry.chapter}:${entry.number}`;
    referenceBtn.addEventListener("click", () => goToVerse(entry.bookSlug, entry.chapter, verseKey));
    header.appendChild(referenceBtn);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "favorite-remove";
    removeBtn.setAttribute("aria-label", "Remover dos favoritos");
    removeBtn.title = "Remover dos favoritos";
    removeBtn.innerHTML = ICON_HEART;
    removeBtn.addEventListener("click", () => removeFavorite(verseKey));
    header.appendChild(removeBtn);

    li.appendChild(header);

    const enText = document.createElement("p");
    enText.className = "favorite-text-en";
    enText.textContent = entry.en;
    li.appendChild(enText);

    const ptText = document.createElement("p");
    ptText.className = "favorite-text-pt";
    ptText.textContent = entry.pt;
    li.appendChild(ptText);

    favoritesListEl.appendChild(li);
  }
}

// --- Anotações por versículo (localStorage) ---

const NOTES_STORAGE_KEY = "ingles-biblia.notes";

function loadNotes() {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

function saveNotes(notes) {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    // Armazenamento indisponível: segue sem persistir.
  }
}

function getNote(verseKey) {
  const entry = loadNotes()[verseKey];
  return entry ? entry.text : "";
}

function setNote(verseKey, text, verse, book, chapter) {
  const notes = loadNotes();
  if (text) {
    notes[verseKey] = {
      book: book.pt,
      bookSlug: book.slug,
      chapter,
      number: verse.number,
      en: verse.en,
      pt: verse.pt,
      text,
      savedAt: Date.now(),
    };
  } else {
    delete notes[verseKey];
  }
  saveNotes(notes);
  renderNotesBadge();
  if (!notesViewEl.hidden) renderNotesList();
}

function removeNote(verseKey) {
  const notes = loadNotes();
  delete notes[verseKey];
  saveNotes(notes);
  renderNotesBadge();
  renderNotesList();

  const button = document.querySelector(`.verse[data-verse-key="${verseKey}"] .verse-action--note`);
  if (button) button.classList.remove("has-note");
}

function renderNotesBadge() {
  const count = Object.keys(loadNotes()).length;
  notesCountEl.textContent = String(count);
  notesCountEl.hidden = count === 0;
}

function renderNotesList() {
  const notes = loadNotes();
  const entries = Object.entries(notes).sort((a, b) => b[1].savedAt - a[1].savedAt);

  notesListEl.innerHTML = "";
  notesEmptyEl.hidden = entries.length > 0;

  for (const [verseKey, entry] of entries) {
    const li = document.createElement("li");
    li.className = "favorite-item";

    const header = document.createElement("div");
    header.className = "favorite-header";

    const referenceBtn = document.createElement("button");
    referenceBtn.type = "button";
    referenceBtn.className = "favorite-reference";
    referenceBtn.textContent = `${entry.book} ${entry.chapter}:${entry.number}`;
    referenceBtn.addEventListener("click", () => goToVerse(entry.bookSlug, entry.chapter, verseKey));
    header.appendChild(referenceBtn);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "favorite-remove";
    removeBtn.setAttribute("aria-label", "Apagar anotação");
    removeBtn.title = "Apagar anotação";
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => removeNote(verseKey));
    header.appendChild(removeBtn);

    li.appendChild(header);

    const noteText = document.createElement("p");
    noteText.className = "favorite-text-en";
    noteText.textContent = entry.text;
    li.appendChild(noteText);

    const verseText = document.createElement("p");
    verseText.className = "favorite-text-pt";
    verseText.textContent = entry.en;
    li.appendChild(verseText);

    notesListEl.appendChild(li);
  }
}

let currentNoteVerseKey = null;
let currentNoteVerse = null;
let currentNoteBook = null;
let currentNoteChapter = null;
let currentNoteButton = null;

function openNotePopup(verseKey, verse, book, chapter, button) {
  closeActivePopup();
  currentNoteVerseKey = verseKey;
  currentNoteVerse = verse;
  currentNoteBook = book;
  currentNoteChapter = chapter;
  currentNoteButton = button;

  notePopupReferenceEl.textContent = `${book.pt} ${chapter}:${verse.number}`;
  notePopupTextareaEl.value = getNote(verseKey);
  notePopupDeleteEl.hidden = !getNote(verseKey);

  wordPopupBackdropEl.hidden = false;
  notePopupEl.hidden = false;
  notePopupTextareaEl.focus();
}

function closeNotePopup() {
  notePopupEl.hidden = true;
  if (wordPopupEl.hidden && sharePopupEl.hidden) wordPopupBackdropEl.hidden = true;
  currentNoteVerseKey = null;
  currentNoteVerse = null;
  currentNoteBook = null;
  currentNoteChapter = null;
  currentNoteButton = null;
}

function handleNoteSave() {
  if (!currentNoteVerseKey) return;
  const text = notePopupTextareaEl.value.trim();
  setNote(currentNoteVerseKey, text, currentNoteVerse, currentNoteBook, currentNoteChapter);
  if (currentNoteButton) currentNoteButton.classList.toggle("has-note", Boolean(text));
  closeNotePopup();
  showToast(text ? "Anotação salva." : "Anotação removida.");
}

function handleNoteDelete() {
  if (!currentNoteVerseKey) return;
  setNote(currentNoteVerseKey, "", currentNoteVerse, currentNoteBook, currentNoteChapter);
  if (currentNoteButton) currentNoteButton.classList.remove("has-note");
  closeNotePopup();
  showToast("Anotação removida.");
}

// --- Aviso rápido (toast) ---

let toastTimeoutId = null;

function showToast(message) {
  toastEl.textContent = message;
  toastEl.hidden = false;
  clearTimeout(toastTimeoutId);
  toastTimeoutId = setTimeout(() => {
    toastEl.hidden = true;
  }, 2400);
}

// --- Compartilhar versículo (cartão de imagem personalizável) ---

const SHARE_BACKGROUNDS = [
  {
    id: "classic",
    label: "Clássico",
    css: "linear-gradient(160deg, #efe6d8, #c9ad7f)",
    stops: [
      [0, "#f5eee0"],
      [1, "#c9ad7f"],
    ],
    textColor: "#2b2822",
    subTextColor: "rgba(43, 40, 34, 0.72)",
  },
  {
    id: "sunset",
    label: "Pôr do sol",
    css: "linear-gradient(160deg, #ffb56b, #f4685c, #5b2a86)",
    stops: [
      [0, "#ffb56b"],
      [0.55, "#f2645a"],
      [1, "#5b2a86"],
    ],
    textColor: "#ffffff",
    subTextColor: "rgba(255, 255, 255, 0.85)",
  },
  {
    id: "ocean",
    label: "Oceano",
    css: "linear-gradient(160deg, #4d86b8, #132846)",
    stops: [
      [0, "#4d86b8"],
      [1, "#132846"],
    ],
    textColor: "#ffffff",
    subTextColor: "rgba(255, 255, 255, 0.85)",
  },
  {
    id: "forest",
    label: "Floresta",
    css: "linear-gradient(160deg, #6f9a72, #1f3a26)",
    stops: [
      [0, "#6f9a72"],
      [1, "#1f3a26"],
    ],
    textColor: "#ffffff",
    subTextColor: "rgba(255, 255, 255, 0.85)",
  },
  {
    id: "night",
    label: "Céu noturno",
    css: "linear-gradient(160deg, #2f3b63, #0a0d1a)",
    stops: [
      [0, "#2f3b63"],
      [1, "#0a0d1a"],
    ],
    textColor: "#ffffff",
    subTextColor: "rgba(255, 255, 255, 0.75)",
  },
  {
    id: "desert",
    label: "Deserto",
    css: "linear-gradient(160deg, #f0d38c, #b56a35)",
    stops: [
      [0, "#f0d38c"],
      [1, "#b56a35"],
    ],
    textColor: "#3a2410",
    subTextColor: "rgba(58, 36, 16, 0.75)",
  },
];

let currentShareVerse = null;
let currentShareBook = null;
let currentShareChapter = null;
let currentShareReference = "";
let currentShareBackgroundIndex = 0;
let currentShareFontSize = 44;
let currentShareBlob = null;

function renderShareBackgroundSwatches() {
  shareBackgroundsEl.innerHTML = "";
  SHARE_BACKGROUNDS.forEach((bg, index) => {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "share-swatch";
    swatch.style.background = bg.css;
    swatch.setAttribute("aria-label", bg.label);
    swatch.title = bg.label;
    swatch.classList.toggle("is-active", index === currentShareBackgroundIndex);
    swatch.addEventListener("click", () => {
      currentShareBackgroundIndex = index;
      for (const el of shareBackgroundsEl.children) el.classList.remove("is-active");
      swatch.classList.add("is-active");
      drawShareCard();
    });
    shareBackgroundsEl.appendChild(swatch);
  });
}

function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (current && ctx.measureText(test).width > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function measureShareLayout(ctx, maxWidth, fontSize) {
  const ptFontSize = Math.round(fontSize * 0.72);
  const refFontSize = Math.max(24, Math.round(fontSize * 0.5));

  ctx.font = `700 ${fontSize}px Georgia, 'Iowan Old Style', serif`;
  const enLines = wrapCanvasText(ctx, currentShareVerse.en, maxWidth);

  ctx.font = `${ptFontSize}px Georgia, serif`;
  const ptLines = wrapCanvasText(ctx, currentShareVerse.pt, maxWidth);

  const enLineHeight = fontSize * 1.35;
  const ptLineHeight = ptFontSize * 1.4;
  const gapBetween = fontSize * 0.9;
  const refHeight = refFontSize * 1.8;

  const totalHeight =
    enLines.length * enLineHeight + gapBetween + ptLines.length * ptLineHeight + gapBetween + refHeight;

  return { fontSize, ptFontSize, refFontSize, enLines, ptLines, enLineHeight, ptLineHeight, gapBetween, totalHeight };
}

function drawShareCard() {
  if (!currentShareVerse) return;
  const ctx = shareCanvasEl.getContext("2d");
  const w = shareCanvasEl.width;
  const h = shareCanvasEl.height;
  const bg = SHARE_BACKGROUNDS[currentShareBackgroundIndex];
  const paddingX = 90;
  const maxWidth = w - paddingX * 2;
  const maxContentHeight = h - 260;

  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  let layout = measureShareLayout(ctx, maxWidth, currentShareFontSize);
  let scale = 1;
  while (layout.totalHeight > maxContentHeight && currentShareFontSize * scale > 18) {
    scale *= 0.9;
    layout = measureShareLayout(ctx, maxWidth, currentShareFontSize * scale);
  }

  const gradient = ctx.createLinearGradient(0, 0, w * 0.25, h);
  bg.stops.forEach(([offset, color]) => gradient.addColorStop(offset, color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  let y = h / 2 - layout.totalHeight / 2 + layout.enLineHeight * 0.8;

  ctx.font = `700 ${layout.fontSize}px Georgia, 'Iowan Old Style', serif`;
  ctx.fillStyle = bg.textColor;
  for (const line of layout.enLines) {
    ctx.fillText(line, w / 2, y);
    y += layout.enLineHeight;
  }

  y += layout.gapBetween - layout.enLineHeight * 0.35;

  ctx.font = `${layout.ptFontSize}px Georgia, serif`;
  ctx.fillStyle = bg.subTextColor;
  for (const line of layout.ptLines) {
    ctx.fillText(line, w / 2, y);
    y += layout.ptLineHeight;
  }

  y += layout.gapBetween - layout.ptLineHeight * 0.35;

  ctx.font = `700 ${layout.refFontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillStyle = bg.textColor;
  ctx.fillText(currentShareReference, w / 2, y);

  ctx.font = `500 ${Math.max(16, Math.round(currentShareFontSize * 0.28))}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillStyle = bg.subTextColor;
  ctx.fillText("Inglês com a Bíblia", w / 2, h - 50);

  currentShareBlob = null;
  shareCanvasEl.toBlob((blob) => {
    currentShareBlob = blob;
  }, "image/png");
}

function buildShareText() {
  return `"${currentShareVerse.en}"\n"${currentShareVerse.pt}"\n— ${currentShareReference} (KJV / ARC)`;
}

function openSharePopup(verse, book, chapter) {
  closeActivePopup();
  currentShareVerse = verse;
  currentShareBook = book;
  currentShareChapter = chapter;
  currentShareReference = `${book.pt} ${chapter}:${verse.number}`;
  currentShareBackgroundIndex = 0;
  currentShareFontSize = 44;
  shareFontSliderEl.value = String(currentShareFontSize);

  renderShareBackgroundSwatches();
  drawShareCard();

  wordPopupBackdropEl.hidden = false;
  sharePopupEl.hidden = false;
}

function closeSharePopup() {
  sharePopupEl.hidden = true;
  if (wordPopupEl.hidden && notePopupEl.hidden) wordPopupBackdropEl.hidden = true;
  currentShareVerse = null;
  currentShareBook = null;
  currentShareChapter = null;
  currentShareBlob = null;
}

function changeShareFontSize(delta) {
  const min = Number(shareFontSliderEl.min);
  const max = Number(shareFontSliderEl.max);
  currentShareFontSize = Math.max(min, Math.min(max, currentShareFontSize + delta));
  shareFontSliderEl.value = String(currentShareFontSize);
  drawShareCard();
}

function downloadShareImageBlob(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${currentShareReference.replace(/[:\s]+/g, "-")}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadShareImage() {
  if (currentShareBlob) {
    downloadShareImageBlob(currentShareBlob);
    return;
  }
  shareCanvasEl.toBlob((blob) => {
    if (!blob) {
      showToast("Não foi possível gerar a imagem.");
      return;
    }
    downloadShareImageBlob(blob);
  }, "image/png");
}

function shareCardNatively() {
  // Usa o blob já pré-gerado (em vez de esperar um novo toBlob) para não perder
  // o gesto do usuário, exigido pelo Web Share API em navegadores mais estritos.
  const blob = currentShareBlob;
  const file = blob
    ? new File([blob], `${currentShareReference.replace(/[:\s]+/g, "-")}.png`, { type: "image/png" })
    : null;

  if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({ files: [file], title: currentShareReference, text: buildShareText() }).catch(() => {
      // Usuário cancelou o compartilhamento: nenhuma ação necessária.
    });
    return;
  }

  if (navigator.share) {
    navigator.share({ title: currentShareReference, text: buildShareText() }).catch(() => {
      // Usuário cancelou o compartilhamento: nenhuma ação necessária.
    });
    return;
  }

  downloadShareImage();
  showToast("Compartilhamento direto não é suportado aqui; a imagem foi baixada.");
}

function shareToWhatsApp() {
  const text = `${buildShareText()}\n\n${location.href}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  showToast("Baixe a imagem para anexá-la à conversa, se quiser.");
}

function shareToTelegram() {
  const url = `https://t.me/share/url?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(buildShareText())}`;
  window.open(url, "_blank", "noopener");
  showToast("Baixe a imagem para anexá-la à conversa, se quiser.");
}

async function loadChapter(book, chapter) {
  try {
    const response = await fetch(`data/${book.slug}-${chapter}.json`);
    if (!response.ok) throw new Error("not found");
    const data = await response.json();
    readingView.hidden = false;
    emptyStateEl.hidden = true;
    closeActivePopup();
    renderChapter(book, chapter, data);
  } catch (err) {
    readingView.hidden = true;
    emptyStateEl.hidden = false;
    closeActivePopup();
  }
}

// --- Pronúncia e tradução ao clicar em uma palavra ---

function speakText(text, rate) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate || 0.9;
  window.speechSynthesis.speak(utterance);
}

function speakWord(word) {
  speakText(word, 0.85);
}

// Fecha qualquer popup/modal aberto no momento (palavra ou anotação).
function closeActivePopup() {
  if (!wordPopupEl.hidden) hideWordPopup();
  if (!notePopupEl.hidden) closeNotePopup();
  if (!sharePopupEl.hidden) closeSharePopup();
}

// Palavra atualmente mostrada no popup, usada pelo botão "Salvar".
let currentPopupWord = null;
let currentPopupLang = null;

function showWordPopup(word, lang, translation, isLoading) {
  if (!notePopupEl.hidden) closeNotePopup();
  if (!sharePopupEl.hidden) closeSharePopup();

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
  if (notePopupEl.hidden && sharePopupEl.hidden) wordPopupBackdropEl.hidden = true;
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

wordPopupBackdropEl.addEventListener("click", closeActivePopup);
wordPopupCloseEl.addEventListener("click", hideWordPopup);
wordPopupSaveEl.addEventListener("click", handleSaveWordClick);

notePopupCloseEl.addEventListener("click", closeNotePopup);
notePopupSaveEl.addEventListener("click", handleNoteSave);
notePopupDeleteEl.addEventListener("click", handleNoteDelete);

sharePopupCloseEl.addEventListener("click", closeSharePopup);
shareFontSliderEl.addEventListener("input", () => {
  currentShareFontSize = Number(shareFontSliderEl.value);
  drawShareCard();
});
shareFontDecreaseEl.addEventListener("click", () => changeShareFontSize(-2));
shareFontIncreaseEl.addEventListener("click", () => changeShareFontSize(2));
shareDownloadBtnEl.addEventListener("click", downloadShareImage);
shareNativeBtnEl.addEventListener("click", shareCardNatively);
shareWhatsappBtnEl.addEventListener("click", shareToWhatsApp);
shareTelegramBtnEl.addEventListener("click", shareToTelegram);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeActivePopup();
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
  readingContainerEl.hidden = view !== "reading";
  vocabularyViewEl.hidden = view !== "vocabulary";
  favoritesViewEl.hidden = view !== "favorites";
  notesViewEl.hidden = view !== "notes";

  for (const btn of viewTabButtons) {
    btn.setAttribute("aria-pressed", String(btn.dataset.view === view));
  }

  if (view === "vocabulary") renderVocabularyList();
  if (view === "favorites") renderFavoritesList();
  if (view === "notes") renderNotesList();
  closeActivePopup();
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
renderFavoritesBadge();
renderNotesBadge();
