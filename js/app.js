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

// Três versões do texto em inglês para escolher, guardadas lado a lado no
// mesmo arquivo de capítulo (campos "en", "en_web", "en_bbe"): do inglês
// clássico/arcaico da KJV até o vocabulário bem simples da BBE, feita para
// quem está aprendendo o idioma. Todas de domínio público.
const EN_VERSIONS = {
  kjv: { field: "en", label: "KJV", fullName: "King James Version" },
  web: { field: "en_web", label: "WEB", fullName: "World English Bible" },
  bbe: { field: "en_bbe", label: "BBE", fullName: "Bible in Basic English" },
};
const EN_VERSION_STORAGE_KEY = "ingles-biblia.en-version";

function loadEnVersion() {
  try {
    const stored = localStorage.getItem(EN_VERSION_STORAGE_KEY);
    return stored && EN_VERSIONS[stored] ? stored : "kjv";
  } catch (err) {
    return "kjv";
  }
}

let currentEnVersion = loadEnVersion();

function getEnglishText(verse) {
  return verse[EN_VERSIONS[currentEnVersion].field] || verse.en;
}

const bookSelectBtnEl = document.getElementById("book-select-btn");
const bookSelectLabelEl = document.getElementById("book-select-label");
const chapterSelectBtnEl = document.getElementById("chapter-select-btn");
const chapterSelectLabelEl = document.getElementById("chapter-select-label");
const pickerOverlayEl = document.getElementById("picker-overlay");
const pickerBackdropEl = document.getElementById("picker-backdrop");
const pickerTitleEl = document.getElementById("picker-title");
const pickerListEl = document.getElementById("picker-list");
const pickerCloseBtnEl = document.getElementById("picker-close-btn");
const titleEnEl = document.getElementById("title-en");
const titlePtEl = document.getElementById("title-pt");
const versesEnEl = document.getElementById("verses-en");
const versesPtEl = document.getElementById("verses-pt");
const versionBadgeEnEl = document.getElementById("version-badge-en");
const enVersionButtons = document.querySelectorAll(".en-version-btn");
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
const wordPopupColorsEl = document.getElementById("word-popup-colors");
const wordColorSwatchButtons = document.querySelectorAll(".word-color-swatch");
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
const backToHomeBtnEl = document.getElementById("back-to-home-btn");
const menuToggleEl = document.getElementById("menu-toggle");
const menuDropdownEl = document.getElementById("menu-dropdown");
const menuDropdownItems = document.querySelectorAll(".menu-dropdown-item");
const grammarViewEl = document.getElementById("grammar-view");
const flashcardsViewEl = document.getElementById("flashcards-view");
const flashcardsEmptyEl = document.getElementById("flashcards-empty");
const flashcardsPanelEl = document.getElementById("flashcards-panel");
const flashcardsProgressEl = document.getElementById("flashcards-progress");
const flashcardEl = document.getElementById("flashcard");
const flashcardFrontEl = document.getElementById("flashcard-front");
const flashcardBackEl = document.getElementById("flashcard-back");
const flashcardFrontRefEl = document.getElementById("flashcard-front-ref");
const flashcardFrontTextEl = document.getElementById("flashcard-front-text");
const flashcardBackRefEl = document.getElementById("flashcard-back-ref");
const flashcardBackTextEl = document.getElementById("flashcard-back-text");
const flashcardsPrevEl = document.getElementById("flashcards-prev");
const flashcardsFlipEl = document.getElementById("flashcards-flip");
const flashcardsNextEl = document.getElementById("flashcards-next");
const flashcardsShuffleEl = document.getElementById("flashcards-shuffle");
const flashcardsModeButtons = document.querySelectorAll(".flashcards-mode-btn");
const grammarListEl = document.getElementById("grammar-list");
const viewBackButtons = document.querySelectorAll(".view-back-btn");
const homeViewEl = document.getElementById("home-view");
const homeFabAudioEl = document.getElementById("home-fab-audio");
const homeVerseEnEl = document.getElementById("home-verse-en");
const homeVerseRefEl = document.getElementById("home-verse-ref");
const homeVersePtEl = document.getElementById("home-verse-pt");
const homeVerseShareBtnEl = document.getElementById("home-verse-share-btn");
const homeStreakEl = document.getElementById("home-streak");
const homeContinueRefEl = document.getElementById("home-continue-ref");
const homeContinueBtnEl = document.getElementById("home-continue-btn");
const homeProgressRingEl = document.getElementById("home-progress-ring");
const homeProgressTextEl = document.getElementById("home-progress-text");
const homeProCardEl = document.getElementById("home-pro-card");
const homeSoonButtons = document.querySelectorAll("[data-home-soon]");
const homeHeaderEl = document.getElementById("home-header");
const appHeaderEl = document.getElementById("app-header");
const homeDarkModeBtnEl = document.getElementById("home-darkmode-btn");
const homeNotificationsBtnEl = document.getElementById("home-notifications-btn");
const homeAvatarBtnEl = document.getElementById("home-avatar-btn");
const homeLessonsStatusEl = document.getElementById("home-lessons-status");
const homeLessonsRingEl = document.getElementById("home-lessons-ring");
const homeLessonsProgressTextEl = document.getElementById("home-lessons-progress-text");
const homeLessonsBtnEl = document.getElementById("home-lessons-btn");
const homeFlashcardsStatusEl = document.getElementById("home-flashcards-status");
const homeFlashcardsBtnEl = document.getElementById("home-flashcards-btn");
const homeGrammarStatusEl = document.getElementById("home-grammar-status");
const homeGrammarBtnEl = document.getElementById("home-grammar-btn");
const lessonsOverlayEl = document.getElementById("lessons-overlay");
const lessonsCloseBtnEl = document.getElementById("lessons-close-btn");
const lessonsProgressFillEl = document.getElementById("lessons-progress-fill");
const lessonsExerciseEl = document.getElementById("lessons-exercise");
const lessonInstructionEl = document.getElementById("lesson-instruction");
const lessonSpeakBtnEl = document.getElementById("lesson-speak-btn");
const lessonPromptEl = document.getElementById("lesson-prompt");
const lessonRefEl = document.getElementById("lesson-ref");
const lessonInputEl = document.getElementById("lesson-input");
const lessonTapAreaEl = document.getElementById("lesson-tap-area");
const lessonTapAnswerEl = document.getElementById("lesson-tap-answer");
const lessonTapBankEl = document.getElementById("lesson-tap-bank");
const lessonFeedbackEl = document.getElementById("lesson-feedback");
const lessonFeedbackTitleEl = document.getElementById("lesson-feedback-title");
const lessonFeedbackAnswerEl = document.getElementById("lesson-feedback-answer");
const lessonsCompleteEl = document.getElementById("lessons-complete");
const lessonsCompleteScoreEl = document.getElementById("lessons-complete-score");
const lessonsCompleteCloseBtnEl = document.getElementById("lessons-complete-close-btn");
const lessonsActionsEl = document.getElementById("lessons-actions");
const lessonCheckBtnEl = document.getElementById("lesson-check-btn");
const lessonContinueBtnEl = document.getElementById("lesson-continue-btn");

let currentSource = { book: "", chapter: 0 };

// Uma "palavra" pode incluir hífen/apóstrofo interno (ex.: "ajuntem-se", "don't").
const WORD_PATTERN = /[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['-][A-Za-zÀ-ÖØ-öø-ÿ]+)*/g;

// --- Seletor de livro/capítulo: um painel próprio (em vez do <select>
// nativo, que no celular aparece como uma lista genérica do sistema, sem
// as cores do app) que abre por cima da tela mostrando os livros (agrupados
// por Antigo/Novo Testamento) ou os capítulos do livro atual, num grid.

let selectedBookSlug = DEFAULT_BOOK_SLUG;
let selectedChapter = DEFAULT_CHAPTER;
const OLD_TESTAMENT_BOOK_COUNT = 39;
const PICKER_CHECK_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function getSelectedBook() {
  return BOOKS.find((book) => book.slug === selectedBookSlug);
}

function setSelectedBook(bookSlug) {
  selectedBookSlug = bookSlug;
  bookSelectLabelEl.textContent = getSelectedBook().pt;
}

function setSelectedChapter(chapter) {
  selectedChapter = chapter;
  chapterSelectLabelEl.textContent = `Cap. ${chapter}`;
}

function closePicker() {
  pickerOverlayEl.hidden = true;
  pickerListEl.innerHTML = "";
}

function openPicker(title) {
  pickerTitleEl.textContent = title;
  pickerOverlayEl.hidden = false;
  const selectedEl = pickerListEl.querySelector(".is-selected");
  if (selectedEl) selectedEl.scrollIntoView({ block: "center" });
}

function openBookPicker() {
  pickerListEl.className = "picker-list";
  pickerListEl.innerHTML = "";

  BOOKS.forEach((book, index) => {
    if (index === 0 || index === OLD_TESTAMENT_BOOK_COUNT) {
      const label = document.createElement("p");
      label.className = "picker-section-label";
      label.textContent = index === 0 ? "Antigo Testamento" : "Novo Testamento";
      pickerListEl.appendChild(label);
    }

    const isSelected = book.slug === selectedBookSlug;
    const item = document.createElement("button");
    item.type = "button";
    item.className = `picker-item${isSelected ? " is-selected" : ""}`;
    item.innerHTML = `<span>${book.pt} <span class="picker-item-en">(${book.en})</span></span>${isSelected ? PICKER_CHECK_ICON : ""}`;
    item.addEventListener("click", () => {
      setSelectedBook(book.slug);
      setSelectedChapter(1);
      loadChapter(book, 1);
      closePicker();
    });
    pickerListEl.appendChild(item);
  });

  openPicker("Escolher livro");
}

function openChapterPicker() {
  const book = getSelectedBook();
  pickerListEl.className = "picker-list picker-list--grid";
  pickerListEl.innerHTML = "";

  for (let i = 1; i <= book.chapters; i++) {
    const isSelected = i === selectedChapter;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `picker-chip${isSelected ? " is-selected" : ""}`;
    chip.textContent = String(i);
    chip.addEventListener("click", () => {
      setSelectedChapter(i);
      loadChapter(book, i);
      closePicker();
    });
    pickerListEl.appendChild(chip);
  }

  openPicker(`${book.pt} — escolha o capítulo`);
}

bookSelectBtnEl.addEventListener("click", openBookPicker);
chapterSelectBtnEl.addEventListener("click", openChapterPicker);
pickerBackdropEl.addEventListener("click", closePicker);
pickerCloseBtnEl.addEventListener("click", closePicker);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !pickerOverlayEl.hidden) closePicker();
});

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
  const text = lang === "en" ? getEnglishText(verse) : verse.pt;
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
  listenBtn.addEventListener("click", () => speakText(getEnglishText(verse)));
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

  setSelectedBook(bookSlug);
  setSelectedChapter(chapter);
  await loadChapter(book, chapter);
  setActiveView("reading");

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
      en: getEnglishText(verse),
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
      en: getEnglishText(verse),
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
  const enLines = wrapCanvasText(ctx, getEnglishText(currentShareVerse), maxWidth);

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
  const enLabel = EN_VERSIONS[currentEnVersion].label;
  return `"${getEnglishText(currentShareVerse)}"\n"${currentShareVerse.pt}"\n— ${currentShareReference} (${enLabel} / ARC)`;
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

function buildShareFile() {
  if (!currentShareBlob) return null;
  return new File([currentShareBlob], `${currentShareReference.replace(/[:\s]+/g, "-")}.png`, { type: "image/png" });
}

function shareCardNatively() {
  // Usa o blob já pré-gerado (em vez de esperar um novo toBlob) para não perder
  // o gesto do usuário, exigido pelo Web Share API em navegadores mais estritos.
  const file = buildShareFile();

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

// wa.me/t.me só aceitam texto na URL — não há como anexar a imagem por um link,
// já que o site não tem servidor para hospedá-la. Por isso, quando o navegador
// suporta compartilhar arquivos (Web Share API), abrimos o menu nativo, que já
// inclui WhatsApp/Telegram com a imagem anexada; sem esse suporte, baixamos a
// imagem automaticamente e abrimos o app com o texto, para o usuário só anexar.
function shareImageAndTextTo(target) {
  const file = buildShareFile();

  if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator
      .share({ files: [file], title: currentShareReference, text: buildShareText() })
      .catch(() => {
        // Usuário cancelou o compartilhamento: nenhuma ação necessária.
      });
    return;
  }

  downloadShareImage();

  const appName = target === "whatsapp" ? "WhatsApp" : "Telegram";
  const url =
    target === "whatsapp"
      ? `https://wa.me/?text=${encodeURIComponent(`${buildShareText()}\n\n${location.href}`)}`
      : `https://t.me/share/url?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(buildShareText())}`;

  window.open(url, "_blank", "noopener");
  showToast(`A imagem foi baixada — anexe-a na conversa do ${appName}.`);
}

function shareToWhatsApp() {
  shareImageAndTextTo("whatsapp");
}

function shareToTelegram() {
  shareImageAndTextTo("telegram");
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
    saveLastRead(book.slug, chapter);
    markChapterRead(book.slug, chapter);
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
  if (!pickerOverlayEl.hidden) closePicker();
}

// Palavra atualmente mostrada no popup, usada pelo botão "Salvar".
let currentPopupWord = null;
let currentPopupLang = null;
let currentPopupColor = "blue";
let currentPopupTranslation = null;

function setPopupColor(color) {
  currentPopupColor = color;
  for (const btn of wordColorSwatchButtons) {
    btn.classList.toggle("is-active", btn.dataset.color === color);
  }
}

for (const btn of wordColorSwatchButtons) {
  btn.addEventListener("click", () => setPopupColor(btn.dataset.color));
}

function showWordPopup(word, lang, translation, isLoading) {
  if (!notePopupEl.hidden) closeNotePopup();
  if (!sharePopupEl.hidden) closeSharePopup();

  currentPopupWord = word;
  currentPopupLang = lang;
  currentPopupTranslation = isLoading ? null : translation || null;

  wordPopupOriginalEl.textContent = word;
  wordPopupTranslationEl.textContent = isLoading
    ? "traduzindo…"
    : translation || "tradução não encontrada";
  wordPopupEl.classList.toggle("word-popup--missing", !isLoading && !translation);
  wordPopupSaveEl.hidden = lang !== "en";
  wordPopupColorsEl.hidden = lang !== "en";

  if (lang === "en") {
    const existing = loadVocabulary().find((entry) => entry.word === word);
    setPopupColor((existing && existing.color) || "blue");
  }

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
  recordWordClick(currentPopupWord, currentPopupColor, currentPopupTranslation);
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

const TRANSLATION_CACHE_KEY = "ingles-biblia.translations.v3";

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

// Palavras arcaicas do inglês (pronomes/verbos do estilo "thee/thou/hath")
// e vocabulário bíblico pouco comum fora desse contexto: motores de
// tradução genéricos frequentemente devolvem a própria palavra em inglês
// sem traduzir, ou "alucinam" algo sem relação, já que são raras em textos
// modernos. Como aparecem centenas de vezes na Bíblia inteira, valem uma
// tradução fixa em vez de depender da API para elas.
const ARCHAIC_EN_PT_GLOSSARY = {
  thee: "te, ti",
  thou: "tu",
  thy: "teu, tua",
  thine: "teu, tua",
  ye: "vós",
  hath: "tem, há",
  hast: "tens, hás",
  doth: "faz",
  dost: "fazes",
  art: "és",
  wast: "eras, foste",
  wert: "eras",
  shalt: "deverás, hás de",
  wilt: "queres, hás de",
  couldst: "poderias",
  wouldst: "quererias",
  shouldst: "deverias",
  mayest: "podes",
  mayst: "podes",
  canst: "podes",
  knowest: "sabes",
  sayest: "dizes",
  seest: "vês",
  goest: "vais",
  givest: "dás",
  lovest: "amas",
  believest: "crês",
  unto: "para, a",
  verily: "em verdade, certamente",
  wherefore: "por isso, portanto",
  whence: "de onde",
  whither: "para onde",
  hither: "para cá, aqui",
  thither: "para lá, ali",
  hence: "daqui, por isso",
  thence: "de lá",
  whereof: "do qual, do que",
  betwixt: "entre",
  peradventure: "talvez, porventura",
  sojourn: "peregrinar, morar temporariamente",
  sojourner: "peregrino, estrangeiro",
  begat: "gerou",
  begotten: "gerado",
  brethren: "irmãos",
  damsel: "donzela",
  handmaid: "serva",
  handmaiden: "serva",
  bondmaid: "escrava",
  bondservant: "servo",
  manservant: "servo",
  maidservant: "serva",
  kine: "vacas",
  raiment: "vestimenta, roupa",
  girdle: "cinto",
  countenance: "semblante, rosto",
  smote: "feriu",
  smite: "ferir",
  slew: "matou",
  slay: "matar",
  spake: "falou",
  speaketh: "fala",
  saith: "diz",
  cometh: "vem",
  goeth: "vai",
  giveth: "dá",
  maketh: "faz",
  taketh: "toma",
  knoweth: "sabe",
  loveth: "ama",
  liveth: "vive",
  dieth: "morre",
  abideth: "permanece",
  worketh: "trabalha, opera",
  believeth: "crê",
  seeketh: "busca",
  findeth: "acha, encontra",
  walketh: "anda",
  nigh: "perto",
  yea: "sim, de fato",
  nay: "não",
  yonder: "ali, além",
  aught: "algo",
  naught: "nada",
  oft: "frequentemente",
  ere: "antes",
  lest: "para que não",
  albeit: "ainda que, embora",
  notwithstanding: "apesar disso, não obstante",
  howbeit: "contudo",
  wist: "soube, sabia",
  trow: "creio, suponho",
  selah: "selá",
  firmament: "firmamento",
  tabernacle: "tabernáculo",
  covenant: "aliança",
  transgression: "transgressão",
  iniquity: "iniquidade",
  righteousness: "justiça",
  unrighteousness: "injustiça",
  lovingkindness: "benignidade, bondade",
  longsuffering: "paciência, longanimidade",
  meekness: "mansidão",
  propitiation: "propiciação",
  firstfruits: "primícias",
  leviathan: "leviatã",
  behemoth: "beemote",
  publican: "publicano",
  centurion: "centurião",
  cubit: "côvado",
  shekel: "siclo",
};

// Detecta respostas inúteis que ainda assim "parecem" uma tradução válida,
// como o aviso de limite diário do MyMemory — sem isso, esse texto acabava
// sendo salvo no cache como se fosse a tradução real da palavra.
function isUsableTranslation(text) {
  if (!text) return false;
  if (/MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID (SOURCE|TARGET) LANGUAGE/i.test(text)) return false;
  return true;
}

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

// Tenta o Google, depois o MyMemory e, se os dois falharem (rede instável,
// limite de uso momentâneo), tenta o Google mais uma vez — cobre a maior
// parte dos casos de "às vezes não traduz" causados por uma falha passageira.
async function fetchTranslation(word, from, to) {
  try {
    const translated = await translateWithGoogle(word, from, to);
    if (isUsableTranslation(translated)) return translated;
  } catch (err) {
    // segue para a próxima fonte
  }

  try {
    const translated = await translateWithMyMemory(word, from, to);
    if (isUsableTranslation(translated)) return translated;
  } catch (err) {
    // segue para a nova tentativa
  }

  const translated = await translateWithGoogle(word, from, to);
  if (!isUsableTranslation(translated)) throw new Error("Nenhuma fonte devolveu uma tradução utilizável");
  return translated;
}

async function translateWord(word, from, to) {
  const cacheKey = `${from}|${to}:${word}`;
  if (translationCache[cacheKey]) return translationCache[cacheKey];

  if (from === "en" && to === "pt" && ARCHAIC_EN_PT_GLOSSARY[word]) {
    const result = ARCHAIC_EN_PT_GLOSSARY[word];
    translationCache[cacheKey] = result;
    saveTranslationCache(translationCache);
    return result;
  }

  const translated = await fetchTranslation(word, from, to);
  const result = translated.toLowerCase();
  translationCache[cacheKey] = result;
  saveTranslationCache(translationCache);
  return result;
}

// Busca a tradução de uma palavra do vocabulário que ficou sem tradução
// salva (ex.: entradas antigas, de antes de uma correção, ou uma falha
// pontual da API na hora de salvar). Evita duas buscas em paralelo para a
// mesma palavra caso ela apareça em mais de um lugar (vocabulário e
// flashcards) ao mesmo tempo.
const pendingTranslationBackfills = new Set();

function backfillTranslation(word, onResolve, onReject) {
  if (pendingTranslationBackfills.has(word)) return;
  pendingTranslationBackfills.add(word);
  translateWord(word, "en", "pt")
    .then((translation) => {
      pendingTranslationBackfills.delete(word);
      onResolve(translation);
    })
    .catch(() => {
      pendingTranslationBackfills.delete(word);
      if (onReject) onReject();
    });
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

// Salva a palavra no vocabulário com a cor escolhida no popup (ou atualiza a
// cor se a palavra já estava salva). Chamado só ao apertar "Salvar", para a
// cor no texto reagir na hora. A tradução vem do que já estava mostrado no
// popup no momento do clique (se ainda não tinha carregado, fica null e é
// preenchida depois por updateVocabularyTranslation).
function recordWordClick(word, color, translation) {
  const list = loadVocabulary();
  const existing = list.find((entry) => entry.word === word);

  if (existing) {
    existing.timesClicked = (existing.timesClicked || 1) + 1;
    existing.color = color;
    if (translation) existing.translation = translation;
  } else {
    list.unshift({
      word,
      translation: translation || null,
      book: currentSource.book,
      chapter: currentSource.chapter,
      savedAt: Date.now(),
      timesClicked: 1,
      color,
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

  if (flashcardsMode === "vocabulary") {
    const deckEntry = flashcardsDeck.find((e) => e.word === word);
    if (deckEntry) deckEntry.translation = translation;
    if (!flashcardsViewEl.hidden && flashcardsDeck[flashcardsIndex] === deckEntry) {
      flashcardBackTextEl.textContent = translation;
    }
  }
}

function removeFromVocabulary(word) {
  const list = loadVocabulary().filter((entry) => entry.word !== word);
  saveVocabulary(list);
  renderVocabularyBadge();
  renderVocabularyList();
  applyWordHistoryStyles();
}

const WORD_COLOR_CLASSES = ["word--saved-blue", "word--saved-red", "word--saved-yellow", "word--saved-green"];

// Pinta no texto as palavras salvas no vocabulário com a cor escolhida no
// popup (some quando a palavra é apagada do vocabulário). Roda em toda
// palavra em inglês visível no capítulo atual.
function applyWordHistoryStyles() {
  const colors = {};
  for (const entry of loadVocabulary()) {
    colors[entry.word] = entry.color || "blue";
  }

  for (const span of document.querySelectorAll('.word[data-lang="en"]')) {
    span.classList.remove(...WORD_COLOR_CLASSES);
    const color = colors[span.dataset.word];
    if (color) span.classList.add(`word--saved-${color}`);
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
    wordEl.className = `vocabulary-word word--saved-${entry.color || "blue"}`;
    wordEl.textContent = entry.word;

    const translationEl = document.createElement("span");
    translationEl.className = "vocabulary-translation";
    if (entry.translation) {
      translationEl.textContent = entry.translation;
    } else {
      translationEl.textContent = "traduzindo…";
      backfillTranslation(
        entry.word,
        (translation) => updateVocabularyTranslation(entry.word, translation),
        () => {
          translationEl.textContent = "tradução não encontrada";
        }
      );
    }

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

// --- Flashcards: treina com as palavras do vocabulário ou com os
// versículos favoritados, à escolha do usuário ---

const FLASHCARDS_EMPTY_MESSAGES = {
  vocabulary:
    'Nenhuma palavra salva ainda. Vá até a Leitura, toque em uma palavra em inglês e depois em "Salvar no vocabulário" para criar seus flashcards.',
  favorites:
    "Nenhum versículo favoritado ainda. Toque no coração de um versículo durante a leitura para adicioná-lo aqui e treinar com ele.",
};

let flashcardsMode = "vocabulary";
let flashcardsDeck = [];
let flashcardsIndex = 0;
let flashcardsFlipped = false;

function showFlashcard(index) {
  flashcardsIndex = index;
  flashcardsFlipped = false;

  const entry = flashcardsDeck[flashcardsIndex];
  const isVerseMode = flashcardsMode === "favorites";
  flashcardFrontEl.classList.toggle("flashcard-face--verse", isVerseMode);
  flashcardBackEl.classList.toggle("flashcard-face--verse", isVerseMode);

  if (isVerseMode) {
    const reference = `${entry.book} ${entry.chapter}:${entry.number}`;
    flashcardFrontRefEl.textContent = reference;
    flashcardFrontTextEl.textContent = entry.en;
    flashcardBackRefEl.textContent = reference;
    flashcardBackTextEl.textContent = entry.pt;
  } else {
    flashcardFrontRefEl.textContent = "";
    flashcardFrontTextEl.textContent = entry.word;
    flashcardBackRefEl.textContent = "";

    if (entry.translation) {
      flashcardBackTextEl.textContent = entry.translation;
    } else {
      flashcardBackTextEl.textContent = "traduzindo…";
      backfillTranslation(
        entry.word,
        (translation) => updateVocabularyTranslation(entry.word, translation),
        () => {
          if (flashcardsMode === "vocabulary" && flashcardsIndex === index) {
            flashcardBackTextEl.textContent = "tradução não encontrada";
          }
        }
      );
    }
  }

  flashcardFrontEl.hidden = false;
  flashcardBackEl.hidden = true;

  flashcardsProgressEl.textContent = `${flashcardsIndex + 1} / ${flashcardsDeck.length}`;
  flashcardsPrevEl.disabled = flashcardsIndex === 0;
  flashcardsNextEl.disabled = flashcardsIndex === flashcardsDeck.length - 1;
}

function flipCurrentFlashcard() {
  if (flashcardsDeck.length === 0) return;
  flashcardsFlipped = !flashcardsFlipped;
  flashcardFrontEl.hidden = flashcardsFlipped;
  flashcardBackEl.hidden = !flashcardsFlipped;
}

function goToFlashcard(delta) {
  const nextIndex = flashcardsIndex + delta;
  if (nextIndex < 0 || nextIndex >= flashcardsDeck.length) return;
  showFlashcard(nextIndex);
}

function shuffleFlashcards() {
  for (let i = flashcardsDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcardsDeck[i], flashcardsDeck[j]] = [flashcardsDeck[j], flashcardsDeck[i]];
  }
  showFlashcard(0);
}

function renderFlashcards() {
  flashcardsDeck =
    flashcardsMode === "favorites"
      ? Object.values(loadFavorites()).sort((a, b) => b.savedAt - a.savedAt)
      : loadVocabulary();

  const hasCards = flashcardsDeck.length > 0;
  flashcardsEmptyEl.textContent = FLASHCARDS_EMPTY_MESSAGES[flashcardsMode];
  flashcardsEmptyEl.hidden = hasCards;
  flashcardsPanelEl.hidden = !hasCards;
  if (hasCards) showFlashcard(0);
}

flashcardEl.addEventListener("click", flipCurrentFlashcard);
flashcardsFlipEl.addEventListener("click", flipCurrentFlashcard);
flashcardsPrevEl.addEventListener("click", () => goToFlashcard(-1));
flashcardsNextEl.addEventListener("click", () => goToFlashcard(1));
flashcardsShuffleEl.addEventListener("click", shuffleFlashcards);

for (const btn of flashcardsModeButtons) {
  btn.addEventListener("click", () => {
    if (btn.dataset.flashcardsMode === flashcardsMode) return;
    flashcardsMode = btn.dataset.flashcardsMode;
    for (const b of flashcardsModeButtons) b.setAttribute("aria-pressed", String(b === btn));
    renderFlashcards();
  });
}

// --- Gramática: guia de referência rápida, conteúdo original em português ---

// Guia de gramática organizado por categoria (Fundamentos → Tempos verbais →
// Modais → Frases e conexões → Descrevendo o mundo → Tópicos avançados),
// do nível básico ao intermediário. As regras gramaticais em si são fatos de
// domínio público (não é possível ter direitos autorais sobre "como o
// presente perfeito é formado"); o texto de cada explicação e os exemplos
// foram escritos diretamente para este app, no mesmo espírito do restante do
// conteúdo, para manter a voz consistente e os exemplos ligados à Bíblia.
const GRAMMAR_TOPICS = [
  // --- Fundamentos ---
  {
    category: "Fundamentos",
    title: "Pronomes pessoais (Subject Pronouns)",
    explanation:
      'Os pronomes pessoais substituem o nome de quem pratica a ação do verbo. Em inglês eles sempre vêm antes do verbo, e o pronome "I" (eu) é sempre escrito com letra maiúscula, não importa onde apareça na frase.',
    examples: [
      { en: "I believe in God.", pt: "Eu creio em Deus." },
      { en: "She prays every morning.", pt: "Ela reza todas as manhãs." },
      { en: "We are family.", pt: "Nós somos uma família." },
      { en: "They live in a small town.", pt: "Eles moram em uma cidade pequena." },
    ],
  },
  {
    category: "Fundamentos",
    title: "Pronomes objeto (Object Pronouns)",
    explanation:
      'Os pronomes objeto (me, you, him, her, it, us, them) substituem o nome de quem recebe a ação do verbo, ou aparecem depois de uma preposição (for, to, with...). Diferente dos pronomes pessoais, eles nunca vêm antes do verbo principal da frase.',
    examples: [
      { en: "God loves me.", pt: "Deus me ama." },
      { en: "I will follow him.", pt: "Eu vou segui-lo." },
      { en: "She gave the book to us.", pt: "Ela deu o livro para nós." },
      { en: "Pray for them.", pt: "Ore por eles." },
    ],
  },
  {
    category: "Fundamentos",
    title: 'O verbo "to be" no presente (am / is / are)',
    explanation:
      '"To be" significa "ser" ou "estar" e é um dos verbos mais usados em inglês. No presente tem três formas: am (com "I"), is (com he/she/it e nomes no singular) e are (com you/we/they e nomes no plural).',
    examples: [
      { en: "I am happy.", pt: "Eu estou feliz." },
      { en: "She is a teacher.", pt: "Ela é professora." },
      { en: "The Bible is an ancient book.", pt: "A Bíblia é um livro antigo." },
      { en: "We are ready.", pt: "Nós estamos prontos." },
    ],
  },
  {
    category: "Fundamentos",
    title: 'O verbo "to be" no passado (was / were)',
    explanation:
      'No passado, "to be" tem só duas formas: "was" (com I/he/she/it) e "were" (com you/we/they). Na negativa, acrescente "not" (was not / were not, ou wasn\'t / weren\'t).',
    examples: [
      { en: "Moses was a great leader.", pt: "Moisés foi um grande líder." },
      { en: "They were in the desert for forty years.", pt: "Eles estiveram no deserto por quarenta anos." },
      { en: "I wasn't afraid.", pt: "Eu não estava com medo." },
      { en: "Were you at the service last Sunday?", pt: "Você estava no culto no domingo passado?" },
    ],
  },
  {
    category: "Fundamentos",
    title: "Artigos: a, an, the",
    explanation:
      '"A" e "an" são artigos indefinidos (equivalem a "um"/"uma"), usados para falar de algo não específico. Use "an" antes de palavras que começam com som de vogal, e "a" antes de som de consoante. "The" é o artigo definido (equivale a "o"/"a"/"os"/"as"), usado para algo específico ou já mencionado antes.',
    examples: [
      { en: "I saw a star in the sky.", pt: "Eu vi uma estrela no céu." },
      { en: "She is an honest woman.", pt: "Ela é uma mulher honesta." },
      { en: "He is a good shepherd.", pt: "Ele é um bom pastor." },
      { en: "The book on the table is mine.", pt: "O livro na mesa é meu." },
    ],
  },
  {
    category: "Fundamentos",
    title: "Plural dos substantivos",
    explanation:
      "Na maioria das vezes, basta acrescentar \"-s\" ao substantivo para formar o plural. Palavras terminadas em -s, -ss, -sh, -ch, -x ou -z recebem \"-es\". Também existem plurais irregulares, que precisam ser memorizados.",
    examples: [
      { en: "one book, two books", pt: "um livro, dois livros" },
      { en: "one church, two churches", pt: "uma igreja, duas igrejas" },
      { en: "one child, two children", pt: "uma criança, duas crianças" },
      { en: "one man, two men", pt: "um homem, dois homens" },
    ],
  },
  {
    category: "Fundamentos",
    title: "Substantivos contáveis e incontáveis",
    explanation:
      'Substantivos contáveis podem ser contados (one book, two books) e têm plural. Substantivos incontáveis representam algo que normalmente não se separa em unidades (líquidos, sentimentos, conceitos): não têm plural e não usam "a/an" antes. Cuidado com palavras como "advice" (conselho), "information" e "furniture", que são incontáveis em inglês mesmo tendo plural em português.',
    examples: [
      { en: "I have three sons.", pt: "Eu tenho três filhos." },
      { en: "She has great faith.", pt: "Ela tem grande fé." },
      { en: "We need water and bread.", pt: "Nós precisamos de água e pão." },
      { en: "He gave good advice.", pt: "Ele deu um bom conselho." },
    ],
  },
  {
    category: "Fundamentos",
    title: "Pronomes e adjetivos possessivos",
    explanation:
      "Os adjetivos possessivos (my, your, his, her, its, our, their) vêm antes de um substantivo, indicando de quem é algo. Os pronomes possessivos (mine, yours, his, hers, ours, theirs) substituem o substantivo e ficam sozinhos na frase.",
    examples: [
      { en: "This is my Bible.", pt: "Esta é minha Bíblia." },
      { en: "Is this book yours?", pt: "Este livro é seu?" },
      { en: "Their faith is strong.", pt: "A fé deles é forte." },
      { en: "The victory is ours.", pt: "A vitória é nossa." },
    ],
  },
  {
    category: "Fundamentos",
    title: "There is / There are",
    explanation:
      'Usamos "there is" (singular) e "there are" (plural) para dizer que algo existe ou está em algum lugar. Na negativa: there isn\'t / there aren\'t. Na pergunta: Is there...? / Are there...?',
    examples: [
      { en: "There is one God.", pt: "Há um só Deus." },
      { en: "There are twelve apostles.", pt: "Há doze apóstolos." },
      { en: "There isn't any doubt in my heart.", pt: "Não há nenhuma dúvida no meu coração." },
      { en: "Is there hope for everyone?", pt: "Há esperança para todos?" },
    ],
  },

  // --- Tempos verbais ---
  {
    category: "Tempos verbais",
    title: "Presente Simples (Simple Present)",
    explanation:
      'Usado para hábitos, rotinas e fatos permanentes. Na afirmativa, o verbo recebe "-s" (ou "-es") quando o sujeito é he/she/it. Na negativa e na interrogativa, usa-se "do"/"does" + o verbo no infinitivo, sem "-s".',
    examples: [
      { en: "I read the Bible every night.", pt: "Eu leio a Bíblia todas as noites." },
      { en: "He goes to church on Sundays.", pt: "Ele vai à igreja aos domingos." },
      { en: "She doesn't like coffee.", pt: "Ela não gosta de café." },
      { en: "Do you believe in miracles?", pt: "Você acredita em milagres?" },
    ],
  },
  {
    category: "Tempos verbais",
    title: "Presente Contínuo (Present Continuous)",
    explanation:
      'Descreve ações acontecendo agora, no momento em que se fala. É formado com o verbo "to be" (am/is/are) + o verbo principal terminado em "-ing".',
    examples: [
      { en: "I am reading the book of Psalms.", pt: "Eu estou lendo o livro de Salmos." },
      { en: "She is singing a hymn.", pt: "Ela está cantando um hino." },
      { en: "They are walking to the temple.", pt: "Eles estão caminhando para o templo." },
      { en: "Are you listening?", pt: "Você está escutando?" },
    ],
  },
  {
    category: "Tempos verbais",
    title: "Passado Simples (Simple Past)",
    explanation:
      'Usado para ações já concluídas no passado. Verbos regulares recebem "-ed" (walk → walked). Muitos verbos comuns são irregulares e mudam de forma completamente — por exemplo: be→was/were, go→went, have→had, do→did, say→said, see→saw, come→came, know→knew, take→took, give→gave, make→made.',
    examples: [
      { en: "God created the heavens and the earth.", pt: "Deus criou os céus e a terra." },
      { en: "Jesus walked on water.", pt: "Jesus andou sobre a água." },
      { en: "They prayed together.", pt: "Eles oraram juntos." },
      { en: "She went to Jerusalem.", pt: "Ela foi a Jerusalém." },
    ],
  },
  {
    category: "Tempos verbais",
    title: "Passado Contínuo (Past Continuous)",
    explanation:
      'Descreve uma ação que estava em andamento em um momento específico do passado, muitas vezes interrompida por outra ação. Formado com "was/were" + verbo terminado em "-ing".',
    examples: [
      { en: "They were praying when the angel appeared.", pt: "Eles estavam orando quando o anjo apareceu." },
      { en: "I was reading the Gospels last night.", pt: "Eu estava lendo os Evangelhos ontem à noite." },
      { en: "While Jesus was teaching, the crowd listened.", pt: "Enquanto Jesus estava ensinando, a multidão escutava." },
    ],
  },
  {
    category: "Tempos verbais",
    title: "Presente Perfeito (Present Perfect)",
    explanation:
      'Liga o passado ao presente: usado para experiências de vida, ações que começaram no passado e continuam agora, ou resultados de algo que aconteceu (sem dizer exatamente quando). Formado com "have/has" + particípio passado (verbo regular + "-ed", ou forma irregular).',
    examples: [
      { en: "I have read the whole Bible.", pt: "Eu já li a Bíblia toda." },
      { en: "She has lived here for ten years.", pt: "Ela mora aqui há dez anos." },
      { en: "They have never lost their faith.", pt: "Eles nunca perderam a fé." },
      { en: "Have you ever prayed for a stranger?", pt: "Você já orou por um estranho alguma vez?" },
    ],
  },
  {
    category: "Tempos verbais",
    title: 'Futuro: "will" e "going to"',
    explanation:
      'Há duas formas comuns de falar do futuro. "Will" + verbo no infinitivo é usado para decisões espontâneas, promessas e previsões. "Going to" + verbo no infinitivo é usado para planos já decididos ou algo que parece certo pelo que vemos agora.',
    examples: [
      { en: "I will pray for you.", pt: "Eu vou orar por você." },
      { en: "It will rain tomorrow.", pt: "Vai chover amanhã." },
      { en: "We are going to visit the church next week.", pt: "Nós vamos visitar a igreja na próxima semana." },
      { en: "They will build a new church.", pt: "Eles vão construir uma nova igreja." },
    ],
  },

  // --- Verbos modais ---
  {
    category: "Verbos modais",
    title: "Can / Could",
    explanation:
      '"Can" expressa capacidade ou permissão no presente ("consigo", "posso"). "Could" é o passado de "can" ou uma forma mais educada de pedir algo. Depois de can/could, o verbo principal fica sempre no infinitivo, sem "to".',
    examples: [
      { en: "I can forgive you.", pt: "Eu posso te perdoar." },
      { en: "She could sing beautifully as a child.", pt: "Ela conseguia cantar lindamente quando criança." },
      { en: "Can you help me, please?", pt: "Você pode me ajudar, por favor?" },
      { en: "We cannot live without hope.", pt: "Não conseguimos viver sem esperança." },
    ],
  },
  {
    category: "Verbos modais",
    title: "Must / Have to",
    explanation:
      '"Must" e "have to" expressam obrigação ("ter que", "dever"). "Must" costuma indicar uma obrigação que vem de quem fala; "have to" indica uma regra ou necessidade externa. Na negativa elas mudam de sentido: "must not" (proibido) e "don\'t have to" (não é necessário).',
    examples: [
      { en: "You must love your neighbor.", pt: "Você deve amar o seu próximo." },
      { en: "I have to go to church today.", pt: "Eu tenho que ir à igreja hoje." },
      { en: "You must not steal.", pt: "Você não deve roubar." },
      { en: "You don't have to be afraid.", pt: "Você não precisa ter medo." },
    ],
  },
  {
    category: "Verbos modais",
    title: "Should",
    explanation:
      '"Should" é usado para dar conselhos ou dizer o que é certo ou recomendado fazer ("deveria"). É mais suave que "must". Na negativa: should not / shouldn\'t.',
    examples: [
      { en: "You should read your Bible every day.", pt: "Você deveria ler sua Bíblia todos os dias." },
      { en: "We should forgive one another.", pt: "Nós deveríamos nos perdoar uns aos outros." },
      { en: "He shouldn't lie.", pt: "Ele não deveria mentir." },
    ],
  },
  {
    category: "Verbos modais",
    title: "May / Might",
    explanation:
      '"May" e "might" expressam possibilidade ("pode ser que", "talvez"). "May" também é usado para pedir permissão de forma educada. "Might" indica uma possibilidade um pouco menor ou mais incerta que "may".',
    examples: [
      { en: "It may rain later.", pt: "Pode ser que chova mais tarde." },
      { en: "May I ask you a question?", pt: "Posso te fazer uma pergunta?" },
      { en: "She might come to church tomorrow.", pt: "Talvez ela venha à igreja amanhã." },
    ],
  },

  // --- Frases, perguntas e conexões ---
  {
    category: "Frases, perguntas e conexões",
    title: "Negação (don't, doesn't, isn't...)",
    explanation:
      'Para negar uma frase, normalmente se usa "not" depois de um verbo auxiliar (do/does/did, is/are/was/were, have/has) ou modal (can, will, should...). No presente e passado simples, quando não há outro auxiliar, usa-se "don\'t/doesn\'t" ou "didn\'t" antes do verbo principal, que volta ao infinitivo sem "to".',
    examples: [
      { en: "I don't understand.", pt: "Eu não entendo." },
      { en: "She doesn't believe that.", pt: "Ela não acredita nisso." },
      { en: "They didn't listen.", pt: "Eles não escutaram." },
      { en: "This is not the way.", pt: "Este não é o caminho." },
    ],
  },
  {
    category: "Frases, perguntas e conexões",
    title: "Perguntas com Wh- (What, Who, Where, When, Why, How)",
    explanation:
      'As palavras interrogativas ficam no início da pergunta, seguidas de "do/does/did" (ou do verbo "to be") e depois o sujeito. What = o quê; Who = quem; Where = onde; When = quando; Why = por quê; How = como.',
    examples: [
      { en: "What is your name?", pt: "Qual é o seu nome?" },
      { en: "Who wrote this letter?", pt: "Quem escreveu esta carta?" },
      { en: "Where do you live?", pt: "Onde você mora?" },
      { en: "Why do you believe?", pt: "Por que você acredita?" },
    ],
  },
  {
    category: "Frases, perguntas e conexões",
    title: "Conjunções: and, but, or, because, so",
    explanation:
      'As conjunções ligam palavras ou frases. "And" (e) soma ideias; "but" (mas) contrasta; "or" (ou) apresenta uma escolha; "because" (porque) explica uma causa; "so" (então, por isso) indica uma consequência.',
    examples: [
      { en: "Faith and love go together.", pt: "Fé e amor andam juntos." },
      { en: "He was poor, but he was happy.", pt: "Ele era pobre, mas era feliz." },
      { en: "You can pray at home or at church.", pt: "Você pode orar em casa ou na igreja." },
      { en: "She sang because she was joyful.", pt: "Ela cantou porque estava alegre." },
      { en: "It was late, so they went home.", pt: "Estava tarde, então eles foram para casa." },
    ],
  },
  {
    category: "Frases, perguntas e conexões",
    title: "Pronomes relativos: who, which, that",
    explanation:
      'Os pronomes relativos introduzem uma oração que dá mais informação sobre um substantivo já mencionado. "Who" é usado para pessoas, "which" para coisas ou animais, e "that" pode substituir os dois em orações essenciais (que não podem ser removidas sem mudar o sentido da frase).',
    examples: [
      { en: "The man who healed the sick was Jesus.", pt: "O homem que curava os doentes era Jesus." },
      { en: "This is the letter which Paul wrote.", pt: "Esta é a carta que Paulo escreveu." },
      { en: "God is the one that never changes.", pt: "Deus é aquele que nunca muda." },
    ],
  },
  {
    category: "Frases, perguntas e conexões",
    title: "Primeiro condicional (if + presente, will)",
    explanation:
      'Usado para falar de uma condição real ou provável no futuro e sua consequência. A estrutura é "if" + verbo no presente simples, seguido de "will" + verbo no infinitivo (a ordem das duas partes pode ser invertida).',
    examples: [
      { en: "If you seek, you will find.", pt: "Se você buscar, vai encontrar." },
      { en: "If we love one another, God will be glorified.", pt: "Se nos amarmos uns aos outros, Deus será glorificado." },
      { en: "I will help you if you ask.", pt: "Eu vou te ajudar se você pedir." },
    ],
  },

  // --- Descrevendo o mundo ---
  {
    category: "Descrevendo o mundo",
    title: "Preposições de lugar e tempo: in, on, at",
    explanation:
      '"In" é usado para lugares maiores/fechados e para meses, anos e estações (in the city, in 2024). "On" é usado para superfícies, dias e datas (on the table, on Sunday). "At" é usado para pontos específicos e horários (at the door, at 6 o\'clock).',
    examples: [
      { en: "They met in Bethlehem.", pt: "Eles se encontraram em Belém." },
      { en: "The service starts on Sunday.", pt: "O culto começa no domingo." },
      { en: "We will meet at the church.", pt: "Nós vamos nos encontrar na igreja." },
      { en: "He arrived at noon.", pt: "Ele chegou ao meio-dia." },
    ],
  },
  {
    category: "Descrevendo o mundo",
    title: "Comparativo e superlativo",
    explanation:
      'Para adjetivos curtos, acrescente "-er" para o comparativo e "-est" para o superlativo (com "the" antes). Para adjetivos longos, use "more" (comparativo) e "the most" (superlativo) antes do adjetivo, sem mudar a palavra.',
    examples: [
      { en: "David was strong, but Samson was stronger.", pt: "Davi era forte, mas Sansão era mais forte." },
      { en: "Solomon was the wisest king.", pt: "Salomão foi o rei mais sábio." },
      { en: "Love is the most important thing.", pt: "O amor é a coisa mais importante." },
      { en: "Jerusalem was more beautiful than any other city.", pt: "Jerusalém era mais bela que qualquer outra cidade." },
    ],
  },
  {
    category: "Descrevendo o mundo",
    title: "Advérbios de frequência",
    explanation:
      'Os advérbios de frequência (always, usually, often, sometimes, rarely, never) dizem com que frequência algo acontece. Geralmente ficam antes do verbo principal, mas depois do verbo "to be".',
    examples: [
      { en: "She always prays before eating.", pt: "Ela sempre ora antes de comer." },
      { en: "We often read the Psalms together.", pt: "Nós frequentemente lemos os Salmos juntos." },
      { en: "He is never late for church.", pt: "Ele nunca está atrasado para a igreja." },
      { en: "I sometimes doubt, but I never give up.", pt: "Eu às vezes duvido, mas nunca desisto." },
    ],
  },
  {
    category: "Descrevendo o mundo",
    title: "Quantificadores: some, any, much, many, a lot of",
    explanation:
      '"Some" é usado em frases afirmativas (com substantivos contáveis ou incontáveis); "any" é usado em negativas e perguntas. "Many" é usado com substantivos contáveis, "much" com incontáveis, e "a lot of" funciona bem com os dois tipos.',
    examples: [
      { en: "There is some bread on the table.", pt: "Há um pouco de pão na mesa." },
      { en: "Do you have any questions?", pt: "Você tem alguma pergunta?" },
      { en: "Many people followed Jesus.", pt: "Muitas pessoas seguiam Jesus." },
      { en: "There isn't much time left.", pt: "Não sobrou muito tempo." },
      { en: "She has a lot of patience.", pt: "Ela tem muita paciência." },
    ],
  },

  // --- Tópicos um pouco mais avançados ---
  {
    category: "Tópicos um pouco mais avançados",
    title: "Voz passiva (Passive Voice)",
    explanation:
      'Na voz passiva, o foco está na ação ou em quem/o que a recebe, não em quem a pratica. É formada com "to be" (no tempo verbal adequado) + particípio passado do verbo principal. Quem pratica a ação pode ser mencionado com "by".',
    examples: [
      { en: "The Bible was written by many authors.", pt: "A Bíblia foi escrita por muitos autores." },
      { en: "The temple was built by Solomon.", pt: "O templo foi construído por Salomão." },
      { en: "These words are spoken in every language.", pt: "Estas palavras são faladas em todas as línguas." },
    ],
  },
  {
    category: "Tópicos um pouco mais avançados",
    title: "Verbo + gerúndio ou infinitivo",
    explanation:
      'Alguns verbos são sempre seguidos de outro verbo no gerúndio ("-ing"), como "enjoy" e "finish". Outros são seguidos do infinitivo com "to", como "want" e "decide". Verbos como "like" e "love" aceitam as duas formas.',
    examples: [
      { en: "I enjoy reading the Psalms.", pt: "Eu gosto de ler os Salmos." },
      { en: "She wants to serve God.", pt: "Ela quer servir a Deus." },
      { en: "They love singing hymns.", pt: "Eles adoram cantar hinos." },
    ],
  },
  {
    category: "Tópicos um pouco mais avançados",
    title: "Imperativo (ordens e pedidos)",
    explanation:
      'Usado para dar ordens, pedidos ou instruções. É formado com o verbo no infinitivo sem "to" e sem sujeito. Para negar, use "do not" ou "don\'t" antes do verbo.',
    examples: [
      { en: "Love your neighbor.", pt: "Ame o seu próximo." },
      { en: "Do not be afraid.", pt: "Não tenha medo." },
      { en: "Come and see.", pt: "Vem e vê." },
      { en: "Please, help us.", pt: "Por favor, nos ajude." },
    ],
  },
];

function renderGrammar() {
  grammarListEl.innerHTML = "";

  let lastCategory = null;
  GRAMMAR_TOPICS.forEach((topic) => {
    if (topic.category !== lastCategory) {
      lastCategory = topic.category;
      const sectionLabel = document.createElement("p");
      sectionLabel.className = "grammar-section-label";
      sectionLabel.textContent = topic.category;
      grammarListEl.appendChild(sectionLabel);
    }

    const item = document.createElement("div");
    item.className = "grammar-item";

    const header = document.createElement("button");
    header.type = "button";
    header.className = "grammar-item-header";
    header.setAttribute("aria-expanded", "false");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = topic.title;
    const chevron = document.createElement("span");
    chevron.className = "grammar-item-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "▾";
    header.append(titleSpan, chevron);

    const body = document.createElement("div");
    body.className = "grammar-item-body";
    body.hidden = true;

    const explanation = document.createElement("p");
    explanation.className = "grammar-explanation";
    explanation.textContent = topic.explanation;
    body.appendChild(explanation);

    const examplesList = document.createElement("ul");
    examplesList.className = "grammar-examples";
    for (const example of topic.examples) {
      const li = document.createElement("li");
      const enSpan = document.createElement("span");
      enSpan.className = "grammar-example-en";
      enSpan.textContent = example.en;
      const ptSpan = document.createElement("span");
      ptSpan.className = "grammar-example-pt";
      ptSpan.textContent = example.pt;
      li.append(enSpan, ptSpan);
      examplesList.appendChild(li);
    }
    body.appendChild(examplesList);

    header.addEventListener("click", () => {
      const willOpen = body.hidden;
      body.hidden = !willOpen;
      header.setAttribute("aria-expanded", String(willOpen));
      item.classList.toggle("is-open", willOpen);
    });

    item.append(header, body);
    grammarListEl.appendChild(item);
  });
}

// Usa o histórico (em vez de sempre voltar pra "reading") porque agora
// Gramática e Flashcards também são acessíveis direto da Início: assim o
// botão volta pra onde o usuário realmente veio, igual ao gesto nativo.
for (const btn of viewBackButtons) {
  btn.addEventListener("click", () => history.back());
}

// --- Início: versículo do dia, continuar leitura e sequência de dias ---
// Painel de abertura do app (prévia do visual pensado para a versão que vai
// para a Play Store). Tudo aqui roda só com o que já existe no navegador —
// sem servidor — inclusive a seção "Minha conta"/PRO, que por enquanto é só
// visual (mostra "em breve" ao tocar).

const LAST_READ_STORAGE_KEY = "ingles-biblia.last-read";
const READ_CHAPTERS_STORAGE_KEY = "ingles-biblia.read-chapters";
const STREAK_STORAGE_KEY = "ingles-biblia.streak";
const TOTAL_BIBLE_CHAPTERS = BOOKS.reduce((sum, book) => sum + book.chapters, 0);

// Referências de versículos bem conhecidos, usados como "Versículo do Dia"
// (um por dia, escolhido pelo dia do ano — muda todo dia, mas é o mesmo
// para todo mundo no mesmo dia, sem precisar de servidor).
const VERSE_OF_THE_DAY_REFS = [
  { slug: "genesis", chapter: 1, number: 1 },
  { slug: "genesis", chapter: 1, number: 27 },
  { slug: "exodus", chapter: 14, number: 14 },
  { slug: "deuteronomy", chapter: 31, number: 6 },
  { slug: "joshua", chapter: 1, number: 9 },
  { slug: "joshua", chapter: 24, number: 15 },
  { slug: "psalms", chapter: 19, number: 1 },
  { slug: "psalms", chapter: 23, number: 1 },
  { slug: "psalms", chapter: 27, number: 1 },
  { slug: "psalms", chapter: 34, number: 8 },
  { slug: "psalms", chapter: 37, number: 4 },
  { slug: "psalms", chapter: 46, number: 1 },
  { slug: "psalms", chapter: 91, number: 1 },
  { slug: "psalms", chapter: 100, number: 1 },
  { slug: "psalms", chapter: 118, number: 24 },
  { slug: "psalms", chapter: 121, number: 1 },
  { slug: "psalms", chapter: 139, number: 14 },
  { slug: "proverbs", chapter: 3, number: 5 },
  { slug: "proverbs", chapter: 3, number: 6 },
  { slug: "proverbs", chapter: 16, number: 3 },
  { slug: "proverbs", chapter: 18, number: 10 },
  { slug: "proverbs", chapter: 22, number: 6 },
  { slug: "ecclesiastes", chapter: 3, number: 1 },
  { slug: "isaiah", chapter: 40, number: 31 },
  { slug: "isaiah", chapter: 41, number: 10 },
  { slug: "isaiah", chapter: 53, number: 5 },
  { slug: "jeremiah", chapter: 29, number: 11 },
  { slug: "matthew", chapter: 5, number: 16 },
  { slug: "matthew", chapter: 6, number: 33 },
  { slug: "matthew", chapter: 11, number: 28 },
  { slug: "matthew", chapter: 28, number: 19 },
  { slug: "matthew", chapter: 28, number: 20 },
  { slug: "mark", chapter: 11, number: 24 },
  { slug: "luke", chapter: 1, number: 37 },
  { slug: "john", chapter: 3, number: 16 },
  { slug: "john", chapter: 8, number: 32 },
  { slug: "john", chapter: 14, number: 6 },
  { slug: "acts", chapter: 1, number: 8 },
  { slug: "romans", chapter: 3, number: 23 },
  { slug: "romans", chapter: 6, number: 23 },
  { slug: "romans", chapter: 8, number: 28 },
  { slug: "romans", chapter: 10, number: 9 },
  { slug: "romans", chapter: 12, number: 2 },
  { slug: "1-corinthians", chapter: 10, number: 13 },
  { slug: "1-corinthians", chapter: 13, number: 4 },
  { slug: "2-corinthians", chapter: 5, number: 17 },
  { slug: "galatians", chapter: 2, number: 20 },
  { slug: "galatians", chapter: 5, number: 22 },
  { slug: "ephesians", chapter: 2, number: 8 },
  { slug: "ephesians", chapter: 6, number: 10 },
  { slug: "philippians", chapter: 1, number: 6 },
  { slug: "philippians", chapter: 4, number: 6 },
  { slug: "philippians", chapter: 4, number: 7 },
  { slug: "philippians", chapter: 4, number: 13 },
  { slug: "colossians", chapter: 3, number: 2 },
  { slug: "colossians", chapter: 3, number: 23 },
  { slug: "1-thessalonians", chapter: 5, number: 16 },
  { slug: "1-thessalonians", chapter: 5, number: 18 },
  { slug: "2-timothy", chapter: 1, number: 7 },
  { slug: "titus", chapter: 3, number: 5 },
  { slug: "hebrews", chapter: 4, number: 16 },
  { slug: "hebrews", chapter: 11, number: 1 },
  { slug: "hebrews", chapter: 13, number: 5 },
  { slug: "hebrews", chapter: 13, number: 8 },
  { slug: "james", chapter: 1, number: 2 },
  { slug: "james", chapter: 1, number: 5 },
  { slug: "james", chapter: 4, number: 7 },
  { slug: "1-peter", chapter: 2, number: 9 },
  { slug: "1-peter", chapter: 5, number: 7 },
  { slug: "1-john", chapter: 1, number: 9 },
  { slug: "1-john", chapter: 4, number: 19 },
  { slug: "revelation", chapter: 3, number: 20 },
  { slug: "revelation", chapter: 21, number: 4 },
];

function loadLastRead() {
  try {
    const raw = localStorage.getItem(LAST_READ_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function saveLastRead(bookSlug, chapter) {
  try {
    localStorage.setItem(LAST_READ_STORAGE_KEY, JSON.stringify({ bookSlug, chapter }));
  } catch (err) {
    // Sem armazenamento disponível: só não lembra a posição na próxima visita.
  }
}

function loadReadChapters() {
  try {
    const raw = localStorage.getItem(READ_CHAPTERS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function markChapterRead(bookSlug, chapter) {
  const key = `${bookSlug}-${chapter}`;
  const list = loadReadChapters();
  if (list.includes(key)) return;
  list.push(key);
  try {
    localStorage.setItem(READ_CHAPTERS_STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    // Sem armazenamento disponível: só não conta esse capítulo no progresso.
  }
}

function getReadingProgressPercent() {
  const readCount = loadReadChapters().length;
  if (readCount === 0) return 0;
  // Arredondar para baixo até 0% depois de ler algo de verdade seria
  // desanimador (1189 capítulos ao todo — leva muitos capítulos lidos
  // para o primeiro 1% "de verdade" aparecer).
  return Math.max(1, Math.min(100, Math.round((readCount / TOTAL_BIBLE_CHAPTERS) * 100)));
}

// Conta dias seguidos com o app aberto (um "dia" muda à meia-noite UTC).
// Só soma quando o dia muda; abrir várias vezes no mesmo dia não infla a
// contagem, e pular um dia zera a sequência.
function updateStreak() {
  const todayKey = new Date().toISOString().slice(0, 10);
  let streak;
  try {
    streak = JSON.parse(localStorage.getItem(STREAK_STORAGE_KEY) || "null");
  } catch (err) {
    streak = null;
  }

  if (!streak) {
    streak = { count: 1, lastDate: todayKey };
  } else if (streak.lastDate !== todayKey) {
    const yesterdayKey = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    streak.count = streak.lastDate === yesterdayKey ? streak.count + 1 : 1;
    streak.lastDate = todayKey;
  }

  try {
    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(streak));
  } catch (err) {
    // Sem armazenamento disponível: sequência não é lembrada entre visitas.
  }
  return streak.count;
}

function getVerseOfDayRef() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start) / 86400000);
  return VERSE_OF_THE_DAY_REFS[dayOfYear % VERSE_OF_THE_DAY_REFS.length];
}

// Guarda o versículo do dia já carregado, para o botão de compartilhar e o
// de ouvir reaproveitarem sem buscar de novo.
let currentVerseOfDay = null;

async function renderVerseOfDay() {
  const ref = getVerseOfDayRef();
  const book = BOOKS.find((b) => b.slug === ref.slug);

  try {
    const response = await fetch(`data/${ref.slug}-${ref.chapter}.json`);
    if (!response.ok) throw new Error("not found");
    const data = await response.json();
    const verse = data.verses.find((v) => v.number === ref.number);
    if (!verse) throw new Error("verse not found");

    currentVerseOfDay = { verse, book, chapter: ref.chapter };
    homeVerseEnEl.textContent = `"${getEnglishText(verse)}"`;
    homeVerseRefEl.textContent = `${book.en} ${ref.chapter}:${ref.number} · ${EN_VERSIONS[currentEnVersion].label}`;
    homeVersePtEl.textContent = `"${verse.pt}"`;
  } catch (err) {
    currentVerseOfDay = null;
    homeVerseEnEl.textContent = "Não foi possível carregar o versículo agora.";
    homeVerseRefEl.textContent = "";
    homeVersePtEl.textContent = "";
  }
}

function updateProgressRing(percent) {
  const circumference = 144.5; // 2 * PI * 23 (raio do círculo no SVG)
  homeProgressRingEl.style.strokeDashoffset = String(circumference * (1 - percent / 100));
  homeProgressTextEl.textContent = `${percent}%`;
}

function renderContinueReadingCard() {
  const last = loadLastRead();
  const book = last ? BOOKS.find((b) => b.slug === last.bookSlug) : null;

  homeContinueRefEl.innerHTML = book
    ? `<b>${book.pt} ${last.chapter}</b> · ${EN_VERSIONS[currentEnVersion].label}`
    : `Comece por <b>${BOOKS[0].pt} 1</b>`;

  updateProgressRing(getReadingProgressPercent());
}

function renderHome() {
  const streakCount = updateStreak();
  homeStreakEl.textContent = `🔥 ${streakCount} dia${streakCount === 1 ? "" : "s"} seguido${streakCount === 1 ? "" : "s"}`;
  renderVerseOfDay();
  renderContinueReadingCard();
  renderLessonsCard();
  renderFlashcardsAndGrammarCards();
}

// Retorna para onde "Continuar leitura" (e a primeira visita à aba Leitura)
// deve levar: a última posição salva, ou Gênesis 1 se ainda não houver uma.
function getContinueReadingTarget() {
  const last = loadLastRead();
  const book = last ? BOOKS.find((b) => b.slug === last.bookSlug) : null;
  return { book: book || BOOKS[0], chapter: book ? last.chapter : DEFAULT_CHAPTER };
}

// Carrega a leitura na primeira vez que a aba é aberta nesta visita (se o
// usuário for direto para "Leitura" sem passar pelo Início).
function ensureReadingLoaded() {
  if (currentSource.chapter !== 0) return;
  const { book, chapter } = getContinueReadingTarget();
  setSelectedBook(book.slug);
  setSelectedChapter(chapter);
  loadChapter(book, chapter);
}

async function continueReading() {
  const { book, chapter } = getContinueReadingTarget();
  setSelectedBook(book.slug);
  setSelectedChapter(chapter);
  await loadChapter(book, chapter);
  setActiveView("reading");
}

homeContinueBtnEl.addEventListener("click", continueReading);

homeVerseShareBtnEl.addEventListener("click", () => {
  if (!currentVerseOfDay) return;
  openSharePopup(currentVerseOfDay.verse, currentVerseOfDay.book, currentVerseOfDay.chapter);
});

homeFabAudioEl.addEventListener("click", () => {
  if (!currentVerseOfDay) return;
  speakText(getEnglishText(currentVerseOfDay.verse), 0.85);
});

homeProCardEl.addEventListener("click", () => {
  showToast("PRO chegando em breve! Por enquanto, o app é gratuito e completo.");
});

for (const btn of homeSoonButtons) {
  btn.addEventListener("click", () => {
    showToast("Login em breve! Por enquanto, tudo já é salvo automaticamente neste navegador.");
  });
}

homeDarkModeBtnEl.addEventListener("click", () => {
  showToast("Modo escuro em breve!");
});

homeNotificationsBtnEl.addEventListener("click", () => {
  showToast("Notificações em breve!");
});

homeAvatarBtnEl.addEventListener("click", () => {
  showToast("Perfil em breve! Por enquanto, tudo já é salvo automaticamente neste navegador.");
});

// --- Lições: exercícios de tradução gerados a partir da própria Bíblia do
// app (versículos conhecidos + palavras do glossário/vocabulário salvo),
// sem depender de nenhuma IA — a correção é por comparação de texto. A
// lição do dia é sorteada de forma determinística pelo dia do ano, então
// todo mundo recebe a mesma lição num dia, e ela muda sozinha à meia-noite.

const LESSON_SENTENCE_COUNT = 6;
const LESSON_WORD_COUNT = 4;
const LESSON_TAP_DISTRACTOR_COUNT = 3;
const LESSONS_PROGRESS_STORAGE_KEY = "ingles-biblia.lessons-progress";
const LESSON_ARROW_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

// Gerador pseudoaleatório determinístico (mesma semente → mesma sequência),
// usado pra sortear a lição do dia de um jeito que dá o mesmo resultado
// pra todo mundo, sem precisar de servidor guardando nada.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(list, rng) {
  const result = list.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getLessonSeed() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  return now.getFullYear() * 1000 + dayOfYear;
}

function todayDateKey() {
  return new Date().toISOString().slice(0, 10);
}

// --- Correção das respostas por comparação de texto (sem IA/serviço externo) ---

function normalizeLessonText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  let prevRow = Array.from({ length: n + 1 }, (_, j) => j);
  let currRow = new Array(n + 1);

  for (let i = 1; i <= m; i++) {
    currRow[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      currRow[j] = Math.min(currRow[j - 1] + 1, prevRow[j] + 1, prevRow[j - 1] + cost);
    }
    [prevRow, currRow] = [currRow, prevRow];
  }
  return prevRow[n];
}

function similarityRatio(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshteinDistance(a, b) / maxLen;
}

function wordOverlapRatio(userText, correctText) {
  const userWords = new Set(userText.split(" ").filter(Boolean));
  const correctWords = correctText.split(" ").filter(Boolean);
  if (correctWords.length === 0) return 0;
  return correctWords.filter((word) => userWords.has(word)).length / correctWords.length;
}

// Não existe um serviço de correção por trás disso — é só comparação de
// texto. Por isso a resposta é aceita quando fica "bem próxima" do
// esperado, em vez de exigir bater exatamente com pontuação e acentos.
function isLessonAnswerCorrect(userAnswer, acceptedAnswers, isSentence) {
  const normalizedUser = normalizeLessonText(userAnswer);
  if (!normalizedUser) return false;

  return acceptedAnswers.some((accepted) => {
    const normalizedAccepted = normalizeLessonText(accepted);
    if (normalizedUser === normalizedAccepted) return true;
    if (isSentence) {
      return (
        wordOverlapRatio(normalizedUser, normalizedAccepted) >= 0.6 &&
        similarityRatio(normalizedUser, normalizedAccepted) >= 0.45
      );
    }
    return similarityRatio(normalizedUser, normalizedAccepted) >= 0.75;
  });
}

// --- Montagem da lição do dia ---

function buildLessonWordPool() {
  const pool = [];
  const seen = new Set();

  for (const entry of loadVocabulary()) {
    if (entry.translation && !seen.has(entry.word)) {
      pool.push({ word: entry.word, translations: [entry.translation] });
      seen.add(entry.word);
    }
  }

  for (const [word, translations] of Object.entries(ARCHAIC_EN_PT_GLOSSARY)) {
    if (!seen.has(word)) {
      pool.push({ word, translations: translations.split(",").map((t) => t.trim()) });
      seen.add(word);
    }
  }

  return pool;
}

async function buildTodaysLessonExercises() {
  const rng = mulberry32(getLessonSeed());
  const sentenceExercises = [];

  const sentenceRefs = seededShuffle(VERSE_OF_THE_DAY_REFS, rng).slice(0, LESSON_SENTENCE_COUNT);
  for (const ref of sentenceRefs) {
    try {
      const response = await fetch(`data/${ref.slug}-${ref.chapter}.json`);
      if (!response.ok) continue;
      const data = await response.json();
      const verse = data.verses.find((v) => v.number === ref.number);
      const book = BOOKS.find((b) => b.slug === ref.slug);
      if (!verse || !book) continue;

      const direction = rng() < 0.5 ? "en-to-pt" : "pt-to-en";
      const mode = rng() < 0.5 ? "type" : "tap";
      const enText = getEnglishText(verse);
      const answerText = direction === "en-to-pt" ? verse.pt : enText;
      sentenceExercises.push({
        type: "sentence",
        mode,
        direction,
        prompt: direction === "en-to-pt" ? enText : verse.pt,
        acceptedAnswers: direction === "en-to-pt" ? [verse.pt] : [enText],
        answerTokens: answerText.split(/\s+/).filter(Boolean),
        reference: `${book.pt} ${ref.chapter}:${ref.number}`,
      });
    } catch (err) {
      // Essa referência falhou (ex.: sem conexão); segue com as demais.
    }
  }

  // Monta o banco de palavras dos exercícios "toque" usando as próprias
  // frases sorteadas hoje como fonte: cada exercício usa palavras de
  // OUTRAS frases da lição como distratoras, sem depender de lista externa.
  const allTokens = [];
  const seenLower = new Set();
  for (const ex of sentenceExercises) {
    for (const token of ex.answerTokens) {
      const key = token.toLowerCase();
      if (!seenLower.has(key)) {
        seenLower.add(key);
        allTokens.push(token);
      }
    }
  }

  for (const ex of sentenceExercises) {
    if (ex.mode !== "tap") continue;
    const ownLower = new Set(ex.answerTokens.map((t) => t.toLowerCase()));
    const distractorPool = allTokens.filter((t) => !ownLower.has(t.toLowerCase()));
    const distractors = seededShuffle(distractorPool, rng).slice(0, LESSON_TAP_DISTRACTOR_COUNT);
    const bankTokens = seededShuffle([...ex.answerTokens, ...distractors], rng);
    ex.bank = bankTokens.map((text, i) => ({ id: i, text }));
  }

  const exercises = sentenceExercises.slice();

  const wordPool = seededShuffle(buildLessonWordPool(), rng).slice(0, LESSON_WORD_COUNT);
  for (const entry of wordPool) {
    const direction = rng() < 0.5 ? "en-to-pt" : "pt-to-en";
    exercises.push({
      type: "word",
      mode: "type",
      direction,
      prompt: direction === "en-to-pt" ? entry.word : entry.translations[0],
      acceptedAnswers: direction === "en-to-pt" ? entry.translations : [entry.word],
      reference: "",
    });
  }

  return seededShuffle(exercises, rng);
}

// --- Progresso do dia (localStorage) ---

function loadLessonsProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(LESSONS_PROGRESS_STORAGE_KEY) || "null");
    if (raw && raw.date === todayDateKey()) return raw;
  } catch (err) {
    // segue com progresso zerado
  }
  return { date: todayDateKey(), completed: 0, correct: 0, total: 0 };
}

function saveLessonsProgress(progress) {
  try {
    localStorage.setItem(LESSONS_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    // Sem armazenamento disponível: progresso não persiste entre visitas.
  }
}

function renderLessonsCard() {
  const progress = loadLessonsProgress();
  const total = progress.total || LESSON_SENTENCE_COUNT + LESSON_WORD_COUNT;
  const percent = total > 0 ? Math.round((progress.completed / total) * 100) : 0;

  const circumference = 144.5;
  homeLessonsRingEl.style.strokeDashoffset = String(circumference * (1 - percent / 100));
  homeLessonsProgressTextEl.textContent = `${percent}%`;

  if (progress.completed === 0) {
    homeLessonsStatusEl.textContent = `${total} exercícios de tradução`;
    homeLessonsBtnEl.innerHTML = `COMEÇAR LIÇÃO ${LESSON_ARROW_ICON}`;
  } else if (progress.completed < total) {
    homeLessonsStatusEl.textContent = `${progress.completed} de ${total} exercícios feitos`;
    homeLessonsBtnEl.innerHTML = `CONTINUAR LIÇÃO ${LESSON_ARROW_ICON}`;
  } else {
    homeLessonsStatusEl.textContent = `Lição de hoje concluída — ${progress.correct}/${total} certas`;
    homeLessonsBtnEl.innerHTML = `FAZER DE NOVO ${LESSON_ARROW_ICON}`;
  }
}

// Flashcards e Gramática já existiam (acessíveis pelo menu hambúrguer); só
// mostra na Início quantas palavras/versículos/tópicos dão pra revisar.
function renderFlashcardsAndGrammarCards() {
  const vocabCount = loadVocabulary().length;
  const favoritesCount = Object.keys(loadFavorites()).length;
  homeFlashcardsStatusEl.textContent = `${vocabCount} palavra${vocabCount === 1 ? "" : "s"} salva${vocabCount === 1 ? "" : "s"} · ${favoritesCount} versículo${favoritesCount === 1 ? "" : "s"} favorito${favoritesCount === 1 ? "" : "s"}`;
  homeGrammarStatusEl.textContent = `${GRAMMAR_TOPICS.length} tópicos disponíveis`;
}

// --- Sessão de exercícios (tela cheia) ---

let currentLessonExercises = [];
let currentLessonIndex = 0;
let currentLessonProgress = null;
let lessonAnswered = false;
let currentTapBank = [];
let currentTapAnswerTiles = [];

// Redesenha as fichas do exercício "toque": as que ainda não foram usadas
// no banco embaixo, as já colocadas na área de resposta em cima. Cada
// ficha guarda o próprio id (não o texto) pra permitir palavras repetidas.
function renderTapTiles() {
  const placedIds = new Set(currentTapAnswerTiles.map((tile) => tile.id));

  lessonTapBankEl.innerHTML = "";
  for (const tile of currentTapBank) {
    if (placedIds.has(tile.id)) continue;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lesson-tap-tile";
    btn.textContent = tile.text;
    btn.dataset.tileId = String(tile.id);
    btn.disabled = lessonAnswered;
    lessonTapBankEl.appendChild(btn);
  }

  lessonTapAnswerEl.innerHTML = "";
  for (const tile of currentTapAnswerTiles) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lesson-tap-tile is-placed";
    btn.textContent = tile.text;
    btn.dataset.tileId = String(tile.id);
    btn.disabled = lessonAnswered;
    lessonTapAnswerEl.appendChild(btn);
  }

  if (currentLessonExercises[currentLessonIndex]?.mode === "tap" && !lessonAnswered) {
    lessonCheckBtnEl.disabled = currentTapAnswerTiles.length === 0;
  }
}

lessonTapBankEl.addEventListener("click", (event) => {
  if (lessonAnswered) return;
  const btn = event.target.closest(".lesson-tap-tile");
  if (!btn) return;
  const tileId = Number(btn.dataset.tileId);
  const tile = currentTapBank.find((t) => t.id === tileId);
  if (!tile) return;
  currentTapAnswerTiles.push(tile);
  renderTapTiles();
});

lessonTapAnswerEl.addEventListener("click", (event) => {
  if (lessonAnswered) return;
  const btn = event.target.closest(".lesson-tap-tile");
  if (!btn) return;
  const tileId = Number(btn.dataset.tileId);
  currentTapAnswerTiles = currentTapAnswerTiles.filter((tile) => tile.id !== tileId);
  renderTapTiles();
});

lessonSpeakBtnEl.addEventListener("click", () => {
  const exercise = currentLessonExercises[currentLessonIndex];
  if (exercise) speakText(exercise.prompt, 0.85);
});

function renderLessonExercise() {
  lessonAnswered = false;
  const exercise = currentLessonExercises[currentLessonIndex];
  const isSentence = exercise.type === "sentence";
  const isTap = exercise.mode === "tap";
  const targetLang = exercise.direction === "en-to-pt" ? "português" : "inglês";

  lessonsProgressFillEl.style.width = `${Math.round((currentLessonIndex / currentLessonExercises.length) * 100)}%`;
  lessonInstructionEl.textContent = isSentence
    ? `Traduza a frase para o ${targetLang}:`
    : `Traduza a palavra para o ${targetLang}:`;
  lessonPromptEl.textContent = exercise.prompt;
  lessonRefEl.textContent = exercise.reference;
  lessonSpeakBtnEl.hidden = exercise.direction !== "en-to-pt";

  lessonInputEl.value = "";
  lessonInputEl.disabled = false;
  lessonInputEl.hidden = isTap;

  lessonTapAreaEl.hidden = !isTap;
  currentTapBank = isTap ? exercise.bank : [];
  currentTapAnswerTiles = [];
  if (isTap) renderTapTiles();

  lessonFeedbackEl.hidden = true;
  lessonFeedbackEl.classList.remove("is-correct", "is-incorrect");

  lessonCheckBtnEl.hidden = false;
  lessonCheckBtnEl.disabled = isTap;
  lessonContinueBtnEl.hidden = true;

  lessonsExerciseEl.hidden = false;
  lessonsCompleteEl.hidden = true;
  lessonsActionsEl.hidden = false;

  if (!isTap) lessonInputEl.focus();
}

function showLessonsComplete() {
  lessonsProgressFillEl.style.width = "100%";
  lessonsExerciseEl.hidden = true;
  lessonsCompleteEl.hidden = false;
  lessonsActionsEl.hidden = true;
  const progress = currentLessonProgress || loadLessonsProgress();
  lessonsCompleteScoreEl.textContent = `Você acertou ${progress.correct} de ${progress.total} exercícios hoje.`;
}

function checkLessonAnswer() {
  if (lessonAnswered) return;
  const exercise = currentLessonExercises[currentLessonIndex];
  const isTap = exercise.mode === "tap";

  const userAnswer = isTap
    ? currentTapAnswerTiles.map((tile) => tile.text).join(" ")
    : lessonInputEl.value.trim();
  if (!userAnswer) {
    if (!isTap) lessonInputEl.focus();
    return;
  }

  const correct = isLessonAnswerCorrect(userAnswer, exercise.acceptedAnswers, exercise.type === "sentence");

  lessonAnswered = true;
  lessonInputEl.disabled = true;
  if (isTap) renderTapTiles();
  lessonFeedbackEl.hidden = false;
  lessonFeedbackEl.classList.toggle("is-correct", correct);
  lessonFeedbackEl.classList.toggle("is-incorrect", !correct);
  lessonFeedbackTitleEl.textContent = correct ? "Certinho!" : "Quase lá";
  lessonFeedbackAnswerEl.textContent = `Resposta: ${exercise.acceptedAnswers[0]}`;

  lessonCheckBtnEl.hidden = true;
  lessonContinueBtnEl.hidden = false;
  lessonContinueBtnEl.focus();

  currentLessonProgress.completed += 1;
  if (correct) currentLessonProgress.correct += 1;
  saveLessonsProgress(currentLessonProgress);
  renderLessonsCard();
}

function advanceLesson() {
  currentLessonIndex += 1;
  if (currentLessonIndex >= currentLessonExercises.length) {
    showLessonsComplete();
  } else {
    renderLessonExercise();
  }
}

function closeLessonsOverlay() {
  lessonsOverlayEl.hidden = true;
}

// Fecha a lição a partir de um toque no × (ou no botão de fim de lição), não
// do botão/gesto nativo de voltar. Consome a entrada de histórico que a
// abertura empilhou (em vez de deixá-la parada ali), pra não sobrar um
// "voltar" extra sem efeito depois de fechar manualmente.
function requestCloseLessons() {
  if (history.state && history.state.view === "lessons") {
    history.back();
  } else {
    closeLessonsOverlay();
  }
}

async function openLessonsOverlay() {
  pushHistoryStateForLessons();

  const progress = loadLessonsProgress();
  if (progress.total > 0 && progress.completed >= progress.total) {
    saveLessonsProgress({ date: todayDateKey(), completed: 0, correct: 0, total: 0 });
  }

  lessonsOverlayEl.hidden = false;
  lessonsExerciseEl.hidden = false;
  lessonsCompleteEl.hidden = true;
  lessonsActionsEl.hidden = true;
  lessonInstructionEl.textContent = "";
  lessonPromptEl.textContent = "Preparando a lição…";
  lessonRefEl.textContent = "";
  lessonsProgressFillEl.style.width = "0%";

  currentLessonExercises = await buildTodaysLessonExercises();

  if (currentLessonExercises.length === 0) {
    lessonPromptEl.textContent = "Não foi possível preparar a lição agora. Verifique sua conexão e tente de novo.";
    return;
  }

  const freshProgress = loadLessonsProgress();
  currentLessonProgress = { ...freshProgress, total: currentLessonExercises.length };
  if (freshProgress.total !== currentLessonExercises.length) saveLessonsProgress(currentLessonProgress);

  if (currentLessonProgress.completed >= currentLessonExercises.length) {
    showLessonsComplete();
  } else {
    currentLessonIndex = currentLessonProgress.completed;
    renderLessonExercise();
  }
}

homeLessonsBtnEl.addEventListener("click", openLessonsOverlay);
homeFlashcardsBtnEl.addEventListener("click", () => setActiveView("flashcards"));
homeGrammarBtnEl.addEventListener("click", () => setActiveView("grammar"));
lessonsCloseBtnEl.addEventListener("click", requestCloseLessons);
lessonsCompleteCloseBtnEl.addEventListener("click", requestCloseLessons);
lessonCheckBtnEl.addEventListener("click", checkLessonAnswer);
lessonContinueBtnEl.addEventListener("click", advanceLesson);

lessonInputEl.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey) return;
  event.preventDefault();
  if (lessonAnswered) advanceLesson();
  else checkLessonAnswer();
});

// --- Botão/gesto "voltar" nativo do celular volta para o Início ---
//
// Sem isso, como o app troca de tela só escondendo/mostrando elementos (sem
// navegar de verdade), o histórico do navegador fica com uma única entrada:
// apertar voltar (ou arrastar da borda, no gesto do Android) sai do site
// direto. Em vez disso, ao sair do Início empilhamos uma entrada extra no
// histórico; apertar voltar consome essa entrada e cai num "popstate", que
// interceptamos para voltar ao Início em vez de deixar o navegador navegar
// para fora do app. Só uma "profundidade" de histórico é usada de propósito:
// não importa quantas abas o usuário troque, voltar sempre leva direto ao
// Início — e voltar de novo a partir do Início aí sim sai do site.
let suppressHistoryPush = false;

function pushHistoryStateForView(view) {
  if (suppressHistoryPush) return;
  if (view === "home") {
    history.replaceState({ view: "home" }, "");
  } else if (!history.state || history.state.view === "home") {
    history.pushState({ view }, "");
  } else {
    history.replaceState({ view }, "");
  }
}

// A lição (tela cheia) não passa por setActiveView, mas também precisa de
// uma entrada própria: sem isso, apertar voltar com a lição aberta cairia
// no popstate abaixo sem fechá-la (a tela por trás mudaria escondida atrás
// da lição, que continuaria cobrindo tudo).
function pushHistoryStateForLessons() {
  if (suppressHistoryPush) return;
  if (!history.state || history.state.view === "home") {
    history.pushState({ view: "lessons" }, "");
  } else {
    history.replaceState({ view: "lessons" }, "");
  }
}

window.addEventListener("popstate", () => {
  suppressHistoryPush = true;
  if (!lessonsOverlayEl.hidden) {
    closeLessonsOverlay();
  } else {
    setActiveView("home");
  }
  suppressHistoryPush = false;
});

function setActiveView(view) {
  pushHistoryStateForView(view);

  homeHeaderEl.hidden = view !== "home";
  // A gramática tem seu próprio botão "Voltar" e não usa nada do cabeçalho
  // de leitura (abas, seletor de livro/capítulo, versão do inglês), então
  // esse cabeçalho fica escondido ali — evita poluição visual sem função.
  appHeaderEl.hidden = view === "home" || view === "grammar";
  homeViewEl.hidden = view !== "home";
  readingContainerEl.hidden = view !== "reading";
  vocabularyViewEl.hidden = view !== "vocabulary";
  favoritesViewEl.hidden = view !== "favorites";
  notesViewEl.hidden = view !== "notes";
  grammarViewEl.hidden = view !== "grammar";
  flashcardsViewEl.hidden = view !== "flashcards";
  homeFabAudioEl.hidden = view !== "home";

  for (const btn of viewTabButtons) {
    btn.setAttribute("aria-pressed", String(btn.dataset.view === view));
  }
  for (const item of menuDropdownItems) {
    item.setAttribute("aria-pressed", String(item.dataset.menuView === view));
  }

  if (view === "home") renderHome();
  if (view === "reading") ensureReadingLoaded();
  if (view === "vocabulary") renderVocabularyList();
  if (view === "favorites") renderFavoritesList();
  if (view === "notes") renderNotesList();
  if (view === "flashcards") renderFlashcards();
  closeActivePopup();
}

for (const btn of viewTabButtons) {
  btn.addEventListener("click", () => setActiveView(btn.dataset.view));
}

// --- Menu "hambúrguer" (Gramática / Flashcards) ---

function toggleMenu(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : menuDropdownEl.hidden;
  menuDropdownEl.hidden = !shouldOpen;
  menuToggleEl.setAttribute("aria-expanded", String(shouldOpen));
}

menuToggleEl.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

backToHomeBtnEl.addEventListener("click", () => setActiveView("home"));

document.addEventListener("click", (event) => {
  if (!menuDropdownEl.hidden && !event.target.closest(".menu-wrap")) toggleMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menuDropdownEl.hidden) toggleMenu(false);
});

for (const item of menuDropdownItems) {
  item.addEventListener("click", () => {
    toggleMenu(false);
    setActiveView(item.dataset.menuView);
  });
}

vocabularyFilterEl.addEventListener("input", renderVocabularyList);

goToSampleBtn.addEventListener("click", () => {
  setSelectedBook(DEFAULT_BOOK_SLUG);
  setSelectedChapter(DEFAULT_CHAPTER);
  loadChapter(getSelectedBook(), DEFAULT_CHAPTER);
});

function saveEnVersion(version) {
  try {
    localStorage.setItem(EN_VERSION_STORAGE_KEY, version);
  } catch (err) {
    // Preferência não persistida (ex.: armazenamento indisponível): segue mesmo assim.
  }
}

function applyEnVersionUI() {
  versionBadgeEnEl.textContent = EN_VERSIONS[currentEnVersion].label;
  for (const btn of enVersionButtons) {
    btn.setAttribute("aria-pressed", String(btn.dataset.enVersion === currentEnVersion));
  }
}

function setEnVersion(version) {
  if (!EN_VERSIONS[version] || version === currentEnVersion) return;
  currentEnVersion = version;
  saveEnVersion(version);
  applyEnVersionUI();
  if (currentSource.chapter !== 0) loadChapter(getSelectedBook(), selectedChapter);
  if (!homeViewEl.hidden) renderVerseOfDay();
}

for (const btn of enVersionButtons) {
  btn.addEventListener("click", () => setEnVersion(btn.dataset.enVersion));
}

applyEnVersionUI();
setSelectedBook(DEFAULT_BOOK_SLUG);
setSelectedChapter(DEFAULT_CHAPTER);
renderVocabularyBadge();
renderFavoritesBadge();
renderNotesBadge();
renderGrammar();
setActiveView("home");
