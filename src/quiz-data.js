export const animals = {
  tigar: {
    name: "Tigar",
    emoji: "🐯",
    description: "Ti si odlučan, strastven i uvek ideš po svoje. Prirodni si lider koji ne odustaje kada nešto zaželi. Drugi te poštuju zbog tvoje snage i direktnosti.",
    traits: ["Odlučan", "Strastven", "Hrabar", "Direktan"],
  },
  konj: {
    name: "Konj",
    emoji: "🐴",
    description: "Sloboda je tvoja najveća vrednost. Energičan si, lojalan i uvek spreman na avanturu. Kada se nečemu posvetiš, daješ 100% sebe.",
    traits: ["Slobodan", "Energičan", "Lojalan", "Avanturista"],
  },
  koala: {
    name: "Koala",
    emoji: "🐨",
    description: "Ti si mirna luka u oluji. Voliš mir, udobnost i duboke razgovore sa bliskim ljudima. Mudrost i strpljenje su tvoje supermoći.",
    traits: ["Miran", "Mudar", "Strpljiv", "Pažljiv"],
  },
  slon: {
    name: "Slon",
    emoji: "🐘",
    description: "Imaš neverovatno pamćenje i duboku empatiju. Stub si porodice i prijatelja — uvek tu kada je neko u nevolji. Tvoja snaga je u toplini.",
    traits: ["Empatičan", "Pouzdan", "Snažan", "Brižan"],
  },
  pas: {
    name: "Pas",
    emoji: "🐶",
    description: "Lojalnost i ljubav su tvoje definicije. Zaraziš sve oko sebe svojom energijom i optimizmom. Prijatelji su ti sve i uvek si tu za njih.",
    traits: ["Lojalan", "Optimista", "Društven", "Topao"],
  },
  ajkula: {
    name: "Ajkula",
    emoji: "🦈",
    description: "Fokusiran, efikasan i uvek korak ispred. Ne gubiš vreme na sitnice — ideš direktno ka cilju. Drugi te vide kao nekoga ko uvek zna šta radi.",
    traits: ["Fokusiran", "Efikasan", "Ambiciozan", "Hladnokrvan"],
  },
  medved: {
    name: "Medved",
    emoji: "🐻",
    description: "Spolja čvrst, iznutra nežan. Zaštitnik si svega što voliš i niko ne prolazi kroz tebe lako. Ali oni koji te poznaju znaju koliko si zapravo topao.",
    traits: ["Zaštitnik", "Snažan", "Nežan", "Iskren"],
  },
};

export const questions = [
  {
    id: 1,
    question: "Kako reaguje kada te neko izazove?",
    options: [
      { text: "Odmah uzvraćam — ne dam se", animal: "tigar" },
      { text: "Ignorišem i nastavljam dalje", animal: "ajkula" },
      { text: "Pokušavam da razumem zašto", animal: "slon" },
      { text: "Tražim kompromis", animal: "pas" },
    ],
  },
  {
    id: 2,
    question: "Idealno veče za tebe je...",
    options: [
      { text: "Provod sa što više prijatelja", animal: "pas" },
      { text: "Tiho veče kod kuće sa knjigom", animal: "koala" },
      { text: "Neka nova avantura ili izlazak", animal: "konj" },
      { text: "Planiranje sledećeg velikog cilja", animal: "ajkula" },
    ],
  },
  {
    id: 3,
    question: "Šta te najviše nervira kod drugih?",
    options: [
      { text: "Nelojalnost i izdaja", animal: "tigar" },
      { text: "Nedostatak ambicije", animal: "ajkula" },
      { text: "Grubost i neempatičnost", animal: "slon" },
      { text: "Ograničavanje moje slobode", animal: "konj" },
    ],
  },
  {
    id: 4,
    question: "Kada si pod stresom, ti...",
    options: [
      { text: "Povučem se i sredim misli", animal: "koala" },
      { text: "Krećem da rešavam problem odmah", animal: "tigar" },
      { text: "Pričam sa nekim bliskim", animal: "medved" },
      { text: "Idem na trening ili šetnju", animal: "konj" },
    ],
  },
  {
    id: 5,
    question: "Prijatelji bi te opisali kao...",
    options: [
      { text: "Uvek tu, pouzdan kao sat", animal: "pas" },
      { text: "Snažan i zaštitnik", animal: "medved" },
      { text: "Miran i mudar savetnik", animal: "koala" },
      { text: "Energičan i inspirativan", animal: "konj" },
    ],
  },
  {
    id: 6,
    question: "Tvoj pristup novom projektu ili cilju?",
    options: [
      { text: "Pravim detaljan plan i krećem", animal: "ajkula" },
      { text: "Skočim odmah i vidim šta bude", animal: "tigar" },
      { text: "Razgovaram sa timom, čujem sve", animal: "slon" },
      { text: "Čekam pravi trenutak strpljivo", animal: "koala" },
    ],
  },
  {
    id: 7,
    question: "Šta te čini najsrećnijim?",
    options: [
      { text: "Kada pomognem nekome ko mi je drag", animal: "slon" },
      { text: "Kada postignem nešto što sam planirao", animal: "ajkula" },
      { text: "Sloboda da radim šta i kad hoću", animal: "konj" },
      { text: "Smeh i zabava sa prijateljima", animal: "pas" },
    ],
  },
  {
    id: 8,
    question: "Kako donosiš važne odluke?",
    options: [
      { text: "Slušam instinkt — odmah znam", animal: "tigar" },
      { text: "Analiziram sve opcije hladno", animal: "ajkula" },
      { text: "Pitam one kojima verujem", animal: "medved" },
      { text: "Čekam da se sve slegne samo", animal: "koala" },
    ],
  },
  {
    id: 9,
    question: "Tvoja uloga u grupi prijatelja?",
    options: [
      { text: "Onaj koji organizuje i predvodi", animal: "tigar" },
      { text: "Onaj koji sluša i podržava sve", animal: "slon" },
      { text: "Onaj koji unosi energiju i smeh", animal: "pas" },
      { text: "Onaj koji štiti i brine o svima", animal: "medved" },
    ],
  },
  {
    id: 10,
    question: "Koja rečenica ti najviše odgovara?",
    options: [
      { text: "Živim slobodno, ne uklapam se u kalupe", animal: "konj" },
      { text: "Moji ciljevi su moj prioritet", animal: "ajkula" },
      { text: "Porodica i prijatelji su sve", animal: "pas" },
      { text: "Radije mislim nego žurim", animal: "koala" },
    ],
  },
];
