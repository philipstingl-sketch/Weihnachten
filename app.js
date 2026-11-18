const RELATIONSHIP_START = '2026-01-26T21:49:00';

// Persönliche Inhalte: Texte, Daten, Gutscheine, Spielwerte und Briefe hier anpassen.
const WRAPPED_DATA = {
  startDate: RELATIONSHIP_START,
  audioPath: 'assets/audio/wrapped-song.mp3',
  polaroidHint: 'Dreh jedes Bild um. Danach kommen eure Erinnerungen als Herz zusammen.',
  polaroidFormingHint: 'Und all diese kleinen Momente gehören zusammen …',
  polaroidHeartHint: 'Drei Erinnerungen. Ein Herz. Tippe ein Foto an, um es noch einmal umzudrehen.',
  dateCaptionPrefix: 'Erinnerung',
  dateMissing: 'Datum fehlt',
  yearHeading: 'Monat für Monat <em>wir zwei.</em>',
  yearDescription: 'Ein kleiner Rückblick auf die Monate, die ihr mit Fotos im Album festgehalten habt. Tippe einen Monat an, um die Bilder zu öffnen.',
  yearEmpty: 'Sobald eure Fotos ein Datum haben, erscheinen eure gemeinsamen Monate hier.',
  loveNotesHeading: 'Kleine Dinge, <em>die ich an dir liebe.</em>',
  loveNotesDescription: 'Tippe die Karten an und entdecke, was ich dir sagen möchte.',
  loveNotes: [
    'Ich liebe die kleinen Momente, die nur uns gehören.',
    'Ich freue mich auf all die Erinnerungen, die noch vor uns liegen.',
    'Bei dir kann ich einfach ich sein.',
    'Du machst mein Leben schöner, einfach weil es dich gibt.'
  ],
  placeHeading: 'Ein Ort, <em>zu dem wir zurückwollen.</em>',
  placeDescription: 'Manche Orte sind besonders, weil wir sie zusammen erlebt haben.',
  placeName: 'Grömitz',
  placeCaption: 'Hier wartet noch ein gemeinsames Abenteuer auf uns.',
  slides: [
    { type: 'counter', eyebrow: 'UNSER JAHR IN ZAHLEN', title: 'Seitdem ist jeder Tag <em>schöner.</em>', description: 'Seit unserem gemeinsamen Start sammeln wir kleine Momente, die sich ganz groß anfühlen.', caption: 'Und das ist erst der Anfang.' },
    { type: 'first-photo', eyebrow: 'DER ANFANG VON UNS', title: 'Unser erstes Bild <em>zusammen.</em>', description: 'Ein Foto, ein Augenblick – und der Anfang von so vielen Erinnerungen.', photo: { path: 'assets/photos/first-photo.jpg', albumPhotoKey: 'assets/photos/album/icloud-fotos-2/icloud2-35bd39b7-52ab-49fc-8467-ab17bed1d11c.jpg', alt: 'Unser erstes gemeinsames Bild', label: 'Unser erstes Bild', caption: 'Der Anfang von uns' } },
    { type: 'moments', eyebrow: 'UNSERE LIEBLINGSBILDER', title: 'Kleine Momente,<br /><em>ganz nah bei uns.</em>', description: 'Dreh die Fotos um und entdecke die Erinnerungen auf der Rückseite.', photos: [
      { path: 'assets/photos/my-favorite.jpg', alt: 'Dein Lieblingsbild von euch', label: 'Mein Lieblingsbild', caption: 'Ein Moment, den ich liebe' },
      { path: 'assets/photos/your-favorite.jpg', albumPhotoKey: 'assets/photos/album/icloud-fotos-2/icloud2-64e22e5c-b1de-4a78-b959-09093de68245.jpg', alt: 'Ihr Lieblingsbild von euch', label: 'Dein Lieblingsbild', caption: 'Dein ganz besonderer Moment' },
      { path: 'assets/photos/return-place.jpg', albumPhotoKey: 'assets/photos/album/iCloud Fotos/IMG_7085.PNG', alt: 'Ein Ort, zu dem ihr zurückmöchtet', label: 'Hier möchten wir zurück', caption: 'Unser nächstes kleines Abenteuer' }
    ] },
    { type: 'year', eyebrow: 'MONAT FÜR MONAT', title: 'Unser Jahr in <em>Bildern.</em>', description: 'Die Fotos aus eurem Album ordnen sich nach Monaten. Tippe einen Monat an, um die Bilder zu öffnen.' },
    { type: 'stats', eyebrow: 'WIR ZWEI, GANZ IN ZAHLEN', title: 'Zusammen sind wir <em>ziemlich toll.</em>', description: 'Ein paar völlig wissenschaftliche Fakten über uns.', stats: [{ icon: 'messages-square', value: 'Unzählige', label: 'Sprachnachrichten' }, { icon: 'sun', value: '100%', label: 'gute Laune mit dir' }, { icon: 'laugh', value: 'Unendlich', label: 'Insider-Witze' }, { icon: 'heart', value: 'Immer mehr', label: 'Gründe, dich zu lieben' }] },
    { type: 'love-notes', eyebrow: 'NUR FÜR DICH', title: 'Kleine Dinge, <em>die ich an dir liebe.</em>', description: 'Tippe jede Karte an und entdecke eine kleine Nachricht.' },
    { type: 'place', eyebrow: 'EIN ORT FÜR IMMER', title: 'Hier möchten wir <em>wieder hin.</em>', description: 'Ein Ort, der noch auf ein gemeinsames Abenteuer wartet.', photo: 'assets/photos/return-place.jpg', albumPhotoKey: 'assets/photos/album/iCloud Fotos/IMG_7085.PNG' },
    { type: 'soundtrack', eyebrow: 'UNSER SOUNDTRACK', title: 'Klingt nach <em>uns.</em>', description: 'Für den Song, bei dem du sofort an uns denken sollst.', songTitle: 'Unser Lied', artist: 'Dein Lieblingsmensch', coverLabel: '♪', playerLabel: 'Ein Song für uns zwei' },
    { type: 'finale', eyebrow: 'FROHE WEIHNACHTEN, MEIN HERZ', title: 'Mein schönstes Geschenk <em>bist du.</em>', message: 'Danke für jedes Lachen, jede Umarmung und all die kleinen Augenblicke. Ich freue mich auf alles, was wir noch zusammen erleben. Frohe Weihnachten, ich hab dich lieb.', buttonLabel: 'Überraschung starten' }
  ]
};

const DATES_DATA = {
  webhookUrl: '', // Optional: URL für einen eigenen Gutschein-Webhook eintragen.
  sectionTitle: 'Ein Date? <em>Immer.</em>',
  sectionDescription: 'Dreh unser Glücksrad oder rubbel dir gemeinsame Zeit frei.',
  wheelHeading: 'UNSER DATE-GLÜCKSRAD',
  wheelPrompt: 'Was machen wir als Nächstes?',
  wheelSpinning: 'Das Glücksrad dreht sich …',
  wheelResultPrefix: 'Unser Date:',
  spinButtonLabel: 'Drehen',
  couponHeading: 'KLEINE GUTSCHEINE',
  couponSubheading: 'Jeden Tag warten neue kleine Überraschungen auf dich.',
  dailyCouponCount: 6,
  couponCardLabel: 'EIN GUTSCHEIN',
  scratchHint: 'MIT DEM FINGER FREIRUBBELN',
  couponRevealMessage: 'Gutschein freigerubbelt! Du kannst ihn jetzt einlösen.',
  couponRedeemLabel: 'Jetzt einlösen',
  couponRedeemedLabel: 'Schon eingelöst ✓',
  couponRedeemedMessage: 'wurde eingelöst. Viel Freude!',
  dateModalEyebrow: 'UNSER NÄCHSTES DATE',
  dateModalCopy: 'Ich freu mich auf unsere Zeit zusammen.',
  dateModalConfirm: 'Abgemacht',
  wheelDates: [
    'Kinoabend', 'Zusammen kochen', 'Spaziergang & Eis', 'Spieleabend',
    'Kleiner Ausflug', 'Massagetime', 'Picknick zu zweit', 'Frühstück im Bett'
  ],
  coupons: [
    { id: 'wish-meal', icon: '🍝', title: '1x Wunsch-Essen', detail: 'Du suchst aus, ich koche.' },
    { id: 'massage', icon: '🕯️', title: '1x Massage', detail: 'Entspannung ganz nach deinem Wunsch.' },
    { id: 'movie', icon: '🍿', title: '1x Kino nach Wahl', detail: 'Film, Snacks und dein Lieblingsplatz.' },
    { id: 'breakfast', icon: '🥐', title: 'Frühstück im Bett', detail: 'Mit Kaffee, etwas Leckerem und ganz viel Zeit.' },
    { id: 'game-night', icon: '🎲', title: 'Spieleabend nach Wahl', detail: 'Du entscheidest, was wir spielen.' },
    { id: 'ice-cream', icon: '🍦', title: 'Spaziergang & Eis', detail: 'Eine Runde frische Luft mit deinem Lieblingseis.' },
    { id: 'picnic', icon: '🧺', title: 'Picknick zu zweit', detail: 'Ich packe etwas Leckeres für uns ein.' },
    { id: 'coffee', icon: '☕', title: 'Kaffee-Date', detail: 'Kaffee, Kuchen und ein schöner Ort.' },
    { id: 'cuddle', icon: '🧸', title: 'Extra-Kuschelzeit', detail: 'Ein gemütlicher Abend nur für uns.' },
    { id: 'choose-date', icon: '💌', title: 'Du bestimmst unser Date', detail: 'Dein Wunsch wird unser nächster Plan.' },
    { id: 'dessert', icon: '🍰', title: 'Dein Lieblingsdessert', detail: 'Süßer Nachtisch, von mir spendiert.' },
    { id: 'day-trip', icon: '🚗', title: 'Kleiner Ausflug', detail: 'Wir suchen uns zusammen ein Ziel aus.' },
    { id: 'phone-free', icon: '🕯️', title: 'Ein Abend nur für uns', detail: 'Handys weg und Zeit füreinander.' },
    { id: 'movie-at-home', icon: '🎬', title: 'Filmabend zuhause', detail: 'Du wählst Film und Snacks.' },
    { id: 'lieblingssong', icon: '🎵', title: 'Wunsch-Song-Date', detail: 'Deine Musik, unser gemütlicher Abend.' }
  ],
  dailyStateStorageKey: 'fuer-dich-daily-coupons'
};

// Wiederkehrende Tage: Monat und Tag lassen sich hier einfach ändern.
const COUNTDOWN_DATA = {
  sectionTitle: 'Noch ein kleines Stück bis zu <em>unserem Moment.</em>',
  events: [
    { id: 'anniversary', title: 'Unser Jahrestag', month: 1, day: 26, hour: 21, minute: 49, icon: 'heart', note: 'Seit dem 26. Januar 2026 um 21:49 Uhr.' },
    { id: 'new-year', title: 'Silvester', month: 12, day: 31, hour: 0, minute: 0, icon: 'sparkles', note: 'Ein neues Jahr mit dir wartet.' },
    { id: 'valentine', title: 'Valentinstag', month: 2, day: 14, hour: 0, minute: 0, icon: 'heart-handshake', note: 'Ein Tag extra für uns.' }
  ],
  relationshipStartTitle: 'Hier begann unser Wir',
  relationshipStartNote: '26. Januar 2026 · 21:49 Uhr'
};

const GAME_DATA = {
  sectionTitle: 'Unser kleines <em>Foto-Memory.</em>',
  sectionDescription: 'Finde die gleichen Erinnerungsbilder. Wenn du magst, kannst du direkt noch einmal spielen.',
  pairsPerGame: 8,
  progressLabel: 'GEFUNDENE PAARE',
  initialStatus: 'Dreh zwei Karten um und finde die passenden Bilder.',
  moveLabel: 'Versuche',
  cardBackLabel: 'Verdeckte Erinnerung',
  winnerTitle: 'Du hast mein Herz erobert! ❤️',
  winnerDescription: 'Alle Erinnerungen gefunden – und ich würde jede davon wieder mit dir erleben.',
  bonusMessage: 'Dein Bonus: Such dir heute eine extra lange Kuscheleinheit aus. ❤️',
  restartButton: 'Neu mischen',
  playAgainButton: 'Nochmal spielen',
  photos: [
    { id: 'memory-1', src: 'assets/photos/album/browser-ready/IMG_6075.jpg', alt: 'Eine gemeinsame Erinnerung' },
    { id: 'memory-2', src: 'assets/photos/album/browser-ready/IMG_6076.jpg', alt: 'Ein schöner Moment zusammen' },
    { id: 'memory-3', src: 'assets/photos/album/browser-ready/IMG_6785.jpg', alt: 'Ein gemeinsamer Ausflug' },
    { id: 'memory-4', src: 'assets/photos/album/browser-ready/IMG_6896.jpg', alt: 'Ein Moment von uns' },
    { id: 'memory-5', src: 'assets/photos/album/browser-ready/IMG_6897.jpg', alt: 'Ein gemeinsames Foto' },
    { id: 'memory-6', src: 'assets/photos/album/browser-ready/IMG_6898.jpg', alt: 'Eine Erinnerung mit dir' },
    { id: 'memory-7', src: 'assets/photos/album/browser-ready/IMG_6899.jpg', alt: 'Ein besonderer Augenblick' },
    { id: 'memory-8', src: 'assets/photos/album/browser-ready/IMG_6904.jpg', alt: 'Ein Moment, den ich gern erinnere' }
  ]
};

const ALBUM_SONG_DATA = {
  audioPath: 'assets/audio/im-naechsten-leben.m4a',
  startOnAlbumOpen: true
};

const TREASURE_DATA = {
  unlockedStorageKey: 'fuer-dich-unlocked-letters',
  sectionTitle: 'Briefe, nur für <em>dich.</em>',
  sectionDescription: 'Öffne sie am richtigen Tag oder mit der Antwort, die nur wir kennen.',
  sectionEyebrow: 'EIN BRIEF FÜR DICH',
  letterEyebrow: 'MIT GANZ VIEL LIEBE',
  openLetterLabel: 'Dein Brief wartet auf dich',
  passwordLockedLabel: 'Mit unserer Antwort zu öffnen',
  wrongAnswer: 'Fast … versuch es noch einmal, mein Herz.',
  answerPlaceholder: 'Deine Antwort …',
  answerButton: 'Brief öffnen',
  closeLabel: 'Schließen',
  letters: [
    {
      id: 'new-year', type: 'date', title: 'Öffne an Silvester', icon: 'sparkles',
      unlockAt: '2026-12-31T00:00:00', lockHint: 'Wird an Silvester geöffnet.',
      letter: 'Mein Herz,\n\nwas für ein Jahr mit dir. Danke für jedes Lachen, jede kleine Überraschung und dafür, dass du mein Zuhause unterwegs bist. Für das neue Jahr wünsche ich mir noch viele Abende, Abenteuer und ruhige Morgen an deiner Seite.\n\nAuf alles, was kommt. Ich hab dich lieb.'
    },
    {
      id: 'valentine', type: 'date', title: 'Öffne am Valentinstag', icon: 'heart',
      unlockAt: '2027-02-14T00:00:00', lockHint: 'Ein kleiner Valentinsgruß wartet auf dich.',
      letter: 'Mein Lieblingsmensch,\n\nheute ist nur ein guter Anlass, dir noch einmal zu sagen, wie gern ich dich habe. Deine Art, die Welt zu sehen, macht selbst gewöhnliche Tage besonders. Danke, dass es dich gibt.\n\nHeute gehört die Zeit ganz uns.'
    },
    {
      id: 'anniversary', type: 'date', title: 'Unser Jahrestag', icon: 'calendar-heart',
      unlockAt: '2027-12-01T00:00:00', lockHint: 'Öffnet sich an unserem nächsten Jahrestag.',
      letter: 'Ein weiteres gemeinsames Jahr.\n\nWenn ich an unsere Zeit denke, fallen mir zuerst nicht die großen Dinge ein, sondern dein Lachen in der Küche, unsere Gespräche und die kleinen Blicke, die nur wir verstehen. Ich freue mich auf jedes nächste Kapitel mit dir.\n\nAlles Liebe zu unserem Tag.'
    },
    {
      id: 'first-date', type: 'password', title: 'Unser erstes Date', icon: 'key-round',
      question: 'Wo war unser erstes Date?', hint: 'Ein Ort, den wir beide kennen.', answers: ['café am markt', 'cafe am markt'],
      letter: 'Weißt du noch, wie schön aufgeregt ich war? Ich wollte, dass die Zeit langsamer vergeht, damit unser Gespräch noch ein bisschen weitergehen kann. Seitdem bin ich froh über jeden Moment, der daraus entstanden ist.\n\nIch würde dich immer wieder fragen.'
    },
    {
      id: 'comfort-food', type: 'password', title: 'Wenn du Trost brauchst', icon: 'cloud-sun',
      question: 'Was ist dein liebstes Wohlfühl-Essen?', hint: 'Kleiner Tipp: Das würde ich dir gern machen.', answers: ['pasta', 'nudeln', 'pasta pesto'],
      letter: 'Komm her, mein Herz. Du musst gerade gar nichts lösen und auch nicht so tun, als wäre alles leicht. Ich bin da, höre dir zu und halte dich fest. Und wenn du magst, mache ich uns dein Wohlfühl-Essen.\n\nDu bist nicht allein.'
    },
    {
      id: 'secret-word', type: 'password', title: 'Unser kleines Geheimnis', icon: 'lock-keyhole',
      question: 'Wie heißt unser geheimes Codewort?', hint: 'Das Wort, bei dem wir beide lächeln müssen.', answers: ['zimtschnecke'],
      letter: 'Wenn du das hier liest, kennst du unser kleines Geheimnis. Es erinnert mich daran, wie schön es ist, eine eigene kleine Welt mit dir zu haben: mit unseren Witzen, Blicken und Worten.\n\nIch behalte all das ganz fest im Herzen.'
    }
  ]
};

const MAP_DATA = {
  sectionTitle: 'Hier waren <em>wir.</em>',
  sectionDescription: 'Unsere Orte auf einer weltweiten Satellitenkarte. Verschiebe und zoome, um eure Erinnerungen zu entdecken.',
  fallbackMessage: 'Die Karte konnte gerade nicht geladen werden. Bitte prüfe deine Internetverbindung.'
};
const MAP_HIDDEN_PLACES_KEY = 'fuer-dich-map-hidden-places';
const MAP_HIDDEN_PHOTOS_KEY = 'fuer-dich-map-hidden-photo-keys';
const BUCKET_LIST_STORAGE_KEY = 'fuer-dich-bucket-list';
const BUCKET_LIST_DELETED_KEY = 'fuer-dich-bucket-list-deleted';

// GPS-Ortsgruppen aus 38 Fotos; Namen und Erinnerungen kannst du hier anpassen.
const LOCATIONS = [
  { name: 'Erinnerungsort 01', photoCount: 1, coordinates: [51.660100, 9.637942], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_6043.JPG'] },
  { name: 'Erinnerungsort 02', photoCount: 14, coordinates: [51.693846, 9.514065], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_6122.JPG', 'assets/photos/album/iCloud Fotos/IMG_6132.JPG', 'assets/photos/album/iCloud Fotos/IMG_6133.JPG', 'assets/photos/album/iCloud Fotos/IMG_6136.JPG', 'assets/photos/album/iCloud Fotos/IMG_6137.JPG', 'assets/photos/album/iCloud Fotos/IMG_7338.JPG', 'assets/photos/album/iCloud Fotos/IMG_7343.JPG', 'assets/photos/album/iCloud Fotos/IMG_7631.JPG', 'assets/photos/album/browser-ready/IMG_6904.jpg', 'assets/photos/album/browser-ready/IMG_6916.jpg', 'assets/photos/album/browser-ready/IMG_6918.jpg', 'assets/photos/album/browser-ready/IMG_6927.jpg', 'assets/photos/album/browser-ready/IMG_7220.jpg', 'assets/photos/album/browser-ready/IMG_7883.jpg'] },
  { name: 'Erinnerungsort 03', photoCount: 1, coordinates: [51.706486, 9.556453], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_6779.JPG'] },
  { name: 'Erinnerungsort 04', photoCount: 4, coordinates: [51.627112, 9.659886], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_6887.JPG', 'assets/photos/album/iCloud Fotos/IMG_7503.JPG', 'assets/photos/album/browser-ready/IMG_6075.jpg', 'assets/photos/album/browser-ready/IMG_6076.jpg'] },
  { name: 'Erinnerungsort 05', photoCount: 3, coordinates: [54.142216, 10.964481], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_7047.JPG', 'assets/photos/album/iCloud Fotos/IMG_7051.JPG', 'assets/photos/album/iCloud Fotos/IMG_7053.JPG'] },
  { name: 'Erinnerungsort 06', photoCount: 3, coordinates: [54.102339, 10.898826], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_7098.JPG', 'assets/photos/album/browser-ready/IMG_7036.jpg', 'assets/photos/album/browser-ready/IMG_7102.jpg'] },
  { name: 'Erinnerungsort 07', photoCount: 1, coordinates: [51.548014, 9.901981], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_7685.JPG'] },
  { name: 'Erinnerungsort 08', photoCount: 1, coordinates: [51.536014, 9.934494], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_7756.JPG'] },
  { name: 'Erinnerungsort 09', photoCount: 2, coordinates: [51.689069, 9.557789], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/iCloud Fotos/IMG_7906.JPG', 'assets/photos/album/iCloud Fotos/IMG_7912.JPG'] },
  { name: 'Erinnerungsort 10', photoCount: 1, coordinates: [51.635094, 9.652169], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/browser-ready/IMG_6785.jpg'] },
  { name: 'Erinnerungsort 11', photoCount: 4, coordinates: [51.626896, 9.666587], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/browser-ready/IMG_6896.jpg', 'assets/photos/album/browser-ready/IMG_6897.jpg', 'assets/photos/album/browser-ready/IMG_6898.jpg', 'assets/photos/album/browser-ready/IMG_6899.jpg'] },
  { name: 'Erinnerungsort 12', photoCount: 1, coordinates: [54.094619, 10.890486], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/browser-ready/IMG_7106.jpg'] },
  { name: 'Erinnerungsort 13', photoCount: 2, coordinates: [51.687033, 9.512206], memory: 'Ergänze hier eure Erinnerung an diesen Ort.', photos: ['assets/photos/album/browser-ready/IMG_7200.jpg', 'assets/photos/album/browser-ready/IMG_7443.jpg'] }
];

// Ein Eintrag pro Foto oder Video. capturedAt wird aus Aufnahmedatum/-zeit übernommen.
// mediaType ist "photo" (Standard) oder "video". Leere Wochen werden ausgelassen.
const PHOTO_ALBUM_DATA = [
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-05108db0-228d-43cf-bbc8-ca5216867b66.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-09ce1c53-0ca0-473c-9113-bb86e1852841.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-35bd39b7-52ab-49fc-8467-ab17bed1d11c.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-3e6420ae-e4c8-4ebe-b610-3e18625e1386.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-5fbd4f56-061a-48ee-8be4-b9a86c31b3f4.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-64e22e5c-b1de-4a78-b959-09093de68245.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-b66c4cc2-41ea-40ec-a931-df6049518115.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-c1aeafc6-9d0d-4269-86db-66a51d3b0aef.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/icloud-fotos-2/icloud2-e051aecd-abd3-4273-b823-90da8ce56078.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/0e2fc2ad-4a32-4322-92a8-3b9226751429.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/351d9452-4c15-4d9b-b889-f5d9427e959d.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/3f6d74f8-508a-4078-b7c9-ed8a53cd07aa.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/4a265ff5-6a79-4ddc-916b-334ffc3476bb.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/5fcfdddb-f26f-4990-9748-f91ceffc0f33.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/7d16b643-e421-4c0e-be17-03fd7fb08334.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/88aa5e96-f262-4e3e-a815-b5fc20e8f994.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/ba2eb18f-aa50-401e-ae82-56fb8e61dc5e.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/ccdc81be-715f-4d17-8c54-e0f910ca129b.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/e6675907-33dc-4eda-8bf1-6a4d16a350de.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/EBB49E8A-8DBD-4BF2-83F8-267CCA69D9F0.mp4",
    "mediaType": "video",
    "alt": "Gemeinsamer Videomoment",
    "capturedAt": "2026-09-12T19:14:00",
    "caption": "Videomoment · 12.09.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6043.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6075.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-04-20T20:58:40",
    "caption": "Erinnerung · 20.04.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6076.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-04-20T21:10:32",
    "caption": "Erinnerung · 20.04.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6122.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6123.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6132.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6133.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6136.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6137.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6279.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6779.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6785.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-06-19T22:14:25",
    "caption": "Erinnerung · 19.06.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_6887.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6896.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-01T20:34:30",
    "caption": "Erinnerung · 01.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6897.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-01T20:34:30",
    "caption": "Erinnerung · 01.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6898.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-01T20:34:51",
    "caption": "Erinnerung · 01.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6899.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-01T20:34:52",
    "caption": "Erinnerung · 01.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6904.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-02T16:02:56",
    "caption": "Erinnerung · 02.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6916.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-02T16:08:18",
    "caption": "Erinnerung · 02.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6918.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-02T16:08:57",
    "caption": "Erinnerung · 02.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_6927.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-02T16:09:39",
    "caption": "Erinnerung · 02.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7036.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-14T17:53:02",
    "caption": "Erinnerung · 14.07.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7047.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7051.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7053.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7084.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Erinnerung · 15.07.2026",
    "capturedAt": "2026-07-15T23:41:28"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7085.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Erinnerung · 15.07.2026",
    "capturedAt": "2026-07-15T23:42:19"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7086.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Erinnerung · 15.07.2026",
    "capturedAt": "2026-07-15T23:43:10"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7087.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Erinnerung · 15.07.2026",
    "capturedAt": "2026-07-15T23:43:29"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7098.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7102.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T20:33:09",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7106.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T21:14:36",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7200.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-20T22:39:06",
    "caption": "Erinnerung · 20.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7220.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-21T13:00:06",
    "caption": "Erinnerung · 21.07.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7248.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7249.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7338.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7343.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7424.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T20:28:09",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7438.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T20:29:41",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7443.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-08-09T20:13:08",
    "caption": "Erinnerung · 09.08.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7469.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T20:33:46",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7470.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T20:34:03",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7474.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T20:36:57",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7503.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7516.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-07-17T21:19:08",
    "caption": "Erinnerung · 17.07.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7631.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7685.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7756.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7801.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/browser-ready/IMG_7883.jpg",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "capturedAt": "2026-10-14T16:35:24",
    "caption": "Erinnerung · 14.10.2026"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7906.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7909.PNG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Erinnerung · 14.10.2026",
    "capturedAt": "2026-10-14T17:41:38"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/IMG_7912.JPG",
    "mediaType": "photo",
    "alt": "Gemeinsames Erinnerungsfoto",
    "caption": "Ein Moment für uns"
  },
  {
    "src": "assets/photos/album/iCloud Fotos/v26044gc0000db7t6vfog65v06n8ik90.mp4",
    "mediaType": "video",
    "alt": "Gemeinsamer Videomoment",
    "caption": "Ein Moment für uns"
  }
];
const ALBUM_DATA = {
  sectionTitle: 'Unser <em>Fotoalbum.</em>',
  sectionDescription: 'Jede Woche mit Bildern bekommt ihre eigene kleine Erinnerungsseite. Tippe Fotos ohne Datum an, um es nachzutragen.',
  emptyTitle: 'Eure Bilder kommen hier zusammen.',
  emptyDescription: 'Wähle oben Fotos von deinem Handy aus. Mit Datum und Ort werden sie zu euren Erinnerungsseiten hinzugefügt.',
  weekPrefix: 'WOCHE',
  leftPageLabel: 'LINKS',
  rightPageLabel: 'RECHTS',
  blankPageMessage: 'Hier ist Platz für euren nächsten Moment.',
  previousLabel: 'Vorige Seite',
  nextLabel: 'Nächste Seite',
  noCaption: 'Ein Moment für uns',
  undatedLabel: 'Datum im Export fehlt',
  undatedPageLabel: 'Weitere Erinnerungen',
  dateOverridesStorageKey: 'fuer-dich-album-date-overrides',
  deletedPhotosStorageKey: 'fuer-dich-album-deleted-photos',
  deletedUploadedPhotosStorageKey: 'fuer-dich-album-deleted-uploaded-photos',
  databaseName: 'fuer-dich-album',
  dateSaveMessage: 'Gespeichert – das Bild wird einsortiert …',
  dateSaveError: 'Das Datum konnte in diesem Browser nicht gespeichert werden.',
  dateInputError: 'Bitte wähle ein gültiges Aufnahmedatum aus.',
  batchDateHelp: 'Markiere mehrere Bilder und ordne ihnen gemeinsam dasselbe Datum zu.',
  batchDateLabel: 'Gemeinsames Aufnahmedatum',
  batchSaveLabel: 'Datum für Auswahl speichern',
  batchClearLabel: 'Auswahl aufheben',
  batchSelectedLabel: 'ausgewählt',
  batchDateError: 'Bitte wähle ein gültiges Datum und mindestens ein Bild aus.',
  batchSaveError: 'Die Datumsangaben konnten nicht gespeichert werden.',
  batchSaveMessage: 'Die ausgewählten Bilder wurden dem Datum zugeordnet.'
};

(() => {
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  function readRecord(key) {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || '{}');
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch (_) { return {}; }
  }

  function writeRecord(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      if (['fuer-dich-album-date-overrides', 'fuer-dich-album-deleted-photos', 'fuer-dich-album-deleted-uploaded-photos', 'fuer-dich-album-location-overrides', 'fuer-dich-map-hidden-places', 'fuer-dich-map-hidden-photo-keys', BUCKET_LIST_STORAGE_KEY, BUCKET_LIST_DELETED_KEY, DATES_DATA.dailyStateStorageKey, TREASURE_DATA.unlockedStorageKey].includes(key)) {
        window.__fuerDichSyncAlbumState?.();
      }
      return true;
    }
    catch (_) { return false; }
  }

  function mergeDailyCouponState(primary, secondary) {
    const valid = (state) => state && typeof state.day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(state.day);
    if (!valid(primary)) return valid(secondary) ? secondary : {};
    if (!valid(secondary) || primary.day > secondary.day) return primary;
    if (secondary.day > primary.day) return secondary;
    const ids = Array.isArray(primary.ids) && primary.ids.length ? primary.ids : (secondary.ids || []);
    const inIds = (value) => Array.isArray(value) ? value.filter((id) => ids.includes(id)) : [];
    return {
      day: primary.day,
      ids,
      revealed: Array.from(new Set([...inIds(primary.revealed), ...inIds(secondary.revealed)])),
      redeemed: Array.from(new Set([...inIds(primary.redeemed), ...inIds(secondary.redeemed)]))
    };
  }

  function initializeApp() {
    const navButtons = Array.from(document.querySelectorAll('.nav-btn'));
    const tabSections = Array.from(document.querySelectorAll('.tab-section'));
    const status = document.querySelector('#app-status');
    let activeTab = '';

    function showTab(targetId, { haptic = false } = {}) {
      const activeSection = document.getElementById(targetId);
      const activeButton = navButtons.find((button) => button.dataset.target === targetId);
      if (!activeSection || !activeSection.classList.contains('tab-section') || !activeButton) return;

      activeTab = targetId;
      navButtons.forEach((button) => {
        const selected = button === activeButton;
        button.classList.toggle('active', selected);
        button.classList.toggle('is-active', selected);
        if (selected) button.setAttribute('aria-current', 'page');
        else button.removeAttribute('aria-current');
      });
      tabSections.forEach((section) => {
        const selected = section === activeSection;
        section.hidden = !selected;
        section.classList.toggle('hidden', !selected);
        section.classList.toggle('active', selected);
        section.classList.toggle('is-active', selected);
      });

      if (status) status.textContent = `${activeButton.textContent.trim()} geöffnet`;
      document.querySelector('#main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
      if (haptic && typeof navigator.vibrate === 'function') navigator.vibrate(9);
      document.dispatchEvent(new CustomEvent('app:tabchange', { detail: { tab: targetId } }));
    }

    function applyConfiguredCopy() {
      document.querySelector('#dates-title').innerHTML = DATES_DATA.sectionTitle;
      document.querySelector('#dates-description').textContent = DATES_DATA.sectionDescription;
      document.querySelector('#wheel-heading').textContent = DATES_DATA.wheelHeading;
      document.querySelector('#wheel-status').textContent = DATES_DATA.wheelPrompt;
      document.querySelector('#coupon-heading').textContent = DATES_DATA.couponHeading;
      document.querySelector('#coupon-subheading').textContent = DATES_DATA.couponSubheading;
      document.querySelector('#countdown-heading').innerHTML = COUNTDOWN_DATA.sectionTitle;
      document.querySelector('#spin-button').innerHTML = `<i data-lucide="rotate-cw" aria-hidden="true"></i> ${escapeHtml(DATES_DATA.spinButtonLabel)}`;
      document.querySelector('#date-modal-eyebrow').textContent = DATES_DATA.dateModalEyebrow;
      document.querySelector('#date-result-copy').textContent = DATES_DATA.dateModalCopy;
      document.querySelector('#date-modal-confirm').innerHTML = `<i data-lucide="heart" aria-hidden="true"></i> ${escapeHtml(DATES_DATA.dateModalConfirm)}`;

      document.querySelector('#game-title').innerHTML = GAME_DATA.sectionTitle;
      document.querySelector('#game-description').textContent = GAME_DATA.sectionDescription;
      document.querySelector('#memory-progress-label').textContent = GAME_DATA.progressLabel;
      document.querySelector('#memory-status').textContent = GAME_DATA.initialStatus;
      document.querySelector('#memory-restart').innerHTML = `<i data-lucide="shuffle" aria-hidden="true"></i> ${escapeHtml(GAME_DATA.restartButton)}`;
      document.querySelector('#memory-play-again').textContent = GAME_DATA.playAgainButton;

      document.querySelector('#tresor-title').innerHTML = TREASURE_DATA.sectionTitle;
      document.querySelector('#tresor-description').textContent = TREASURE_DATA.sectionDescription;
      document.querySelector('#treasure-modal-eyebrow').textContent = TREASURE_DATA.sectionEyebrow;
      document.querySelector('#treasure-letter-eyebrow').textContent = TREASURE_DATA.letterEyebrow;
      document.querySelector('#treasure-answer').placeholder = TREASURE_DATA.answerPlaceholder;
      document.querySelector('#treasure-answer-button').innerHTML = `<i data-lucide="key-round" aria-hidden="true"></i> ${escapeHtml(TREASURE_DATA.answerButton)}`;
      document.querySelectorAll('.modal-close').forEach((button) => button.setAttribute('aria-label', TREASURE_DATA.closeLabel));

      document.querySelector('#karte-title').innerHTML = MAP_DATA.sectionTitle;
      document.querySelector('#karte-description').textContent = MAP_DATA.sectionDescription;
      document.querySelector('#map-fallback').textContent = MAP_DATA.fallbackMessage;
      document.querySelector('#album-title').innerHTML = ALBUM_DATA.sectionTitle;
      document.querySelector('#album-description').textContent = ALBUM_DATA.sectionDescription;
      if (window.lucide) window.lucide.createIcons();
    }

    function launchConfetti() {
      if (typeof window.confetti === 'function') {
        window.confetti({ particleCount: 120, spread: 85, origin: { y: 0.65 }, colors: ['#f43f5e', '#fda4af', '#f5c890', '#ffffff', '#c4b5fd'] });
      } else {
        const layer = document.createElement('div');
        layer.className = 'confetti-layer';
        layer.setAttribute('aria-hidden', 'true');
        ['#f43f5e', '#fda4af', '#f5c890', '#ffffff', '#c4b5fd'].forEach((color, colorIndex) => {
          for (let index = 0; index < 18; index += 1) {
            const bit = document.createElement('span');
            bit.className = 'confetti-piece';
            bit.style.setProperty('--left', `${Math.random() * 100}%`);
            bit.style.setProperty('--size', `${5 + Math.random() * 7}px`);
            bit.style.setProperty('--color', color);
            bit.style.setProperty('--duration', `${2 + Math.random() * 2}s`);
            bit.style.setProperty('--delay', `${Math.random() * 0.4}s`);
            bit.style.setProperty('--drift', `${Math.random() * 180 - 90}px`);
            bit.style.setProperty('--spin', `${Math.random() * 720 - 360}deg`);
            layer.appendChild(bit);
          }
        });
        document.body.appendChild(layer);
        window.setTimeout(() => layer.remove(), 4500);
      }
    }

    // Wrapped stories
    const wrappedSection = document.querySelector('#wrapped');
    const storyRoot = document.querySelector('#wrapped-story');
    let currentSlide = 0;
    let wrappedAlbumPhotosPromise = null;
    let wrappedAudio = null;
    let wrappedMusicButton = null;
    let wrappedMusicStarted = false;
    let wrappedMusicPausedByUser = false;

    function updateWrappedMusicButton(isPlaying) {
      if (!wrappedMusicButton) return;
      wrappedMusicButton.setAttribute('aria-pressed', String(isPlaying));
      wrappedMusicButton.setAttribute('aria-label', isPlaying ? 'Hintergrundmusik pausieren' : 'Hintergrundmusik einschalten');
      wrappedMusicButton.innerHTML = `<i data-lucide="${isPlaying ? 'volume-2' : 'volume-x'}"></i>`;
      if (window.lucide) window.lucide.createIcons();
    }

    function startWrappedMusic(showMissingFileMessage = false) {
      if (!wrappedAudio || wrappedMusicPausedByUser) return;
      wrappedAudio.play().then(() => {
        wrappedMusicStarted = true;
        updateWrappedMusicButton(true);
      }).catch(() => {
        if (showMissingFileMessage) status.textContent = 'Lege das gewünschte Lied als assets/audio/wrapped-song.mp3 ab, damit die Wrapped-Musik starten kann.';
      });
    }

    function wrappedProgressMarkup() {
      return WRAPPED_DATA.slides.map((slide, index) => `
        <button class="story-segment${index === 0 ? ' is-current' : ''}" type="button" data-slide-to="${index}" aria-label="Story ${index + 1}: ${escapeHtml(slide.eyebrow)}"><span class="story-segment-fill"></span></button>`).join('');
    }

    function wrappedSlideMarkup(slide, index) {
      const configuredTitle = slide.type === 'year' ? WRAPPED_DATA.yearHeading : slide.type === 'love-notes' ? WRAPPED_DATA.loveNotesHeading : slide.type === 'place' ? WRAPPED_DATA.placeHeading : slide.title;
      const heading = `<h1 id="wrapped-title" class="story-title font-display">${configuredTitle}</h1>`;
      const intro = `<p class="story-copy">${escapeHtml(slide.description || '')}</p>`;
      const next = index < WRAPPED_DATA.slides.length - 1 ? '<div class="story-footer"><button class="story-next" type="button" data-story-next>Weiter <i data-lucide="arrow-right"></i></button></div>' : '';
      const eyebrow = `<div class="story-slide-head"><i data-lucide="sparkles"></i>${escapeHtml(slide.eyebrow)}</div>`;

      if (slide.type === 'counter') return `<div class="story-slide">${eyebrow}${heading}${intro}<div class="story-counter"><div class="counter-cell"><strong class="counter-value" data-time="days">0</strong><span class="counter-label">Tage</span></div><div class="counter-cell"><strong class="counter-value" data-time="hours">00</strong><span class="counter-label">Stunden</span></div><div class="counter-cell"><strong class="counter-value" data-time="minutes">00</strong><span class="counter-label">Minuten</span></div><div class="counter-cell"><strong class="counter-value" data-time="seconds">00</strong><span class="counter-label">Sekunden</span></div></div><p class="counter-caption">${escapeHtml(slide.caption)}</p>${next}</div>`;

      if (slide.type === 'first-photo') return `<div class="story-slide">${eyebrow}${heading}${intro}<article class="wrapped-first-photo"><div class="wrapped-first-photo-frame"><img src="${escapeHtml(slide.photo.path)}" alt="${escapeHtml(slide.photo.alt)}"><span class="wrapped-first-photo-heart" aria-hidden="true">♥</span></div><p class="wrapped-first-photo-caption">${escapeHtml(slide.photo.caption)}</p><p class="wrapped-first-photo-date" data-first-photo-date>${escapeHtml(WRAPPED_DATA.dateCaptionPrefix + ' · wird gesucht …')}</p></article>${next}</div>`;

      if (slide.type === 'moments') {
        const photos = slide.photos.map((photo, photoIndex) => `<button class="wrapped-memory-card polaroid-card" type="button" data-polaroid="${photoIndex}" aria-pressed="false" aria-label="${escapeHtml(photo.label)} umdrehen">
          <span class="polaroid-inner">
            <span class="polaroid-face polaroid-front"><span class="wrapped-memory-photo"><span class="memory-photo-placeholder" aria-hidden="true"><i data-lucide="image"></i></span><img src="${escapeHtml(photo.path)}" alt="${escapeHtml(photo.alt)}"></span><span class="wrapped-memory-caption"><strong>${escapeHtml(photo.label)}</strong><small class="polaroid-front-date" data-polaroid-front-date="${photoIndex}">${escapeHtml(WRAPPED_DATA.dateCaptionPrefix + ' · wird gesucht …')}</small></span></span>
            <span class="polaroid-face polaroid-back"><span class="polaroid-back-heart" aria-hidden="true">♥</span><strong>${escapeHtml(photo.label)}</strong><span class="polaroid-back-date" data-polaroid-date="${photoIndex}">Aufnahmedatum wird gesucht …</span><span class="polaroid-back-note">${escapeHtml(photo.caption)}</span><span class="polaroid-back-tape" aria-hidden="true"></span></span>
          </span></button>`).join('');
        return `<div class="story-slide">${eyebrow}${heading}${intro}<div class="wrapped-memory-grid polaroid-wall" data-polaroid-wall data-card-count="${slide.photos.length}"><span class="polaroid-heart-silhouette" aria-hidden="true">♥</span>${photos}</div><p class="polaroid-wall-hint" data-polaroid-hint>${escapeHtml(WRAPPED_DATA.polaroidHint)}</p>${next}</div>`;
      }

      if (slide.type === 'year') return `<div class="story-slide">${eyebrow}${heading}<p class="story-copy">${escapeHtml(WRAPPED_DATA.yearDescription)}</p><div class="wrapped-year-gallery" data-year-gallery aria-live="polite"><p class="wrapped-year-empty">Deine Monate werden gesammelt …</p></div>${next}</div>`;

      if (slide.type === 'love-notes') {
        const notes = WRAPPED_DATA.loveNotes.map((note, noteIndex) => `<button class="wrapped-love-note" type="button" data-love-note aria-pressed="false" aria-label="Liebesnachricht ${noteIndex + 1} öffnen"><span class="wrapped-love-note-inner"><span class="wrapped-love-note-cover"><i data-lucide="heart" aria-hidden="true"></i><small>FÜR DICH</small></span><span class="wrapped-love-note-message">${escapeHtml(note)}</span></span></button>`).join('');
        return `<div class="story-slide">${eyebrow}${heading}<p class="story-copy">${escapeHtml(WRAPPED_DATA.loveNotesDescription)}</p><div class="wrapped-love-notes">${notes}</div>${next}</div>`;
      }

      if (slide.type === 'place') return `<div class="story-slide">${eyebrow}${heading}<p class="story-copy">${escapeHtml(WRAPPED_DATA.placeDescription)}</p><article class="wrapped-place-card"><div class="wrapped-place-photo"><img src="${escapeHtml(slide.photo)}" alt="Ein gemeinsamer Sehnsuchtsort" loading="lazy"><span class="wrapped-place-pin"><i data-lucide="map-pin" aria-hidden="true"></i></span></div><p class="wrapped-place-date-caption" data-place-date>${escapeHtml(WRAPPED_DATA.dateCaptionPrefix + ' · wird gesucht …')}</p><div class="wrapped-place-copy"><span class="wrapped-place-label">UNSER SEHNSUCHTSORT</span><h2>${escapeHtml(WRAPPED_DATA.placeName)}</h2><p>${escapeHtml(WRAPPED_DATA.placeCaption)}</p></div></article>${next}</div>`;

      if (slide.type === 'stats') {
        const stats = slide.stats.map((stat) => `<div class="stat-card"><span class="stat-icon"><i data-lucide="${escapeHtml(stat.icon)}"></i></span><strong class="stat-value">${escapeHtml(stat.value)}</strong><span class="stat-label">${escapeHtml(stat.label)}</span></div>`).join('');
        return `<div class="story-slide">${eyebrow}${heading}${intro}<div class="stats-grid">${stats}</div>${next}</div>`;
      }

      if (slide.type === 'soundtrack') {
        const bars = Array.from({ length: 24 }, () => '<span></span>').join('');
        return `<div class="story-slide">${eyebrow}${heading}${intro}<div class="soundtrack-card"><div class="album-art">${escapeHtml(slide.coverLabel)}</div><div><p class="song-title">${escapeHtml(slide.songTitle)}</p><p class="song-artist">${escapeHtml(slide.artist)}</p></div></div><div class="audio-visualizer">${bars}</div><p class="story-copy">${escapeHtml(slide.playerLabel)}</p>${next}</div>`;
      }

      return `<div class="story-slide finale-slide">${eyebrow}<div class="finale-art">♥</div>${heading}<p class="finale-message">${escapeHtml(slide.message)}</p><div class="story-footer centered"><button class="story-surprise" type="button" data-story-surprise>${escapeHtml(slide.buttonLabel)} <i data-lucide="gift"></i></button></div></div>`;
    }

    async function wrappedPhotoDateLabel(path, albumPhotoKey = '') {
      if (albumPhotoKey) {
        if (!wrappedAlbumPhotosPromise) wrappedAlbumPhotosPromise = getAlbumPhotos().catch(() => []);
        const matchingAlbumPhoto = (await wrappedAlbumPhotosPromise).find((photo) => photo.key === albumPhotoKey || photo.src === albumPhotoKey);
        if (matchingAlbumPhoto?.dateObject && Number.isFinite(matchingAlbumPhoto.dateObject.getTime())) {
          return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(matchingAlbumPhoto.dateObject);
        }
      }
      const albumEntry = PHOTO_ALBUM_DATA.find((photo) => photo.src === path && photo.capturedAt);
      const albumDate = albumEntry?.capturedAt ? new Date(albumEntry.capturedAt) : null;
      if (albumDate && Number.isFinite(albumDate.getTime())) {
        return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(albumDate);
      }
      if (!window.exifr?.parse) return '';
      try {
        const response = await fetch(path, { cache: 'force-cache' });
        if (!response.ok) return '';
        const tags = await window.exifr.parse(await response.blob());
        const value = tags?.DateTimeOriginal || tags?.CreateDate || tags?.ModifyDate;
        const date = value instanceof Date ? value : (value ? new Date(String(value).replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3')) : null);
        if (!date || !Number.isFinite(date.getTime())) return '';
        if (!wrappedAlbumPhotosPromise) wrappedAlbumPhotosPromise = getAlbumPhotos().catch(() => []);
        const dayKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const linkedAlbumPhoto = (await wrappedAlbumPhotosPromise).find((photo) => {
          if (!photo.capturedAt) return false;
          const originalDate = new Date(photo.capturedAt);
          return Number.isFinite(originalDate.getTime()) && `${originalDate.getFullYear()}-${originalDate.getMonth()}-${originalDate.getDate()}` === dayKey;
        });
        const displayDate = linkedAlbumPhoto?.dateObject && Number.isFinite(linkedAlbumPhoto.dateObject.getTime())
          ? linkedAlbumPhoto.dateObject
          : date;
        return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(displayDate);
      } catch (_) { return ''; }
    }

    async function populateWrappedYear(stage) {
      const gallery = stage.querySelector('[data-year-gallery]');
      if (!gallery) return;
      try {
        const photos = (await getAlbumPhotos())
          .filter((photo) => photo.mediaType !== 'video' && photo.dateObject && Number.isFinite(photo.dateObject.getTime()))
          .sort((a, b) => a.dateObject - b.dateObject);
        const months = new Map();
        photos.forEach((photo) => {
          const key = `${photo.dateObject.getFullYear()}-${String(photo.dateObject.getMonth() + 1).padStart(2, '0')}`;
          if (!months.has(key)) months.set(key, { date: new Date(photo.dateObject.getFullYear(), photo.dateObject.getMonth(), 1), photos: [] });
          months.get(key).photos.push(photo);
        });
        const entries = Array.from(months.values());
        if (!entries.length) {
          gallery.innerHTML = `<p class="wrapped-year-empty">${escapeHtml(WRAPPED_DATA.yearEmpty)}</p>`;
          return;
        }
        gallery.innerHTML = entries.map((entry, monthIndex) => {
          const photo = entry.photos[0];
          const month = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(entry.date);
          const countLabel = `${entry.photos.length} ${entry.photos.length === 1 ? 'Foto' : 'Fotos'}`;
          const dateCaption = `${WRAPPED_DATA.dateCaptionPrefix} · ${new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(photo.dateObject)}`;
          return `<button class="wrapped-year-card" type="button" data-year-photo="${escapeHtml(photo.key)}" style="--month-delay:${Math.min(monthIndex, 8) * 45}ms" aria-label="${escapeHtml(month)}, ${countLabel}. Albumfotos öffnen"><span class="wrapped-year-photo"><img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.caption || photo.alt || 'Erinnerung aus ' + month)}" loading="lazy" decoding="async"></span><span class="wrapped-year-date-caption">${escapeHtml(dateCaption)}</span><span class="wrapped-year-caption"><strong>${escapeHtml(month)}</strong><small>${countLabel}</small></span></button>`;
        }).join('');
        gallery.querySelectorAll('[data-year-photo]').forEach((button) => button.addEventListener('click', () => {
          const photo = photos.find((entry) => entry.key === button.dataset.yearPhoto);
          if (photo) openAlbumPhoto(photo);
        }));
        gallery.querySelectorAll('img').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
      } catch (_) {
        gallery.innerHTML = `<p class="wrapped-year-empty">${escapeHtml(WRAPPED_DATA.yearEmpty)}</p>`;
      }
    }

    function updateWrappedCounter() {
      if (!storyRoot) return;
      const days = storyRoot.querySelector('[data-time="days"]');
      if (!days) return;
      const seconds = Math.max(0, Math.floor((Date.now() - new Date(WRAPPED_DATA.startDate).getTime()) / 1000));
      days.textContent = Math.floor(seconds / 86400).toLocaleString('de-DE');
      storyRoot.querySelector('[data-time="hours"]').textContent = String(Math.floor((seconds % 86400) / 3600)).padStart(2, '0');
      storyRoot.querySelector('[data-time="minutes"]').textContent = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      storyRoot.querySelector('[data-time="seconds"]').textContent = String(seconds % 60).padStart(2, '0');
    }

    function updateWrappedProgress() {
      storyRoot.querySelectorAll('.story-segment').forEach((segment, index) => {
        segment.classList.toggle('is-complete', index < currentSlide);
        segment.classList.toggle('is-current', index === currentSlide);
      });
    }

    function renderWrappedSlide(index) {
      currentSlide = Math.max(0, Math.min(index, WRAPPED_DATA.slides.length - 1));
      wrappedAlbumPhotosPromise = null;
      const slide = WRAPPED_DATA.slides[currentSlide];
      const stage = storyRoot.querySelector('#story-stage');
      stage.innerHTML = wrappedSlideMarkup(slide, currentSlide);
      stage.classList.toggle('story-stage-moments', slide.type === 'moments');
      stage.classList.toggle('story-stage-scroll', ['first-photo', 'moments', 'year', 'love-notes', 'place'].includes(slide.type));
      updateWrappedProgress();

      stage.querySelectorAll('.wrapped-memory-photo img').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
      stage.querySelectorAll('.wrapped-first-photo-frame img, .wrapped-place-photo img').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
      if (slide.type === 'first-photo') {
        Promise.resolve(slide.photo.dateLabel || wrappedPhotoDateLabel(slide.photo.path, slide.photo.albumPhotoKey)).then((dateLabel) => {
          const date = stage.querySelector('[data-first-photo-date]');
          if (date?.isConnected) date.textContent = `${WRAPPED_DATA.dateCaptionPrefix} · ${dateLabel || WRAPPED_DATA.dateMissing}`;
        });
      }
      if (slide.type === 'place') {
        Promise.resolve(slide.dateLabel || wrappedPhotoDateLabel(slide.photo, slide.albumPhotoKey)).then((dateLabel) => {
          const date = stage.querySelector('[data-place-date]');
          if (date?.isConnected) date.textContent = `${WRAPPED_DATA.dateCaptionPrefix} · ${dateLabel || WRAPPED_DATA.dateMissing}`;
        });
      }
      if (slide.type === 'year') populateWrappedYear(stage);
      if (slide.type === 'love-notes') {
        stage.querySelectorAll('[data-love-note]').forEach((card, noteIndex) => card.addEventListener('click', () => {
          const isRevealed = card.classList.toggle('is-revealed');
          card.setAttribute('aria-pressed', String(isRevealed));
          card.setAttribute('aria-label', `Liebesnachricht ${noteIndex + 1} ${isRevealed ? 'schließen' : 'öffnen'}`);
        }));
      }
      if (slide.type === 'moments') {
        const wall = stage.querySelector('[data-polaroid-wall]');
        const cards = Array.from(wall?.querySelectorAll('[data-polaroid]') || []);
        const flipped = new Set();
        const hint = stage.querySelector('[data-polaroid-hint]');
        let heartTimer = 0;

        cards.forEach((card) => card.addEventListener('click', () => {
          if (wall.classList.contains('is-heart-formed')) {
            wall.classList.remove('is-heart-formed');
            cards.forEach((item) => {
              item.classList.remove('is-flipped');
              item.setAttribute('aria-pressed', 'false');
              item.setAttribute('aria-label', `${slide.photos[Number(item.dataset.polaroid)]?.label || 'Erinnerung'} umdrehen`);
            });
            flipped.clear();
            if (hint) hint.textContent = WRAPPED_DATA.polaroidHint;
          }
          if (card.classList.contains('is-flipped')) {
            card.classList.remove('is-flipped');
            card.setAttribute('aria-pressed', 'false');
            card.setAttribute('aria-label', `${slide.photos[Number(card.dataset.polaroid)]?.label || 'Erinnerung'} umdrehen`);
            flipped.delete(card.dataset.polaroid);
          } else {
            card.classList.add('is-flipped');
            card.setAttribute('aria-pressed', 'true');
            card.setAttribute('aria-label', `${slide.photos[Number(card.dataset.polaroid)]?.label || 'Erinnerung'}: Rückseite anzeigen`);
            flipped.add(card.dataset.polaroid);
          }
          window.clearTimeout(heartTimer);
          if (flipped.size === cards.length && cards.length) {
            if (hint) hint.textContent = WRAPPED_DATA.polaroidFormingHint;
            heartTimer = window.setTimeout(() => {
              cards.forEach((item) => {
                item.classList.remove('is-flipped');
                item.setAttribute('aria-pressed', 'false');
                item.setAttribute('aria-label', `${slide.photos[Number(item.dataset.polaroid)]?.label || 'Erinnerung'} umdrehen`);
              });
              flipped.clear();
              wall.classList.add('is-heart-formed');
              if (hint) hint.textContent = WRAPPED_DATA.polaroidHeartHint;
            }, 650);
          }
        }));

        slide.photos.forEach(async (photo, photoIndex) => {
          const dateElement = stage.querySelector(`[data-polaroid-date="${photoIndex}"]`);
          const frontDateElement = stage.querySelector(`[data-polaroid-front-date="${photoIndex}"]`);
          if (!dateElement && !frontDateElement) return;
          const dateLabel = photo.dateLabel || await wrappedPhotoDateLabel(photo.path, photo.albumPhotoKey);
          const caption = `${WRAPPED_DATA.dateCaptionPrefix} · ${dateLabel || WRAPPED_DATA.dateMissing}`;
          if (dateElement?.isConnected) dateElement.textContent = caption;
          if (frontDateElement?.isConnected) frontDateElement.textContent = caption;
        });
      }
      stage.querySelector('[data-story-next]')?.addEventListener('click', () => renderWrappedSlide(currentSlide + 1));
      stage.querySelector('[data-story-surprise]')?.addEventListener('click', () => {
        launchConfetti();
        status.textContent = 'Frohe Weihnachten! Deine Überraschung startet.';
        window.setTimeout(() => document.dispatchEvent(new CustomEvent('app:navigate', { detail: { tab: 'dates' } })), 700);
      });
      if (window.lucide) window.lucide.createIcons();
      if (slide.type === 'counter') updateWrappedCounter();
      if (slide.type === 'soundtrack' && wrappedAudio && !wrappedAudio.paused) stage.querySelector('.audio-visualizer')?.classList.add('is-playing');
    }

    function initWrapped() {
      if (!storyRoot) return;
      storyRoot.innerHTML = `<div class="story-topbar"><div class="story-progress" style="grid-template-columns:repeat(${WRAPPED_DATA.slides.length},minmax(0,1fr))">${wrappedProgressMarkup()}</div><button class="story-music" type="button" aria-label="Hintergrundmusik einschalten" aria-pressed="false"><i data-lucide="volume-x"></i></button></div><div class="story-stage" id="story-stage" role="group" aria-roledescription="Story"></div><p class="story-swipe-hint">Tippe links oder rechts, um durch die Stories zu gehen</p><audio src="${escapeHtml(WRAPPED_DATA.audioPath)}" preload="none" loop></audio>`;
      wrappedAudio = storyRoot.querySelector('audio');
      wrappedAudio.volume = 0.5;
      wrappedMusicButton = storyRoot.querySelector('.story-music');
      wrappedMusicButton.addEventListener('click', async () => {
        if (wrappedAudio.paused) {
          wrappedMusicPausedByUser = false;
          startWrappedMusic(true);
        } else {
          wrappedAudio.pause();
          wrappedMusicPausedByUser = true;
          updateWrappedMusicButton(false);
          storyRoot.querySelector('.audio-visualizer')?.classList.remove('is-playing');
        }
      });
      storyRoot.addEventListener('pointerdown', (event) => {
        if (!event.target.closest('.story-music') && !wrappedMusicStarted && !wrappedMusicPausedByUser) startWrappedMusic(true);
      }, { capture: true });
      storyRoot.querySelectorAll('[data-slide-to]').forEach((segment) => segment.addEventListener('click', () => renderWrappedSlide(Number(segment.dataset.slideTo))));
      storyRoot.querySelector('#story-stage').addEventListener('click', (event) => {
        if (event.target.closest('button, a')) return;
        const rect = event.currentTarget.getBoundingClientRect();
        renderWrappedSlide(currentSlide + (event.clientX < rect.left + rect.width / 2 ? -1 : 1));
      });
      renderWrappedSlide(currentSlide);
      startWrappedMusic();
      window.setInterval(() => { if (!wrappedSection.hidden) updateWrappedCounter(); }, 1000);
    }

    // Date wheel and scratch-off coupons
    const dateWheel = document.querySelector('#date-wheel');
    const wheelStatus = document.querySelector('#wheel-status');
    const dateModal = document.querySelector('#date-modal');
    let wheelRotation = 0;
    let wheelSpinning = false;
    const wheelColors = ['#9f1239', '#be123c', '#881337', '#e11d48', '#4c1d32', '#c0264f', '#701a35', '#f43f5e'];

    function drawWheel() {
      if (!dateWheel) return;
      const rect = dateWheel.getBoundingClientRect();
      if (rect.width < 10) return;
      const ratio = window.devicePixelRatio || 1;
      const size = Math.floor(rect.width);
      dateWheel.width = size * ratio;
      dateWheel.height = size * ratio;
      const ctx = dateWheel.getContext('2d');
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, size, size);
      const center = size / 2;
      const radius = center - 12;
      const slice = Math.PI * 2 / DATES_DATA.wheelDates.length;
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(wheelRotation);
      DATES_DATA.wheelDates.forEach((label, index) => {
        const start = -Math.PI / 2 + index * slice;
        const end = start + slice;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, start, end);
        ctx.closePath();
        ctx.fillStyle = wheelColors[index % wheelColors.length];
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.22)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.save();
        ctx.rotate(start + slice / 2);
        ctx.translate(radius * 0.62, 0);
        if (start + slice / 2 > Math.PI / 2 && start + slice / 2 < Math.PI * 1.5) ctx.rotate(Math.PI);
        ctx.fillStyle = '#fff5f6';
        ctx.font = `600 ${Math.max(9, Math.min(12, size * 0.033))}px "DM Sans", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, 0, 0, radius * 0.52);
        ctx.restore();
      });
      ctx.restore();

      ctx.beginPath();
      ctx.arc(center, center, 19, 0, Math.PI * 2);
      ctx.fillStyle = '#09090b';
      ctx.fill();
      ctx.strokeStyle = 'rgba(253,164,175,.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#fda4af';
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('♥', center, center + 1);

      ctx.beginPath();
      ctx.moveTo(center - 9, 4);
      ctx.lineTo(center + 9, 4);
      ctx.lineTo(center, 20);
      ctx.closePath();
      ctx.fillStyle = '#ffe4e8';
      ctx.fill();
    }

    function spinWheel() {
      if (!dateWheel || wheelSpinning) return;
      wheelSpinning = true;
      const button = document.querySelector('#spin-button');
      button.disabled = true;
      wheelStatus.textContent = DATES_DATA.wheelSpinning;
      const winner = Math.floor(Math.random() * DATES_DATA.wheelDates.length);
      const slice = Math.PI * 2 / DATES_DATA.wheelDates.length;
      const targetModulo = ((-((winner + 0.5) * slice) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const currentModulo = ((wheelRotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const extra = (5 + Math.floor(Math.random() * 3)) * Math.PI * 2;
      const destination = wheelRotation + extra + ((targetModulo - currentModulo + Math.PI * 2) % (Math.PI * 2));
      const start = wheelRotation;
      const startTime = performance.now();
      const duration = 4200;

      function animate(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        wheelRotation = start + (destination - start) * eased;
        drawWheel();
        if (progress < 1) requestAnimationFrame(animate);
        else {
          wheelRotation = destination % (Math.PI * 2);
          drawWheel();
          wheelSpinning = false;
          button.disabled = false;
          const result = DATES_DATA.wheelDates[winner];
          wheelStatus.textContent = `${DATES_DATA.wheelResultPrefix} ${result}`;
          document.querySelector('#date-result').textContent = result;
          dateModal.showModal();
          launchConfetti();
          if (window.lucide) window.lucide.createIcons();
        }
      }
      requestAnimationFrame(animate);
    }

    function couponCardMarkup(coupon, revealed, redeemed) {
      return `<article class="coupon-card glass-card${revealed ? ' is-revealed' : ''}" data-coupon-card="${escapeHtml(coupon.id)}">
        <div class="coupon-prize"><span class="coupon-icon">${escapeHtml(coupon.icon)}</span><span class="pill">${escapeHtml(DATES_DATA.couponCardLabel)}</span><h3 class="coupon-title font-display">${escapeHtml(coupon.title)}</h3><p class="card-copy">${escapeHtml(coupon.detail)}</p></div>
        <canvas class="scratch-canvas" data-scratch="${escapeHtml(coupon.id)}" aria-label="Rubbele das Los frei" ${revealed ? 'hidden' : ''}></canvas>
        <button class="redeem-button" type="button" data-redeem="${escapeHtml(coupon.id)}" ${revealed ? '' : 'hidden'} ${redeemed ? 'disabled' : ''}>${redeemed ? escapeHtml(DATES_DATA.couponRedeemedLabel) : escapeHtml(DATES_DATA.couponRedeemLabel)}</button>
      </article>`;
    }

    let renderedCouponDay = '';
    let couponResetTimer = 0;
    let dailyCouponMemoryState = null;

    function localDayKey(date = new Date()) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function shuffled(items) {
      const result = [...items];
      for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
      }
      return result;
    }

    function getDailyCouponState() {
      const today = localDayKey();
      let state = dailyCouponMemoryState || readRecord(DATES_DATA.dailyStateStorageKey);
      const knownIds = new Set(DATES_DATA.coupons.map((coupon) => coupon.id));
      if (state.day !== today || !Array.isArray(state.ids) || !Array.isArray(state.revealed) || !Array.isArray(state.redeemed)) {
        state = {
          day: today,
          ids: shuffled(DATES_DATA.coupons).slice(0, Math.min(DATES_DATA.dailyCouponCount, DATES_DATA.coupons.length)).map((coupon) => coupon.id),
          revealed: [],
          redeemed: []
        };
        writeRecord(DATES_DATA.dailyStateStorageKey, state);
      } else {
        state.ids = state.ids.filter((id) => knownIds.has(id));
        state.revealed = state.revealed.filter((id) => state.ids.includes(id));
        state.redeemed = state.redeemed.filter((id) => state.ids.includes(id));
      }
      dailyCouponMemoryState = state;
      return state;
    }

    function renderCoupons() {
      const grid = document.querySelector('#coupon-grid');
      if (!grid) return;
      const state = getDailyCouponState();
      if (state.day === renderedCouponDay && grid.childElementCount) return;
      renderedCouponDay = state.day;
      const todaysCoupons = state.ids.map((id) => DATES_DATA.coupons.find((coupon) => coupon.id === id)).filter(Boolean);
      grid.innerHTML = todaysCoupons.map((coupon) => couponCardMarkup(coupon, state.revealed.includes(coupon.id) || state.redeemed.includes(coupon.id), state.redeemed.includes(coupon.id))).join('');
      grid.querySelectorAll('.scratch-canvas').forEach((canvas) => setupScratchCanvas(canvas));
      grid.querySelectorAll('[data-redeem]').forEach((button) => button.addEventListener('click', () => redeemCoupon(button.dataset.redeem, button)));
      if (window.lucide) window.lucide.createIcons();
    }

    function nextCountdownTarget(event, reference = new Date()) {
      const makeDate = (year) => new Date(year, event.month - 1, event.day, event.hour || 0, event.minute || 0, 0, 0);
      let target = makeDate(reference.getFullYear());
      if (target <= reference) target = makeDate(reference.getFullYear() + 1);
      return target;
    }

    function countdownMarkup(event) {
      const target = nextCountdownTarget(event);
      const dateLabel = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric' }).format(target);
      return `<article class="countdown-card" data-countdown-card="${escapeHtml(event.id)}" data-countdown-target="${target.getTime()}">
        <div class="countdown-card-heading"><span class="countdown-icon"><i data-lucide="${escapeHtml(event.icon)}" aria-hidden="true"></i></span><h3>${escapeHtml(event.title)}</h3></div>
        <p class="countdown-date" data-countdown-date>${dateLabel}</p>
        <div class="countdown-clock" role="timer" aria-label="Countdown bis ${escapeHtml(event.title)}">
          <div class="countdown-unit"><strong data-countdown-unit="days">0</strong><span>Tage</span></div>
          <div class="countdown-unit"><strong data-countdown-unit="hours">00</strong><span>Std.</span></div>
          <div class="countdown-unit"><strong data-countdown-unit="minutes">00</strong><span>Min.</span></div>
          <div class="countdown-unit"><strong data-countdown-unit="seconds">00</strong><span>Sek.</span></div>
        </div><p class="countdown-note">${escapeHtml(event.note)}</p>
      </article>`;
    }

    function updateRelationshipCountdowns() {
      const grid = document.querySelector('#relationship-countdown-grid');
      if (!grid) return;
      const now = new Date();
      grid.querySelectorAll('[data-countdown-card]').forEach((card) => {
        const event = COUNTDOWN_DATA.events.find((item) => item.id === card.dataset.countdownCard);
        if (!event) return;
        let target = Number(card.dataset.countdownTarget);
        if (!Number.isFinite(target) || target <= now.getTime()) {
          const nextTarget = nextCountdownTarget(event, now);
          target = nextTarget.getTime();
          card.dataset.countdownTarget = String(target);
          const date = card.querySelector('[data-countdown-date]');
          if (date) date.textContent = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric' }).format(nextTarget);
        }
        const totalSeconds = Math.max(0, Math.floor((target - now.getTime()) / 1000));
        const values = {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
        Object.entries(values).forEach(([unit, value]) => {
          const element = card.querySelector(`[data-countdown-unit="${unit}"]`);
          if (element) element.textContent = unit === 'days' ? String(value) : String(value).padStart(2, '0');
        });
      });
    }

    function renderRelationshipCountdowns() {
      const grid = document.querySelector('#relationship-countdown-grid');
      if (!grid) return;
      grid.innerHTML = COUNTDOWN_DATA.events.map(countdownMarkup).join('');
      if (window.lucide) window.lucide.createIcons();
      updateRelationshipCountdowns();
    }

    async function renderRelationshipTimeline() {
      const list = document.querySelector('#relationship-timeline-list');
      if (!list) return;
      try {
        const albumPhotos = await getAlbumPhotos();
        const dateEntries = albumPhotos
          .filter((photo) => photo.mediaType !== 'video' && photo.dateObject && Number.isFinite(photo.dateObject.getTime()))
          .sort((a, b) => a.dateObject - b.dateObject);
        const groups = new Map();
        dateEntries.forEach((photo) => {
          const key = `${photo.dateObject.getFullYear()}-${String(photo.dateObject.getMonth() + 1).padStart(2, '0')}`;
          if (!groups.has(key)) groups.set(key, { date: new Date(photo.dateObject.getFullYear(), photo.dateObject.getMonth(), 1), photos: [] });
          groups.get(key).photos.push(photo);
        });

        const getTimelinePlace = (photo) => {
          const saved = photo.location;
          const hasCoordinates = (latitude, longitude) => latitude !== null && latitude !== undefined && latitude !== '' && longitude !== null && longitude !== undefined && longitude !== '' && Number.isFinite(Number(latitude)) && Number.isFinite(Number(longitude)) && Math.abs(Number(latitude)) <= 90 && Math.abs(Number(longitude)) <= 180;
          if (saved && hasCoordinates(saved.latitude, saved.longitude)) {
            return { id: '', name: saved.name || photo.locationName || 'Gemeinsamer Ort', latitude: Number(saved.latitude), longitude: Number(saved.longitude) };
          }
          if (hasCoordinates(photo.latitude, photo.longitude)) {
            return { id: '', name: photo.locationName || 'Gemeinsamer Ort', latitude: Number(photo.latitude), longitude: Number(photo.longitude) };
          }
          const staticIndex = LOCATIONS.findIndex((location) => location.photos?.includes(photo.src));
          if (staticIndex < 0) return null;
          const location = LOCATIONS[staticIndex];
          return { id: `static:${staticIndex}`, name: location.name, latitude: Number(location.coordinates[0]), longitude: Number(location.coordinates[1]) };
        };

        const startEntry = `<article class="timeline-entry timeline-start-entry"><div class="timeline-entry-card"><div class="timeline-entry-heading"><h3>${escapeHtml(COUNTDOWN_DATA.relationshipStartTitle)}</h3><span class="timeline-entry-count">Der Anfang</span></div><p class="timeline-entry-note">${escapeHtml(COUNTDOWN_DATA.relationshipStartNote)}</p><span class="timeline-start-icon"><i data-lucide="heart" aria-hidden="true"></i></span></div></article>`;
        const groupEntries = Array.from(groups.values()).sort((a, b) => a.date - b.date).map((group, groupIndex) => {
          const photos = group.photos;
          const dateLabel = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(group.date);
          const photoButtons = photos.slice(0, 3).map((photo, index) => {
            const alt = photo.caption || photo.alt || 'Gemeinsame Erinnerung';
            const extra = index === 2 && photos.length > 3 ? `<span class="timeline-photo-more">+${photos.length - 2}</span>` : '';
            return `<button class="timeline-photo" type="button" data-timeline-photo="${escapeHtml(photo.key)}" aria-label="Erinnerungsfoto vom ${escapeHtml(albumDateLabel(photo.dateObject))} öffnen"><img src="${escapeHtml(photo.src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">${extra}</button>`;
          }).join('');
          const placesByKey = new Map();
          photos.forEach((photo) => {
            const place = getTimelinePlace(photo);
            if (!place || !Number.isFinite(place.latitude) || !Number.isFinite(place.longitude)) return;
            const key = place.id || `${place.name}|${place.latitude.toFixed(5)}|${place.longitude.toFixed(5)}`;
            if (!placesByKey.has(key)) placesByKey.set(key, { ...place, photoCount: 0 });
            placesByKey.get(key).photoCount += 1;
          });
          const places = Array.from(placesByKey.values());
          const note = places.length
            ? `${photos.length} datierte Erinnerungen, verteilt auf ${places.length} ${places.length === 1 ? 'Ort' : 'Orte'}`
            : `${photos.length} datierte ${photos.length === 1 ? 'Erinnerung' : 'Erinnerungen'} im Album`;
          const placeButtons = places.map((place) => `<button class="timeline-place-button" type="button" data-timeline-place="${escapeHtml(place.id)}" data-latitude="${place.latitude}" data-longitude="${place.longitude}" data-place-name="${escapeHtml(place.name)}" aria-label="${escapeHtml(place.name)} auf der Karte öffnen"><i data-lucide="map-pin" aria-hidden="true"></i><span>${escapeHtml(place.name)}</span><small>${place.photoCount}</small></button>`).join('');
          return `<article class="timeline-entry" style="transition-delay:${Math.min(groupIndex, 10) * 35}ms"><div class="timeline-entry-card"><div class="timeline-entry-heading"><h3>${escapeHtml(dateLabel)}</h3><span class="timeline-entry-count">${photos.length} ${photos.length === 1 ? 'Foto' : 'Fotos'}</span></div><p class="timeline-entry-note">${escapeHtml(note)}</p>${placeButtons ? `<div class="timeline-place-links">${placeButtons}</div>` : ''}<div class="timeline-photo-row">${photoButtons}</div></div></article>`;
        });
        list.innerHTML = '<span class="timeline-route-fill" aria-hidden="true"></span>' + startEntry + (groupEntries.length ? groupEntries.join('') : '<p class="timeline-empty">Sobald eure Bilder ein Datum haben, erscheinen sie hier automatisch – Monat für Monat, direkt aus dem Album.</p>');
        list.querySelectorAll('[data-timeline-photo]').forEach((button) => button.addEventListener('click', () => {
          const photo = albumPhotos.find((entry) => entry.key === button.dataset.timelinePhoto);
          if (photo) openAlbumPhoto(photo);
        }));
        list.querySelectorAll('[data-timeline-place]').forEach((button) => button.addEventListener('click', () => openTimelinePlace(button)));
        list.querySelectorAll('.timeline-photo img').forEach((image) => image.addEventListener('error', () => { image.closest('.timeline-photo')?.remove(); }, { once: true }));
        observeTimelineEntries();
        updateTimelineRouteProgress();
        if (window.lucide) window.lucide.createIcons();
      } catch (_) {
        list.innerHTML = `<article class="timeline-entry timeline-start-entry"><div class="timeline-entry-card"><div class="timeline-entry-heading"><h3>${escapeHtml(COUNTDOWN_DATA.relationshipStartTitle)}</h3><span class="timeline-entry-count">Der Anfang</span></div><p class="timeline-entry-note">${escapeHtml(COUNTDOWN_DATA.relationshipStartNote)}</p><span class="timeline-start-icon"><i data-lucide="heart" aria-hidden="true"></i></span></div></article><p class="timeline-empty">Eure weiteren Kapitel erscheinen hier, sobald Albumdaten verfügbar sind.</p>`;
        if (window.lucide) window.lucide.createIcons();
      }
    }

    let timelineScrollFrame = 0;
    let timelineEntryObserver = null;
    function observeTimelineEntries() {
      const entries = document.querySelectorAll('#relationship-timeline-list .timeline-entry');
      if (!('IntersectionObserver' in window)) {
        entries.forEach((entry) => entry.classList.add('is-visible'));
        return;
      }
      timelineEntryObserver?.disconnect();
      timelineEntryObserver = new IntersectionObserver((observations) => {
        observations.forEach((observation) => {
          if (!observation.isIntersecting) return;
          observation.target.classList.add('is-visible');
          timelineEntryObserver.unobserve(observation.target);
        });
      }, { root: document.querySelector('#main-content'), threshold: .12, rootMargin: '0px 0px -5% 0px' });
      entries.forEach((entry) => timelineEntryObserver.observe(entry));
    }

    function updateTimelineRouteProgress() {
      timelineScrollFrame = 0;
      const list = document.querySelector('#relationship-timeline-list');
      const main = document.querySelector('#main-content');
      if (!list || !main) return;
      const timelineRect = list.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();
      const readingPoint = mainRect.top + main.clientHeight * .72;
      const progress = Math.max(0, Math.min(1, (readingPoint - timelineRect.top - 12) / Math.max(1, list.scrollHeight - 24)));
      list.style.setProperty('--timeline-progress', String(progress));
    }

    function scheduleTimelineRouteProgress() {
      if (timelineScrollFrame) return;
      timelineScrollFrame = window.requestAnimationFrame(updateTimelineRouteProgress);
    }

    document.querySelector('#main-content')?.addEventListener('scroll', scheduleTimelineRouteProgress, { passive: true });
    window.addEventListener('resize', scheduleTimelineRouteProgress, { passive: true });

    function revealCoupon(id, canvas) {
      const card = Array.from(document.querySelectorAll('[data-coupon-card]')).find((item) => item.dataset.couponCard === id);
      if (!card || card.classList.contains('is-revealed')) return;
      card.classList.add('is-revealed');
      if (canvas) canvas.hidden = true;
      card.querySelector('[data-redeem]').hidden = false;
      const state = getDailyCouponState();
      state.revealed = Array.from(new Set([...state.revealed, id]));
      writeRecord(DATES_DATA.dailyStateStorageKey, state);
      launchConfetti();
      if (status) status.textContent = DATES_DATA.couponRevealMessage;
    }

    function setupScratchCanvas(canvas) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width < 20 || canvas.hidden) return;
      const ratio = window.devicePixelRatio || 1;
      const pixelWidth = Math.round(rect.width * ratio);
      const pixelHeight = Math.round(rect.height * ratio);
      if (canvas.dataset.ready === 'true' && canvas.width === pixelWidth && canvas.height === pixelHeight) return;
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      canvas.dataset.ready = 'true';
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, '#d8d9df');
      gradient.addColorStop(0.45, '#92949d');
      gradient.addColorStop(0.7, '#e6e7eb');
      gradient.addColorStop(1, '#a3a5ad');
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = 'rgba(30,30,38,.68)';
      ctx.font = '600 13px "DM Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(DATES_DATA.scratchHint, rect.width / 2, rect.height / 2);
      ctx.globalCompositeOperation = 'destination-out';

      let drawing = false;
      let lastCheck = 0;
      function erasePosition(clientX, clientY) {
        if (!drawing) return;
        const bounds = canvas.getBoundingClientRect();
        const x = (clientX - bounds.left) * (canvas.width / bounds.width) / ratio;
        const y = (clientY - bounds.top) * (canvas.height / bounds.height) / ratio;
        ctx.beginPath();
        ctx.arc(x, y, 19, 0, Math.PI * 2);
        ctx.fill();
        const now = performance.now();
        if (now - lastCheck > 150) {
          lastCheck = now;
          const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
          let transparent = 0;
          let sampled = 0;
          for (let index = 3; index < pixels.length; index += 4 * 20) {
            sampled += 1;
            if (pixels[index] < 70) transparent += 1;
          }
          if (transparent / sampled >= 0.5) revealCoupon(canvas.dataset.scratch, canvas);
        }
      }
      canvas.onpointerdown = (event) => {
        if (event.pointerType === 'touch') return;
        drawing = true;
        canvas.setPointerCapture?.(event.pointerId);
        erasePosition(event.clientX, event.clientY);
      };
      canvas.onpointermove = (event) => { if (event.pointerType !== 'touch') erasePosition(event.clientX, event.clientY); };
      canvas.onpointerup = canvas.onpointercancel = (event) => { if (event.pointerType !== 'touch') drawing = false; };
      canvas.ontouchstart = (event) => {
        event.preventDefault();
        drawing = true;
        const touch = event.touches[0];
        erasePosition(touch.clientX, touch.clientY);
      };
      canvas.ontouchmove = (event) => {
        if (!drawing) return;
        event.preventDefault();
        const touch = event.touches[0];
        erasePosition(touch.clientX, touch.clientY);
      };
      canvas.ontouchend = () => { drawing = false; };
    }

    async function redeemCoupon(id, button) {
      const coupon = DATES_DATA.coupons.find((item) => item.id === id);
      if (!coupon) return;
      const state = getDailyCouponState();
      if (state.ids.includes(id) && !state.redeemed.includes(id)) {
        state.redeemed.push(id);
        writeRecord(DATES_DATA.dailyStateStorageKey, state);
        button.disabled = true;
        button.textContent = DATES_DATA.couponRedeemedLabel;
        if (status) status.textContent = `${coupon.title} ${DATES_DATA.couponRedeemedMessage}`;
        if (DATES_DATA.webhookUrl) {
          try {
            await fetch(DATES_DATA.webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ couponId: id, title: coupon.title, redeemedAt: new Date().toISOString() }) });
          } catch (error) { console.warn('Gutschein-Webhook konnte nicht erreicht werden.', error); }
        }
      }
    }

    document.querySelector('#spin-button')?.addEventListener('click', spinWheel);
    renderCoupons();
    function scheduleCouponDayReset() {
      window.clearTimeout(couponResetTimer);
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      couponResetTimer = window.setTimeout(() => {
        renderedCouponDay = '';
        renderCoupons();
        scheduleCouponDayReset();
      }, Math.max(50, midnight.getTime() - now.getTime() + 50));
    }
    scheduleCouponDayReset();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && getDailyCouponState().day !== renderedCouponDay) renderCoupons();
    });

    // Photo memory game
    const memoryGrid = document.querySelector('#memory-grid');
    const memoryProgress = document.querySelector('#memory-progress');
    const memoryStatus = document.querySelector('#memory-status');
    const memoryFinish = document.querySelector('#memory-finish');
    let memoryDeck = [];
    let memoryOpenCards = [];
    let memoryMatched = new Set();
    let memoryMoves = 0;
    let memoryLocked = false;
    let memoryHideTimer = 0;
    let memoryLastSelection = '';

    function updateMemoryProgress() {
      const pairCount = memoryDeck.length / 2;
      const foundPairs = memoryMatched.size / 2;
      if (memoryProgress) memoryProgress.textContent = foundPairs + ' / ' + pairCount;
      if (memoryStatus && memoryMoves > 0) memoryStatus.textContent = memoryMoves + ' ' + GAME_DATA.moveLabel;
    }

    function renderMemoryBoard() {
      if (!memoryGrid) return;
      memoryGrid.innerHTML = memoryDeck.map((card, index) => [
        '<button class="memory-card" type="button" data-memory-index="' + index + '" aria-label="' + escapeHtml(GAME_DATA.cardBackLabel) + '">',
        '<span class="memory-card-inner">',
        '<span class="memory-card-face memory-card-back" aria-hidden="true"><span>♥</span><i data-lucide="sparkles" aria-hidden="true"></i></span>',
        '<span class="memory-card-face memory-card-front" aria-hidden="true"><img src="' + escapeHtml(card.src) + '" alt="" loading="lazy"><span class="memory-photo-fallback">♥</span></span>',
        '</span></button>'
      ].join('')).join('');
      memoryGrid.querySelectorAll('.memory-card img').forEach((image) => {
        image.addEventListener('error', () => { image.hidden = true; });
      });
      if (window.lucide) window.lucide.createIcons();
    }

    function startMemoryGame() {
      window.clearTimeout(memoryHideTimer);
      const albumPhotos = Array.isArray(PHOTO_ALBUM_DATA)
        ? Array.from(new Map(PHOTO_ALBUM_DATA
          .filter((photo) => photo.mediaType !== 'video' && photo.src)
          .map((photo) => [photo.src, { id: photo.src, src: photo.src, alt: photo.alt || 'Eine gemeinsame Erinnerung' }])).values())
        : [];
      const photoPool = albumPhotos.length ? albumPhotos : GAME_DATA.photos;
      const pairCount = Math.min(GAME_DATA.pairsPerGame, photoPool.length);
      let photos = shuffled(photoPool).slice(0, pairCount);
      let selectionKey = photos.map((photo) => photo.id).sort().join('|');
      let shuffleAttempts = 0;
      while (photoPool.length > pairCount && selectionKey === memoryLastSelection && shuffleAttempts < 12) {
        photos = shuffled(photoPool).slice(0, pairCount);
        selectionKey = photos.map((photo) => photo.id).sort().join('|');
        shuffleAttempts += 1;
      }
      memoryLastSelection = selectionKey;
      memoryDeck = shuffled(photos.flatMap((photo) => [
        { pairId: photo.id, src: photo.src, alt: photo.alt },
        { pairId: photo.id, src: photo.src, alt: photo.alt }
      ]));
      memoryOpenCards = [];
      memoryMatched = new Set();
      memoryMoves = 0;
      memoryLocked = false;
      if (memoryFinish) memoryFinish.hidden = true;
      if (memoryStatus) memoryStatus.textContent = GAME_DATA.initialStatus;
      renderMemoryBoard();
      updateMemoryProgress();
    }

    function finishMemoryGame() {
      if (memoryFinish) memoryFinish.hidden = false;
      const title = document.querySelector('#memory-finish-title');
      const copy = document.querySelector('#memory-finish-copy');
      const bonus = document.querySelector('#memory-bonus-copy');
      if (title) title.textContent = GAME_DATA.winnerTitle;
      if (copy) copy.textContent = GAME_DATA.winnerDescription;
      if (bonus) bonus.textContent = GAME_DATA.bonusMessage;
      if (memoryStatus) memoryStatus.textContent = GAME_DATA.winnerTitle;
      launchConfetti();
      if (window.lucide) window.lucide.createIcons();
    }

    memoryGrid?.addEventListener('click', (event) => {
      const button = event.target instanceof Element ? event.target.closest('.memory-card') : null;
      if (!button || memoryLocked || button.classList.contains('is-flipped') || button.classList.contains('is-matched')) return;
      const index = Number(button.dataset.memoryIndex);
      button.classList.add('is-flipped');
      button.setAttribute('aria-label', 'Aufgedeckte Erinnerung: ' + memoryDeck[index].alt);
      memoryOpenCards.push(index);
      if (memoryOpenCards.length < 2) return;

      memoryMoves += 1;
      const [firstIndex, secondIndex] = memoryOpenCards;
      const firstCard = memoryDeck[firstIndex];
      const secondCard = memoryDeck[secondIndex];
      if (firstCard.pairId === secondCard.pairId) {
        memoryMatched.add(firstIndex);
        memoryMatched.add(secondIndex);
        memoryGrid.children[firstIndex]?.classList.add('is-matched');
        memoryGrid.children[secondIndex]?.classList.add('is-matched');
        memoryGrid.children[firstIndex]?.setAttribute('aria-label', 'Gefundenes Bildpaar');
        memoryGrid.children[secondIndex]?.setAttribute('aria-label', 'Gefundenes Bildpaar');
        memoryOpenCards = [];
        updateMemoryProgress();
        if (memoryMatched.size === memoryDeck.length) finishMemoryGame();
        return;
      }

      memoryLocked = true;
      updateMemoryProgress();
      memoryHideTimer = window.setTimeout(() => {
        [firstIndex, secondIndex].forEach((cardIndex) => {
          const card = memoryGrid.children[cardIndex];
          card?.classList.remove('is-flipped');
          card?.setAttribute('aria-label', GAME_DATA.cardBackLabel);
        });
        memoryOpenCards = [];
        memoryLocked = false;
      }, 850);
    });

    document.querySelector('#memory-restart')?.addEventListener('click', startMemoryGame);
    document.querySelector('#memory-play-again')?.addEventListener('click', startMemoryGame);
    startMemoryGame();

    // Album: build chronological two-page spreads from the photo metadata.
    let albumPageIndex = 0;
    let albumTurnDirection = '';
    let albumModalPhoto = null;
    const albumSelectedPhotos = new Set();
    const albumLocationSelectedPhotos = new Set();
    let albumLocationAssignMode = false;
    let waitingForAlbumMapPoint = false;
    const albumDeleteSelection = new Set();
    let albumDeleteMode = false;
    const albumObjectUrls = new Map();
    let albumDatabasePromise;
    let albumUploadQueue = [];
    let albumRemoteState = null;
    let albumPublishedState = null;
    let albumPublishedLoaded = false;
    let albumCloudReady = false;
    let albumCloudLoading = null;
    let albumCloudSaveTimer = 0;
    let albumCloudSaveQueue = Promise.resolve();
    let albumCloudLastError = '';

    function setAlbumSyncStatus(message, state = '') {
      const indicator = document.querySelector('#album-sync-status');
      if (!indicator) return;
      indicator.textContent = message;
      indicator.dataset.state = state;
    }

    function currentLocalAlbumState() {
      return {
        dateOverrides: readRecord(ALBUM_DATA.dateOverridesStorageKey),
        deletedPhotos: readRecord(ALBUM_DATA.deletedPhotosStorageKey),
        deletedUploadedPhotoIds: Object.keys(readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey)),
        locationOverrides: readRecord('fuer-dich-album-location-overrides'),
        mapHiddenPlaces: readRecord(MAP_HIDDEN_PLACES_KEY),
        mapHiddenPhotoKeys: readRecord(MAP_HIDDEN_PHOTOS_KEY),
        bucketItems: readBucketItems(),
        bucketDeletedIds: readBucketDeletedIds(),
        unlockedLetters: readUnlockedLetters(),
        dailyCouponState: readRecord(DATES_DATA.dailyStateStorageKey),
        uploadedPhotos: albumRemoteState?.uploadedPhotos || []
      };
    }

    function applySharedAlbumState(state) {
      localStorage.setItem(ALBUM_DATA.dateOverridesStorageKey, JSON.stringify(state.dateOverrides || {}));
      localStorage.setItem(ALBUM_DATA.deletedPhotosStorageKey, JSON.stringify(state.deletedPhotos || {}));
      localStorage.setItem('fuer-dich-album-location-overrides', JSON.stringify(state.locationOverrides || {}));
      localStorage.setItem(MAP_HIDDEN_PLACES_KEY, JSON.stringify(state.mapHiddenPlaces || {}));
      localStorage.setItem(MAP_HIDDEN_PHOTOS_KEY, JSON.stringify(state.mapHiddenPhotoKeys || {}));
      const sharedBucketDeletedIds = new Set([...(Array.isArray(state.bucketDeletedIds) ? state.bucketDeletedIds : []), ...readBucketDeletedIds()]);
      const sharedBucketItems = mergeBucketItems(readBucketItems(), Array.isArray(state.bucketItems) ? state.bucketItems : []).filter((item) => !sharedBucketDeletedIds.has(item.id));
      localStorage.setItem(BUCKET_LIST_DELETED_KEY, JSON.stringify(Array.from(sharedBucketDeletedIds)));
      localStorage.setItem(BUCKET_LIST_STORAGE_KEY, JSON.stringify(sharedBucketItems));
      localStorage.setItem(TREASURE_DATA.unlockedStorageKey, JSON.stringify(Array.from(new Set([...readUnlockedLetters(), ...(Array.isArray(state.unlockedLetters) ? state.unlockedLetters : [])]))));
      localStorage.setItem(DATES_DATA.dailyStateStorageKey, JSON.stringify(mergeDailyCouponState(state.dailyCouponState, readRecord(DATES_DATA.dailyStateStorageKey))));
      const localTombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
      for (const id of state.deletedUploadedPhotoIds || []) localTombstones[id] = true;
      localStorage.setItem(ALBUM_DATA.deletedUploadedPhotosStorageKey, JSON.stringify(localTombstones));
    }

    function applyPublishedAlbumState(state) {
      const merge = (key, published) => ({ ...published, ...readRecord(key) });
      localStorage.setItem(ALBUM_DATA.dateOverridesStorageKey, JSON.stringify(merge(ALBUM_DATA.dateOverridesStorageKey, state.dateOverrides || {})));
      localStorage.setItem(ALBUM_DATA.deletedPhotosStorageKey, JSON.stringify(merge(ALBUM_DATA.deletedPhotosStorageKey, state.deletedPhotos || {})));
      localStorage.setItem('fuer-dich-album-location-overrides', JSON.stringify(merge('fuer-dich-album-location-overrides', state.locationOverrides || {})));
      localStorage.setItem(MAP_HIDDEN_PLACES_KEY, JSON.stringify(merge(MAP_HIDDEN_PLACES_KEY, state.mapHiddenPlaces || {})));
      localStorage.setItem(MAP_HIDDEN_PHOTOS_KEY, JSON.stringify(merge(MAP_HIDDEN_PHOTOS_KEY, state.mapHiddenPhotoKeys || {})));
      const sharedBucketDeletedIds = new Set([...(Array.isArray(state.bucketDeletedIds) ? state.bucketDeletedIds : []), ...readBucketDeletedIds()]);
      const sharedBucketItems = mergeBucketItems(Array.isArray(state.bucketItems) ? state.bucketItems : [], readBucketItems()).filter((item) => !sharedBucketDeletedIds.has(item.id));
      localStorage.setItem(BUCKET_LIST_DELETED_KEY, JSON.stringify(Array.from(sharedBucketDeletedIds)));
      localStorage.setItem(BUCKET_LIST_STORAGE_KEY, JSON.stringify(sharedBucketItems));
      localStorage.setItem(TREASURE_DATA.unlockedStorageKey, JSON.stringify(Array.from(new Set([...readUnlockedLetters(), ...(Array.isArray(state.unlockedLetters) ? state.unlockedLetters : [])]))));
      localStorage.setItem(DATES_DATA.dailyStateStorageKey, JSON.stringify(mergeDailyCouponState(state.dailyCouponState, readRecord(DATES_DATA.dailyStateStorageKey))));
      const localTombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
      for (const id of state.deletedUploadedPhotoIds || []) localTombstones[id] = true;
      localStorage.setItem(ALBUM_DATA.deletedUploadedPhotosStorageKey, JSON.stringify(localTombstones));
    }

    async function loadPublishedAlbumState() {
      if (albumPublishedLoaded) return albumPublishedState;
      albumPublishedLoaded = true;
      try {
        const url = new URL('./album-published.json', document.baseURI);
        url.searchParams.set('v', String(Date.now()));
        const response = await fetch(url, { credentials: 'same-origin', cache: 'no-store' });
        if (!response.ok) return null;
        const state = await response.json();
        if (!state || ![1, 2].includes(state.schemaVersion)) return null;
        albumPublishedState = {
          dateOverrides: state.dateOverrides || {},
          deletedPhotos: state.deletedPhotos || {},
          deletedUploadedPhotoIds: state.deletedUploadedPhotoIds || [],
          locationOverrides: state.locationOverrides || {},
          mapHiddenPlaces: state.mapHiddenPlaces || {},
          mapHiddenPhotoKeys: state.mapHiddenPhotoKeys || {},
          bucketItems: Array.isArray(state.bucketItems) ? state.bucketItems : [],
          bucketDeletedIds: Array.isArray(state.bucketDeletedIds) ? state.bucketDeletedIds : [],
          unlockedLetters: Array.isArray(state.unlockedLetters) ? state.unlockedLetters : [],
          dailyCouponState: state.dailyCouponState || null,
          uploadedPhotos: Array.isArray(state.uploadedPhotos) ? state.uploadedPhotos : []
        };
        applyPublishedAlbumState(albumPublishedState);
        return albumPublishedState;
      } catch (_) {
        return null;
      }
    }

    async function saveSharedAlbumStateNow() {
      if (!albumCloudReady) return false;
      const response = await fetch('/api/album/state', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentLocalAlbumState())
      });
      if (!response.ok) throw new Error('Albumänderungen konnten nicht synchronisiert werden.');
      const result = await response.json();
      if (albumRemoteState) albumRemoteState.updatedAt = result.updatedAt;
      return true;
    }

    function scheduleSharedAlbumSave() {
      if (!albumCloudReady) return;
      setAlbumSyncStatus('Änderungen werden mit euren Geräten synchronisiert …', 'saving');
      window.clearTimeout(albumCloudSaveTimer);
      albumCloudSaveTimer = window.setTimeout(() => {
          albumCloudSaveQueue = albumCloudSaveQueue.catch(() => {})
          .then(() => saveSharedAlbumStateNow())
          .then(() => {
            albumCloudLastError = '';
            setAlbumSyncStatus('Auf allen Geräten synchronisiert.', 'ready');
          })
          .catch(() => {
            albumCloudLastError = 'Die Verbindung zum gemeinsamen Speicher ist gerade nicht möglich.';
            setAlbumSyncStatus('Änderungen vorerst nur auf diesem Gerät gespeichert.', 'error');
          });
      }, 250);
    }

    window.__fuerDichSyncAlbumState = scheduleSharedAlbumSave;

    async function uploadPhotoToSharedAlbum(photo) {
      const form = new FormData();
      form.set('id', photo.id);
      form.set('file', photo.blob, photo.fileName || 'erinnerungsfoto');
      form.set('capturedAt', photo.capturedAt || '');
      form.set('locationName', photo.locationName || '');
      form.set('latitude', photo.latitude ?? '');
      form.set('longitude', photo.longitude ?? '');
      form.set('addedAt', photo.addedAt || new Date().toISOString());
      form.set('fileName', photo.fileName || 'erinnerungsfoto');
      const response = await fetch('/api/album/photos', { method: 'POST', credentials: 'same-origin', body: form });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || 'Das Foto konnte nicht in den gemeinsamen Speicher geladen werden.');
      }
      const result = await response.json();
      if (!albumRemoteState) albumRemoteState = { uploadedPhotos: [] };
      const photos = new Map((albumRemoteState.uploadedPhotos || []).map((item) => [item.id, item]));
      photos.set(photo.id, result.photo);
      albumRemoteState.uploadedPhotos = Array.from(photos.values());
      return result.photo;
    }

    async function refreshSharedAlbumState(force = false) {
      if (albumCloudReady && !force) return true;
      if (albumCloudLoading) return albumCloudLoading;
      if (force && albumCloudReady) {
        if (albumCloudSaveTimer) {
          window.clearTimeout(albumCloudSaveTimer);
          albumCloudSaveTimer = 0;
          albumCloudSaveQueue = albumCloudSaveQueue.catch(() => {}).then(() => saveSharedAlbumStateNow());
        }
        await albumCloudSaveQueue.catch(() => {});
      }
      setAlbumSyncStatus('Gemeinsamer Album-Speicher wird geprüft …', 'loading');
      albumCloudLoading = (async () => {
        const response = await fetch('/api/album/state', { credentials: 'same-origin', cache: 'no-store' });
        if (!response.ok) {
          albumCloudReady = false;
          const published = await loadPublishedAlbumState();
          setAlbumSyncStatus(published
            ? 'Veröffentlichte Albumdaten geladen. Änderungen kannst du als Website-Datei herunterladen.'
            : 'Änderungen bleiben auf diesem Gerät, bis du die Website-Datei hochlädst.', published ? 'ready' : 'error');
          return false;
        }
        const remote = await response.json();
        albumCloudLastError = '';
        const local = currentLocalAlbumState();
        if (!remote.exists) {
          albumRemoteState = { ...remote, uploadedPhotos: [] };
          await fetch('/api/album/state', {
            method: 'PUT', credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(local)
          }).then((result) => {
            if (!result.ok) throw new Error('Der gemeinsame Album-Speicher konnte nicht vorbereitet werden.');
          });
          albumRemoteState = { ...remote, ...local, exists: true };
        } else {
          albumRemoteState = remote;
          applySharedAlbumState(remote);
        }
        albumCloudReady = true;

        const tombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
        const remoteIds = new Set((albumRemoteState.uploadedPhotos || []).map((photo) => photo.id));
        const localPhotos = await readUploadedPhotos().catch(() => []);
        for (const photo of localPhotos) {
          if (tombstones[photo.id]) {
            await removeUploadedPhoto(photo.id).catch(() => {});
            continue;
          }
          if (!remoteIds.has(photo.id)) {
            try {
              await uploadPhotoToSharedAlbum(photo);
              remoteIds.add(photo.id);
            } catch (_) {
              albumCloudLastError = 'Mindestens ein Foto wartet noch auf die Synchronisierung.';
            }
          }
        }
        if (Object.keys(tombstones).length) await saveSharedAlbumStateNow().catch(() => {});
        setAlbumSyncStatus(albumCloudLastError || 'Auf allen Geräten synchronisiert.', albumCloudLastError ? 'error' : 'ready');
        return true;
      })().catch(() => {
        albumCloudReady = false;
        setAlbumSyncStatus('Lokal gespeichert. Für alle Geräte: „Änderungen für die Website herunterladen“ und die Datei in GitHub hochladen.', 'local');
        return false;
      }).finally(() => { albumCloudLoading = null; });
      return albumCloudLoading;
    }

    function openAlbumDatabase() {
      if (albumDatabasePromise) return albumDatabasePromise;
      albumDatabasePromise = new Promise((resolve, reject) => {
        if (!window.indexedDB) { reject(new Error('Dieser Browser kann Fotos nicht dauerhaft speichern.')); return; }
        const request = window.indexedDB.open(ALBUM_DATA.databaseName, 1);
        request.onupgradeneeded = () => {
          const database = request.result;
          if (!database.objectStoreNames.contains('photos')) database.createObjectStore('photos', { keyPath: 'id' });
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('Album konnte nicht geöffnet werden.'));
      });
      return albumDatabasePromise;
    }

    async function readUploadedPhotos() {
      const database = await openAlbumDatabase();
      return new Promise((resolve, reject) => {
        const request = database.transaction('photos', 'readonly').objectStore('photos').getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error || new Error('Gespeicherte Fotos konnten nicht gelesen werden.'));
      });
    }

    async function saveUploadedPhoto(photo) {
      const database = await openAlbumDatabase();
      return new Promise((resolve, reject) => {
        const transaction = database.transaction('photos', 'readwrite');
        transaction.objectStore('photos').put(photo);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error('Foto konnte nicht gespeichert werden.'));
        transaction.onabort = () => reject(transaction.error || new Error('Nicht genug Speicherplatz für das Foto.'));
      });
    }

    async function removeUploadedPhoto(id) {
      const database = await openAlbumDatabase();
      return new Promise((resolve, reject) => {
        const transaction = database.transaction('photos', 'readwrite');
        transaction.objectStore('photos').delete(id);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error('Foto konnte nicht gelöscht werden.'));
      });
    }

    function uploadedPhotoUrl(photo) {
      if (photo.dataUrl) return photo.dataUrl;
      if (photo.remote) return '/api/album/photos/' + encodeURIComponent(photo.id);
      if (!albumObjectUrls.has(photo.id)) albumObjectUrls.set(photo.id, URL.createObjectURL(photo.blob));
      return albumObjectUrls.get(photo.id);
    }

    async function getAlbumPhotos() {
      await refreshSharedAlbumState();
      const overrides = readRecord(ALBUM_DATA.dateOverridesStorageKey);
      const deletedPhotos = readRecord(ALBUM_DATA.deletedPhotosStorageKey);
      const locationOverrides = readRecord('fuer-dich-album-location-overrides');
      const staticPhotos = PHOTO_ALBUM_DATA.filter((photo) => !deletedPhotos[photo.src]).map((photo) => ({ ...photo, key: photo.src }));
      const localUploads = await readUploadedPhotos().catch(() => []);
      const localById = new Map(localUploads.map((photo) => [photo.id, photo]));
      const remoteUploads = albumCloudReady ? (albumRemoteState?.uploadedPhotos || []).map((photo) => ({ ...photo, blob: localById.get(photo.id)?.blob, remote: true })) : [];
      const remoteIds = new Set(remoteUploads.map((photo) => photo.id));
      const uploadedTombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
      const publishedUploads = (albumPublishedState?.uploadedPhotos || []).filter((photo) => !remoteIds.has(photo.id) && !uploadedTombstones[photo.id]);
      const knownIds = new Set([...remoteIds, ...publishedUploads.map((photo) => photo.id)]);
      const allUploads = [...remoteUploads.filter((photo) => !uploadedTombstones[photo.id]), ...publishedUploads, ...localUploads.filter((photo) => !knownIds.has(photo.id) && !uploadedTombstones[photo.id])];
      const uploadedPhotos = allUploads.map((photo) => ({
        key: 'uploaded:' + photo.id,
        id: photo.id,
        src: uploadedPhotoUrl(photo),
        mediaType: 'photo',
        alt: photo.caption || 'Hinzugefügtes Erinnerungsfoto',
        caption: photo.caption || 'Ein Moment für uns',
        capturedAt: photo.capturedAt || '',
        locationName: photo.locationName || '',
        latitude: photo.latitude,
        longitude: photo.longitude,
        uploaded: true
      }));
      return [...staticPhotos, ...uploadedPhotos].map((photo) => {
        const key = photo.key || photo.src;
        const manualDateValue = typeof overrides[key] === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(overrides[key])
          ? overrides[key]
          : '';
        const dateSource = manualDateValue || photo.capturedAt || '';
        const dateObject = dateSource
          ? (/^\d{4}-\d{2}-\d{2}$/.test(dateSource) ? new Date(dateSource + 'T12:00:00') : new Date(dateSource))
          : new Date(NaN);
        return { ...photo, key, location: locationOverrides[key] || null, manualDateValue, dateObject };
      }).filter((photo) => photo.src);
    }

    function albumDateLabel(date) {
      return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
    }

    function albumIsoWeek(date) {
      const thursday = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      thursday.setUTCDate(thursday.getUTCDate() + 4 - (thursday.getUTCDay() || 7));
      const yearStart = new Date(Date.UTC(thursday.getUTCFullYear(), 0, 1));
      return Math.ceil((((thursday - yearStart) / 86400000) + 1) / 7);
    }

    function albumCardMarkup(photo, index, selectable) {
      const isVideo = photo.mediaType === 'video';
      const dateLabel = Number.isNaN(photo.dateObject.getTime()) ? '' : albumDateLabel(photo.dateObject);
      const caption = dateLabel
        ? WRAPPED_DATA.dateCaptionPrefix + ' · ' + dateLabel
        : WRAPPED_DATA.dateCaptionPrefix + ' · ' + ALBUM_DATA.undatedLabel;
      const media = isVideo
        ? '<video class="album-tile-video" src="' + escapeHtml(photo.src) + '" muted playsinline preload="metadata" aria-hidden="true"></video>'
        : '<img src="' + escapeHtml(photo.src) + '" alt="" loading="lazy" decoding="async">';
      const hasGps = photo.latitude !== null && photo.latitude !== undefined && photo.latitude !== '' && photo.longitude !== null && photo.longitude !== undefined && photo.longitude !== '' && Number.isFinite(Number(photo.latitude)) && Number.isFinite(Number(photo.longitude));
      const hasLocation = Boolean(photo.location?.name || hasGps || LOCATIONS.some((location) => location.photos?.includes(photo.src)));
      const select = albumLocationAssignMode && !albumDeleteMode
        ? '<label class="album-photo-select is-location-select"><input type="checkbox" data-album-location-select="' + escapeHtml(photo.key) + '" aria-label="Foto für Standort auswählen" ' + (albumLocationSelectedPhotos.has(photo.key) ? 'checked' : '') + '><span></span></label>'
        : selectable && !albumLocationAssignMode && !albumDeleteMode
        ? '<label class="album-photo-select"><input type="checkbox" data-album-select="' + escapeHtml(photo.key) + '" aria-label="Für gemeinsames Datum auswählen" ' + (albumSelectedPhotos.has(photo.key) ? 'checked' : '') + '><span></span></label>'
        : '';
      const deleteSelect = albumDeleteMode
        ? '<label class="album-photo-select is-delete-select"><input type="checkbox" data-album-delete-select="' + escapeHtml(photo.key) + '" aria-label="Zum Löschen auswählen" ' + (albumDeleteSelection.has(photo.key) ? 'checked' : '') + '><span></span></label>'
        : '';
      const deleteClasses = albumDeleteMode ? ' is-delete-mode' + (albumDeleteSelection.has(photo.key) ? ' is-selected' : '') : '';
      return '<div class="album-photo-card' + deleteClasses + '">' + select + deleteSelect +
        '<button class="album-photo-tile" type="button" data-open-photo="' + escapeHtml(photo.key) + '" aria-label="Foto öffnen: ' + escapeHtml(caption) + '">' +
        media + '<span class="album-photo-fallback" aria-hidden="true"><i data-lucide="image"></i></span>' +
        (isVideo ? '<span class="album-play-badge" aria-hidden="true"><i data-lucide="play"></i></span>' : '') +
        '<span class="album-photo-caption">' + escapeHtml(caption) + '</span></button></div>';
    }

    function albumBookPageMarkup(photos, side, selectable) {
      const body = photos.length
        ? '<div class="album-page-photo-grid">' + photos.map((photo, index) => albumCardMarkup(photo, index, selectable)).join('') + '</div>'
        : '<div class="album-blank-page"><i data-lucide="heart" aria-hidden="true"></i><span>' + escapeHtml(ALBUM_DATA.blankPageMessage) + '</span></div>';
      return '<div class="album-book-page ' + side + '"><span class="album-book-page-label">' + (side === 'is-left' ? escapeHtml(ALBUM_DATA.leftPageLabel) : escapeHtml(ALBUM_DATA.rightPageLabel)) + '</span>' + body + '</div>';
    }

    function albumBatchFormMarkup() {
      return '<form class="album-batch-form" data-album-batch-form>' +
        '<label class="album-batch-label" for="album-batch-date">' + escapeHtml(ALBUM_DATA.batchDateLabel) + '</label>' +
        '<p class="album-batch-help">' + escapeHtml(ALBUM_DATA.batchDateHelp) + '</p>' +
        '<div class="album-batch-row"><input id="album-batch-date" class="album-date-input" type="date" />' +
        '<button class="action-button album-batch-save" type="submit"><i data-lucide="calendar-check-2" aria-hidden="true"></i> ' + escapeHtml(ALBUM_DATA.batchSaveLabel) + '</button></div>' +
        '<div class="album-batch-footer"><span class="album-batch-count" data-album-selection-count>0 ' + escapeHtml(ALBUM_DATA.batchSelectedLabel) + '</span>' +
        '<button class="text-button album-batch-clear" type="button" data-album-clear>' + escapeHtml(ALBUM_DATA.batchClearLabel) + '</button></div>' +
        '<p class="album-date-status" data-album-batch-status role="status" aria-live="polite"></p></form>';
    }

    function renderAlbumDeleteControls() {
      const button = document.querySelector('#album-delete-mode-button');
      const controls = document.querySelector('#album-delete-controls');
      if (!button || !controls) return;
      button.classList.toggle('is-active', albumDeleteMode);
      button.setAttribute('aria-pressed', String(albumDeleteMode));
      const label = button.querySelector('span');
      if (label) label.textContent = albumDeleteMode ? 'Löschmodus beenden' : 'Fotos löschen';
      controls.hidden = !albumDeleteMode;
      const count = document.querySelector('#album-delete-count');
      if (count) count.textContent = `${albumDeleteSelection.size} ausgewählt`;
      const confirmButton = document.querySelector('#album-delete-confirm');
      if (confirmButton) confirmButton.disabled = albumDeleteSelection.size === 0;
    }

    function renderAlbumLocationControls() {
      const startButton = document.querySelector('#album-location-mode');
      const count = document.querySelector('#album-location-count');
      const pickButton = document.querySelector('#album-location-pick');
      const cancelButton = document.querySelector('#album-location-cancel');
      if (!startButton || !count || !pickButton || !cancelButton) return;
      startButton.hidden = albumLocationAssignMode;
      count.hidden = !albumLocationAssignMode;
      pickButton.hidden = !albumLocationAssignMode;
      cancelButton.hidden = !albumLocationAssignMode;
      count.textContent = albumLocationSelectedPhotos.size + ' ausgewählt';
      pickButton.disabled = albumLocationSelectedPhotos.size === 0;
      startButton.querySelector('span').textContent = 'Fotos im Album auswählen';
    }

    document.querySelector('#album-content')?.addEventListener('change', (event) => {
      const checkbox = event.target.closest('[data-album-location-select]');
      if (!checkbox) return;
      if (checkbox.checked) albumLocationSelectedPhotos.add(checkbox.dataset.albumLocationSelect);
      else albumLocationSelectedPhotos.delete(checkbox.dataset.albumLocationSelect);
      checkbox.closest('.album-photo-card')?.classList.toggle('is-location-selected', checkbox.checked);
      renderAlbumLocationControls();
    });

    document.querySelector('#album-location-mode')?.addEventListener('click', () => {
      albumLocationAssignMode = true;
      albumLocationSelectedPhotos.clear();
      renderAlbumLocationControls();
      renderAlbumPage();
      document.querySelector('#album-location-tools')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    document.querySelector('#album-location-cancel')?.addEventListener('click', () => {
      albumLocationAssignMode = false;
      waitingForAlbumMapPoint = false;
      albumLocationSelectedPhotos.clear();
      renderAlbumLocationControls();
      renderAlbumPage();
    });

    document.querySelector('#album-location-pick')?.addEventListener('click', () => {
      if (!albumLocationSelectedPhotos.size) return;
      waitingForAlbumMapPoint = true;
      const mapNav = document.querySelector('.nav-btn[data-target="karte"]');
      mapNav?.click();
      const hint = document.querySelector('#map-location-pick-hint');
      if (hint) hint.hidden = false;
      setAlbumSyncStatus('Tippe auf der Karte auf den gewünschten Ort.', 'ready');
    });

    function readBucketItems() {
      try {
        const items = JSON.parse(localStorage.getItem(BUCKET_LIST_STORAGE_KEY) || '[]');
        const deletedIds = new Set(readBucketDeletedIds());
        return Array.isArray(items) ? items.filter((item) => item && typeof item.id === 'string' && typeof item.text === 'string' && !deletedIds.has(item.id)).map((item) => ({ id: item.id, text: item.text, done: Boolean(item.done), createdAt: item.createdAt || '', updatedAt: item.updatedAt || item.createdAt || '' })) : [];
      } catch (_) { return []; }
    }

    function readBucketDeletedIds() {
      try {
        const ids = JSON.parse(localStorage.getItem(BUCKET_LIST_DELETED_KEY) || '[]');
        return Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : [];
      } catch (_) { return []; }
    }

    function mergeBucketItems(...lists) {
      const byId = new Map();
      lists.forEach((items) => (Array.isArray(items) ? items : []).forEach((item) => {
        if (!item || typeof item.id !== 'string' || typeof item.text !== 'string') return;
        const current = byId.get(item.id);
        const itemTime = Date.parse(item.updatedAt || item.createdAt || '') || 0;
        const currentTime = Date.parse(current?.updatedAt || current?.createdAt || '') || 0;
        if (!current || itemTime >= currentTime) byId.set(item.id, { id: item.id, text: item.text, done: Boolean(item.done), createdAt: item.createdAt || '', updatedAt: item.updatedAt || item.createdAt || '' });
      }));
      return Array.from(byId.values()).sort((a, b) => (Date.parse(a.createdAt) || 0) - (Date.parse(b.createdAt) || 0));
    }

    function renderBucketList() {
      const list = document.querySelector('#bucket-list-items');
      const empty = document.querySelector('#bucket-list-empty');
      const count = document.querySelector('#bucket-list-count');
      if (!list || !empty || !count) return;
      const items = readBucketItems();
      const done = items.filter((item) => item.done).length;
      count.textContent = items.length ? `${done} von ${items.length} Wünschen schon erlebt` : 'Noch keine Wünsche eingetragen';
      empty.hidden = items.length > 0;
      list.innerHTML = items.map((item, index) => `<li class="bucket-list-item${item.done ? ' is-done' : ''}" data-bucket-id="${escapeHtml(item.id)}" style="animation-delay:${Math.min(index, 12) * 24}ms">
        <button class="bucket-list-toggle" type="button" data-bucket-toggle="${escapeHtml(item.id)}" aria-pressed="${item.done}" aria-label="${item.done ? 'Als unerledigt markieren' : 'Als erlebt markieren'}"><i data-lucide="check" aria-hidden="true"></i></button>
        <span class="bucket-list-text">${escapeHtml(item.text)}</span>
        <button class="bucket-list-delete" type="button" data-bucket-delete="${escapeHtml(item.id)}" aria-label="Wunsch löschen"><i data-lucide="x" aria-hidden="true"></i></button>
      </li>`).join('');
      if (window.lucide) window.lucide.createIcons();
    }

    document.querySelector('#bucket-list-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('#bucket-list-input');
      const text = input.value.trim();
      if (!text) return;
      const items = readBucketItems();
      const createdAt = new Date().toISOString();
      items.push({ id: window.crypto?.randomUUID?.() || `wish-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, text, done: false, createdAt, updatedAt: createdAt });
      if (!writeRecord(BUCKET_LIST_STORAGE_KEY, items)) return;
      input.value = '';
      renderBucketList();
      document.querySelector('#bucket-list-items li:last-child')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    document.querySelector('#bucket-list-items')?.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-bucket-toggle]');
      const remove = event.target.closest('[data-bucket-delete]');
      if (!toggle && !remove) return;
      const id = (toggle || remove).dataset.bucketToggle || (toggle || remove).dataset.bucketDelete;
      const items = readBucketItems();
      const item = items.find((entry) => entry.id === id);
      if (!item) return;
      if (toggle) {
        item.done = !item.done;
        item.updatedAt = new Date().toISOString();
        if (item.done) {
          const progress = document.querySelector('.bucket-list-progress');
          progress?.classList.add('is-celebrating');
          window.setTimeout(() => progress?.classList.remove('is-celebrating'), 500);
        }
      } else {
        items.splice(items.indexOf(item), 1);
        const deletedIds = readBucketDeletedIds();
        if (!deletedIds.includes(item.id)) deletedIds.push(item.id);
        writeRecord(BUCKET_LIST_DELETED_KEY, deletedIds);
      }
      writeRecord(BUCKET_LIST_STORAGE_KEY, items);
      renderBucketList();
    });
    renderBucketList();

    function openAlbumPhoto(photo) {
      if (!photo) return;
      albumModalPhoto = photo;
      const dialog = document.querySelector('#album-photo-modal');
      const image = document.querySelector('#album-modal-image');
      const video = document.querySelector('#album-modal-video');
      const date = document.querySelector('#album-modal-date');
      const caption = document.querySelector('#album-modal-caption');
      const locationLabel = document.querySelector('#album-modal-location');
      const dateForm = document.querySelector('#album-date-form');
      const dateInput = document.querySelector('#album-date-input');
      const isVideo = photo.mediaType === 'video';
      video.pause();
      video.removeAttribute('src');
      image.hidden = isVideo;
      video.hidden = !isVideo;
      if (isVideo) {
        video.src = photo.src;
        video.load();
      } else {
        image.src = photo.src;
        image.alt = photo.alt || ALBUM_DATA.noCaption;
      }
      const hasDate = !Number.isNaN(photo.dateObject.getTime());
      date.textContent = hasDate ? 'Erinnerung · ' + albumDateLabel(photo.dateObject) : ALBUM_DATA.undatedLabel;
      caption.textContent = photo.caption || ALBUM_DATA.noCaption;
      const savedPlace = photo.location?.name || photo.locationName || LOCATIONS.find((location) => location.photos?.includes(photo.src))?.name || '';
      const hasGps = Number.isFinite(Number(photo.latitude)) && Number.isFinite(Number(photo.longitude));
      locationLabel.hidden = !savedPlace && !hasGps;
      locationLabel.textContent = savedPlace || (hasGps ? 'Auf der Karte markiert' : '');
      dateForm.hidden = hasDate || isVideo;
      dateInput.value = photo.manualDateValue || '';
      document.querySelector('#album-date-status').textContent = '';
      if (!dialog.open) dialog.showModal();
      if (isVideo) video.play().catch(() => {});
    }

    async function renderAlbumPage() {
      const albumContent = document.querySelector('#album-content');
      if (!albumContent) return;
      const albumToolsPanel = document.querySelector('#album-upload-panel');
      const albumToolsParking = document.querySelector('#album-tools-parking');
      if (albumToolsPanel && albumToolsParking && albumContent.contains(albumToolsPanel)) albumToolsParking.append(albumToolsPanel);
      albumContent.classList.remove('is-turn-next', 'is-turn-prev');
      renderAlbumDeleteControls();
      let albumPhotos;
      try { albumPhotos = await getAlbumPhotos(); }
      catch (error) {
        albumContent.innerHTML = '<div class="album-empty"><div><h2 class="font-display">Dein Album wird geöffnet …</h2><p>' + escapeHtml(error.message || 'Der lokale Fotospeicher ist gerade nicht erreichbar.') + '</p></div></div>';
        return;
      }
      const datedPhotos = albumPhotos.filter((photo) => !Number.isNaN(photo.dateObject.getTime())).sort((a, b) => a.dateObject - b.dateObject);
      const undatedPhotos = albumPhotos.filter((photo) => Number.isNaN(photo.dateObject.getTime()));
      const weekGroups = new Map();

      datedPhotos.forEach((photo) => {
        const start = new Date(photo.dateObject.getFullYear(), photo.dateObject.getMonth(), photo.dateObject.getDate());
        start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
        const key = localDayKey(start);
        if (!weekGroups.has(key)) weekGroups.set(key, { start, photos: [] });
        weekGroups.get(key).photos.push(photo);
      });

      const pages = [];
      Array.from(weekGroups.values()).sort((a, b) => a.start - b.start).forEach((week) => {
        const end = new Date(week.start);
        end.setDate(end.getDate() + 6);
        for (let offset = 0; offset < week.photos.length; offset += 8) {
          pages.push({ type: 'week', start: week.start, end, weekNumber: albumIsoWeek(week.start), photos: week.photos.slice(offset, offset + 8), totalCount: week.photos.length });
        }
      });
      // Undated photos stay together on the album's final page, above its photo tools.
      pages.push({ type: 'tools', photos: undatedPhotos, totalCount: undatedPhotos.length });

      albumPageIndex = Math.max(0, Math.min(albumPageIndex, pages.length - 1));
      const jumpLastButton = document.querySelector('#album-jump-last');
      if (jumpLastButton) jumpLastButton.disabled = albumPageIndex === pages.length - 1;
      const page = pages[albumPageIndex];
      const turnDirection = albumTurnDirection;
      albumTurnDirection = '';

      if (page.type === 'tools') {
        const finalPagePhotos = page.photos || [];
        const leftPhotos = finalPagePhotos.slice(0, Math.ceil(finalPagePhotos.length / 2));
        const rightPhotos = finalPagePhotos.slice(leftPhotos.length);
        const finalPhotoPages = finalPagePhotos.length
          ? (albumDeleteMode || albumLocationAssignMode ? '' : albumBatchFormMarkup()) +
            '<div class="album-spread album-final-undated-spread">' + albumBookPageMarkup(leftPhotos, 'is-left', true) + albumBookPageMarkup(rightPhotos, 'is-right', true) + '</div>'
          : '<div class="album-empty album-tools-empty"><div><span class="album-empty-icon"><i data-lucide="images" aria-hidden="true"></i></span><h2 class="font-display">' + escapeHtml(ALBUM_DATA.emptyTitle) + '</h2><p>' + escapeHtml(ALBUM_DATA.emptyDescription) + '</p></div></div>';
        albumContent.innerHTML = '<article class="album-week-page album-tools-page"><header class="album-week-header"><div><span class="pill">LETZTE SEITE · ' + (finalPagePhotos.length ? 'BILDER OHNE DATUM' : 'ALBUM PFLEGEN') + '</span><h2 class="font-display">' + (finalPagePhotos.length ? escapeHtml(ALBUM_DATA.undatedPageLabel) : 'Album pflegen') + '</h2><span class="album-week-range">' + (finalPagePhotos.length ? escapeHtml(ALBUM_DATA.undatedLabel) + ' · Hier sammeln sich alle Bilder ohne Datum.' : 'Hier kannst du eure Fotos ergänzen oder einzelne Erinnerungen entfernen.') + '</span></div><span class="album-week-count">' + (finalPagePhotos.length ? finalPagePhotos.length + ' Fotos' : '<i data-lucide="heart" aria-hidden="true"></i>') + '</span></header>' +
          finalPhotoPages +
          '<div class="album-tools-paper"><div class="album-tools-slot" data-album-tools-slot></div></div>' +
          '<nav class="album-controls" aria-label="Albumseiten"><button class="album-page-button" type="button" data-album-prev>‹ ' + escapeHtml(ALBUM_DATA.previousLabel) + '</button>' +
          '<span class="album-page-indicator">' + (albumPageIndex + 1) + ' / ' + pages.length + '</span>' +
          '<button class="album-page-button" type="button" data-album-next disabled>' + escapeHtml(ALBUM_DATA.nextLabel) + ' ›</button></nav></article>';
        const toolsSlot = albumContent.querySelector('[data-album-tools-slot]');
        if (albumToolsPanel && toolsSlot) toolsSlot.append(albumToolsPanel);
        const finalPhotosByKey = new Map(albumPhotos.map((photo) => [photo.key, photo]));
        albumContent.querySelectorAll('[data-open-photo]').forEach((button) => button.addEventListener('click', () => {
          const photo = finalPhotosByKey.get(button.dataset.openPhoto);
          if (albumDeleteMode && photo) {
            if (albumDeleteSelection.has(photo.key)) albumDeleteSelection.delete(photo.key);
            else albumDeleteSelection.add(photo.key);
            renderAlbumPage();
            return;
          }
          if (albumLocationAssignMode && photo) {
            const checkbox = button.closest('.album-photo-card')?.querySelector('[data-album-location-select]');
            if (checkbox) {
              checkbox.checked = !checkbox.checked;
              checkbox.dispatchEvent(new Event('change', { bubbles: true }));
              button.closest('.album-photo-card')?.classList.toggle('is-location-selected', checkbox.checked);
              return;
            }
          }
          openAlbumPhoto(photo);
        }));
        albumContent.querySelectorAll('.album-photo-tile img').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
        albumContent.querySelectorAll('[data-album-delete-select]').forEach((checkbox) => checkbox.addEventListener('change', () => {
          const key = checkbox.dataset.albumDeleteSelect;
          if (checkbox.checked) albumDeleteSelection.add(key);
          else albumDeleteSelection.delete(key);
          checkbox.closest('.album-photo-card')?.classList.toggle('is-selected', checkbox.checked);
          renderAlbumDeleteControls();
        }));
        albumContent.querySelectorAll('[data-album-select]').forEach((checkbox) => checkbox.addEventListener('change', () => {
          if (checkbox.checked) albumSelectedPhotos.add(checkbox.dataset.albumSelect);
          else albumSelectedPhotos.delete(checkbox.dataset.albumSelect);
          const count = albumContent.querySelector('[data-album-selection-count]');
          if (count) count.textContent = albumSelectedPhotos.size + ' ' + ALBUM_DATA.batchSelectedLabel;
        }));
        albumContent.querySelector('[data-album-clear]')?.addEventListener('click', () => {
          albumSelectedPhotos.clear();
          renderAlbumPage();
        });
        albumContent.querySelector('[data-album-batch-form]')?.addEventListener('submit', (event) => {
          event.preventDefault();
          const dateValue = albumContent.querySelector('#album-batch-date').value;
          const message = albumContent.querySelector('[data-album-batch-status]');
          if (!dateValue || albumSelectedPhotos.size === 0) {
            message.textContent = ALBUM_DATA.batchDateError;
            return;
          }
          const overrides = readRecord(ALBUM_DATA.dateOverridesStorageKey);
          albumSelectedPhotos.forEach((key) => { overrides[key] = dateValue; });
          if (!writeRecord(ALBUM_DATA.dateOverridesStorageKey, overrides)) {
            message.textContent = ALBUM_DATA.batchSaveError;
            return;
          }
          albumSelectedPhotos.clear();
          renderAlbumPage();
        });
        albumContent.querySelector('[data-album-prev]')?.addEventListener('click', () => { albumPageIndex -= 1; albumTurnDirection = 'prev'; renderAlbumPage(); });
        const finalSpread = albumContent.querySelector('.album-final-undated-spread');
        let finalSwipeStart = null;
        finalSpread?.addEventListener('touchstart', (event) => {
          const touch = event.changedTouches[0];
          finalSwipeStart = { x: touch.clientX, y: touch.clientY };
        }, { passive: true });
        finalSpread?.addEventListener('touchend', (event) => {
          if (!finalSwipeStart) return;
          const touch = event.changedTouches[0];
          const deltaX = touch.clientX - finalSwipeStart.x;
          const deltaY = touch.clientY - finalSwipeStart.y;
          if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25 && deltaX > 0) {
            albumContent.querySelector('[data-album-prev]')?.click();
          }
          finalSwipeStart = null;
        }, { passive: true });
        if (window.lucide) window.lucide.createIcons();
        if (turnDirection) {
          albumContent.classList.add('is-turn-' + turnDirection);
          window.setTimeout(() => albumContent.classList.remove('is-turn-' + turnDirection), 1400);
        }
        return;
      }

      if (page.type === 'empty') {
        albumContent.innerHTML = '<article class="album-week-page"><div class="album-empty"><div><span class="album-empty-icon"><i data-lucide="images" aria-hidden="true"></i></span><h2 class="font-display">' + escapeHtml(ALBUM_DATA.emptyTitle) + '</h2><p>' + escapeHtml(ALBUM_DATA.emptyDescription) + '</p></div></div>' +
          '<nav class="album-controls" aria-label="Albumseiten"><span></span><span class="album-page-indicator">' + (albumPageIndex + 1) + ' / ' + pages.length + '</span><button class="album-page-button" type="button" data-album-next>' + escapeHtml(ALBUM_DATA.nextLabel) + ' ›</button></nav></article>';
        albumContent.querySelector('[data-album-next]')?.addEventListener('click', () => { albumPageIndex += 1; albumTurnDirection = 'next'; renderAlbumPage(); });
        if (window.lucide) window.lucide.createIcons();
        if (turnDirection) {
          albumContent.classList.add('is-turn-' + turnDirection);
          window.setTimeout(() => albumContent.classList.remove('is-turn-' + turnDirection), 1400);
        }
        return;
      }
      const isUndated = page.type === 'undated';
      const startText = !isUndated ? new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long' }).format(page.start) : ALBUM_DATA.undatedLabel;
      const endText = !isUndated ? new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric' }).format(page.end) : ALBUM_DATA.undatedLabel;
      const pageHeading = isUndated ? ALBUM_DATA.undatedPageLabel : 'Eine Woche mit uns';
      const pageMarker = isUndated ? 'DATUM IM EXPORT FEHLT' : (ALBUM_DATA.weekPrefix + ' ' + page.weekNumber);
      const leftPhotos = page.photos.slice(0, 4);
      const rightPhotos = page.photos.slice(4, 8);
      const batchForm = isUndated && !albumDeleteMode && !albumLocationAssignMode ? albumBatchFormMarkup() : '';
      albumContent.innerHTML = '<article class="album-week-page"><header class="album-week-header"><div><span class="pill">' + escapeHtml(pageMarker) + '</span>' +
        (isUndated ? '' : (page.totalCount > 8 ? '<span class="pill">DOPPELSEITE</span>' : '')) +
        '<h2 class="font-display">' + escapeHtml(pageHeading) + '</h2><span class="album-week-range">' + escapeHtml(isUndated ? ALBUM_DATA.undatedLabel : startText + ' – ' + endText) + '</span></div>' +
        '<span class="album-week-count">' + page.totalCount + ' Fotos</span></header>' + batchForm +
        '<div class="album-spread">' + albumBookPageMarkup(leftPhotos, 'is-left', isUndated || albumLocationAssignMode) + albumBookPageMarkup(rightPhotos, 'is-right', isUndated || albumLocationAssignMode) + '</div>' +
        '<nav class="album-controls" aria-label="Albumseiten"><button class="album-page-button" type="button" data-album-prev ' + (albumPageIndex === 0 ? 'disabled' : '') + '>‹ ' + escapeHtml(ALBUM_DATA.previousLabel) + '</button>' +
        '<span class="album-page-indicator">' + (albumPageIndex + 1) + ' / ' + pages.length + '</span>' +
        '<button class="album-page-button" type="button" data-album-next ' + (albumPageIndex === pages.length - 1 ? 'disabled' : '') + '>' + escapeHtml(ALBUM_DATA.nextLabel) + ' ›</button></nav></article>';

      const photosBySrc = new Map(albumPhotos.map((photo) => [photo.key, photo]));
      albumContent.querySelectorAll('[data-open-photo]').forEach((button) => button.addEventListener('click', () => {
        const photo = photosBySrc.get(button.dataset.openPhoto);
        if (albumDeleteMode && photo) {
          if (albumDeleteSelection.has(photo.key)) albumDeleteSelection.delete(photo.key);
          else albumDeleteSelection.add(photo.key);
          renderAlbumPage();
          return;
        }
        if (albumLocationAssignMode && photo) {
          const checkbox = button.closest('.album-photo-card')?.querySelector('[data-album-location-select]');
          if (checkbox) {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            button.closest('.album-photo-card')?.classList.toggle('is-location-selected', checkbox.checked);
            return;
          }
        }
        openAlbumPhoto(photo);
      }));
      albumContent.querySelectorAll('.album-photo-tile img').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
      albumContent.querySelectorAll('[data-album-delete-select]').forEach((checkbox) => checkbox.addEventListener('change', () => {
        const key = checkbox.dataset.albumDeleteSelect;
        if (checkbox.checked) albumDeleteSelection.add(key);
        else albumDeleteSelection.delete(key);
        checkbox.closest('.album-photo-card')?.classList.toggle('is-selected', checkbox.checked);
        renderAlbumDeleteControls();
      }));
      albumContent.querySelectorAll('[data-album-select]').forEach((checkbox) => checkbox.addEventListener('change', () => {
        if (checkbox.checked) albumSelectedPhotos.add(checkbox.dataset.albumSelect);
        else albumSelectedPhotos.delete(checkbox.dataset.albumSelect);
        const count = albumContent.querySelector('[data-album-selection-count]');
        if (count) count.textContent = albumSelectedPhotos.size + ' ' + ALBUM_DATA.batchSelectedLabel;
      }));
      albumContent.querySelector('[data-album-clear]')?.addEventListener('click', () => {
        albumSelectedPhotos.clear();
        renderAlbumPage();
      });
      albumContent.querySelector('[data-album-batch-form]')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const dateValue = albumContent.querySelector('#album-batch-date').value;
        const message = albumContent.querySelector('[data-album-batch-status]');
        if (!dateValue || albumSelectedPhotos.size === 0) {
          message.textContent = ALBUM_DATA.batchDateError;
          return;
        }
        const overrides = readRecord(ALBUM_DATA.dateOverridesStorageKey);
        albumSelectedPhotos.forEach((src) => { overrides[src] = dateValue; });
        if (!writeRecord(ALBUM_DATA.dateOverridesStorageKey, overrides)) {
          message.textContent = ALBUM_DATA.batchSaveError;
          return;
        }
        albumSelectedPhotos.clear();
        renderAlbumPage();
      });
      albumContent.querySelector('[data-album-prev]')?.addEventListener('click', () => { albumPageIndex -= 1; albumTurnDirection = 'prev'; renderAlbumPage(); });
      albumContent.querySelector('[data-album-next]')?.addEventListener('click', () => { albumPageIndex += 1; albumTurnDirection = 'next'; renderAlbumPage(); });
      const spread = albumContent.querySelector('.album-spread');
      let swipeStart = null;
      spread?.addEventListener('touchstart', (event) => {
        const touch = event.changedTouches[0];
        swipeStart = { x: touch.clientX, y: touch.clientY };
      }, { passive: true });
      spread?.addEventListener('touchend', (event) => {
        if (!swipeStart) return;
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - swipeStart.x;
        const deltaY = touch.clientY - swipeStart.y;
        if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
          const nextButton = albumContent.querySelector('[data-album-next]');
          const previousButton = albumContent.querySelector('[data-album-prev]');
          if (deltaX < 0 && nextButton && !nextButton.disabled) nextButton.click();
          if (deltaX > 0 && previousButton && !previousButton.disabled) previousButton.click();
        }
        swipeStart = null;
      }, { passive: true });
      if (window.lucide) window.lucide.createIcons();
      if (turnDirection) {
        albumContent.classList.add('is-turn-' + turnDirection);
        window.setTimeout(() => albumContent.classList.remove('is-turn-' + turnDirection), 1400);
      }
    }

    document.querySelector('#album-delete-mode-button')?.addEventListener('click', () => {
      albumDeleteMode = !albumDeleteMode;
      albumDeleteSelection.clear();
      renderAlbumDeleteControls();
      renderAlbumPage();
    });
    document.querySelector('#album-delete-cancel')?.addEventListener('click', () => {
      albumDeleteMode = false;
      albumDeleteSelection.clear();
      renderAlbumDeleteControls();
      renderAlbumPage();
    });
    document.querySelector('#album-delete-confirm')?.addEventListener('click', async (event) => {
      if (!albumDeleteSelection.size) return;
      if (!window.confirm(`${albumDeleteSelection.size} ausgewählte Fotos wirklich löschen?`)) return;
      const button = event.currentTarget;
      button.disabled = true;
      try {
        const allPhotos = await getAlbumPhotos();
        const photosToDelete = allPhotos.filter((photo) => albumDeleteSelection.has(photo.key));
        const deleted = readRecord(ALBUM_DATA.deletedPhotosStorageKey);
        const uploadedTombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
        photosToDelete.filter((photo) => !photo.uploaded).forEach((photo) => { deleted[photo.src] = true; });
        photosToDelete.filter((photo) => photo.uploaded).forEach((photo) => { uploadedTombstones[photo.id] = true; });
        if (!writeRecord(ALBUM_DATA.deletedPhotosStorageKey, deleted)) throw new Error('Die Auswahl konnte nicht auf diesem Gerät gespeichert werden.');
        if (!writeRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey, uploadedTombstones)) throw new Error('Die Auswahl konnte nicht auf diesem Gerät gespeichert werden.');
        for (const photo of photosToDelete.filter((item) => item.uploaded)) {
          await removeUploadedPhoto(photo.id);
          const url = albumObjectUrls.get(photo.id);
          if (url) URL.revokeObjectURL(url);
          albumObjectUrls.delete(photo.id);
        }
        if (albumCloudReady) {
          window.clearTimeout(albumCloudSaveTimer);
          await saveSharedAlbumStateNow().then(() => setAlbumSyncStatus('Löschungen wurden auf allen Geräten übernommen.', 'ready')).catch(() => {
            setAlbumSyncStatus('Löschung lokal gespeichert; Cloud-Synchronisierung wartet auf Verbindung.', 'error');
          });
        }
        albumDeleteSelection.clear();
        albumDeleteMode = false;
        albumPageIndex = 0;
        renderAlbumDeleteControls();
        await renderAlbumPage();
        refreshMemoryLocationPopups();
        await refreshUploadedMapPhotos();
      } catch (error) {
        window.alert(error.message || 'Die ausgewählten Fotos konnten nicht gelöscht werden.');
        renderAlbumDeleteControls();
      }
    });

    document.querySelector('#album-date-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!albumModalPhoto) return;
      const input = document.querySelector('#album-date-input');
      const message = document.querySelector('#album-date-status');
      if (!input.value) { message.textContent = ALBUM_DATA.dateInputError; return; }
      const overrides = readRecord(ALBUM_DATA.dateOverridesStorageKey);
      overrides[albumModalPhoto.key] = input.value;
      if (!writeRecord(ALBUM_DATA.dateOverridesStorageKey, overrides)) { message.textContent = ALBUM_DATA.dateSaveError; return; }
      document.querySelector('#album-photo-modal').close();
      albumSelectedPhotos.delete(albumModalPhoto.key);
      renderAlbumPage();
    });
    document.querySelector('#album-photo-modal')?.addEventListener('close', () => {
      const video = document.querySelector('#album-modal-video');
      video.pause();
      video.removeAttribute('src');
      video.load();
      albumModalPhoto = null;
    });

    async function readJpegExif(file) {
      if (window.exifr?.parse) {
        try {
          const tags = await window.exifr.parse(file);
          const dateValue = tags?.DateTimeOriginal || tags?.CreateDate || tags?.ModifyDate;
          let capturedAt = '';
          if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
            const pad = (value) => String(value).padStart(2, '0');
            capturedAt = `${dateValue.getFullYear()}-${pad(dateValue.getMonth() + 1)}-${pad(dateValue.getDate())}T${pad(dateValue.getHours())}:${pad(dateValue.getMinutes())}:${pad(dateValue.getSeconds())}`;
          } else if (typeof dateValue === 'string') {
            const match = dateValue.match(/^(\d{4})[:\-](\d{2})[:\-](\d{2})[ T](\d{2}:\d{2}:\d{2})/);
            if (match) capturedAt = `${match[1]}-${match[2]}-${match[3]}T${match[4]}`;
          }
          let gps = null;
          if (window.exifr.gps) gps = await window.exifr.gps(file).catch(() => null);
          const latitude = Number(gps?.latitude ?? tags?.latitude ?? tags?.GPSLatitude);
          const longitude = Number(gps?.longitude ?? tags?.longitude ?? tags?.GPSLongitude);
          const result = capturedAt ? { capturedAt } : {};
          if (Number.isFinite(latitude) && Number.isFinite(longitude)) Object.assign(result, { latitude, longitude });
          if (capturedAt || Number.isFinite(latitude) && Number.isFinite(longitude)) return result;
        } catch (_) {
          // Fall back to the small built-in JPEG reader below.
        }
      }
      return file.arrayBuffer().then((buffer) => {
        const view = new DataView(buffer);
        if (view.byteLength < 12 || view.getUint16(0, false) !== 0xffd8) return {};
        let tiffStart = -1;
        for (let offset = 2; offset + 4 < view.byteLength;) {
          if (view.getUint8(offset) !== 0xff) { offset += 1; continue; }
          const marker = view.getUint8(offset + 1);
          if (marker === 0xda || marker === 0xd9) break;
          const length = view.getUint16(offset + 2, false);
          if (length < 2 || offset + 2 + length > view.byteLength) break;
          if (marker === 0xe1 && length >= 8 && view.getUint8(offset + 4) === 0x45 && view.getUint8(offset + 5) === 0x78 && view.getUint8(offset + 6) === 0x69 && view.getUint8(offset + 7) === 0x66) {
            tiffStart = offset + 10;
            break;
          }
          offset += 2 + length;
        }
        if (tiffStart < 0 || tiffStart + 8 >= view.byteLength) return {};
        const byteOrder = view.getUint16(tiffStart, false);
        const little = byteOrder === 0x4949;
        if (!little && byteOrder !== 0x4d4d) return {};
        const u16 = (offset) => view.getUint16(offset, little);
        const u32 = (offset) => view.getUint32(offset, little);
        const readIfd = (relativeOffset) => {
          const ifdOffset = tiffStart + relativeOffset;
          const values = new Map();
          if (ifdOffset + 2 > view.byteLength) return values;
          const count = Math.min(u16(ifdOffset), 512);
          for (let i = 0; i < count; i += 1) {
            const entryOffset = ifdOffset + 2 + i * 12;
            if (entryOffset + 12 > view.byteLength) break;
            values.set(u16(entryOffset), { type: u16(entryOffset + 2), count: u32(entryOffset + 4), valueOffset: entryOffset + 8 });
          }
          return values;
        };
        const dataOffset = (entry) => entry.count * ({ 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8 }[entry.type] || 1) <= 4 ? entry.valueOffset : tiffStart + u32(entry.valueOffset);
        const ascii = (entry) => {
          if (!entry || entry.type !== 2) return '';
          const start = dataOffset(entry);
          if (start < 0 || start + entry.count > view.byteLength) return '';
          return new TextDecoder('ascii').decode(new Uint8Array(buffer, start, entry.count)).replace(/\0.*$/, '').trim();
        };
        const rationals = (entry) => {
          if (!entry || entry.type !== 5) return [];
          const start = dataOffset(entry);
          return Array.from({ length: Math.min(entry.count, 3) }, (_, index) => {
            const position = start + index * 8;
            if (position + 8 > view.byteLength) return 0;
            const denominator = u32(position + 4);
            return denominator ? u32(position) / denominator : 0;
          });
        };
        const mainIfd = readIfd(u32(tiffStart + 4));
        const exifPointer = mainIfd.get(0x8769);
        const gpsPointer = mainIfd.get(0x8825);
        const exifIfd = exifPointer ? readIfd(u32(dataOffset(exifPointer))) : new Map();
        const captureText = ascii(exifIfd.get(0x9003)) || ascii(exifIfd.get(0x9004)) || ascii(mainIfd.get(0x0132));
        const captureMatch = captureText.match(/^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}:\d{2}:\d{2})/);
        const result = captureMatch ? { capturedAt: `${captureMatch[1]}-${captureMatch[2]}-${captureMatch[3]}T${captureMatch[4]}` } : {};
        if (gpsPointer) {
          const gpsIfd = readIfd(u32(dataOffset(gpsPointer)));
          const latitude = rationals(gpsIfd.get(2));
          const longitude = rationals(gpsIfd.get(4));
          if (latitude.length === 3 && longitude.length === 3) {
            const decimal = (parts) => parts[0] + parts[1] / 60 + parts[2] / 3600;
            const lat = decimal(latitude) * (ascii(gpsIfd.get(1)) === 'S' ? -1 : 1);
            const lon = decimal(longitude) * (ascii(gpsIfd.get(3)) === 'W' ? -1 : 1);
            if (Number.isFinite(lat) && Number.isFinite(lon)) Object.assign(result, { latitude: lat, longitude: lon });
          }
        }
        return result;
      }).catch(() => ({}));
    }

    function renderAlbumUploadQueue() {
      const queue = document.querySelector('#album-upload-queue');
      const items = document.querySelector('#album-upload-items');
      const saveButton = document.querySelector('#album-save-uploads');
      if (!queue || !items || !saveButton) return;
      queue.hidden = albumUploadQueue.length === 0;
      saveButton.disabled = albumUploadQueue.length === 0;
      items.innerHTML = albumUploadQueue.map((item, index) => `<article class="album-upload-item" data-upload-item="${index}">
        <img class="album-upload-preview" src="${escapeHtml(item.previewUrl)}" alt="Vorschau: ${escapeHtml(item.file.name)}">
        <div class="album-upload-fields"><strong>${escapeHtml(item.file.name)}</strong>
          <label>Aufnahmedatum<input type="date" data-upload-field="capturedAt" data-upload-index="${index}" value="${escapeHtml(item.capturedAt || '')}"></label>
          <label>Ort<input type="text" data-upload-field="locationName" data-upload-index="${index}" value="${escapeHtml(item.locationName || '')}" placeholder="z. B. unser Lieblingscafé"></label>
          <div class="album-upload-coordinates"><label>Breitengrad<input type="number" step="any" data-upload-field="latitude" data-upload-index="${index}" value="${Number.isFinite(item.latitude) ? item.latitude : ''}" placeholder="GPS"></label><label>Längengrad<input type="number" step="any" data-upload-field="longitude" data-upload-index="${index}" value="${Number.isFinite(item.longitude) ? item.longitude : ''}" placeholder="GPS"></label></div>
          <button class="text-button album-current-location" type="button" data-current-location="${index}"><i data-lucide="locate-fixed" aria-hidden="true"></i> Standort dieses Handys verwenden</button>
          <p class="album-upload-meta-note">${item.hasExifDate || item.hasExifLocation ? 'Bilddaten erkannt und übernommen.' : 'Keine Bilddaten gefunden – Datum und Ort ergänzen. Handy-Standort nur nutzen, wenn du gerade am Erinnerungsort bist.'}</p>
        </div></article>`).join('');
      items.querySelectorAll('[data-upload-field]').forEach((input) => input.addEventListener('input', () => {
        const item = albumUploadQueue[Number(input.dataset.uploadIndex)];
        if (!item) return;
        const field = input.dataset.uploadField;
        item[field] = field === 'latitude' || field === 'longitude' ? (input.value === '' ? null : Number(input.value)) : input.value;
      }));
      items.querySelectorAll('[data-current-location]').forEach((button) => button.addEventListener('click', () => {
        const item = albumUploadQueue[Number(button.dataset.currentLocation)];
        const status = document.querySelector('#album-upload-status');
        if (!item) return;
        if (!navigator.geolocation) { status.textContent = 'Dieser Browser bietet keinen Handy-Standort an.'; return; }
        status.textContent = 'Standort wird abgefragt …';
        navigator.geolocation.getCurrentPosition((position) => {
          item.latitude = position.coords.latitude;
          item.longitude = position.coords.longitude;
          if (!item.locationName) item.locationName = 'Mein aktueller Standort';
          status.textContent = 'Standort für dieses Foto übernommen.';
          renderAlbumUploadQueue();
        }, () => { status.textContent = 'Standort nicht verfügbar. Erlaube den Zugriff oder trage den Ort manuell ein.'; }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
      }));
      if (window.lucide) window.lucide.createIcons();
    }

    async function prepareAlbumUploadFiles(selectedFiles) {
      const status = document.querySelector('#album-upload-status');
      const imagePattern = /\.(?:jpe?g|png|heic|heif|webp|avif)$/i;
      const mimeByExtension = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', heic: 'image/heic', heif: 'image/heif', webp: 'image/webp', avif: 'image/avif' };
      const files = [];
      try {
        for (const selected of selectedFiles) {
          if (/\.zip$/i.test(selected.name) || selected.type === 'application/zip' || selected.type === 'application/x-zip-compressed') {
            if (!window.JSZip) throw new Error('ZIP-Unterstützung wird noch geladen. Lade die Seite neu und versuche es erneut.');
            if (selected.size > 250 * 1024 * 1024) throw new Error('Die ZIP-Datei ist größer als 250 MB. Bitte teile sie in kleinere ZIP-Dateien auf.');
            status.textContent = `„${selected.name}“ wird geöffnet …`;
            const archive = await window.JSZip.loadAsync(selected);
            const entries = Object.values(archive.files).filter((entry) => !entry.dir && imagePattern.test(entry.name) && !/(^|\/)(__MACOSX|\.Trash)(\/|$)/i.test(entry.name) && !/(^|\/)\./.test(entry.name));
            if (entries.length > 300) throw new Error('In der ZIP-Datei sind mehr als 300 Bilder. Bitte teile sie in kleinere ZIP-Dateien auf.');
            let expandedBytes = 0;
            for (const entry of entries) {
              const blob = await entry.async('blob');
              expandedBytes += blob.size;
              if (expandedBytes > 350 * 1024 * 1024) throw new Error('Die entpackten Bilder sind zusammen größer als 350 MB. Bitte verwende kleinere ZIP-Dateien.');
              const baseName = entry.name.split('/').filter(Boolean).pop() || 'Foto';
              const extension = baseName.split('.').pop().toLowerCase();
              files.push(new File([blob], baseName, { type: blob.type || mimeByExtension[extension] || 'application/octet-stream' }));
            }
          } else if (selected.type.startsWith('image/') || imagePattern.test(selected.name)) {
            files.push(selected);
          }
        }
        if (!files.length) throw new Error('In der Auswahl wurden keine unterstützten Bilder gefunden. ZIP-Dateien müssen unverschlüsselt sein.');
        if (files.length > 300) throw new Error('Es wurden mehr als 300 Bilder ausgewählt. Bitte lade sie in kleineren Gruppen hoch.');

        albumUploadQueue.forEach((item) => URL.revokeObjectURL(item.previewUrl));
        albumUploadQueue = [];
        const readyItems = [];
        for (let index = 0; index < files.length; index += 1) {
          const file = files[index];
          status.textContent = `Bilddaten werden gelesen … ${index + 1} von ${files.length}`;
          const metadata = await readJpegExif(file);
          readyItems.push({
            id: window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            file,
            fileName: file.name,
            previewUrl: URL.createObjectURL(file),
            capturedAt: metadata.capturedAt || '',
            locationName: '',
            latitude: metadata.latitude ?? null,
            longitude: metadata.longitude ?? null,
            hasExifDate: Boolean(metadata.capturedAt),
            hasExifLocation: Number.isFinite(metadata.latitude) && Number.isFinite(metadata.longitude)
          });
        }
        albumUploadQueue = readyItems;
        renderAlbumUploadQueue();
        status.textContent = `${files.length} Foto${files.length === 1 ? '' : 's'} bereit. Erkannte Datums- und Ortsdaten kannst du prüfen.`;
      } catch (error) {
        status.textContent = error.message || 'Die Bilder aus der Auswahl konnten nicht gelesen werden.';
      }
    }

    document.querySelector('#album-file-input')?.addEventListener('change', async (event) => {
      await prepareAlbumUploadFiles(Array.from(event.target.files || []));
      event.target.value = '';
    });
    const zipInput = document.querySelector('#album-zip-input');
    const zipDropzone = document.querySelector('#album-zip-dropzone');
    document.querySelector('#album-zip-pick')?.addEventListener('click', () => zipInput?.click());
    zipInput?.addEventListener('change', async (event) => {
      await prepareAlbumUploadFiles(Array.from(event.target.files || []));
      event.target.value = '';
    });
    zipDropzone?.addEventListener('dragover', (event) => {
      event.preventDefault();
      zipDropzone.classList.add('is-dragging');
    });
    zipDropzone?.addEventListener('dragleave', (event) => {
      if (!zipDropzone.contains(event.relatedTarget)) zipDropzone.classList.remove('is-dragging');
    });
    zipDropzone?.addEventListener('drop', async (event) => {
      event.preventDefault();
      zipDropzone.classList.remove('is-dragging');
      await prepareAlbumUploadFiles(Array.from(event.dataTransfer?.files || []));
    });

    document.querySelector('#album-jump-last')?.addEventListener('click', async () => {
      albumPageIndex = Number.MAX_SAFE_INTEGER;
      albumTurnDirection = 'next';
      await renderAlbumPage();
      document.querySelector('#album-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.querySelector('#album-save-uploads')?.addEventListener('click', async (event) => {
      const button = event.currentTarget;
      const status = document.querySelector('#album-upload-status');
      if (!albumUploadQueue.length) return;
      button.disabled = true;
      status.textContent = 'Fotos werden im Album gespeichert …';
      let allPhotosSynced = true;
      try {
        await refreshSharedAlbumState();
        for (const item of albumUploadQueue) {
          const latitude = Number(item.latitude);
          const longitude = Number(item.longitude);
          const hasLocation = Number.isFinite(latitude) && Number.isFinite(longitude) && Math.abs(latitude) <= 90 && Math.abs(longitude) <= 180;
          const savedPhoto = {
            id: item.id,
            blob: item.file,
            fileName: item.file.name,
            caption: 'Ein Moment für uns',
            capturedAt: item.capturedAt || '',
            locationName: item.locationName.trim(),
            latitude: hasLocation ? latitude : null,
            longitude: hasLocation ? longitude : null,
            addedAt: new Date().toISOString()
          };
          await saveUploadedPhoto(savedPhoto);
          if (albumCloudReady) {
            try { await uploadPhotoToSharedAlbum(savedPhoto); }
            catch (_) { allPhotosSynced = false; }
          } else allPhotosSynced = false;
        }
        albumUploadQueue.forEach((item) => URL.revokeObjectURL(item.previewUrl));
        albumUploadQueue = [];
        renderAlbumUploadQueue();
        status.textContent = allPhotosSynced
          ? 'Die Fotos wurden gespeichert und mit euren Geräten synchronisiert.'
          : 'Die Fotos wurden auf diesem Gerät gespeichert. Klicke unten auf „Änderungen für die Website herunterladen“, um sie für alle Geräte zu veröffentlichen.';
        setAlbumSyncStatus(allPhotosSynced ? 'Auf allen Geräten synchronisiert.' : 'Lokal gespeichert. Exportiere die Änderungen für die Website.', allPhotosSynced ? 'ready' : 'local');
        albumPageIndex = 0;
        await renderAlbumPage();
        await refreshUploadedMapPhotos();
      } catch (error) {
        status.textContent = error.message || 'Speichern nicht möglich. Prüfe den freien Speicherplatz auf dem Handy.';
        button.disabled = false;
      }
    });

    async function blobToWebsiteDataUrl(blob) {
      let exportBlob = blob;
      if (window.createImageBitmap && blob.type.startsWith('image/')) {
        try {
          const bitmap = await createImageBitmap(blob);
          const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(bitmap.width * scale));
          canvas.height = Math.max(1, Math.round(bitmap.height * scale));
          canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
          bitmap.close?.();
          exportBlob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.78)) || blob;
        } catch (_) {
          exportBlob = blob;
        }
      }
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Ein Foto konnte nicht für den Website-Export gelesen werden.'));
        reader.readAsDataURL(exportBlob);
      });
    }

    async function collectPortableUploadedPhotos() {
      await refreshSharedAlbumState(true).catch(() => false);
      await loadPublishedAlbumState();
      const localPhotos = await readUploadedPhotos().catch(() => []);
      const localById = new Map(localPhotos.map((photo) => [photo.id, photo]));
      const combined = new Map();
      for (const photo of albumPublishedState?.uploadedPhotos || []) combined.set(photo.id, photo);
      for (const photo of albumRemoteState?.uploadedPhotos || []) combined.set(photo.id, { ...photo, blob: localById.get(photo.id)?.blob || photo.blob, remote: true });
      for (const photo of localPhotos) combined.set(photo.id, photo);

      const tombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
      const uploadedPhotos = [];
      for (const photo of combined.values()) {
        if (tombstones[photo.id]) continue;
        let dataUrl = photo.dataUrl || '';
        if (photo.blob) dataUrl = await blobToWebsiteDataUrl(photo.blob);
        else if (!dataUrl && photo.remote) {
          const response = await fetch('/api/album/photos/' + encodeURIComponent(photo.id), { credentials: 'same-origin', cache: 'no-store' });
          if (!response.ok) throw new Error('Ein synchronisiertes Foto ließ sich nicht lesen. Öffne den Export auf einem Gerät, auf dem es verfügbar ist.');
          dataUrl = await blobToWebsiteDataUrl(await response.blob());
        }
        if (!dataUrl) continue;
        uploadedPhotos.push({
          id: photo.id,
          fileName: photo.fileName || 'erinnerungsfoto.jpg',
          caption: photo.caption || 'Ein Moment für uns',
          capturedAt: photo.capturedAt || '',
          locationName: photo.locationName || '',
          latitude: photo.latitude !== null && photo.latitude !== '' && Number.isFinite(Number(photo.latitude)) ? Number(photo.latitude) : null,
          longitude: photo.longitude !== null && photo.longitude !== '' && Number.isFinite(Number(photo.longitude)) ? Number(photo.longitude) : null,
          addedAt: photo.addedAt || '',
          dataUrl
        });
      }
      return { uploadedPhotos, tombstones };
    }

    function currentPortableState(uploadedPhotos, tombstones) {
      return {
        dateOverrides: readRecord(ALBUM_DATA.dateOverridesStorageKey),
        deletedPhotos: readRecord(ALBUM_DATA.deletedPhotosStorageKey),
        deletedUploadedPhotoIds: Object.keys(tombstones).filter((id) => tombstones[id]),
        locationOverrides: readRecord('fuer-dich-album-location-overrides'),
        mapHiddenPlaces: readRecord(MAP_HIDDEN_PLACES_KEY),
        mapHiddenPhotoKeys: readRecord(MAP_HIDDEN_PHOTOS_KEY),
        bucketItems: readBucketItems(),
        bucketDeletedIds: readBucketDeletedIds(),
        unlockedLetters: readUnlockedLetters(),
        dailyCouponState: readRecord(DATES_DATA.dailyStateStorageKey),
        uploadedPhotos
      };
    }

    async function exportAlbumForWebsite(button) {
      const status = document.querySelector('#album-upload-status');
      button.disabled = true;
      status.textContent = 'Albumänderungen werden für die Website vorbereitet …';
      try {
        const { uploadedPhotos, tombstones } = await collectPortableUploadedPhotos();
        const exportData = {
          schemaVersion: 2,
          updatedAt: new Date().toISOString(),
          ...currentPortableState(uploadedPhotos, tombstones)
        };
        const json = JSON.stringify(exportData, null, 2);
        const sizeLimit = 24 * 1024 * 1024;
        if (new Blob([json]).size > sizeLimit) throw new Error('Die Exportdatei ist größer als 24 MB. Lade weniger neue Fotos auf einmal ins Album oder exportiere sie in kleineren Gruppen.');
        const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'album-published.json';
        link.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 1500);
        status.textContent = `Datei erstellt: ${uploadedPhotos.length} Fotos sowie Album-, Tresor-, Gutschein- und Wunschlistenstand. Lade „album-published.json“ in GitHub hoch.`;
        setAlbumSyncStatus('Website-Datei erstellt. Nach dem GitHub-Upload erscheinen die Änderungen auf allen Geräten.', 'ready');
      } catch (error) {
        status.textContent = error.message || 'Die Website-Datei konnte nicht erstellt werden.';
      } finally {
        button.disabled = false;
      }
    }

    document.querySelector('#album-export-website')?.addEventListener('click', (event) => exportAlbumForWebsite(event.currentTarget));

    async function exportDeviceBackup(button) {
      const backupStatus = document.querySelector('#album-backup-status');
      button.disabled = true;
      backupStatus.textContent = 'Sicherung mit den vorhandenen Fotos wird erstellt …';
      try {
        const { uploadedPhotos, tombstones } = await collectPortableUploadedPhotos();
        const backup = {
          format: 'fuer-dich-device-backup',
          schemaVersion: 1,
          createdAt: new Date().toISOString(),
          appState: currentPortableState(uploadedPhotos, tombstones)
        };
        const json = JSON.stringify(backup, null, 2);
        const size = new Blob([json]).size;
        if (size > 24 * 1024 * 1024) throw new Error('Die Sicherung ist größer als 24 MB. Für eine kleinere Datei exportiere sie auf einem Gerät, auf dem die Fotos bereits veröffentlicht sind.');
        const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'fuer-dich-sicherung.json';
        link.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 1500);
        backupStatus.textContent = `Sicherung bereit: ${uploadedPhotos.length} eigene Fotos und eure App-Daten. Die Datei kannst du auf einem anderen Gerät hier übernehmen.`;
      } catch (error) {
        backupStatus.textContent = error.message || 'Die Sicherung konnte nicht erstellt werden.';
      } finally {
        button.disabled = false;
      }
    }

    async function importDeviceBackup(file) {
      const backupStatus = document.querySelector('#album-backup-status');
      if (!file) return;
      backupStatus.textContent = 'Sicherung wird eingelesen und mit diesem Gerät zusammengeführt …';
      try {
        if (file.size > 24 * 1024 * 1024) throw new Error('Die Sicherungsdatei ist größer als 24 MB.');
        const backup = JSON.parse(await file.text());
        const incoming = backup?.appState;
        if (backup?.format !== 'fuer-dich-device-backup' || backup.schemaVersion !== 1 || !incoming || typeof incoming !== 'object' || Array.isArray(incoming)) {
          throw new Error('Diese Datei ist keine gültige „Für Dich“-Sicherung.');
        }

        const mergeRecord = (key, value) => {
          const clean = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
          if (!writeRecord(key, { ...readRecord(key), ...clean })) throw new Error('App-Daten konnten nicht dauerhaft gespeichert werden.');
        };
        mergeRecord(ALBUM_DATA.dateOverridesStorageKey, incoming.dateOverrides);
        mergeRecord(ALBUM_DATA.deletedPhotosStorageKey, incoming.deletedPhotos);
        mergeRecord('fuer-dich-album-location-overrides', incoming.locationOverrides);
        mergeRecord(MAP_HIDDEN_PLACES_KEY, incoming.mapHiddenPlaces);
        mergeRecord(MAP_HIDDEN_PHOTOS_KEY, incoming.mapHiddenPhotoKeys);

        const deletedUploadIds = new Set([
          ...Object.keys(readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey)),
          ...(Array.isArray(incoming.deletedUploadedPhotoIds) ? incoming.deletedUploadedPhotoIds.filter((id) => typeof id === 'string') : [])
        ]);
        const tombstones = Object.fromEntries(Array.from(deletedUploadIds, (id) => [id, true]));
        if (!writeRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey, tombstones)) throw new Error('Fotolöschungen konnten nicht gespeichert werden.');

        const deletedBucketIds = new Set([...readBucketDeletedIds(), ...(Array.isArray(incoming.bucketDeletedIds) ? incoming.bucketDeletedIds.filter((id) => typeof id === 'string') : [])]);
        const bucketItems = mergeBucketItems(readBucketItems(), incoming.bucketItems).filter((item) => !deletedBucketIds.has(item.id));
        if (!writeRecord(BUCKET_LIST_DELETED_KEY, Array.from(deletedBucketIds)) || !writeRecord(BUCKET_LIST_STORAGE_KEY, bucketItems)) throw new Error('Die Wunschliste konnte nicht gespeichert werden.');

        const unlocked = new Set([...readUnlockedLetters(), ...(Array.isArray(incoming.unlockedLetters) ? incoming.unlockedLetters.filter((id) => typeof id === 'string') : [])]);
        if (!saveUnlockedLetters(Array.from(unlocked))) throw new Error('Die Tresor-Briefe konnten nicht gespeichert werden.');
        if (!writeRecord(DATES_DATA.dailyStateStorageKey, mergeDailyCouponState(incoming.dailyCouponState, readRecord(DATES_DATA.dailyStateStorageKey)))) throw new Error('Der Gutscheinstand konnte nicht gespeichert werden.');

        let restoredPhotoCount = 0;
        for (const photo of Array.isArray(incoming.uploadedPhotos) ? incoming.uploadedPhotos : []) {
          if (!photo || typeof photo.id !== 'string' || !/^[\w-]{1,100}$/.test(photo.id) || typeof photo.dataUrl !== 'string' || !/^data:(image|video)\//i.test(photo.dataUrl)) continue;
          if (tombstones[photo.id]) continue;
          const blob = await fetch(photo.dataUrl).then((response) => response.blob());
          await saveUploadedPhoto({
            id: photo.id,
            blob,
            fileName: photo.fileName || 'erinnerungsfoto.jpg',
            caption: photo.caption || 'Ein Moment für uns',
            capturedAt: photo.capturedAt || '',
            locationName: photo.locationName || '',
            latitude: photo.latitude ?? null,
            longitude: photo.longitude ?? null,
            addedAt: photo.addedAt || ''
          });
          restoredPhotoCount += 1;
        }

        dailyCouponMemoryState = null;
        renderedCouponDay = '';
        renderCoupons();
        renderBucketList();
        renderTreasureCards();
        albumPageIndex = Number.MAX_SAFE_INTEGER;
        await renderAlbumPage();
        await refreshUploadedMapPhotos();
        if (albumCloudReady) await refreshSharedAlbumState(true);
        backupStatus.textContent = `Übernommen: ${restoredPhotoCount} eigene Fotos, Albumdaten, Orte, Wunschliste, geöffnete Briefe und Gutscheine. Für alle Geräte: Website-Datei erstellen und in GitHub veröffentlichen.`;
      } catch (error) {
        backupStatus.textContent = error.message || 'Diese Sicherung konnte nicht übernommen werden.';
      }
    }

    document.querySelector('#album-backup-export')?.addEventListener('click', (event) => exportDeviceBackup(event.currentTarget));
    document.querySelector('#album-backup-input')?.addEventListener('change', (event) => {
      importDeviceBackup(event.currentTarget.files?.[0]);
      event.currentTarget.value = '';
    });

    // Open-When vault: restore its cards, date countdowns and password letters.
    const treasureGrid = document.querySelector('#treasure-grid');
    const treasureModal = document.querySelector('#treasure-modal');
    let activeTreasureLetter = null;
    let memoryMap = null;
    let uploadedPhotoLayer = null;
    const mapManagedPlaces = new Map();
    let pendingMapPlaceMove = null;
    const memoryLocationMarkers = [];

    function readUnlockedLetters() {
      try {
        const saved = JSON.parse(localStorage.getItem(TREASURE_DATA.unlockedStorageKey) || '[]');
        return Array.isArray(saved) ? saved.filter((id) => typeof id === 'string') : [];
      } catch (_) { return []; }
    }

    function saveUnlockedLetters(ids) {
      try {
        localStorage.setItem(TREASURE_DATA.unlockedStorageKey, JSON.stringify(Array.from(new Set(ids))));
        window.__fuerDichSyncAlbumState?.();
        return true;
      } catch (_) { return false; }
    }

    function treasureIsDateUnlocked(letter) {
      return letter.type === 'date' && Date.now() >= new Date(letter.unlockAt).getTime();
    }

    function treasureIsOpen(letter) {
      return readUnlockedLetters().includes(letter.id) || treasureIsDateUnlocked(letter);
    }

    function formatTreasureTime(milliseconds) {
      const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${days} Tage · ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function renderTreasureCards() {
      if (!treasureGrid) return;
      const unlockedIds = readUnlockedLetters();
      treasureGrid.innerHTML = TREASURE_DATA.letters.map((letter) => {
        const open = unlockedIds.includes(letter.id) || treasureIsDateUnlocked(letter);
        const dateLocked = letter.type === 'date' && !open;
        const subtitle = letter.type === 'password'
          ? (open ? TREASURE_DATA.openLetterLabel : TREASURE_DATA.passwordLockedLabel)
          : (open ? TREASURE_DATA.openLetterLabel : letter.lockHint);
        const countdown = dateLocked ? `<span class="treasure-card-countdown" data-treasure-countdown="${escapeHtml(letter.id)}"></span>` : '';
        return `<button class="treasure-card glass-card${open ? ' is-open' : ''}" type="button" data-treasure-id="${escapeHtml(letter.id)}">
          <span class="treasure-icon"><i data-lucide="${escapeHtml(open ? 'mail-open' : letter.icon)}" aria-hidden="true"></i></span>
          <strong class="treasure-card-title">${escapeHtml(letter.title)}</strong>
          <span class="treasure-card-subtitle">${escapeHtml(subtitle)}</span>${countdown}
        </button>`;
      }).join('');
      treasureGrid.querySelectorAll('[data-treasure-id]').forEach((button) => button.addEventListener('click', () => {
        const letter = TREASURE_DATA.letters.find((item) => item.id === button.dataset.treasureId);
        if (letter) openTreasureLetter(letter);
      }));
      if (window.lucide) window.lucide.createIcons();
      updateTreasureCountdowns();
    }

    function showTreasureLetter(letter) {
      document.querySelector('#treasure-lock-view').hidden = true;
      document.querySelector('#treasure-letter-view').hidden = false;
      document.querySelector('#treasure-letter-eyebrow').textContent = TREASURE_DATA.letterEyebrow;
      document.querySelector('#treasure-letter-title').textContent = letter.title;
      document.querySelector('#treasure-letter').textContent = letter.letter;
      document.querySelector('#treasure-answer-form').hidden = true;
      document.querySelector('#treasure-countdown').hidden = true;
    }

    function openTreasureLetter(letter) {
      activeTreasureLetter = letter;
      document.querySelector('#treasure-lock-view').hidden = false;
      document.querySelector('#treasure-letter-view').hidden = true;
      document.querySelector('#treasure-modal-eyebrow').textContent = TREASURE_DATA.sectionEyebrow;
      document.querySelector('#treasure-modal-title').textContent = letter.title;
      document.querySelector('#treasure-error').textContent = '';
      const answerForm = document.querySelector('#treasure-answer-form');
      const answerInput = document.querySelector('#treasure-answer');
      const countdown = document.querySelector('#treasure-countdown');
      const isDateLocked = letter.type === 'date' && !treasureIsDateUnlocked(letter) && !readUnlockedLetters().includes(letter.id);
      const isPasswordLocked = letter.type === 'password' && !readUnlockedLetters().includes(letter.id);

      if (isDateLocked) {
        document.querySelector('#treasure-modal-prompt').textContent = letter.lockHint;
        answerForm.hidden = true;
        countdown.hidden = false;
      } else if (isPasswordLocked) {
        document.querySelector('#treasure-modal-prompt').textContent = `${letter.question} ${letter.hint || ''}`.trim();
        answerForm.hidden = false;
        countdown.hidden = true;
        answerInput.value = '';
      } else {
        showTreasureLetter(letter);
      }

      if (!treasureModal.open) treasureModal.showModal();
      updateTreasureCountdowns();
      if (isPasswordLocked) answerInput.focus();
    }

    document.querySelector('#treasure-answer-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!activeTreasureLetter || activeTreasureLetter.type !== 'password') return;
      const input = document.querySelector('#treasure-answer');
      const normalizeAnswer = (value) => value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
      const submitted = normalizeAnswer(input.value);
      const acceptedAnswers = activeTreasureLetter.answers.map(normalizeAnswer);
      if (!acceptedAnswers.includes(submitted)) {
        document.querySelector('#treasure-error').textContent = TREASURE_DATA.wrongAnswer;
        input.select();
        return;
      }
      const wasSaved = saveUnlockedLetters([...readUnlockedLetters(), activeTreasureLetter.id]);
      if (!wasSaved) {
        document.querySelector('#treasure-error').textContent = 'Der Brief ließ sich gerade nicht speichern. Versuch es bitte noch einmal.';
        return;
      }
      const letter = activeTreasureLetter;
      showTreasureLetter(letter);
      renderTreasureCards();
      launchConfetti();
    });

    function updateTreasureCountdowns() {
      document.querySelectorAll('[data-treasure-countdown]').forEach((element) => {
        const letter = TREASURE_DATA.letters.find((item) => item.id === element.dataset.treasureCountdown);
        if (!letter) return;
        const remaining = new Date(letter.unlockAt).getTime() - Date.now();
        const card = element.closest('[data-treasure-id]');
        if (remaining <= 0) {
          element.textContent = 'Jetzt für dich geöffnet';
          card?.classList.add('is-open');
          const subtitle = card?.querySelector('.treasure-card-subtitle');
          if (subtitle) subtitle.textContent = TREASURE_DATA.openLetterLabel;
          const icon = card?.querySelector('.treasure-icon i');
          if (icon && window.lucide) {
            icon.setAttribute('data-lucide', 'mail-open');
            window.lucide.createIcons();
          }
        } else element.textContent = formatTreasureTime(remaining);
      });

      if (activeTreasureLetter?.type === 'date' && treasureModal?.open) {
        const remaining = new Date(activeTreasureLetter.unlockAt).getTime() - Date.now();
        const countdown = document.querySelector('#treasure-countdown');
        if (remaining <= 0 && !document.querySelector('#treasure-lock-view').hidden) {
          const letter = activeTreasureLetter;
          const ids = readUnlockedLetters();
          saveUnlockedLetters([...ids, letter.id]);
          showTreasureLetter(letter);
          renderTreasureCards();
        } else if (countdown && !countdown.hidden) countdown.textContent = `Noch ${formatTreasureTime(remaining)}`;
      }
    }

    document.querySelector('#treasure-modal')?.addEventListener('close', () => { activeTreasureLetter = null; });
    renderTreasureCards();
    window.setInterval(updateTreasureCountdowns, 1000);
    window.setInterval(updateRelationshipCountdowns, 1000);

    // Leaflet satellite map with a searchable, manageable place directory.
    function renderMapPlaceDirectory() {
      const list = document.querySelector('#map-place-list');
      const total = document.querySelector('#map-place-total');
      if (!list || !total) return;
      const query = (document.querySelector('#map-place-search')?.value || '').trim().toLocaleLowerCase('de-DE');
      const places = Array.from(mapManagedPlaces.values()).sort((a, b) => a.name.localeCompare(b.name, 'de'));
      total.textContent = `${places.length} ${places.length === 1 ? 'Ort' : 'Orte'}`;
      const filtered = places.filter((place) => `${place.name} ${place.memory || ''}`.toLocaleLowerCase('de-DE').includes(query));
      if (!filtered.length) {
        list.innerHTML = `<p class="map-place-empty">${query ? 'Keine passenden Orte gefunden.' : 'Noch keine Orte auf der Karte.'}</p>`;
        return;
      }
      const actions = [['rename', 'Umbenennen'], ['move', 'Verschieben'], ['merge', 'Zusammenführen'], ['delete', 'Löschen']];
      list.innerHTML = filtered.map((place) => `<article class="map-place-row">
        <span class="map-place-preview"><i data-lucide="heart" aria-hidden="true"></i><img src="${escapeHtml(place.previewSrc || '')}" alt="" loading="lazy" decoding="async"></span>
        <div class="map-place-row-body"><button class="map-place-row-open" type="button" data-map-place-open="${escapeHtml(place.id)}"><span class="map-place-row-title">${escapeHtml(place.name)}</span><span class="map-place-row-meta">${place.photoKeys?.length || 0} Fotos · ${Number(place.latitude).toFixed(4)}, ${Number(place.longitude).toFixed(4)}</span></button>
          <div class="map-place-row-actions">${actions.map(([action, label]) => `<button type="button" data-map-place-action="${action}" data-map-place-id="${escapeHtml(place.id)}">${label}</button>`).join('')}</div>
        </div>
      </article>`).join('');
      list.querySelectorAll('.map-place-preview img').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
      if (window.lucide) window.lucide.createIcons();
    }

    function mapPlacePopupMarkup(place, photos) {
      const gallery = photos.map((photo) => `<img class="memory-popup-photo" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || 'Gemeinsames Erinnerungsfoto')}" loading="lazy" decoding="async">`).join('');
      const actions = `<div class="map-place-actions"><button type="button" data-map-place-action="rename" data-map-place-id="${escapeHtml(place.id)}">Umbenennen</button><button type="button" data-map-place-action="move" data-map-place-id="${escapeHtml(place.id)}">Verschieben</button><button type="button" data-map-place-action="merge" data-map-place-id="${escapeHtml(place.id)}">Zusammenführen</button><button type="button" data-map-place-action="delete" data-map-place-id="${escapeHtml(place.id)}">Löschen</button></div>`;
      return `<div class="memory-popup"><strong>${escapeHtml(place.name)}</strong><small>${photos.length} Erinnerungsfotos</small>${place.memory ? `<p>${escapeHtml(place.memory)}</p>` : ''}<div class="memory-popup-gallery">${gallery}</div>${actions}</div>`;
    }

    function saveMapPlacePhotos(place, name, latitude, longitude) {
      const overrides = readRecord('fuer-dich-album-location-overrides');
      const keys = Array.from(new Set(place.photoKeys || []));
      keys.forEach((key) => {
        overrides[key] = { name, latitude, longitude, coordinates: [latitude, longitude] };
      });
      if (!writeRecord('fuer-dich-album-location-overrides', overrides)) return false;
      if (place.staticId) {
        const hiddenPlaces = readRecord(MAP_HIDDEN_PLACES_KEY);
        hiddenPlaces[place.staticId] = true;
        writeRecord(MAP_HIDDEN_PLACES_KEY, hiddenPlaces);
      }
      return true;
    }

    function refreshAllMapPlaces() {
      refreshMemoryLocationPopups();
      refreshUploadedMapPhotos();
    }

    function openTimelinePlace(button) {
      const latitude = Number(button.dataset.latitude);
      const longitude = Number(button.dataset.longitude);
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || !window.L) return;
      const requestedId = button.dataset.timelinePlace;
      const requestedName = button.dataset.placeName || 'Unser Erinnerungsort';
      showTab('karte');
      initializeMap();
      let attempts = 0;
      const findAndOpenPin = () => {
        if (!memoryMap) return;
        const places = Array.from(mapManagedPlaces.values());
        const place = places.find((item) => requestedId && item.id === requestedId)
          || places.find((item) => Math.abs(item.latitude - latitude) < .0005 && Math.abs(item.longitude - longitude) < .0005)
          || places.find((item) => item.name.localeCompare(requestedName, 'de', { sensitivity: 'base' }) === 0);
        if (place?.marker) {
          window.setTimeout(() => {
            place.marker.openPopup();
            const heart = place.marker.getElement()?.querySelector('.heart-marker');
            if (heart) {
              heart.classList.remove('timeline-pin-arrive');
              void heart.offsetWidth;
              heart.classList.add('timeline-pin-arrive');
              window.setTimeout(() => heart.classList.remove('timeline-pin-arrive'), 1000);
            }
          }, 700);
        } else if (attempts < 18) {
          attempts += 1;
          window.setTimeout(findAndOpenPin, 180);
        }
      };
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        if (!memoryMap) return;
        memoryMap.invalidateSize(true);
        memoryMap.setView([latitude, longitude], Math.max(memoryMap.getZoom(), 13), { animate: true, duration: .7 });
        window.setTimeout(findAndOpenPin, 720);
      }));
    }

    function handleMapPlaceAction(event) {
      const button = event.target.closest('[data-map-place-action]');
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      window.L?.DomEvent?.stopPropagation(event);
      const place = mapManagedPlaces.get(button.dataset.mapPlaceId);
      if (!place) return;
      const action = button.dataset.mapPlaceAction;
      if (action === 'rename') {
        const newName = window.prompt('Neuer Name für diesen Ort:', place.name);
        if (newName === null || !newName.trim()) return;
        if (!saveMapPlacePhotos(place, newName.trim(), place.latitude, place.longitude)) return;
        refreshAllMapPlaces();
      } else if (action === 'move') {
        pendingMapPlaceMove = place.id;
        const hint = document.querySelector('#map-location-pick-hint');
        const copy = document.querySelector('#map-location-pick-copy');
        if (copy) copy.textContent = `Tippe auf die Karte, um „${place.name}“ zu verschieben.`;
        if (hint) hint.hidden = false;
        memoryMap?.closePopup();
      } else if (action === 'merge') {
        const targets = Array.from(mapManagedPlaces.values()).filter((item) => item.id !== place.id);
        if (!targets.length) { window.alert('Es gibt aktuell keinen anderen Ort zum Zusammenführen.'); return; }
        const choice = window.prompt('Mit welchem Ort zusammenführen? Gib die Nummer ein:\n' + targets.map((item, index) => `${index + 1}: ${item.name}`).join('\n'));
        if (choice === null) return;
        const target = targets[Number(choice) - 1];
        if (!target) { window.alert('Diese Nummer gibt es nicht.'); return; }
        const merged = { ...target, photoKeys: Array.from(new Set([...(target.photoKeys || []), ...(place.photoKeys || [])])) };
        if (!saveMapPlacePhotos(merged, target.name, target.latitude, target.longitude)) return;
        [place, target].forEach((item) => {
          if (!item.staticId) return;
          const hiddenPlaces = readRecord(MAP_HIDDEN_PLACES_KEY);
          hiddenPlaces[item.staticId] = true;
          writeRecord(MAP_HIDDEN_PLACES_KEY, hiddenPlaces);
        });
        refreshAllMapPlaces();
      } else if (action === 'delete') {
        if (!window.confirm(`Diesen Kartenort „${place.name}“ löschen? Die Fotos bleiben im Album.`)) return;
        if (place.staticId) {
          const hiddenPlaces = readRecord(MAP_HIDDEN_PLACES_KEY);
          hiddenPlaces[place.staticId] = true;
          writeRecord(MAP_HIDDEN_PLACES_KEY, hiddenPlaces);
        }
        const hiddenPhotos = readRecord(MAP_HIDDEN_PHOTOS_KEY);
        (place.photoKeys || []).forEach((key) => { hiddenPhotos[key] = true; });
        writeRecord(MAP_HIDDEN_PHOTOS_KEY, hiddenPhotos);
        refreshAllMapPlaces();
      }
    }

    function refreshMemoryLocationPopups() {
      const deleted = readRecord(ALBUM_DATA.deletedPhotosStorageKey);
      const hiddenPlaces = readRecord(MAP_HIDDEN_PLACES_KEY);
      memoryLocationMarkers.forEach(({ marker, location }) => {
        const placeId = location.placeId;
        if (hiddenPlaces[placeId]) { marker.remove(); mapManagedPlaces.delete(placeId); return; }
        marker.addTo(memoryMap);
        const photos = (location.photos || []).filter((src) => !deleted[src]);
        const latitude = Number(location.coordinates[0]);
        const longitude = Number(location.coordinates[1]);
        const place = { id: placeId, staticId: placeId, name: location.name, latitude, longitude, memory: location.memory, photoKeys: photos, previewSrc: photos[0] || '', marker };
        mapManagedPlaces.set(placeId, place);
        marker.setLatLng([latitude, longitude]);
        marker.setPopupContent(mapPlacePopupMarkup(place, photos.map((src) => ({ src }))));
      });
      renderMapPlaceDirectory();
    }

    async function refreshUploadedMapPhotos() {
      if (!memoryMap || !window.L) return;
      try {
        if (!uploadedPhotoLayer) uploadedPhotoLayer = window.L.layerGroup().addTo(memoryMap);
        uploadedPhotoLayer.clearLayers();
        Array.from(mapManagedPlaces.keys()).filter((id) => !id.startsWith('static:')).forEach((id) => mapManagedPlaces.delete(id));
        await refreshSharedAlbumState();
        const localPhotos = await readUploadedPhotos();
        const localById = new Map(localPhotos.map((photo) => [photo.id, photo]));
        const remotePhotos = albumCloudReady ? (albumRemoteState?.uploadedPhotos || []).map((photo) => ({ ...photo, blob: localById.get(photo.id)?.blob, remote: true })) : [];
        const remoteIds = new Set(remotePhotos.map((photo) => photo.id));
        const tombstones = readRecord(ALBUM_DATA.deletedUploadedPhotosStorageKey);
        const publishedPhotos = (albumPublishedState?.uploadedPhotos || []).filter((photo) => !remoteIds.has(photo.id) && !tombstones[photo.id]);
        const knownIds = new Set([...remoteIds, ...publishedPhotos.map((photo) => photo.id)]);
        const photos = [...remotePhotos.filter((photo) => !tombstones[photo.id]), ...publishedPhotos, ...localPhotos.filter((photo) => !knownIds.has(photo.id) && !tombstones[photo.id])];
        const dateOverrides = readRecord(ALBUM_DATA.dateOverridesStorageKey);
        const locationOverrides = readRecord('fuer-dich-album-location-overrides');
        const hiddenPhotos = readRecord(MAP_HIDDEN_PHOTOS_KEY);
        const points = [];
        const dynamicGroups = new Map();
        const getDynamicGroup = (name, lat, lon) => {
          const key = `${name}|${lat.toFixed(5)}|${lon.toFixed(5)}`;
          if (!dynamicGroups.has(key)) dynamicGroups.set(key, { id: 'dynamic:' + key, name, lat, lon, photoKeys: [], photos: [] });
          return dynamicGroups.get(key);
        };
        photos.forEach((photo) => {
          const photoKey = 'uploaded:' + photo.id;
          if (hiddenPhotos[photoKey]) return;
          const savedLocation = locationOverrides[photoKey];
          const rawLat = savedLocation?.latitude ?? photo.latitude;
          const rawLon = savedLocation?.longitude ?? photo.longitude;
          if (rawLat === null || rawLat === undefined || rawLat === '' || rawLon === null || rawLon === undefined || rawLon === '') return;
          const lat = Number(rawLat);
          const lon = Number(rawLon);
          if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) return;
          const imageUrl = uploadedPhotoUrl(photo);
          const title = savedLocation?.name || photo.locationName || 'Ein gemeinsamer Ort';
          const dateValue = dateOverrides['uploaded:' + photo.id] || photo.capturedAt;
          const group = getDynamicGroup(title, lat, lon);
          group.photoKeys.push(photoKey);
          group.photos.push({ src: imageUrl, alt: dateValue ? 'Erinnerung vom ' + dateValue.slice(0, 10) : 'Gemeinsames Erinnerungsfoto' });
        });
        const albumPhotos = await getAlbumPhotos();
        albumPhotos.filter((photo) => !hiddenPhotos[photo.key] && !photo.uploaded && photo.location && Number.isFinite(Number(photo.location.latitude)) && Number.isFinite(Number(photo.location.longitude))).forEach((photo) => {
          const lat = Number(photo.location.latitude);
          const lon = Number(photo.location.longitude);
          if (Math.abs(lat) > 90 || Math.abs(lon) > 180) return;
          const name = photo.location.name || 'Ein gemeinsamer Ort';
          const group = getDynamicGroup(name, lat, lon);
          group.photoKeys.push(photo.key);
          group.photos.push({ src: photo.src, alt: photo.caption || 'Gemeinsames Erinnerungsfoto' });
        });
        dynamicGroups.forEach((group) => {
          const point = window.L.latLng(group.lat, group.lon);
          points.push(point);
          const markerIcon = window.L.divIcon({ className: 'heart-marker-shell', html: '<span class="heart-marker" aria-hidden="true">♥</span>', iconSize: [34, 34], iconAnchor: [17, 28], popupAnchor: [0, -25] });
          const place = { id: group.id, name: group.name, latitude: group.lat, longitude: group.lon, photoKeys: group.photoKeys, previewSrc: group.photos[0]?.src || '' };
          const popup = mapPlacePopupMarkup(place, group.photos);
          place.marker = window.L.marker(point, { icon: markerIcon }).addTo(uploadedPhotoLayer).bindPopup(popup, { maxWidth: 260, maxHeight: 330 });
          mapManagedPlaces.set(place.id, place);
        });
        renderMapPlaceDirectory();
        if (points.length) memoryMap.fitBounds(window.L.latLngBounds(points), { padding: [28, 28], maxZoom: 12 });
      } catch (_) {
        // The album remains usable if browser storage is unavailable.
      }
    }

    function initializeMap() {
      const container = document.querySelector('#memory-map');
      const fallback = document.querySelector('#map-fallback');
      if (!container) return;
      if (!window.L) {
        if (fallback) {
          fallback.textContent = MAP_DATA.fallbackMessage;
          fallback.hidden = false;
        }
        return;
      }
      if (fallback) fallback.hidden = true;

      if (!memoryMap) {
        memoryMap = window.L.map(container, { zoomControl: true, minZoom: 2, maxZoom: 18, worldCopyJump: true, scrollWheelZoom: true });
        container.addEventListener('click', handleMapPlaceAction);
        const placeList = document.querySelector('#map-place-list');
        placeList?.addEventListener('click', handleMapPlaceAction);
        placeList?.addEventListener('click', (event) => {
          const button = event.target.closest('[data-map-place-open]');
          if (!button) return;
          const place = mapManagedPlaces.get(button.dataset.mapPlaceOpen);
          if (!place) return;
          memoryMap.setView([place.latitude, place.longitude], Math.max(memoryMap.getZoom(), 12), { animate: true });
          place.marker?.openPopup();
        });
        document.querySelector('#map-place-search')?.addEventListener('input', renderMapPlaceDirectory);
        document.querySelector('#map-location-pick-cancel')?.addEventListener('click', (event) => {
          event.stopPropagation();
          pendingMapPlaceMove = null;
          waitingForAlbumMapPoint = false;
          const hint = document.querySelector('#map-location-pick-hint');
          const copy = document.querySelector('#map-location-pick-copy');
          if (copy) copy.textContent = 'Tippe auf die Karte, um den ausgewählten Fotos einen neuen Ort zuzuweisen.';
          if (hint) hint.hidden = true;
        });
        memoryMap.on('click', (event) => {
          if (pendingMapPlaceMove) {
            const place = mapManagedPlaces.get(pendingMapPlaceMove);
            if (!place) { pendingMapPlaceMove = null; return; }
            if (saveMapPlacePhotos(place, place.name, event.latlng.lat, event.latlng.lng)) {
              pendingMapPlaceMove = null;
              const hint = document.querySelector('#map-location-pick-hint');
              const copy = document.querySelector('#map-location-pick-copy');
              if (copy) copy.textContent = 'Tippe auf die Karte, um den ausgewählten Fotos einen neuen Ort zuzuweisen.';
              if (hint) hint.hidden = true;
              refreshAllMapPlaces();
            }
            return;
          }
          if (!waitingForAlbumMapPoint || !albumLocationSelectedPhotos.size) return;
          const placeName = window.prompt('Wie soll dieser Ort heißen?');
          if (placeName === null) return;
          const name = placeName.trim();
          if (!name) {
            window.alert('Gib dem Ort bitte einen Namen. Tippe dann erneut auf die Karte.');
            return;
          }
          const overrides = readRecord('fuer-dich-album-location-overrides');
          const hiddenPhotos = readRecord(MAP_HIDDEN_PHOTOS_KEY);
          const hiddenPlaces = readRecord(MAP_HIDDEN_PLACES_KEY);
          albumLocationSelectedPhotos.forEach((key) => {
            overrides[key] = { name, latitude: event.latlng.lat, longitude: event.latlng.lng, coordinates: [event.latlng.lat, event.latlng.lng] };
            hiddenPhotos[key] = false;
            LOCATIONS.forEach((location, index) => {
              if (location.photos?.includes(key)) hiddenPlaces['static:' + index] = true;
            });
          });
          if (!writeRecord('fuer-dich-album-location-overrides', overrides) || !writeRecord(MAP_HIDDEN_PHOTOS_KEY, hiddenPhotos) || !writeRecord(MAP_HIDDEN_PLACES_KEY, hiddenPlaces)) {
            window.alert('Der Ort konnte auf diesem Gerät nicht gespeichert werden.');
            return;
          }
          const assignedCount = albumLocationSelectedPhotos.size;
          albumLocationSelectedPhotos.clear();
          albumLocationAssignMode = false;
          waitingForAlbumMapPoint = false;
          const hint = document.querySelector('#map-location-pick-hint');
          if (hint) hint.hidden = true;
          renderAlbumLocationControls();
          setAlbumSyncStatus(`${assignedCount} Fotos mit „${name}“ verknüpft.`, 'ready');
          renderAlbumPage();
          refreshAllMapPlaces();
        });
        const imagery = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community',
          maxZoom: 18,
          crossOrigin: true
        }).addTo(memoryMap);
        imagery.on('tileload', () => { if (fallback) fallback.hidden = true; });
        imagery.on('tileerror', () => {
          if (fallback) {
            fallback.textContent = MAP_DATA.fallbackMessage;
            fallback.hidden = false;
          }
        });

        const points = [];
        LOCATIONS.forEach((location) => {
          if (!Array.isArray(location.coordinates) || location.coordinates.length !== 2) return;
          const point = window.L.latLng(location.coordinates[0], location.coordinates[1]);
          points.push(point);
          const markerIcon = window.L.divIcon({
            className: 'heart-marker-shell',
            html: '<span class="heart-marker" aria-hidden="true">♥</span>',
            iconSize: [34, 34],
            iconAnchor: [17, 28],
            popupAnchor: [0, -25]
          });
          const gallery = (location.photos || []).map((src) => `<img class="memory-popup-photo" src="${escapeHtml(src)}" alt="Gemeinsames Erinnerungsfoto" loading="lazy" decoding="async">`).join('');
          const popup = `<div class="memory-popup"><strong>${escapeHtml(location.name)}</strong><small>${location.photoCount || (location.photos || []).length} Erinnerungsfotos</small><p>${escapeHtml(location.memory || '')}</p><div class="memory-popup-gallery">${gallery}</div></div>`;
          const marker = window.L.marker(point, { icon: markerIcon }).addTo(memoryMap).bindPopup(popup, { maxWidth: 260, maxHeight: 330 });
          memoryLocationMarkers.push({ marker, location: { ...location, placeId: 'static:' + LOCATIONS.indexOf(location) } });
          marker.on('popupopen', (event) => event.popup.getElement()?.querySelectorAll('.memory-popup-photo').forEach((image) => image.addEventListener('error', () => { image.hidden = true; }, { once: true })));
        });
        if (points.length) memoryMap.fitBounds(window.L.latLngBounds(points), { padding: [28, 28], maxZoom: 6 });
        else memoryMap.setView([20, 0], 2);
      }
      refreshMemoryLocationPopups();
      refreshUploadedMapPhotos();
      window.setTimeout(() => memoryMap?.invalidateSize(true), 120);
    }

    // Close dialogs with their close buttons or a click on the backdrop.
    document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => button.closest('dialog')?.close()));
    document.querySelectorAll('dialog.love-modal').forEach((dialog) => dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    }));

    navButtons.forEach((button) => button.addEventListener('click', () => {
      if (button.dataset.target === 'album') startAlbumSong();
      showTab(button.dataset.target, { haptic: true });
    }));
    document.querySelectorAll('[data-tab-link]').forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault();
      showTab(link.dataset.tabLink);
    }));
    document.addEventListener('app:navigate', (event) => showTab(event.detail?.tab));
    const albumSongAudio = document.querySelector('#album-song-audio');
    const albumSongRetry = document.querySelector('#album-song-retry');
    let albumSongActive = false;
    if (albumSongAudio) {
      albumSongAudio.volume = 0.5;
      albumSongAudio.preload = 'none';
      albumSongAudio.playsInline = true;
    }
    function startAlbumSong() {
      if (!albumSongAudio || albumSongActive || !ALBUM_SONG_DATA.startOnAlbumOpen) return;
      albumSongActive = true;
      let playRequest;
      try {
        albumSongAudio.src = ALBUM_SONG_DATA.audioPath;
        albumSongAudio.currentTime = 0;
        playRequest = albumSongAudio.play();
      } catch (_) {
        albumSongActive = false;
        if (albumSongRetry) albumSongRetry.hidden = false;
        return;
      }
      if (playRequest?.then) {
        playRequest.then(() => {
          if (albumSongRetry) albumSongRetry.hidden = true;
        }).catch(() => {
          albumSongActive = false;
          if (albumSongRetry) albumSongRetry.hidden = false;
        });
      }
    }
    albumSongAudio?.addEventListener('error', () => {
      albumSongActive = false;
      if (albumSongRetry && document.querySelector('#album')?.classList.contains('is-active')) albumSongRetry.hidden = false;
    });
    albumSongRetry?.addEventListener('click', () => startAlbumSong());
    document.addEventListener('app:tabchange', (event) => {
      if (event.detail.tab === 'wrapped' && ['first-photo', 'moments', 'place'].includes(WRAPPED_DATA.slides[currentSlide]?.type)) {
        renderWrappedSlide(currentSlide);
      }
      if (event.detail.tab === 'album' && ALBUM_SONG_DATA.startOnAlbumOpen && albumSongAudio && !albumSongActive) {
        startAlbumSong();
      } else if (event.detail.tab !== 'album' && albumSongActive && albumSongAudio) {
        albumSongAudio.pause();
        albumSongAudio.currentTime = 0;
        albumSongActive = false;
        if (albumSongRetry) albumSongRetry.hidden = true;
      }
      if (event.detail.tab === 'album') {
        wrappedAudio?.pause();
        updateWrappedMusicButton(false);
      } else if (wrappedMusicStarted && !wrappedMusicPausedByUser) {
        startWrappedMusic();
      } else if (event.detail.tab === 'wrapped' && !wrappedMusicPausedByUser) {
        startWrappedMusic();
      }
      if (event.detail.tab === 'dates') {
        drawWheel();
        if (getDailyCouponState().day !== renderedCouponDay) renderCoupons();
        updateRelationshipCountdowns();
        renderRelationshipTimeline();
        window.setTimeout(() => { observeTimelineEntries(); scheduleTimelineRouteProgress(); }, 80);
        refreshSharedAlbumState(true).then(() => {
          dailyCouponMemoryState = null;
          renderedCouponDay = '';
          renderCoupons();
          updateRelationshipCountdowns();
        });
      }
      if (event.detail.tab === 'karte') initializeMap();
      if (event.detail.tab === 'bucketlist') renderBucketList();
      if (event.detail.tab === 'tresor') refreshSharedAlbumState(true).then(() => renderTreasureCards());
      if (event.detail.tab === 'bucketlist') refreshSharedAlbumState(true).then(() => renderBucketList());
      if (event.detail.tab === 'album') {
        refreshSharedAlbumState(true).then(async () => {
          await renderAlbumPage();
          await renderRelationshipTimeline();
        });
      }
      if (event.detail.tab === 'dates') document.querySelectorAll('.scratch-canvas:not([hidden])').forEach(setupScratchCanvas);
    });

    window.addEventListener('resize', () => {
      if (activeTab === 'dates') drawWheel();
      if (memoryMap && activeTab === 'karte') memoryMap.invalidateSize(true);
      if (activeTab === 'dates') document.querySelectorAll('.scratch-canvas:not([hidden])').forEach(setupScratchCanvas);
    });

    window.setInterval(async () => {
      if (document.hidden || !albumCloudReady) return;
      const previousUpdate = albumRemoteState?.updatedAt;
      if (await refreshSharedAlbumState(true) && albumRemoteState?.updatedAt !== previousUpdate) {
        if (document.querySelector('#album')?.classList.contains('is-active')) await renderAlbumPage();
        if (document.querySelector('#dates')?.classList.contains('is-active')) {
          dailyCouponMemoryState = null;
          renderedCouponDay = '';
          renderCoupons();
          await renderRelationshipTimeline();
        }
        if (document.querySelector('#tresor')?.classList.contains('is-active')) renderTreasureCards();
        if (document.querySelector('#bucketlist')?.classList.contains('is-active')) renderBucketList();
        if (activeTab === 'karte') await refreshUploadedMapPhotos();
        if (activeTab === 'wrapped' && ['first-photo', 'moments', 'place'].includes(WRAPPED_DATA.slides[currentSlide]?.type)) renderWrappedSlide(currentSlide);
      }
    }, 30000);

    document.addEventListener('visibilitychange', async () => {
      if (document.hidden || !document.querySelector('#album')?.classList.contains('is-active') || !albumCloudReady) return;
      const previousUpdate = albumRemoteState?.updatedAt;
      if (await refreshSharedAlbumState(true) && albumRemoteState?.updatedAt !== previousUpdate) await renderAlbumPage();
    });

    applyConfiguredCopy();
    if (window.lucide) window.lucide.createIcons();
    renderRelationshipCountdowns();
    renderRelationshipTimeline();
    const firstTarget = navButtons[0]?.dataset.target || tabSections[0]?.id;
    if (firstTarget) showTab(firstTarget);
    initWrapped();
    updateTreasureCountdowns();
    renderAlbumPage();

    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch((error) => console.warn('Service Worker konnte nicht registriert werden:', error)));
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
  else initializeApp();
})();
