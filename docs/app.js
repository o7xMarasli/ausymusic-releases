// Dil seçimi ve son sürümün indirme bağlantısı. JS çalışmazsa sayfa Türkçe kalır, düğmeler yayın sayfasına gider.

const EN = {
  "nav.features": "Features",
  "nav.download": "Download",
  "nav.faq": "Questions",
  "hero.eyebrow": "Free for Windows",
  "hero.title": "Your music, made for you.",
  "hero.lead": "Millions of songs, lyrics that flow line by line and Ausy Mixes that adapt as you listen. All in one simple app.",
  "hero.cta": "Download for Windows",
  "hero.meta": "Windows 10 and 11, 64-bit",
  "demo.song": "Night Train",
  "f.title": "The details that make listening better",
  "f.lyrics": "Lyrics that move with the song",
  "f.lyricsText": "Follow synced lyrics line by line and tap a line to jump there. Choose from Classic, Karaoke, Focus and Cinema views.",
  "f.mix": "Ausy Mix",
  "f.mixText": "Mixes made for you as you listen. Save the ones you like to a playlist in one tap.",
  "f.island": "Dynamic island",
  "f.islandText": "Appears at the top of the screen when Ausy is out of sight and opens on hover. Or switch to an always-on-top mini player.",
  "f.import": "Bring your playlists",
  "f.importText": "Paste a playlist link and the songs arrive in your library. Drag to reorder and pick a cover.",
  "f.offline": "Listen offline",
  "f.offlineText": "Download songs, albums and playlists. Play the music folders on your PC in the same place.",
  "f.social": "Follow your friends",
  "f.socialText": "Build your profile and share the playlists you choose. Everything stays private until you open it.",
  "f.sync": "Always up to date",
  "f.syncText": "Your library syncs with your account, and the app installs new versions itself when no music is playing.",
  "d.title": "Ready in minutes",
  "d.win": "Windows 10 and 11, 64-bit. Keeps itself up to date after install.",
  "d.android": "We are working on it. You will be able to download it here.",
  "d.soon": "Coming soon",
  "q.title": "Questions",
  "q.free": "Is it free?",
  "q.freeA": "Yes. All you need is a free account.",
  "q.warn": "Why does Windows show a warning?",
  "q.warnA": "The app does not have a commercial code signature yet, so SmartScreen may warn you. Choose \"More info\", then \"Run anyway\". Updates are installed only after the app verifies their signature.",
  "q.account": "Why do I need an account?",
  "q.accountA": "So your likes, playlists and settings sync across devices. Your email is never shown on your profile.",
  "q.android": "When is Android coming?",
  "q.androidA": "It is in development. We will announce it on this page.",
  "foot.note": "Ausy-Music is an independent project and is not affiliated with YouTube, Spotify or their companies.",
  "foot.releases": "All releases",
  "alt.home": "Ausy-Music home screen with Ausy Mix cards and recently played songs",
  "alt.lyrics": "Fullscreen player with synced lyrics",
};

const STORE = "ausy-site-lang";
const original = new Map();
document.querySelectorAll("[data-t]").forEach((el) => original.set(el, el.textContent));
document.querySelectorAll("[data-alt]").forEach((el) => original.set(el, el.alt));
const title = document.title;

let release = null;

function readLang() {
  try {
    const saved = localStorage.getItem(STORE);
    if (saved) return saved;
  } catch {
    /* tarayıcı depolamayı kapatmış olabilir */
  }
  return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
}

function apply(lang) {
  const en = lang === "en";
  document.documentElement.lang = lang;
  document.title = en ? "Ausy-Music: Your music, made for you" : title;
  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = en ? (EN[el.dataset.t] ?? original.get(el)) : original.get(el);
  });
  document.querySelectorAll("[data-alt]").forEach((el) => {
    el.alt = en ? (EN[el.dataset.alt] ?? original.get(el)) : original.get(el);
  });
  document.getElementById("lang").textContent = en ? "TR" : "EN";
  renderRelease(en);
}

function renderRelease(en) {
  if (!release) return;
  const line = `${en ? "Version" : "Sürüm"} ${release.version} · ${release.size} MB`;
  document.getElementById("meta").textContent = `${line} · Windows 10/11`;
  document.getElementById("version").textContent = line;
}

let lang = readLang();
apply(lang);

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "en" ? "tr" : "en";
  try {
    localStorage.setItem(STORE, lang);
  } catch {
    /* kaydedilemezse yalnız bu ziyarette geçerli olur */
  }
  apply(lang);
});

fetch("https://api.github.com/repos/o7xMarasli/ausymusic-releases/releases/latest")
  .then((r) => (r.ok ? r.json() : null))
  .then((data) => {
    const asset = data?.assets?.find((a) => /-setup\.exe$/.test(a.name));
    if (!asset) return;
    document.querySelectorAll("[data-download]").forEach((a) => (a.href = asset.browser_download_url));
    release = { version: data.tag_name.replace(/^v/, ""), size: (asset.size / 1048576).toFixed(0) };
    renderRelease(lang === "en");
  })
  .catch(() => {
    /* API erişilemezse düğmeler yayın sayfasına gider */
  });
