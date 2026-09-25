const SCHOOL = { id: 'school', name: 'โรงเรียนมาแตร์เดอี', lat: 13.7428927, lng: 100.5429918 };
const OVERVIEW_ZOOM = 13.5;
const OVERVIEW_RADIUS_KM = 3;
const OVERVIEW_PITCH = 48;
const OVERVIEW_BEARING = -8;
const PLACE_MARKER_REVEAL_DELTA = .65;
const SCHOOL_EMAIL = '13579.Beau@m.materdei.ac.th';
const SCHOOL_PASSWORD = '13579.Beau';
const CURRENT_USER_NAME = 'Beau';
const FEEDBACK_STORAGE_KEY = 'md-explorer-community-feedback';
const CONSENT_SESSION_KEY = 'md-explorer-feedback-consent';
const SCHOOL_ESCORT_PLACE_IDS = new Set(['seven', 'chitlom', 'lumphini', 'police-hospital', 'erawan', 'central', 'renaissance', 'harborland']);

const ICONS = {
  school: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-7h6v7M7 11h.01M12 11h.01M17 11h.01"/>',
  shop: '<path d="M4 8h16l-1 12H5L4 8Z"/><path d="M8 8a4 4 0 0 1 8 0M9 12v.01M15 12v.01"/>',
  train: '<rect x="5" y="3" width="14" height="15" rx="4"/><path d="M8 18 6 21m10-3 2 3M8 8h.01M16 8h.01M8 13h8"/>',
  tree: '<path d="M12 21v-6m-4 6h8"/><path d="m12 3 4 5h-2l4 5h-4v3h-4v-3H6l4-5H8l4-5Z"/>',
  health: '<path d="M12 3v18M3 12h18"/><rect x="4" y="4" width="16" height="16" rx="4"/>',
  temple: '<path d="m3 10 9-7 9 7M5 10h14M6 20h12M4 22h16M8 11v8m4-8v8m4-8v8"/>',
  bag: '<path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 8a3 3 0 0 1 6 0M12 12v5m-2.5-2.5h5"/>',
  hotel: '<path d="M4 21V5l8-2v18m0-12h8v12M2 21h20"/><path d="M7 8h2m-2 4h2m-2 4h2m7-1h2m-2 3h2"/>',
  play: '<rect x="3" y="4" width="8" height="8" rx="2"/><rect x="13" y="12" width="8" height="8" rx="2"/><path d="M13 4h8v5h-8zM3 15h8v5H3z"/>',
  ocean: '<path d="M3 16c2.3-2 4.7-2 7 0s4.7 2 7 0 4.7-2 7 0M3 20c2.3-2 4.7-2 7 0s4.7 2 7 0 4.7-2 7 0"/><path d="M12 3v9m-4-5 4 5 4-5"/>',
  film: '<path d="M4 5h16v14H4zM4 9h16M4 15h16M8 5v4m8-4v4m-8 6v4m8-4v4"/>',
  art: '<path d="M12 3a9 9 0 1 0 0 18h1.2a2.1 2.1 0 0 0 1.4-3.7 1.7 1.7 0 0 1 1.1-3h1.1A4.2 4.2 0 0 0 21 10.1 7.7 7.7 0 0 0 12 3Z"/><path d="M7.5 10h.01M10 7.2h.01m4.2.2h.01m2.3 3h.01"/>',
  museum: '<path d="m3 9 9-6 9 6M5 10v9m4-9v9m6-9v9m4-9v9M3 21h18M8 14h8"/>',
  ball: '<circle cx="12" cy="12" r="9"/><path d="m12 3 2.7 4-1 4.2-4.8 1.5-3.8-2.8L6 5m13 3-4.3-.9M8.9 12.7l.2 5.1-3.5 2m8.1-7.6 4.2 2.1-.2 4.1"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 5.5v13A2.5 2.5 0 0 1 6.5 16H20M8 7h8m-8 3h7"/>',
  star: '<path d="m12 2 2.9 6 6.6 1-4.8 4.7 1.1 6.7-5.8-3.2-5.8 3.2 1.1-6.7-4.8-4.7 6.6-1L12 2Z"/>',
};

const CATEGORIES = {
  community: { label: 'ชุมชนรอบตัว', color: '#80a89a' },
  nature: { label: 'ธรรมชาติและวิทย์', color: '#74a77f' },
  culture: { label: 'ศิลปะและวัฒนธรรม', color: '#9887c7' },
  play: { label: 'เล่นและลงมือทำ', color: '#e59a6d' },
  care: { label: 'ผู้ดูแลชุมชน', color: '#df837a' },
};

const PLACES = [
  {
    id: 'seven', name: 'เซเว่นตรงข้ามโรงเรียน', short: '7-Eleven', category: 'community', icon: 'shop', lat: 13.7429412, lng: 100.5438054,
    intro: 'ร้านสะดวกซื้อใกล้โรงเรียน ชวนเด็กสังเกตว่าสินค้าและบริการช่วยคนในชุมชนได้อย่างไร',
    activities: ['ตามหาสัญลักษณ์บนฉลาก', 'ฝึกทักทายและต่อคิว', 'เรียนรู้การใช้เงิน'], age: 'วัยอนุบาล · สังเกตชุมชน',
  },
  {
    id: 'chitlom', name: 'สถานีรถไฟฟ้าชิดลม', short: 'BTS ชิดลม', category: 'community', icon: 'train', lat: 13.7443897, lng: 100.54365,
    intro: 'เรียนรู้การเดินทางในเมือง อ่านแผนที่สถานี และสังเกตสัญลักษณ์เพื่อความปลอดภัย',
    activities: ['นับจำนวนสถานี', 'อ่านป้ายทางออก', 'ฝึกเดินจับมือผู้ใหญ่'], age: 'วัยอนุบาล · การเดินทาง',
  },
  {
    id: 'lumphini', name: 'สวนลุมพินี', short: 'สวนลุมพินี', category: 'nature', icon: 'tree', lat: 13.7304754, lng: 100.5416508,
    intro: 'พื้นที่สีเขียวใจกลางเมืองสำหรับสังเกตต้นไม้ นก รูปร่างใบไม้ และเสียงรอบตัว',
    activities: ['ตามหาสีเขียว 3 เฉด', 'วาดใบไม้ที่พบ', 'ฟังเสียงธรรมชาติ'], age: 'วัยอนุบาล · ธรรมชาติ',
  },
  {
    id: 'police-hospital', name: 'โรงพยาบาลตำรวจ', short: 'รพ.ตำรวจ', category: 'care', icon: 'health', lat: 13.7433947, lng: 100.5377612,
    intro: 'ทำความรู้จักบทบาทของบุคลากรทางการแพทย์และการดูแลสุขภาพในชุมชน ผ่านการเตรียมกิจกรรมล่วงหน้า',
    activities: ['รู้จักอุปกรณ์ปฐมพยาบาล', 'ฝึกดูแลสุขอนามัย', 'พูดคุยเรื่องผู้ช่วยชุมชน'], age: 'วัยอนุบาล · ผู้ช่วยชุมชน',
  },
  {
    id: 'erawan', name: 'ศาลพระพรหมเอราวัณ', short: 'ศาลพระพรหม', category: 'culture', icon: 'temple', lat: 13.7461, lng: 100.54055,
    intro: 'สังเกตรายละเอียดงานสถาปัตยกรรม ลวดลาย และเรียนรู้มารยาทเมื่อเยี่ยมชมสถานที่สำคัญ',
    activities: ['มองหารูปทรงและลวดลาย', 'วาดสิ่งที่ประทับใจ', 'ฝึกใช้เสียงเบาและเคารพพื้นที่'], age: 'วัยอนุบาล · วัฒนธรรม',
  },
  {
    id: 'central', name: 'เซ็นทรัลชิดลม', short: 'Central Chidlom', category: 'community', icon: 'bag', lat: 13.744499, lng: 100.5444837,
    intro: 'ฝึกสังเกตป้าย แผนผัง และบริการต่าง ๆ ในพื้นที่สาธารณะ พร้อมเรียนรู้การช่วยกันดูแลของใช้',
    activities: ['อ่านแผนผังชั้น', 'จับคู่สัญลักษณ์กับสถานที่', 'ฝึกสังเกตทางหนีไฟ'], age: 'วัยอนุบาล · ทักษะชีวิต',
  },
  {
    id: 'renaissance', name: 'โรงแรมเรอเนสซองซ์', short: 'Renaissance', category: 'community', icon: 'hotel', lat: 13.7427482, lng: 100.5419168,
    intro: 'ชวนคุยเรื่องอาชีพและการต้อนรับผู้มาเยือน พร้อมสังเกตการออกแบบพื้นที่โรงแรมจากบริเวณที่เข้าชมได้',
    activities: ['สำรวจรูปทรงอาคาร', 'รู้จักงานบริการ', 'ฝึกกล่าวคำขอบคุณ'], age: 'วัยอนุบาล · อาชีพในชุมชน',
  },
  {
    id: 'harborland', name: 'ฮาเบอร์แลนด์ หลังสวน', short: 'HarborLand', category: 'play', icon: 'play', lat: 13.7370477, lng: 100.5429866,
    intro: 'พื้นที่เล่นที่ชวนให้เด็กได้เคลื่อนไหว ทดลองปีนป่าย และฝึกเล่นร่วมกับเพื่อนอย่างปลอดภัย',
    activities: ['ฝึกทรงตัวและเคลื่อนไหว', 'เล่นตามกติกา', 'รอคิวและแบ่งปัน'], age: 'วัยอนุบาล · การเล่นและการเคลื่อนไหว',
  },
  {
    id: 'sea-life', name: 'สยามโอเชี่ยนเวิลด์ · SEA LIFE', short: 'SEA LIFE', category: 'nature', icon: 'ocean', lat: 13.7469747, lng: 100.5351985,
    intro: 'สำรวจสิ่งมีชีวิตใต้ทะเล สังเกตความแตกต่างของสัตว์ และพูดคุยเรื่องการดูแลระบบนิเวศ',
    activities: ['ตามหาสัตว์ทะเลที่มีลาย', 'สังเกตการเคลื่อนที่', 'เลือกหนึ่งวิธีดูแลทะเล'], age: 'วัยอนุบาล · วิทยาศาสตร์ธรรมชาติ',
  },
  {
    id: 'lido', name: 'ลิโด้ คอนเน็คท์', short: 'Lido Connect', category: 'culture', icon: 'film', lat: 13.7453701, lng: 100.5323574,
    intro: 'พื้นที่สร้างสรรค์และโรงภาพยนตร์ ชวนเด็กสังเกตภาพ เสียง และเรื่องราวที่ทำให้เกิดจินตนาการ',
    activities: ['เล่าเรื่องจากภาพที่เห็น', 'สังเกตแสงและเสียง', 'ทำโปสเตอร์หนังในแบบของเรา'], age: 'วัยอนุบาล · สื่อและจินตนาการ',
  },
  {
    id: 'cinema', name: 'โรงภาพยนตร์ เอ็มบีเค', short: 'SF Cinema MBK', category: 'culture', icon: 'film', lat: 13.74475, lng: 100.52935,
    intro: 'เรียนรู้การเล่าเรื่องด้วยภาพและเสียง ฝึกเลือกเนื้อหาที่เหมาะกับวัยและทำตามกติกาพื้นที่ส่วนรวม',
    activities: ['เรียงภาพเป็นเรื่องราว', 'สังเกตดนตรีประกอบ', 'ฝึกมารยาทในโรงภาพยนตร์'], age: 'วัยอนุบาล · การเล่าเรื่อง',
  },
  {
    id: 'bacc', name: 'หอศิลปวัฒนธรรมแห่งกรุงเทพฯ', short: 'BACC · หอศิลป์', category: 'culture', icon: 'art', lat: 13.74675, lng: 100.53027,
    intro: 'ชวนเด็กดูงานศิลปะอย่างเปิดใจ ฝึกบรรยายสี รูปร่าง และความรู้สึกของตัวเอง',
    activities: ['เลือกงานที่ชอบหนึ่งชิ้น', 'ตามหาสีคู่ตรงข้าม', 'วาดภาพจากความรู้สึก'], age: 'วัยอนุบาล · ศิลปะ',
  },
  {
    id: 'children-museum', name: 'พิพิธภัณฑ์เด็กกรุงเทพฯ', short: 'พิพิธภัณฑ์เด็ก', category: 'play', icon: 'museum', lat: 13.80342, lng: 100.55071,
    intro: 'พื้นที่เรียนรู้ผ่านการเล่นและการลงมือทำ อยู่ไกลเกินวง 3 กม. จึงควรวางแผนการเดินทางแยกต่างหาก',
    activities: ['ทดลองและตั้งคำถาม', 'สร้างสิ่งของจากวัสดุ', 'เล่นบทบาทสมมติ'], age: 'วัยอนุบาล · เรียนรู้ผ่านการเล่น', outside: true,
    note: 'พิพิธภัณฑ์เด็กอยู่ห่างจากโรงเรียนประมาณ 6.8 กม. นอกวงสำรวจ 3 กม. ควรวางแผนรถรับส่งและตรวจสอบกิจกรรมก่อนเดินทาง',
  },
  {
    id: 'stadium', name: 'สนามกีฬาจุฬาลงกรณ์ฯ', short: 'สนามกีฬาจุฬาฯ', category: 'play', icon: 'ball', lat: 13.7373654, lng: 100.5257473,
    intro: 'สนามกีฬาเป็นพื้นที่เรียนรู้เรื่องการเคลื่อนไหว กติกา การทำงานเป็นทีม และการดูแลร่างกาย',
    activities: ['อบอุ่นร่างกายง่าย ๆ', 'เล่นเกมส่งบอล', 'ฝึกเชียร์และให้กำลังใจเพื่อน'], age: 'วัยอนุบาล · กีฬาและทีมเวิร์ก',
  },
  {
    id: 'playlab', name: 'Play Lab · ครุศาสตร์ จุฬาฯ', short: 'Play Lab จุฬาฯ', category: 'play', icon: 'book', lat: 13.73865, lng: 100.52955,
    intro: 'ชวนเด็กทดลอง เรียนรู้ผ่านการเล่น และตั้งคำถามจากสิ่งรอบตัวในพื้นที่ของคณะครุศาสตร์',
    activities: ['สำรวจของเล่นและวิธีใช้', 'ออกแบบเกมง่าย ๆ', 'เล่าว่าเล่นแล้วค้นพบอะไร'], age: 'วัยอนุบาล · การเรียนรู้ผ่านการเล่น',
    note: 'ควรประสานงานกับคณะหรือผู้ดูแล Play Lab ก่อนเข้าเยี่ยมชม เพื่อเช็กวันและเวลาที่เปิดรับกลุ่ม',
  },
];

const SCHOOL_IMAGE = 'img/materdei.webp';
const PLACE_IMAGES = {
  seven: 'img/7-eleven.jpg',
  chitlom: 'img/bts.webp',
  lumphini: 'img/lumphini-park.jpg',
  'police-hospital': 'img/police-hospital.png',
  erawan: 'img/ศาล.jpg',
  central: 'img/central-chidlom.jpeg',
  renaissance: 'img/renaissance.jpeg',
  harborland: 'img/harborland.png',
  'sea-life': 'img/sealife.jpeg',
  lido: 'img/lido.jpg',
  cinema: 'img/mbk.jpeg',
  bacc: 'img/bacc.avif',
  'children-museum': 'img/พิพิธภัณฑ์เด็กกรุงเทพ.webp',
  stadium: 'img/สนามกีฬาจุฬาลงกรณ์มหาวิทยาลัย.png',
  playlab: 'img/play-lab.png',
};

const loginScreen = document.querySelector('#login-screen');
const appShell = document.querySelector('#app-shell');
const loginForm = document.querySelector('#login-form');
const consentDialog = document.querySelector('#consent-dialog');
let map;
let maplibregl;
let mapReady = false;
let mapInitStarted = false;
let overviewZoom = OVERVIEW_ZOOM;
let mapLoadingTimer;
let markers = new Map();
let selectedPlace = null;
let routeFeature = null;
let routeBeacon = null;
let beaconFrame = 0;
let routeRequest = 0;
let activeFilter = 'all';
let searchTerm = '';
let radiusVisible = true;
let savedPlaces = loadSavedPlaces();
let feedbackEntries = loadFeedbackEntries();

function icon(name, cls = '') {
  return `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.star}</svg>`;
}

function loadSavedPlaces() {
  try {
    return new Set(JSON.parse(localStorage.getItem('md-explorer-saved') || '[]'));
  } catch {
    return new Set();
  }
}

function savePlaceIds() {
  localStorage.setItem('md-explorer-saved', JSON.stringify([...savedPlaces]));
  renderDestinationList();
}

function loadFeedbackEntries() {
  try {
    const stored = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored.filter((entry) => entry && typeof entry.message === 'string') : [];
  } catch {
    return [];
  }
}

function saveFeedbackEntries() {
  try {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedbackEntries));
    return true;
  } catch {
    return false;
  }
}

function accountDisplayName() {
  return document.querySelector('.user-name b')?.textContent.replace(/^คุณ\s*/, '').trim() || CURRENT_USER_NAME;
}

function renderFeedbackEntries() {
  const section = document.querySelector('#community-suggestions');
  const list = document.querySelector('#feedback-list');
  if (!section || !list) return;
  section.hidden = feedbackEntries.length === 0;
  document.querySelector('#feedback-count').textContent = String(feedbackEntries.length);
  list.replaceChildren();

  feedbackEntries.forEach((entry) => {
    const card = document.createElement('article');
    card.className = 'feedback-entry';
    const meta = document.createElement('div');
    meta.className = 'feedback-entry-meta';
    const type = document.createElement('span');
    type.className = 'feedback-entry-type';
    type.textContent = entry.kind === 'place' ? 'แหล่งเรียนรู้ใหม่' : 'ความคิดเห็น';
    const author = document.createElement('span');
    author.className = 'feedback-entry-author';
    author.textContent = entry.author === 'anonymous' ? 'Anonymous' : accountDisplayName();
    meta.append(type, author);

    const message = document.createElement('p');
    message.className = 'feedback-entry-message';
    message.textContent = entry.message;
    card.append(meta);
    if (entry.kind === 'place' && entry.placeName) {
      const placeName = document.createElement('h5');
      placeName.className = 'feedback-entry-place';
      placeName.textContent = entry.placeName;
      card.append(placeName);
    }
    card.append(message);

    const footer = document.createElement('div');
    footer.className = 'feedback-entry-footer';
    const date = document.createElement('time');
    const createdAt = new Date(entry.createdAt);
    date.textContent = Number.isNaN(createdAt.getTime()) ? '' : new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'short' }).format(createdAt);
    if (!Number.isNaN(createdAt.getTime())) date.dateTime = createdAt.toISOString();
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'feedback-remove';
    remove.textContent = 'ลบข้อเสนอนี้';
    remove.setAttribute('aria-label', `ลบข้อเสนอ${entry.placeName ? ` ${entry.placeName}` : ''}`);
    remove.addEventListener('click', () => {
      feedbackEntries = feedbackEntries.filter((saved) => saved.id !== entry.id);
      saveFeedbackEntries();
      renderFeedbackEntries();
    });
    footer.append(date, remove);
    card.append(footer);
    list.append(card);
  });
}

function updateFeedbackForm() {
  const kind = document.querySelector('input[name="feedback-kind"]:checked')?.value || 'comment';
  const placeField = document.querySelector('#feedback-place-field');
  const placeInput = document.querySelector('#feedback-place');
  const isPlaceSuggestion = kind === 'place';
  placeField.hidden = !isPlaceSuggestion;
  placeInput.required = isPlaceSuggestion;
  document.querySelector('#feedback-message-label').textContent = isPlaceSuggestion ? 'รายละเอียดแหล่งเรียนรู้' : 'ความคิดเห็น';
  document.querySelector('#feedback-message').placeholder = isPlaceSuggestion
    ? 'เล่าว่าเด็ก ๆ จะได้เรียนรู้อะไร หรือควรติดต่อใครก่อน...'
    : 'เล่าไอเดียหรือรายละเอียดที่อยากแบ่งปัน...';

  const authorMode = document.querySelector('input[name="feedback-author"]:checked')?.value || 'real';
  document.querySelector('#feedback-author-preview').textContent = authorMode === 'anonymous'
    ? 'จะแสดงชื่อ Anonymous'
    : `จะแสดงชื่อ ${accountDisplayName()}`;
}

const feedbackForm = document.querySelector('#feedback-form');
feedbackForm.querySelectorAll('input[name="feedback-kind"],input[name="feedback-author"]').forEach((input) => {
  input.addEventListener('change', updateFeedbackForm);
});
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = new FormData(feedbackForm);
  const message = String(values.get('message') || '').trim();
  const kind = String(values.get('feedback-kind') || 'comment');
  const placeName = String(values.get('place') || '').trim();
  if (!message || (kind === 'place' && !placeName)) return;

  feedbackEntries.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    kind,
    placeName,
    message,
    author: values.get('feedback-author') === 'anonymous' ? 'anonymous' : 'real',
    createdAt: new Date().toISOString(),
  });
  feedbackEntries = feedbackEntries.slice(0, 50);
  const saved = saveFeedbackEntries();
  renderFeedbackEntries();
  feedbackForm.reset();
  updateFeedbackForm();
  document.querySelector('#feedback-status').textContent = saved
    ? 'บันทึกข้อเสนอไว้ในเบราว์เซอร์เครื่องนี้แล้ว'
    : 'เพิ่มข้อเสนอในหน้านี้แล้ว แต่บันทึกลงเบราว์เซอร์ไม่สำเร็จ';
});

function showLoginError(message) {
  document.querySelector('#login-error').textContent = message;
}

function enterApp() {
  sessionStorage.setItem('md-explorer-demo-session', 'active');
  loginScreen.hidden = true;
  appShell.hidden = false;
  renderDestinationList();
  if (!mapInitStarted) requestAnimationFrame(initMap);
  else if (map) setTimeout(() => map.resize(), 100);
}

function leaveApp() {
  sessionStorage.removeItem('md-explorer-demo-session');
  sessionStorage.removeItem(CONSENT_SESSION_KEY);
  appShell.hidden = true;
  loginScreen.hidden = false;
  selectedPlace = null;
  clearSelection();
}

function openConsent(email) {
  document.querySelector('#consent-account-email').textContent = email;
  const acknowledgement = document.querySelector('#consent-acknowledgement');
  acknowledgement.checked = false;
  document.querySelector('#consent-accept').disabled = true;
  if (!consentDialog.open) consentDialog.showModal();
}

function closeConsentAndReturnToLogin() {
  sessionStorage.removeItem('md-explorer-demo-session');
  sessionStorage.removeItem(CONSENT_SESSION_KEY);
  if (consentDialog.open) consentDialog.close();
  appShell.hidden = true;
  loginScreen.hidden = false;
  showLoginError('ต้องรับทราบเงื่อนไขการเสนอความคิดเห็นก่อนเข้าสู่แผนที่');
  document.querySelector('#email').focus();
}

document.querySelector('#consent-acknowledgement').addEventListener('change', (event) => {
  document.querySelector('#consent-accept').disabled = !event.currentTarget.checked;
});
document.querySelector('#consent-accept').addEventListener('click', () => {
  if (!document.querySelector('#consent-acknowledgement').checked) return;
  sessionStorage.setItem(CONSENT_SESSION_KEY, 'acknowledged');
  if (consentDialog.open) consentDialog.close();
  enterApp();
});
document.querySelector('#consent-decline').addEventListener('click', closeConsentAndReturnToLogin);
consentDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeConsentAndReturnToLogin();
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;
  if (email.toLowerCase() !== SCHOOL_EMAIL.toLowerCase() || password !== SCHOOL_PASSWORD) {
    showLoginError('อีเมลหรือรหัสผ่านไม่ถูกต้อง ลองใช้บัญชีตัวอย่างด้านล่างนะ');
    return;
  }
  showLoginError('');
  openConsent(email);
});

document.querySelector('#toggle-password').addEventListener('click', (event) => {
  const password = document.querySelector('#password');
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  event.currentTarget.textContent = visible ? 'ซ่อน' : 'แสดง';
  event.currentTarget.setAttribute('aria-label', visible ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน');
});

document.querySelector('#signout-button').addEventListener('click', leaveApp);

function distanceKm(a, b) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const dLat = radians(b.lat - a.lat);
  const dLng = radians(b.lng - a.lng);
  const lat1 = radians(a.lat);
  const lat2 = radians(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)} ม.`;
  return `${km.toFixed(1)} กม.`;
}

function renderDestinationList() {
  const container = document.querySelector('#destination-list');
  if (!container) return;
  const filtered = PLACES.filter((place) => {
    const matchesCategory = activeFilter === 'all' || place.category === activeFilter || (activeFilter === 'community' && place.category === 'care');
    const haystack = `${place.name} ${place.short} ${CATEGORIES[place.category].label}`.toLocaleLowerCase('th');
    const matchesSearch = !searchTerm || haystack.includes(searchTerm.toLocaleLowerCase('th'));
    return matchesCategory && matchesSearch;
  });
  if (!filtered.length) {
    container.innerHTML = '<div class="empty-results">ไม่พบสถานที่ที่ค้นหา ลองเปลี่ยนคำหรือหมวดหมู่ดูนะ</div>';
    return;
  }
  container.innerHTML = filtered.map((place) => {
    const category = CATEGORIES[place.category];
    const distance = distanceKm(SCHOOL, place);
    const selected = selectedPlace?.id === place.id ? ' selected' : '';
    const saved = savedPlaces.has(place.id) ? `<span class="saved-mark" aria-label="บันทึกแล้ว">${icon('star')}</span>` : '';
    const hasSchoolEscort = SCHOOL_ESCORT_PLACE_IDS.has(place.id);
    const escortDescription = hasSchoolEscort ? 'ผู้ปกครองหรือคุณครูพาไป' : 'ผู้ปกครองพาไป';
    const escorts = `<span class="visit-mode-icons" aria-label="${escortDescription}"><span class="visit-mode-parent" role="img" aria-label="ผู้ปกครองพาไป" title="ผู้ปกครองพาไป">👩‍👦</span>${hasSchoolEscort ? '<span class="visit-mode-teacher" role="img" aria-label="โรงเรียนหรือคุณครูพาไป" title="โรงเรียนหรือคุณครูพาไป">👩‍🏫</span>' : ''}</span>`;
    return `<button class="destination-item${selected}" type="button" data-place="${place.id}" style="--place-color:${category.color}" aria-label="ดูรายละเอียด ${place.name} · ${escortDescription}" aria-pressed="${Boolean(selectedPlace?.id === place.id)}">
      <span class="list-icon list-icon-${place.id}"><img src="${PLACE_IMAGES[place.id]}" alt="" loading="lazy" /></span><span class="destination-copy"><span class="destination-name-row"><b class="destination-name">${place.name}</b>${escorts}</span><span>${category.label}${place.outside ? ' · นอกวง 3 กม.' : ''}</span></span><span class="item-distance${place.outside ? ' outside' : ''}">${formatDistance(distance)}</span>${saved}
    </button>`;
  }).join('');
  container.querySelectorAll('[data-place]').forEach((button) => button.addEventListener('click', () => selectPlace(button.dataset.place)));
}

document.querySelector('#search-input').addEventListener('input', (event) => {
  searchTerm = event.currentTarget.value.trim();
  renderDestinationList();
});

document.querySelector('#category-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeFilter = button.dataset.category;
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.classList.toggle('active', chip === button);
    chip.setAttribute('aria-pressed', String(chip === button));
  });
  renderDestinationList();
});

function circlePolygon(center, radiusKm, points = 96) {
  const coordinates = [];
  const earthRadius = 6371;
  const lat1 = center.lat * Math.PI / 180;
  const lon1 = center.lng * Math.PI / 180;
  const angularDistance = radiusKm / earthRadius;
  for (let i = 0; i <= points; i += 1) {
    const bearing = 2 * Math.PI * i / points;
    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) + Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(bearing));
    const lon2 = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(angularDistance) * Math.cos(lat1), Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2));
    coordinates.push([lon2 * 180 / Math.PI, lat2 * 180 / Math.PI]);
  }
  return { type: 'Feature', properties: { name: `วงสำรวจ ${radiusKm} กม.` }, geometry: { type: 'Polygon', coordinates: [coordinates] } };
}

function styleMap() {
  const style = map.getStyle();
  const paint = (layerId, property, value) => {
    if (map.getLayer(layerId)) map.setPaintProperty(layerId, property, value);
  };
  paint('background', 'background-color', '#eaf1e5');
  paint('landuse-residential', 'fill-color', '#f4f1e8');
  paint('landuse-suburb', 'fill-color', '#f0ede3');
  paint('landuse-commercial', 'fill-color', '#f2e7d8');
  paint('landuse-industrial', 'fill-color', '#e9e9df');
  paint('landuse-school', 'fill-color', '#ede7f2');
  paint('landuse-hospital', 'fill-color', '#f6e4dc');
  paint('park', 'fill-color', '#cfe6cb');
  paint('landcover-grass', 'fill-color', '#dcebd2');
  paint('landcover-grass-park', 'fill-color', '#cfe6cb');
  paint('landcover-wood', 'fill-color', '#a8cfa9');
  paint('water', 'fill-color', '#bddce2');
  paint('water-intermittent', 'fill-color', '#c7e0e4');
  paint('building', 'fill-color', ['interpolate', ['linear'], ['zoom'], 13, '#e9e2d5', 16, '#ddd4c5']);
  paint('building-top', 'fill-color', '#eee8dd');
  for (const layer of style.layers) {
    if (/^(highway|bridge|tunnel)-/.test(layer.id) && layer.type === 'line') {
      if (layer.id.includes('casing')) paint(layer.id, 'line-color', '#d8d4c9');
      else if (layer.id.includes('motorway') || layer.id.includes('primary') || layer.id.includes('trunk')) paint(layer.id, 'line-color', '#f4d8a9');
      else if (layer.id.includes('secondary') || layer.id.includes('tertiary')) paint(layer.id, 'line-color', '#fffaf0');
      else paint(layer.id, 'line-color', '#fffdf7');
    }
    if (layer.type === 'symbol' && layer.layout?.['text-field']) {
      paint(layer.id, 'text-color', '#77867b');
      paint(layer.id, 'text-halo-color', '#f8f6ef');
    }
  }
  const buildingLayer = style.layers.find((layer) => layer['source-layer'] === 'building');
  if (buildingLayer && !map.getLayer('md-building-extrusion')) {
    const firstSymbol = style.layers.find((layer) => layer.type === 'symbol')?.id;
    map.addLayer({
      id: 'md-building-extrusion',
      type: 'fill-extrusion',
      source: buildingLayer.source,
      'source-layer': 'building',
      minzoom: 12,
      paint: {
        'fill-extrusion-color': ['match', ['get', 'class'], 'hospital', '#e8c6bb', 'school', '#d9d2e8', 'commercial', '#ead2b4', 'industrial', '#d9dbd1', '#e4dccd'],
        'fill-extrusion-height': ['coalesce', ['get', 'render_height'], ['get', 'height'], 8],
        'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], ['get', 'min_height'], 0],
        'fill-extrusion-opacity': .96,
        'fill-extrusion-vertical-gradient': true,
      },
    }, firstSymbol);
  }
}

function createMarker(place, isSchool = false) {
  const color = isSchool ? '#ed8a68' : CATEGORIES[place.category].color;
  const element = document.createElement('button');
  element.type = 'button';
  element.className = `map-marker${isSchool ? ' school-marker' : ''}`;
  element.style.setProperty('--marker-color', color);
  element.setAttribute('aria-label', isSchool ? `${place.name} จุดเริ่มต้น` : `เลือก ${place.name}`);
  element.setAttribute('aria-pressed', 'false');
  if (!isSchool) {
    element.classList.add('map-marker-hidden');
    element.setAttribute('aria-hidden', 'true');
    element.tabIndex = -1;
  }
  const image = isSchool ? SCHOOL_IMAGE : PLACE_IMAGES[place.id];
  element.innerHTML = `<span class="marker-visual"><span class="marker-pin"></span><img class="marker-photo" src="${image}" alt="" /><span class="marker-tip"></span></span><span class="marker-label">${place.short || place.name}</span>`;
  if (!isSchool) element.addEventListener('click', () => selectPlace(place.id));
  else element.addEventListener('click', focusSchool);
  const marker = new maplibregl.Marker({ element, anchor: 'bottom', offset: [0, isSchool ? -9 : -6] }).setLngLat([place.lng, place.lat]).addTo(map);
  return { marker, element };
}

function schoolOverviewBounds() {
  const latitudeOffset = OVERVIEW_RADIUS_KM / 110.574;
  const longitudeOffset = OVERVIEW_RADIUS_KM / (111.32 * Math.cos(SCHOOL.lat * Math.PI / 180));
  return [
    [SCHOOL.lng - longitudeOffset, SCHOOL.lat - latitudeOffset],
    [SCHOOL.lng + longitudeOffset, SCHOOL.lat + latitudeOffset],
  ];
}

function fitSchoolOverview(duration = 0) {
  if (!mapReady) return;
  map.fitBounds(schoolOverviewBounds(), {
    padding: { top: 52, right: 52, bottom: 58, left: 52 },
    offset: [0, 50],
    pitch: OVERVIEW_PITCH,
    bearing: OVERVIEW_BEARING,
    duration,
  });
  if (!duration) {
    overviewZoom = map.getZoom();
    map.setMinZoom(Math.max(10, overviewZoom - .2));
    updatePlaceMarkerVisibility();
  }
}

function updatePlaceMarkerVisibility() {
  if (!mapReady) return;
  const revealNearby = map.getZoom() >= overviewZoom + PLACE_MARKER_REVEAL_DELTA;
  for (const place of PLACES) {
    const entry = markers.get(place.id);
    if (!entry) continue;
    const inExploreRadius = distanceKm(SCHOOL, place) <= 5;
    const visible = selectedPlace?.id === place.id || (inExploreRadius && revealNearby);
    const hidden = !visible;
    if (entry.element.classList.contains('map-marker-hidden') === hidden) continue;
    entry.element.classList.toggle('map-marker-hidden', hidden);
    entry.element.setAttribute('aria-hidden', String(hidden));
    entry.element.tabIndex = hidden ? -1 : 0;
  }
}

async function initMap() {
  if (mapInitStarted) return;
  mapInitStarted = true;
  if (window.location.protocol === 'file:') {
    showMapError('แผนที่ต้องเปิดผ่านเว็บเซิร์ฟเวอร์ในเครื่อง ไม่สามารถโหลดจากไฟล์ index.html โดยตรงได้', {
      label: 'เปิดแผนที่ที่ localhost:4173',
      href: 'http://localhost:4173/',
    });
    return;
  }
  try {
    maplibregl = await import('https://cdn.jsdelivr.net/npm/maplibre-gl@6.11.2/dist/maplibre-gl.mjs');
  } catch (error) {
    mapInitStarted = false;
    showMapError('โหลดเครื่องมือแผนที่ไม่สำเร็จ ตรวจสอบอินเทอร์เน็ตแล้วลองอีกครั้ง');
    return;
  }
  map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/bright',
    center: [SCHOOL.lng, SCHOOL.lat],
    zoom: OVERVIEW_ZOOM,
    pitch: OVERVIEW_PITCH,
    bearing: OVERVIEW_BEARING,
    dragRotate: true,
    pitchWithRotate: false,
    touchPitch: false,
    maxPitch: 60,
    minZoom: 10,
    maxZoom: 19,
    attributionControl: true,
    canvasContextAttributes: { antialias: true },
  });
  map.touchZoomRotate.disableRotation();
  map.addControl(new maplibregl.NavigationControl({ showCompass: false, visualizePitch: false }), 'top-right');
  mapLoadingTimer = setTimeout(() => {
    if (!mapReady) showMapError('แผนที่ใช้เวลาโหลดนาน ลองเชื่อมต่ออินเทอร์เน็ตแล้วรีเฟรชอีกครั้ง');
  }, 15000);
  map.on('load', () => {
    clearTimeout(mapLoadingTimer);
    mapReady = true;
    map.resize();
    styleMap();
    map.addSource('explore-radius', { type: 'geojson', data: circlePolygon(SCHOOL, OVERVIEW_RADIUS_KM) });
    map.addLayer({ id: 'radius-fill', type: 'fill', source: 'explore-radius', paint: { 'fill-color': '#f4c86d', 'fill-opacity': .08 } });
    map.addLayer({ id: 'radius-line', type: 'line', source: 'explore-radius', paint: { 'line-color': '#dfa64f', 'line-width': 2, 'line-dasharray': [2, 2], 'line-opacity': .88 } });
    map.addSource('active-route', { type: 'geojson', lineMetrics: true, data: emptyFeatureCollection() });
    map.addLayer({ id: 'route-halo', type: 'line', source: 'active-route', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': '#fffaf0', 'line-width': 9, 'line-opacity': .93 } });
    map.addLayer({
      id: 'route-line', type: 'line', source: 'active-route', layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-gradient': ['interpolate', ['linear'], ['line-progress'], 0, '#ec956e', .52, '#eaa967', 1, '#72ad8d'], 'line-width': 5, 'line-opacity': .98 },
    });
    const schoolMarker = createMarker(SCHOOL, true);
    markers.set(SCHOOL.id, schoolMarker);
    PLACES.forEach((place) => markers.set(place.id, createMarker(place)));
    routeBeacon = document.createElement('div');
    routeBeacon.className = 'route-beacon';
    routeBeacon.setAttribute('aria-hidden', 'true');
    const beaconMarker = new maplibregl.Marker({ element: routeBeacon, anchor: 'center' }).setLngLat([SCHOOL.lng, SCHOOL.lat]).addTo(map);
    markers.set('__beacon__', { marker: beaconMarker, element: routeBeacon });
    routeBeacon.style.display = 'none';
    setTimeout(() => {
      map.resize();
      fitSchoolOverview();
      document.querySelector('#map-loading').classList.add('loaded');
    }, 180);
  });
  map.on('zoom', updatePlaceMarkerVisibility);
  map.on('error', (event) => {
    if (!mapReady && event?.error) console.warn('Map resource error:', event.error.message);
  });
}

function emptyFeatureCollection() { return { type: 'FeatureCollection', features: [] }; }

function showMapError(message, action = {}) {
  const loading = document.querySelector('#map-loading');
  const errorMark = document.createElement('span');
  errorMark.className = 'map-error-mark';
  errorMark.textContent = '!';
  const messageText = document.createElement('span');
  messageText.textContent = message;
  const actionElement = action.href ? document.createElement('a') : document.createElement('button');
  actionElement.className = 'map-retry';
  actionElement.textContent = action.label || 'ลองโหลดอีกครั้ง';
  if (action.href) actionElement.href = action.href;
  else {
    actionElement.type = 'button';
    actionElement.addEventListener('click', retryMap);
  }
  loading.replaceChildren(errorMark, messageText, actionElement);
  loading.classList.remove('loaded');
}

function retryMap() {
  clearTimeout(mapLoadingTimer);
  if (map) map.remove();
  map = null;
  mapReady = false;
  mapInitStarted = false;
  markers = new Map();
  routeBeacon = null;
  document.querySelector('#map-loading').innerHTML = '<span class="loading-spinner"></span><span>กำลังจัดเตรียมแผนที่...</span>';
  document.querySelector('#map-loading').classList.remove('loaded');
  initMap();
}

function makeFallbackRoute(place) {
  const midLng = (SCHOOL.lng + place.lng) / 2;
  const midLat = (SCHOOL.lat + place.lat) / 2;
  const bendLng = midLng + (place.lng >= SCHOOL.lng ? .00028 : -.00028);
  const bendLat = midLat + (place.lat >= SCHOOL.lat ? .00018 : -.00018);
  return {
    coordinates: [[SCHOOL.lng, SCHOOL.lat], [bendLng, bendLat], [place.lng, place.lat]],
    distance: distanceKm(SCHOOL, place) * 1200,
    duration: distanceKm(SCHOOL, place) * 1000,
  };
}

async function fetchWalkingRoute(place, requestToken) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  const url = `https://routing.openstreetmap.de/routed-foot/route/v1/driving/${SCHOOL.lng},${SCHOOL.lat};${place.lng},${place.lat}?overview=full&geometries=geojson&steps=false`;
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`route service ${response.status}`);
    const data = await response.json();
    if (requestToken !== routeRequest) return null;
    const route = data.routes?.[0];
    if (!route?.geometry?.coordinates?.length) throw new Error('route missing');
    return { coordinates: route.geometry.coordinates, distance: route.distance, duration: route.duration, estimated: false };
  } catch (error) {
    if (requestToken !== routeRequest) return null;
    console.info('Using approximate route fallback:', error.message);
    return { ...makeFallbackRoute(place), estimated: true };
  } finally {
    clearTimeout(timeout);
  }
}

function routeCoordinatesBounds(coordinates) {
  const bounds = new maplibregl.LngLatBounds();
  coordinates.forEach((coordinate) => bounds.extend(coordinate));
  return bounds;
}

function updateRouteBeacon(coordinates) {
  cancelAnimationFrame(beaconFrame);
  if (!routeBeacon || coordinates.length < 2) return;
  routeBeacon.style.display = '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    markers.get('__beacon__')?.marker.setLngLat(coordinates[coordinates.length - 1]);
    return;
  }
  const segmentLengths = [];
  let total = 0;
  for (let i = 1; i < coordinates.length; i += 1) {
    const length = distanceKm({ lng: coordinates[i - 1][0], lat: coordinates[i - 1][1] }, { lng: coordinates[i][0], lat: coordinates[i][1] });
    segmentLengths.push(length);
    total += length;
  }
  const startTime = performance.now();
  const travelMs = Math.max(2600, Math.min(6400, total * 950));
  const animate = (now) => {
    if (!selectedPlace || !mapReady || !routeBeacon || !markers.has('__beacon__')) return;
    const progress = ((now - startTime) % travelMs) / travelMs;
    let remaining = progress * total;
    for (let index = 0; index < segmentLengths.length; index += 1) {
      const length = segmentLengths[index];
      if (remaining <= length || index === segmentLengths.length - 1) {
        const fraction = length ? Math.min(1, remaining / length) : 0;
        const from = coordinates[index];
        const to = coordinates[index + 1];
        markers.get('__beacon__').marker.setLngLat([from[0] + (to[0] - from[0]) * fraction, from[1] + (to[1] - from[1]) * fraction]);
        break;
      }
      remaining -= length;
    }
    beaconFrame = requestAnimationFrame(animate);
  };
  beaconFrame = requestAnimationFrame(animate);
}

function setRouteSummary(route) {
  document.querySelector('#route-distance').textContent = formatDistance(route.distance / 1000);
  const minutes = Math.max(1, Math.round(route.duration / 60));
  document.querySelector('#route-duration').textContent = minutes >= 60 ? `${Math.floor(minutes / 60)} ชม. ${minutes % 60} นาที` : `${minutes} นาที`;
  const note = document.querySelector('#detail-note');
  if (selectedPlace?.note) note.querySelector('span').textContent = selectedPlace.note;
  else note.querySelector('span').textContent = route.estimated
    ? 'แสดงเส้นทางโดยประมาณ หากจะเดินทางจริง ตรวจสอบเส้นทางและเวลาเปิด-ปิดอีกครั้ง'
    : 'เส้นทางเดินโดยประมาณจากข้อมูลถนน OpenStreetMap ตรวจสอบทางเท้าและความปลอดภัยก่อนเดินทาง';
}

function openPlaceCard(place) {
  const category = CATEGORIES[place.category];
  document.querySelector('#detail-empty').hidden = true;
  document.querySelector('#place-card').hidden = false;
  const iconBox = document.querySelector('#detail-icon');
  iconBox.innerHTML = `<img src="${PLACE_IMAGES[place.id]}" alt="" />`;
  iconBox.style.setProperty('--detail-color', category.color);
  document.querySelector('#detail-category').textContent = category.label;
  document.querySelector('#detail-title').textContent = place.name;
  document.querySelector('#detail-subtitle').textContent = `${place.age} · ห่างจากโรงเรียน ${formatDistance(distanceKm(SCHOOL, place))}${place.outside ? ' · นอกวงสำรวจ 3 กม.' : ''}`;
  document.querySelector('#learning-copy').textContent = place.intro;
  document.querySelector('#activity-list').innerHTML = place.activities.map((activity) => `<span class="activity-tag">${activity}</span>`).join('');
  document.querySelector('#route-distance').textContent = 'กำลังคำนวณ...';
  document.querySelector('#route-duration').textContent = '—';
  const note = document.querySelector('#detail-note');
  note.querySelector('span').textContent = place.note || 'กำลังคำนวณเส้นทางเดินโดยประมาณจากโรงเรียน';
  const mapsUrl = new URL('https://www.google.com/maps/dir/');
  mapsUrl.searchParams.set('api', '1');
  mapsUrl.searchParams.set('origin', `${SCHOOL.lat},${SCHOOL.lng}`);
  mapsUrl.searchParams.set('destination', `${place.lat},${place.lng}`);
  mapsUrl.searchParams.set('travelmode', 'walking');
  document.querySelector('#directions-link').href = mapsUrl.toString();
  const saveButton = document.querySelector('#save-destination');
  if (saveButton) saveButton.remove();
  const activityBlock = document.querySelector('.activity-block');
  const save = document.createElement('button');
  save.id = 'save-destination';
  save.type = 'button';
  save.className = `save-destination${savedPlaces.has(place.id) ? ' saved' : ''}`;
  save.innerHTML = `<span>${icon('star')}</span><b>${savedPlaces.has(place.id) ? 'บันทึกแล้ว' : 'บันทึกเป็นภารกิจ'}</b><small>${savedPlaces.has(place.id) ? 'แตะเพื่อเอาออกจากรายการ' : 'เก็บไว้ในแผนที่ของฉัน'}</small>`;
  save.addEventListener('click', () => {
    if (savedPlaces.has(place.id)) savedPlaces.delete(place.id);
    else savedPlaces.add(place.id);
    savePlaceIds();
    save.classList.toggle('saved', savedPlaces.has(place.id));
    save.querySelector('b').textContent = savedPlaces.has(place.id) ? 'บันทึกแล้ว' : 'บันทึกเป็นภารกิจ';
    save.querySelector('small').textContent = savedPlaces.has(place.id) ? 'แตะเพื่อเอาออกจากรายการ' : 'เก็บไว้ในแผนที่ของฉัน';
    save.querySelector('span').innerHTML = icon('star');
  });
  activityBlock.insertAdjacentElement('afterend', save);
  document.querySelector('#place-card').scrollTop = 0;
}

async function selectPlace(placeId) {
  const place = PLACES.find((entry) => entry.id === placeId);
  if (!place || !mapReady) return;
  selectedPlace = place;
  updatePlaceMarkerVisibility();
  document.querySelectorAll('.map-marker').forEach((marker) => {
    marker.classList.remove('selected');
    marker.setAttribute('aria-pressed', 'false');
  });
  markers.get(place.id)?.element.classList.add('selected');
  markers.get(place.id)?.element.setAttribute('aria-pressed', 'true');
  renderDestinationList();
  openPlaceCard(place);
  if (window.matchMedia('(max-width: 680px)').matches) {
    setTimeout(() => document.querySelector('#detail-panel').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
  if (routeBeacon) routeBeacon.style.display = 'none';
  const requestToken = ++routeRequest;
  const route = await fetchWalkingRoute(place, requestToken);
  if (!route || requestToken !== routeRequest || selectedPlace?.id !== place.id) return;
  routeFeature = { type: 'Feature', properties: { placeId: place.id }, geometry: { type: 'LineString', coordinates: route.coordinates } };
  map.getSource('active-route').setData(routeFeature);
  setRouteSummary(route);
  updateRouteBeacon(route.coordinates);
  const distance = distanceKm(SCHOOL, place);
  map.fitBounds(routeCoordinatesBounds(route.coordinates), {
    padding: { top: 126, right: 72, bottom: 84, left: 64 },
    duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1650,
    maxZoom: distance > 4.5 ? 13.2 : distance > 2.3 ? 14.1 : distance > .75 ? 15.2 : 16.6,
    pitch: OVERVIEW_PITCH,
    bearing: OVERVIEW_BEARING,
  });
}

function clearSelection() {
  ++routeRequest;
  cancelAnimationFrame(beaconFrame);
  if (routeBeacon) routeBeacon.style.display = 'none';
  document.querySelectorAll('.map-marker').forEach((marker) => {
    marker.classList.remove('selected');
    marker.setAttribute('aria-pressed', 'false');
  });
  document.querySelector('#detail-empty').hidden = false;
  document.querySelector('#place-card').hidden = true;
  document.querySelector('#save-destination')?.remove();
  document.querySelectorAll('.destination-item').forEach((item) => item.classList.remove('selected'));
  if (mapReady) map.getSource('active-route')?.setData(emptyFeatureCollection());
  updatePlaceMarkerVisibility();
  renderDestinationList();
}

document.querySelector('#close-detail').addEventListener('click', () => {
  selectedPlace = null;
  clearSelection();
});

function focusSchool() {
  selectedPlace = null;
  clearSelection();
  if (!mapReady) return;
  fitSchoolOverview(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1250);
}

document.querySelector('#back-to-map').addEventListener('click', () => {
  selectedPlace = null;
  clearSelection();
  if (mapReady) fitSchoolOverview(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1300);
});

document.querySelector('#reset-map').addEventListener('click', () => {
  activeFilter = 'all';
  searchTerm = '';
  document.querySelector('#search-input').value = '';
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    const active = chip.dataset.category === 'all';
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  selectedPlace = null;
  clearSelection();
  if (mapReady) fitSchoolOverview(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1300);
});

document.querySelector('#locate-school').addEventListener('click', focusSchool);

document.querySelector('#radius-toggle').addEventListener('click', (event) => {
  radiusVisible = !radiusVisible;
  event.currentTarget.setAttribute('aria-pressed', String(radiusVisible));
  if (mapReady) {
    const visibility = radiusVisible ? 'visible' : 'none';
    if (map.getLayer('radius-fill')) map.setLayoutProperty('radius-fill', 'visibility', visibility);
    if (map.getLayer('radius-line')) map.setLayoutProperty('radius-line', 'visibility', visibility);
  }
});

const helpModal = document.querySelector('#help-modal');
document.querySelector('#help-button').addEventListener('click', () => { helpModal.hidden = false; });
helpModal.querySelectorAll('[data-dismiss-help]').forEach((element) => element.addEventListener('click', () => { helpModal.hidden = true; }));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') helpModal.hidden = true;
});

renderDestinationList();
updateFeedbackForm();
renderFeedbackEntries();
if (sessionStorage.getItem('md-explorer-demo-session') === 'active') {
  if (sessionStorage.getItem(CONSENT_SESSION_KEY) === 'acknowledged') enterApp();
  else openConsent(SCHOOL_EMAIL);
}
