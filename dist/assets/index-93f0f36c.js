(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === 'childList')
        for (const c of o.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : n.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = s(n);
    fetch(n.href, o);
  }
})();
class q {
  constructor() {
    this.plant = {};
  }
  withName(e) {
    return (this.plant.name = e), this;
  }
  withSoilType(e) {
    return (this.plant.soilType = e), this;
  }
  withPotMaterial(e) {
    return (this.plant.potMaterial = e), this;
  }
  withPotStyle(e) {
    return (this.plant.potStyle = e), this;
  }
  withPotColor(e) {
    return (this.plant.potColor = e), this;
  }
  withExtras(e) {
    return (this.plant.extras = e), this;
  }
  build() {
    return this.plant;
  }
}
class h {
  constructor() {
    this.observers = [];
  }
  subscribe(e) {
    this.observers.push(e);
  }
  notify(e) {
    this.observers.forEach((s) => s(e));
  }
}
const a = '../../styles/images/',
  F = {
    blue: {
      name: 'Blue',
      ceramic: {
        decorated: { imagePath: `${a}pots/ceramic-decorated-blue.PNG` },
        simple: { imagePath: `${a}pots/ceramic-simple-blue.PNG` },
      },
      clay: {
        decorated: { imagePath: `${a}pots/clay-decorated-blue.PNG` },
        simple: { imagePath: `${a}pots/clay-simple-blue.PNG` },
      },
    },
    green: {
      name: 'Green',
      ceramic: {
        decorated: { imagePath: `${a}pots/ceramic-decorated-green.PNG` },
        simple: { imagePath: `${a}pots/ceramic-simple-green.PNG` },
      },
      clay: {
        decorated: { imagePath: `${a}pots/clay-decorated-green.PNG` },
        simple: { imagePath: `${a}pots/clay-simple-green.PNG` },
      },
    },
    pink: {
      name: 'Pink',
      ceramic: {
        decorated: { imagePath: `${a}pots/ceramic-decorated-pink.PNG` },
        simple: { imagePath: `${a}pots/ceramic-simple-pink.PNG` },
      },
      clay: {
        decorated: { imagePath: `${a}pots/clay-decorated-pink.PNG` },
        simple: { imagePath: `${a}pots/clay-simple-pink.PNG` },
      },
    },
    purple: {
      name: 'Purple',
      ceramic: {
        decorated: { imagePath: `${a}pots/ceramic-decorated-purple.PNG` },
        simple: { imagePath: `${a}pots/ceramic-simple-purple.PNG` },
      },
      clay: {
        decorated: { imagePath: `${a}pots/clay-decorated-purple.PNG` },
        simple: { imagePath: `${a}pots/clay-simple-purple.PNG` },
      },
    },
    unpainted: {
      name: 'Unpainted',
      ceramic: {
        decorated: { imagePath: `${a}pots/ceramic-decorated-unpainted.PNG` },
        simple: { imagePath: `${a}pots/ceramic-simple-unpainted.PNG` },
      },
      clay: {
        decorated: { imagePath: `${a}pots/clay-decorated-unpainted.PNG` },
        simple: { imagePath: `${a}pots/clay-simple-unpainted.PNG` },
      },
    },
  },
  T = {
    basic: { imagePath: `${a}soil-composted.png` },
    premium: { imagePath: `${a}soil-fertilized.png` },
    drainage: { imagePath: `${a}soil-drainage.png` },
  },
  x = {
    'Aglaonema Silver Bay': {
      name: 'Aglaonema Silver Bay',
      imagePath: `${a}plant-aglaonema.png`,
    },
    'Aloe Vera': { name: 'Aloe Vera', imagePath: `${a}plant-aloe.png` },
    'Boston Fern': { name: 'Boston Fern', imagePath: `${a}plant-fern.png` },
    Cactus: { name: 'Cactus', imagePath: `${a}plant-cactus.png` },
    'Monstera Deliciosa': {
      name: 'Monstera Deliciosa',
      imagePath: `${a}plant-monstera.png`,
    },
    'Peace Lily': { name: 'Peace Lily', imagePath: `${a}plant-peace-lily.png` },
    Sansevieria: {
      name: 'Sansevieria',
      imagePath: `${a}plant-sansevieria.png`,
    },
  };
document.getElementsByClassName('newName');
document.getElementsByClassName('newSoil');
document.getElementsByClassName('newPot');
document.getElementsByClassName('newExtras');
const _ = new h(),
  E = new h(),
  $ = new h();
let d = { pot: '', decoration: '', color: '' };
function w(t) {
  const { color: e, pot: s, decoration: i } = t;
  return F[e][s][i].imagePath;
}
_.subscribe(w);
function u() {
  (d.color = document.querySelector('input[name="color"]:checked').value),
    (d.pot = document.querySelector('input[name="pot"]:checked').value),
    (d.decoration = document.querySelector('input[name="decoration"]:checked')
      ? 'decorated'
      : 'simple');
  const t = w(d);
  t !== void 0 &&
    Array.from(document.getElementsByClassName('potSrc')).forEach((s) => {
      s.src = t;
    });
}
function z(t) {
  return T[t].imagePath;
}
E.subscribe((t) => {
  const e = z(t);
  e !== void 0 &&
    Array.from(document.getElementsByClassName('soilSrc')).forEach((i) => {
      i.src = e;
    });
});
function O() {
  const t = document.querySelector('input[name="soil"]:checked').value;
  E.notify(t);
}
function H(t) {
  return x[t].imagePath;
}
$.subscribe((t) => {
  const e = H(t);
  e !== void 0 &&
    Array.from(document.getElementsByClassName('plantSrc')).forEach((i) => {
      i.src = e;
    });
});
function j() {
  const t = document.querySelector('select[name="plant"]').value;
  $.notify(t);
}
function g(t, e = '') {
  switch (t) {
    case 'Clay Pot':
      return '../styles/images/simple-clay-pot.png';
    case 'Ceramic Pot':
      return '../styles/images/simple-ceramic-pot.png';
    case 'Clay Pot Decorated':
      return '../styles/images/simple-clay-pot-decorated.png';
    case 'Ceramic Pot Decorated':
      return '../styles/images/simple-ceramic-pot-decorated.png';
    case 'Painted Clay Pot Decorated':
      return '../styles/images/painted-clay-pot-decorated.png';
    case 'Painted Ceramic Pot Decorated':
      return '../styles/images/painted-ceramic-pot-decorated.png';
    case 'Pebbles':
      return '../styles/images/pebbles.png';
    case 'Moss Pole':
      return '../styles/images/moss-pole.png';
    case 'Mini Plants':
      return '../styles/images/mini-plants.png';
    case 'Fertilized Soil':
      return '../styles/images/soil-fertilized.png';
    case 'Composted Soil':
      return '../styles/images/soil-composted.png';
  }
}
function R(t) {
  switch (t) {
    case 'Fern':
      return 'fern';
    case 'Monstera':
      return 'monstera';
    case 'Aglaonema':
      return 'aglaonema';
    case 'Cactus':
      return 'cactus';
    case 'Sansevieria':
      return 'sansevieria';
    case 'Aloe':
      return 'aloe';
    case 'Substitute for Peace Lily':
      return 'peace-lily';
  }
}
function V(t, e, s) {
  if (t === 'low-light-plant') return e === 'yes' ? 'Fern' : 'Sansevieria';
  if (t === 'medium-light-plant') return e === 'yes' ? 'Monstera' : 'Aglaonema';
  if (t === 'outdoor-plant') return e === 'yes' ? 'Cactus' : 'Aloe';
}
function K(t, e) {
  if (t === 'simple-pot') return e === 'overwater' ? 'Clay Pot' : 'Ceramic Pot';
  if (t === 'simple-pot-decorated')
    return e === 'overwater' ? 'Clay Pot Decorated' : 'Ceramic Pot Decorated';
  if (t === 'painted-pot-decorated')
    return e === 'overwater'
      ? 'Painted Clay Pot Decorated'
      : 'Painted Ceramic Pot Decorated';
}
function U(t) {
  if (t === 'moss-pole') return 'Moss Pole';
  if (t === 'pebbles') return 'Pebbles';
  if (t === 'mini-plants') return 'Mini Plants';
}
const P = document.getElementById('plantForm'),
  b = document.getElementById('recommendation'),
  S = document.getElementById('plantResult'),
  J = document.getElementById('clearButton');
function Q() {
  document.addEventListener('DOMContentLoaded', () => {
    P.addEventListener('submit', (t) => {
      t.preventDefault();
      const e = new FormData(P),
        s = e.get('placement'),
        i = e.get('sunlight'),
        n = e.get('pets'),
        o = e.get('watering'),
        c = e.get('style'),
        y = e.getAll('extras');
      if (!s || !i || !n || !o || !c) {
        alert('Please complete all required fields.');
        return;
      }
      const N = V(s, i),
        p = new q().withName(N),
        C = K(c, o);
      p.withPotMaterial(C),
        p.withPotColor(c),
        p.withSoilType(i === 'yes' ? 'Composted Soil' : 'Fertilized Soil'),
        p.withExtras(y);
      const f = y.map((m) => U(m)).filter(Boolean),
        r = p.build();
      (b.style.display = 'block'),
        (S.innerHTML = `
      <div id="card" class="card">
      <h2 id="title" class="card__title">The perfect plant for you is...</h2>
      <p class="card__title">${r.name}</p>
      <div class="card__img">
        <img class="card_img-position  potSrc" src="${g(
          r.potMaterial,
          r.potColor,
        )}" alt="Pot image">
        ${f
          .map(
            (m) =>
              `<img class="card_img-position extrasSrc" src="${g(
                m,
              )}" alt="${m} image">`,
          )
          .join('')}
        <img class="card_img-position soilSrc" src="${g(
          r.soilType,
        )}" alt="Soil image">
        <img class="card_img-position plantSrc" src="../styles/images/plant-${R(
          r.name,
        )}.png" alt="Plant image">
      </div>
      <div class="card-info">
        <div class="line">
          <div>
          <p class="card--font keys">Name</p>
            <p class="card--font keys">Soil</p>
            <p class="card--font keys">Pot</p>
            <p class="card--font keys">Extras</p>
          </div>
          <div>
            <p class="card--font newName">${r.name}</p>
            <p class="card--font soil newSoil">${r.soilType}</p>
            <p class="card--font" newPot>${r.potMaterial} ${
              r.potStyle ? `- ${r.potStyle}` : ''
            }</p>
            <p class="card--font newExtras">${f.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
    <buttom class="btn btn-bg" class="btn btn-bg" id="customize-btn">Customize</buttom>
    <a href="/store.html">gggggggggggggg</a>
    `),
        J.addEventListener('click', () => {
          P.reset(), (b.style.display = 'none'), (S.innerHTML = '');
        });
      const v = document.getElementById('customize-btn');
      v.addEventListener('click', async (m) => {
        m.preventDefault();
        const B = document.getElementById('title'),
          L = document.getElementById('plant-form'),
          D = await (await fetch('../../customize.html')).text();
        (L.innerHTML = D),
          (B.innerHTML = 'Customize you plant'),
          (v.innerHTML = 'Check store availability');
        const G = document.querySelectorAll('input[name="pot"]'),
          I = document.querySelectorAll('input[name="color"]'),
          M = document.querySelector('input[name="decoration"]'),
          A = document.querySelectorAll('input[name="soil"]'),
          k = document.querySelectorAll('select[name="plant"]');
        document.querySelectorAll('input[name="extras"]'),
          G.forEach((l) => l.addEventListener('change', u)),
          I.forEach((l) => l.addEventListener('change', u)),
          M.addEventListener('change', u),
          A.forEach((l) => l.addEventListener('change', O)),
          k.forEach((l) => l.addEventListener('change', j));
      });
    });
  });
}
Q();
