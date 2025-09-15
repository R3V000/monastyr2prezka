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