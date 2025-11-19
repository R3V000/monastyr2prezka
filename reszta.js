  const IMG_PATH = "ikonki/";
  const ICONS = {
    ikonka: "prez/close.png",
    piasek: "https://img.m2icondb.com/30195.png",
    medal: "https://img.m2icondb.com/50050.png",
    bodzio: "https://img.m2icondb.com/25040.png",
    owoc: "https://img.m2icondb.com/71107.png",
    metal: "https://img.m2icondb.com/30064.png",
    fasolka: "https://img.m2icondb.com/70102.png",
    zmianka: "https://img.m2icondb.com/71084.png",
    maczuga: "https://img.m2icondb.com/30194.png",
    kosci: "https://img.m2icondb.com/30193.png",
    egzo: "https://img.m2icondb.com/71001.png",
    rada: "https://img.m2icondb.com/71094.png",
    kamol: "https://img.m2icondb.com/50513.png",
    kdwoj: "https://img.m2icondb.com/28003.png",
    kdninja: "https://img.m2icondb.com/28004.png",
    kdsura: "https://img.m2icondb.com/28005.png",
    kdszaman: "https://img.m2icondb.com/28006.png",
    kdpotwora: "https://img.m2icondb.com/28007.png",
    kduchylenia: "https://img.m2icondb.com/28008.png",
    kduniku: "https://img.m2icondb.com/28009.png",
    kdmagii: "https://img.m2icondb.com/28010.png",
    kdpowtorki: "https://img.m2icondb.com/28002.png",
    kdwita: "https://img.m2icondb.com/28011.png",
    kdsmierci: "https://img.m2icondb.com/28001.png",
    kdpenetry: "https://img.m2icondb.com/28000.png",
    kdobrony: "https://img.m2icondb.com/28012.png",
    kdspeeda: "https://img.m2icondb.com/28013.png",

  };

    const przetopImages = [
    "https://img.m2icondb.com/50628.png", 
    "https://img.m2icondb.com/50629.png", 
    "https://img.m2icondb.com/50630.png", 
    "https://img.m2icondb.com/50631.png",
    "https://img.m2icondb.com/50627.png", 
    "https://img.m2icondb.com/50626.png", 
    "https://img.m2icondb.com/50625.png", 
    "https://img.m2icondb.com/50624.png",
    "https://img.m2icondb.com/50623.png", 
    "https://img.m2icondb.com/50621.png", 
    "https://img.m2icondb.com/50632.png", 
    "https://img.m2icondb.com/50633.png",
    "https://img.m2icondb.com/50634.png"
  ];

  const craftImages = [
    "https://img.m2icondb.com/50608.png",
    "https://img.m2icondb.com/50609.png",
    "https://img.m2icondb.com/50610.png",
    "https://img.m2icondb.com/50611.png",
    "https://img.m2icondb.com/50607.png",
    "https://img.m2icondb.com/50606.png",
    "https://img.m2icondb.com/50605.png",
    "https://img.m2icondb.com/50604.png",
    "https://img.m2icondb.com/50603.png",
    "https://img.m2icondb.com/50601.png",
    "https://img.m2icondb.com/50612.png",
    "https://img.m2icondb.com/50613.png",
    "https://img.m2icondb.com/50614.png"
  ];


  const items = [
    {
      img: ICONS.kdwoj, count: 1,
      name: "Kamień Duszy Wojownika +5",
      bonuses: ["Silny przeciwko Wojownikom +30%"]
    },
    { img: ICONS.kdwoj, count: 15 },
    { img: ICONS.piasek, count: 50 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdninja, count: 1,
      name: "Kamień Duszy Ninjy +5",
      bonuses: ["Silny przeciwko Ninja +30%"]
    },
    { img: ICONS.kdninja, count: 15 },
    { img: ICONS.kosci, count: 100 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdsura, count: 1,
      name: "Kamień Duszy Sury +5",
      bonuses: ["Silny przeciwko Sura +30%"]
    },
    { img: ICONS.kdsura, count: 15 },
    { img: ICONS.maczuga, count: 50 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdszaman, count: 1,
      name: "Kamień Duszy Szamana +5",
      bonuses: ["Silny przeciwko Szamanom +30%"]
    },
    { img: ICONS.kdszaman, count: 15 },
    { img: ICONS.medal, count: 100 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdpotwora, count: 1,
      name: "Kamień Duszy Potwora +5",
      bonuses: ["Silny przeciwko Potworom +12%"]
    },
    { img: ICONS.kdpotwora, count: 15 },
    { img: ICONS.metal, count: 10 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kduchylenia, count: 1,
      name: "Kamień Duszy Uchylenia +5",
      bonuses: ["Szansa na blok ciosu +12%"]
    },
    { img: ICONS.kduchylenia, count: 15 },
    { img: ICONS.bodzio, count: 200 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kduniku, count: 1,
      name: "Kamień Duszy Uniku +5",
      bonuses: ["Szansa na uniknięcie strzał +12%"]
    },
    { img: ICONS.kduniku, count: 15 },
    { img: ICONS.zmianka, count: 1000 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdmagii, count: 1,
      name: "Kamień Duszy Magii +5",
      bonuses: ["Inteligencja +8"]
    },
    { img: ICONS.kdmagii, count: 15 },
    { img: ICONS.fasolka, count: 150 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdpowtorki, count: 1,
      name: "Kamień Duszy Powtórki +5",
      bonuses: ["Szybkość Zaklęć +30%"]
    },
    { img: ICONS.kdpowtorki, count: 15 },
    { img: ICONS.owoc, count: 100 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    {
      img: ICONS.kdwita, count: 1,
      name: "Kamień Duszy Witalności +5",
      bonuses: ["Max. HP + 1000"]
    },
    { img: ICONS.kdwita, count: 15 },
    { img: ICONS.kamol, count: 200 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdsmierci, count: 1,
      name: "Kamień Duszy Śmierci +5",
      bonuses: ["Szansa na cios krytyczny +12%"]
    },
    { img: ICONS.kdsmierci, count: 15 },
    { img: ICONS.egzo, count: 200 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.kamol, count: 20 },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdpenetry, count: 1,
      name: "Kamień Duszy Penetracji +5",
      bonuses: ["Szansa na przyszywający cios +12%"]
    },
    { img: ICONS.kdpenetry, count: 15 },
    { img: ICONS.rada, count: 200 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.kamol, count: 20 },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdobrony, count: 1,
      name: "Kamień Duszy Obrony +5",
      bonuses: ["Obrona +50"]
    },
    { img: ICONS.kdobrony, count: 15 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.kamol, count: 20 },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdspeeda, count: 1,
      name: "Kamień Duszy Przyśpieszenia +5",
      bonuses: ["Szybkość ruchu +35%"]
    },
    { img: ICONS.kdspeeda, count: 15 },
    { img: ICONS.egzo, count: 20 },
    { img: ICONS.rada, count: 20 },
    { img: ICONS.kamol, count: 20 },
    { img: ICONS.ikonka, count: 0 },

  ];

  /*
  const container = document.getElementById("inventory");

  items.forEach((it) => {
    const slot = document.createElement("div");
    slot.className = "inv-slot";
    slot.innerHTML = `
      <img src="${it.img}" alt="">
      <span class="inv-count">${it.count ?? ""}</span>
      ${it.bonuses ? `
        <div class="inv-tip">
          <h4>${it.name ?? "Przedmiot"}</h4>
          <ul>${it.bonuses.map(b => `<li>${b}</li>`).join("")}</ul>
        </div>
      ` : "" }
    `;
    container.appendChild(slot);
  });


*/

const container = document.getElementById("inventory");

const blocks = [
  { title: "Kamień Duszy Wojownika +5",                items: items.slice(0, 6) },
  { title: "Kamień Duszy Ninji +5",  items: items.slice(6, 12) },
  { title: "Kamień Duszy Sury +5",        items: items.slice(12, 18) },
  { title: "Kamień Duszy Szamana +5",            items: items.slice(18, 24) },
  { title: "Kamień Duszy Potwora +5",         items: items.slice(24, 30) },
  { title: "Kamień Duszy Uchylenia +5",            items: items.slice(30, 36) },
  { title: "Kamień Duszy Uniku +5",            items: items.slice(36, 42) },
  { title: "Kamień Duszy Magii +5",            items: items.slice(42, 48) },
  { title: "Kamień Duszy Powtórki +5",            items: items.slice(48, 54) },
  { title: "Kamień Duszy Śmierci +5",            items: items.slice(60, 66) },
  { title: "Kamień Duszy Penetracji +5",            items: items.slice(66, 72) },
  { title: "Kamień Duszy Obrony +5",            items: items.slice(72, 78) },
  { title: "Kamień Duszy Przyśpieszenia +5",            items: items.slice(78, 84) }
];



renderInventory(container, blocks);



function makeSlot(it){
  const slot = document.createElement("div");
  slot.className = "inv-slot";
  slot.innerHTML = `
    <img src="${it.img}" alt="">
    <span class="inv-count">${it.count ?? ""}</span>
    ${it.bonuses ? `
      <div class="inv-tip">
        <h4>${it.name ?? "Przedmiot"}</h4>
        <ul>${it.bonuses.map(b => `<li>${b}</li>`).join("")}</ul>
      </div>` : ""
    }
  `;
  return slot;
}


function addHeading(container, text){
  const h = document.createElement("div");
  h.className = "inv-heading";
  h.textContent = text;
  container.appendChild(h);
}


function renderInventory(container, blocks){
  container.innerHTML = "";
  blocks.forEach(block => {
    addHeading(container, block.title);
    block.items.forEach(it => container.appendChild(makeSlot(it)));
  });
}




let indexPrzetop = 0;
let indexCraft = 0;

const przetopImg = document.getElementById("przetopImg");
const craftImg = document.getElementById("craftImg");

setInterval(() => {
  // przetop
  indexPrzetop = (indexPrzetop + 1) % przetopImages.length;
  przetopImg.src = przetopImages[indexPrzetop];

  // wytwarzanie
  indexCraft = (indexCraft + 1) % craftImages.length;
  craftImg.src = craftImages[indexCraft];
}, 1000);

  (function(){
    const buttons = document.querySelectorAll('.package-card');
    const details = document.querySelectorAll('.package-detail');

    function showPackage(id){
      details.forEach(d => {
        const isTarget = d.id === id;
        d.classList.toggle('is-visible', isTarget);
        d.toggleAttribute('hidden', !isTarget);
      });
      buttons.forEach(b => {
        const active = b.getAttribute('data-target') === id;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-expanded', active ? 'true' : 'false');
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-target');
        const targetEl = document.getElementById(id);
        // toggle: kliknięcie w aktywny chowa, w inny – pokazuje
        const willShow = !(targetEl && targetEl.classList.contains('is-visible'));
        details.forEach(d => { d.classList.remove('is-visible'); d.hidden = true; });
        buttons.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-expanded','false'); });

        if(willShow){
          targetEl.hidden = false;
          requestAnimationFrame(() => {
            targetEl.classList.add('is-visible');
            btn.classList.add('is-active');
            btn.setAttribute('aria-expanded','true');
          });
        }
      });
    });
  })();