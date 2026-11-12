// Ausy Music web sitesi: dil seçimi (TR/EN), son sürümün indirme bağlantısı, sürüm notları ve kaydırınca beliren bölümler.
// JS çalışmazsa sayfa Türkçe kalır, düğmeler GitHub yayın sayfasına gider.

const REPO = "o7xMarasli/ausymusic-releases";

const EN = {
  "nav.features": "Features",
  "nav.social": "Friends",
  "nav.releases": "Releases",
  "nav.faq": "FAQ",
  "nav.download": "Download",
  "hero.badge": "Beta · Free for Windows",
  "hero.title": "Your music, made for you.",
  "hero.lead": "Millions of songs, synced lyrics that flow line by line, mixes that adapt as you listen and listening together with friends. All in one simple app.",
  "hero.cta": "Download for Windows",
  "hero.more": "What's inside?",
  "hero.meta": "Windows 10 and 11 · 64-bit · Keeps itself up to date",
  "demo.song": "Night Train",
  "stat.items": "items",
  "stat.ach": "achievements",
  "stat.lang": "languages",
  "stat.lyrics": "lyrics sources",
  "f.kicker": "Features",
  "f.title": "Everything that makes listening better",
  "f.lead": "Ausy Music looks simple but there's a lot inside. Some favourites:",
  "f.home.tag": "Library",
  "f.home.title": "A page made for you, every time",
  "f.home.text": "Your playlists at the top, songs to pick up and new releases right below. Six personal Daily Mixes are made as you listen, and Weekly Discovery refreshes every week with songs you haven't heard yet. Likes, playlists, albums and artists live in one library.",
  "f.home.l1": "Daily Mix and Weekly Discovery",
  "f.home.l2": "The most played songs across the whole app",
  "f.home.l3": "Drag to reorder, pick a cover, remove duplicates",
  "f.lyrics.tag": "Lyrics",
  "f.lyrics.title": "Lyrics that move with the song",
  "f.lyrics.text": "Synced lyrics follow the song line by line, and word by word in karaoke view. LRCLIB, NetEase and YouTube Music are searched together and the lyrics that best match title, artist and length win. If the timing is off, shift it per song.",
  "f.lyrics.l1": "Classic, Karaoke, Focus and Cinema views",
  "f.lyrics.l2": "Click a line to jump there",
  "f.lyrics.l3": "A fullscreen backdrop that flows with the cover's colours",
  "f.search.tag": "Discover",
  "f.search.title": "Search, explore, paste a link",
  "f.search.text": "Search songs, albums, artists and people; results keep loading as you scroll. Browse by mood or genre. Paste a playlist link and its songs are copied into your library.",
  "f.search.l1": "Mood and genre pages",
  "f.search.l2": "Recent searches right in the search field",
  "f.search.l3": "Import playlists by link",
  "g.island": "Dynamic island",
  "g.islandText": "Appears at the top of the screen when you switch apps. Hover to open it, scroll to change the volume.",
  "g.eq": "Equalizer and effects",
  "g.eqText": "10-band equalizer, presets, speed and pitch, reverb and crossfade.",
  "g.offline": "Offline listening",
  "g.offlineText": "Download songs, albums and playlists; play your PC's music folders in the same place.",
  "g.keys": "Keyboard shortcuts",
  "g.keysText": "Change the keys for 15 actions in Settings.",
  "g.theme": "Dark and light theme",
  "g.themeText": "Two themes, an accent colour from the cover or a fixed one, three interface sizes.",
  "g.sync": "Same library everywhere",
  "g.syncText": "Likes, playlists and settings sync with your account in the background.",
  "g.sleep": "Sleep timer",
  "g.sleepText": "Music fades out and stops after the time you pick, or at the end of the song.",
  "g.lang": "Four languages",
  "g.langText": "Turkish, English, German and Italian. The app picks your system language.",
  "s.kicker": "Listen together",
  "s.title": "Music is better shared",
  "s.lead": "Follow your friends, listen to the same song at the same time in a Jam, and collect items and achievements as you listen.",
  "s.items.tag": "Items",
  "s.items.title": "Mess with your friends' music",
  "s.items.text": "Random items drop from 46 kinds as you listen. Send Chipmunk, Nightcore or Vinyl Stop to a friend who follows you back, and block incoming ones with a Shield. Effects last at most a minute and the rules are checked on the server.",
  "s.items.l1": "Four rarities, from common to legendary",
  "s.items.l2": "Once every 10 minutes per person, can be turned off",
  "s.items.l3": "Items for yourself like Treasure Chest, Dice and Golden Ticket",
  "s.ach.tag": "Achievements",
  "s.ach.title": "61 achievements, some of them secret",
  "s.ach.text": "Achievements for listening time, streaks, variety and loyalty in four tiers from bronze to platinum. Some stay hidden until you unlock them; some are genuinely hard.",
  "s.ach.l1": "500 hours of listening, a 100-day streak",
  "s.ach.l2": "Secret ones like Night Owl and 3 AM",
  "s.ach.l3": "Progress bars and unlock notifications",
  "s.profile.title": "Profile and Jam",
  "s.profile.text": "Your profile shows what you played recently and most, your public playlists and what's playing right now. In a Jam, friends join with an invite link and hear the same song in sync with you.",
  "s.stats.title": "Stats",
  "s.stats.text": "See how much you listened, your busiest days and hours, and your top songs and artists.",
  "t.kicker": "Look",
  "t.title": "Easy on the eyes, day or night",
  "t.dark": "Dark theme and settings",
  "t.light": "Light theme",
  "d.kicker": "Download",
  "d.title": "Ready in minutes",
  "d.win": "Windows 10 and 11, 64-bit. Installs new versions by itself after setup, even while music plays.",
  "d.s1": "Download the installer and run it.",
  "d.s2": "If Windows shows a warning, choose \"More info\" and then \"Run anyway\".",
  "d.s3": "Create your free account or sign in with Google.",
  "d.android": "We're working on it. You'll be able to download it here.",
  "d.soon": "Coming soon",
  "r.kicker": "Releases",
  "r.title": "What's new?",
  "r.lead": "Recent releases and their notes. Ausy Music stays in beta until 1.0.",
  "r.loading": "Loading releases…",
  "r.all": "All releases",
  "r.latest": "Latest",
  "r.more": "Show all notes",
  "r.error": "Couldn't load the releases. You can see them on GitHub.",
  "q.kicker": "FAQ",
  "q.title": "Questions",
  "q.free": "Is it free?",
  "q.freeA": "Yes. All you need is a free account; there's no subscription or paid tier.",
  "q.warn": "Why does Windows show a warning?",
  "q.warnA": "The app doesn't have a commercial code signature yet, so SmartScreen may warn you. Choose \"More info\", then \"Run anyway\". Updates are installed only after the app verifies their signature.",
  "q.account": "Why do I need an account?",
  "q.accountA": "So your likes, playlists and settings sync across devices and you can follow friends. Your email is never shown on your profile.",
  "q.items": "I don't want the item system. Can I turn it off?",
  "q.itemsA": "Yes. Turn it off in Settings > Privacy; you won't earn items and nobody can use items on you.",
  "q.privacy": "Who can see what I listen to?",
  "q.privacyA": "Your recent and top songs show on your profile to signed-in users only while \"Share listening activity\" is on. The setting is in the Privacy section.",
  "q.android": "When is Android coming?",
  "q.androidA": "It's in development. We'll announce it on this page.",
  "fb.title": "Found a bug or have an idea?",
  "fb.text": "Use the feedback button at the bottom left of the app or write to us on GitHub. We read every message.",
  "fb.bug": "Report a bug",
  "fb.idea": "Suggest an idea",
  "foot.releases": "Releases",
  "foot.issues": "Feedback",
  "foot.note": "Ausy Music is an independent project and is not affiliated with YouTube, Spotify or their companies. Song and artist names in the screenshots are examples.",
  "alt.home": "Ausy Music home: playlists, new releases and pick up where you left off",
  "alt.library": "Library: liked songs, playlists, albums and artists",
  "alt.player": "Fullscreen player with synced lyrics in karaoke view",
  "alt.search": "Search page with mood and genre cards",
  "alt.items": "Items page: next item, active effects and inventory",
  "alt.ach": "Achievements page: overall progress and achievement cards",
  "alt.profile": "Profile page",
  "alt.stats": "Stats page",
  "alt.settings": "Settings: appearance, theme and accent colour",
  "alt.light": "Home in the light theme",
};
const TR_EXTRA = { "r.latest": "Son sürüm", "r.more": "Tüm notları göster", "r.error": "Sürümler yüklenemedi. GitHub'da görebilirsin." };

const STORE = "ausy-site-lang";
const original = new Map();
document.querySelectorAll("[data-t]").forEach((el) => original.set(el, el.textContent));
document.querySelectorAll("[data-alt]").forEach((el) => original.set(el, el.alt));
const title = document.title;
let lang = readLang();
let release = null;
let releases = null;

function readLang() {
  try {
    const saved = localStorage.getItem(STORE);
    if (saved) return saved;
  } catch {
    /* tarayıcı depolamayı kapatmış olabilir */
  }
  return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
}
const tx = (key) => (lang === "en" ? EN[key] : TR_EXTRA[key]) ?? key;

function apply() {
  const en = lang === "en";
  document.documentElement.lang = lang;
  document.title = en ? "Ausy Music · Free music app" : title;
  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = en ? (EN[el.dataset.t] ?? original.get(el)) : original.get(el);
  });
  document.querySelectorAll("[data-alt]").forEach((el) => {
    el.alt = en ? (EN[el.dataset.alt] ?? original.get(el)) : original.get(el);
  });
  document.getElementById("lang").textContent = en ? "TR" : "EN";
  renderRelease();
  renderNotes();
}

function renderRelease() {
  if (!release) return;
  const en = lang === "en";
  const line = `${en ? "Version" : "Sürüm"} ${release.version} · ${release.size} MB`;
  document.getElementById("meta").textContent = `${line} · Windows 10/11 · 64 bit`;
  document.getElementById("version").textContent = line;
}

// ---------- sürüm notları: GitHub'daki Markdown'ın küçük ve güvenli bir alt kümesi ----------

const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
}
function markdown(md) {
  const out = [];
  let list = false;
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    const item = line.match(/^[-*]\s+(.*)/);
    if (item) {
      if (!list) out.push("<ul>");
      list = true;
      out.push(`<li>${inline(item[1])}</li>`);
      continue;
    }
    if (list) {
      out.push("</ul>");
      list = false;
    }
    if (!line) continue;
    const head = line.match(/^#{1,4}\s+(.*)/);
    out.push(head ? `<h4>${inline(head[1])}</h4>` : `<p>${inline(line)}</p>`);
  }
  if (list) out.push("</ul>");
  return out.join("");
}

function renderNotes() {
  const box = document.getElementById("release-list");
  if (!releases) return;
  if (!releases.length) {
    box.innerHTML = `<p class="muted">${esc(tx("r.error"))}</p>`;
    return;
  }
  const fmt = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "tr-TR", { day: "numeric", month: "long", year: "numeric" });
  box.innerHTML = releases
    .map((r, i) => {
      const body = (r.body || "").trim();
      const lines = body.split(/\r?\n/);
      const short = lines.slice(0, 14).join("\n");
      const rest = lines.length > 14;
      return `<article class="release">
        <header><h3>${esc(r.name || r.tag_name)}</h3>${i === 0 ? `<span class="latest">${esc(tx("r.latest"))}</span>` : ""}<time datetime="${esc(r.published_at)}">${esc(fmt.format(new Date(r.published_at)))}</time></header>
        <div class="notes">${markdown(short)}</div>
        ${rest ? `<details><summary>${esc(tx("r.more"))}</summary><div class="notes">${markdown(lines.slice(14).join("\n"))}</div></details>` : ""}
      </article>`;
    })
    .join("");
}

apply();

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "en" ? "tr" : "en";
  try {
    localStorage.setItem(STORE, lang);
  } catch {
    /* kaydedilemezse yalnız bu ziyarette geçerli olur */
  }
  apply();
});

fetch(`https://api.github.com/repos/${REPO}/releases?per_page=4`)
  .then((r) => (r.ok ? r.json() : []))
  .then((list) => {
    releases = (Array.isArray(list) ? list : []).filter((r) => !r.draft).slice(0, 3);
    const latest = releases[0];
    const asset = latest?.assets?.find((a) => /-setup\.exe$/.test(a.name));
    if (asset) {
      document.querySelectorAll("[data-download]").forEach((a) => (a.href = asset.browser_download_url));
      release = { version: latest.tag_name.replace(/^v/, ""), size: (asset.size / 1048576).toFixed(0) };
    }
    renderRelease();
    renderNotes();
  })
  .catch(() => {
    releases = [];
    renderNotes();
  });

// Kaydırınca beliren bölümler
const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("shown"), io.unobserve(e.target))), { rootMargin: "0px 0px -10% 0px" }) : null;
document.querySelectorAll(".feature, .grid .card, .duo > div, .dl-card, .release, .feedback").forEach((el) => {
  if (!io) return;
  el.classList.add("reveal");
  io.observe(el);
});
