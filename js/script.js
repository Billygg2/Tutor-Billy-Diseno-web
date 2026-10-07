/*  Menú hamburguesa  */
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

function toggleMenu() {
  const isOpen = menu.classList.toggle('menu_opened');
  burger.classList.toggle('header__burger_active', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  burger.classList.remove('header__burger_active');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', toggleMenu);
menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

/*  Cambio de idioma (ES <-> RU)  */
const translations = {
  es: {
    pageTitle: 'Pop It! — NO_BURBUJAS.COM',
    logo: 'NO_BURBUJAS.COM',
    menuLabel: 'Menú principal',
    openMenu: 'Abrir menú',
    switchLang: 'Cambiar idioma a ruso',
    navAbout: 'NOSOTROS',
    navSales: 'DESCUENTOS',
    navContact: 'CONTACTO',
    heroSubtitle: '¡El mejor juguete antiestrés: un plástico de burbujas infinito!',
    buy: 'COMPRAR',
    aboutTitle: '¿Qué es un Pop it?',
    aboutText: 'Pop it significa literalmente «explótalo». Es un juego infantil que se puede comparar con reventar el plástico de burbujas de los embalajes. Pero a diferencia del plástico, los pop-its se pueden presionar «infinitamente» con sensaciones y sonidos característicos: decenas de burbujas de silicona simplemente se empujan hacia el otro lado.',
    chooseTitle: '¡Elige tu Pop-It!',
    squareName: 'Cuadrado multicolor',
    squareAlt: 'Pop it cuadrado multicolor',
    amongName: 'Among Us, efecto mármol',
    amongAlt: 'Pop it Among Us efecto mármol',
    roundName: 'Redondo multicolor',
    roundAlt: 'Pop it redondo multicolor',
    rulesTitle: 'Reglas del juego',
    rulesText: 'Los jugadores se turnan para presionar las burbujas. Es obligatorio terminar la fila que empezaste. Se pueden presionar como máximo 3 burbujas a la vez (deben estar juntas; no se pueden presionar varias burbujas si no están pegadas). El objetivo es lograr que tu rival juegue último. ¡Quien juegue último, pierde!',
    photoAlt: 'Mano presionando las burbujas de un pop it',
    footPay: 'Formas de pago',
    footDelivery: 'Envíos',
    footWholesale: 'Mayoreo',
    footContact: 'Contacto'
  },
  ru: {
    pageTitle: 'Pop It! — НЕ_ПУПЫРКА.РУ',
    logo: 'НЕ_ПУПЫРКА.РУ',
    menuLabel: 'Главное меню',
    openMenu: 'Открыть меню',
    switchLang: 'Переключить язык на испанский',
    navAbout: 'О НАС',
    navSales: 'СКИДКИ',
    navContact: 'КОНТАКТЫ',
    heroSubtitle: 'Лучшая игрушка-антистресс - бесконечная пупырчатая пленка!',
    buy: 'КУПИТЬ',
    aboutTitle: 'Что такое Pop it?',
    aboutText: 'Pop it дословно переводится как «лопни это». Это детская игра, процесс в которой можно сравнить с лопанием воздушно-пузырчатой упаковочной плёнки. Но в отличии от пленки поп-иты можно давить с характерными ощущениями и звуками «бесконечно»: десятки силиконовых пузырей просто выдавливаются в другую сторону.',
    chooseTitle: 'Выбери свой Pop-It!',
    squareName: 'Разноцветный квадратный',
    squareAlt: 'Разноцветный квадратный pop it',
    amongName: 'Among Us, мраморный',
    amongAlt: 'Pop it Among Us мраморный',
    roundName: 'Разноцветный круглый',
    roundAlt: 'Разноцветный круглый pop it',
    rulesTitle: 'Правила игры',
    rulesText: 'Игроки ходят по очереди и нажимают на пупырки. Нужно обязательно заканчивать ряд который начали. Нажимать можно максимум на 3 пупырки одновременно (обязательно должны быть рядом, нельзя нажимать сразу несколько пупырок, если они не находятся впритык) Задача сделать так, чтобы соперник сходил последним. Кто ходил последним - тот проиграл!)',
    photoAlt: 'Рука нажимает на пупырки pop it',
    footPay: 'Способы оплаты',
    footDelivery: 'Доставка',
    footWholesale: 'Опт',
    footContact: 'Контакты'
  }
};

const langSwitch = document.querySelector('.lang-switch');
const langOptions = document.querySelectorAll('.lang-switch__option');
let currentLang = 'es';

function setLanguage(lang) {
  const dict = translations[lang];
  currentLang = lang;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.alt = dict[el.dataset.i18nAlt];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', dict[el.dataset.i18nAria]);
  });

  langOptions.forEach((option) => {
    option.classList.toggle('lang-switch__option_active', option.dataset.lang === lang);
  });

  try {
    localStorage.setItem('lang', lang);
  } catch (error) {
  }
}

langSwitch.addEventListener('click', () => {
  setLanguage(currentLang === 'es' ? 'ru' : 'es');
});

let savedLang = null;
try {
  savedLang = localStorage.getItem('lang');
} catch (error) {
  savedLang = null;
}
setLanguage(savedLang === 'ru' ? 'ru' : 'es');
