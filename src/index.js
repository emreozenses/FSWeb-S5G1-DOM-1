const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navMenu = document.querySelectorAll("a");
navMenu[0].textContent = siteContent.nav["nav-item-1"];
navMenu[1].textContent = siteContent.nav["nav-item-2"];
navMenu[2].textContent = siteContent.nav["nav-item-3"];
navMenu[3].textContent = siteContent.nav["nav-item-4"];
navMenu[4].textContent = siteContent.nav["nav-item-5"];
navMenu[5].textContent = siteContent.nav["nav-item-6"];

navMenu[0].className = "italic";
navMenu[1].className = "italic";
navMenu[2].className = "italic";
navMenu[3].className = "italic";
navMenu[4].className = "italic";
navMenu[5].className = "italic";

const navImg = document.querySelector("img");
navImg.src = siteContent.images["logo-img"];

const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const tContent = document.querySelectorAll("h4");
tContent[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
tContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
tContent[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
tContent[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
tContent[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const mImg = document.querySelector(".middle-img");
mImg.src = siteContent.images["accent-img"];

const tpContent = document.querySelectorAll(".text-content p");
tpContent[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
tpContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
tpContent[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
tpContent[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
tpContent[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["iletisim"]["iletişim-h4"];

const contactp = document.querySelectorAll(".contact p");
contactp[0].textContent = siteContent["iletisim"]["adres"];
contactp[1].textContent = siteContent["iletisim"]["email"];
contactp[2].textContent = siteContent["iletisim"]["telefon"];

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer["copyright"];
footer.className = "bold";
