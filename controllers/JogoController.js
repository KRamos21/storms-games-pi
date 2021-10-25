const JogoModel = require("../models/JogoModel");
const puppeteer = require("puppeteer");


module.exports.buscarJogoPorId = async (id) => {
  const jogoEncontrado = await JogoModel.buscarJogoPorId(id);

  return jogoEncontrado;
};

async function accessOpenCritic(titulo, page) {
  await page.goto('https://opencritic.com/');

  await page.waitForNavigation();

  await page.click(".navbar-toggler-icon");
  
  const form = await page.$("input[id=form1]");
  await form.click();
  await form.type(titulo);

  await page.waitForTimeout(1500);
  
  const firstResult = await page.$("#ngb-typeahead-0-0");
  await firstResult.click();

  await page.waitForNavigation();

  const grade = await page.evaluate(() => {
    const gradeDiv = document.querySelector("div[class=inner-orb");
    const grade = gradeDiv.innerText;

    return grade
  });

  const openCriticUrl = await page.url();

  return { grade, openCriticUrl };
};

async function accessPsStore (titulo, page) {
  await page.goto("https://www.playstation.com/pt-br/");

  await page.waitForSelector("button[data-di-id=di-id-42b1f1c7-49abd54b]")
  await page.click("button[data-di-id=di-id-42b1f1c7-49abd54b]")

  await page.waitForSelector("div[class=search-container] input");

  const searchBox = await page.$("div[class=search-container] input");
  await searchBox.click();
  await searchBox.type(titulo);
  await page.keyboard.press('Enter');

  await page.waitForSelector("div[class=search__results-wrapper] a:first-child")
  const firstResult = await page.$("div[class=search__results-wrapper] a:first-child");
  await firstResult.click();

  await page.waitForNavigation();

  const psStorePrice = await page.evaluate(() => {
    const price = document.querySelector("span[class=psw-t-title-m]").innerText;

    return price;
  });

  const psStoreUrl = await page.url();

  return { psStorePrice, psStoreUrl };
};

async function accessYoutube (titulo, page) {
  await page.goto("https://www.youtube.com/");

  await page.waitForTimeout(1000);

  const searchBox = await page.waitForSelector("input[id=search]");
  await searchBox.type("Ghost of Tsushima");
  await page.keyboard.press('Enter');

  await page.waitForSelector("div#contents.style-scope.ytd-item-section-renderer a[id=thumbnail]");

  const anchorsHandler = await page.$$("div#contents.style-scope.ytd-item-section-renderer a[id=thumbnail]");

  const gameYouTubeUrls = await Promise.all(anchorsHandler.map(handler => handler.getProperty("href").then(result => result.jsonValue())));

  const topFour = Object.entries(gameYouTubeUrls).slice(0, 4).map(entry => entry[1].slice(32));

  return topFour;
}

module.exports.acionarRobo = async (titulo) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Open Critic
  const { grade, openCriticUrl } = await accessOpenCritic(titulo, page);
  
  // PS Store
  const { psStorePrice, psStoreUrl } = await accessPsStore(titulo, page);

  // YouTube

  const youtubeUrls = await accessYoutube(titulo, page);

  const infos = {
    grade,
    openCriticUrl,
    psStorePrice,
    psStoreUrl,
    youtubeUrls,
  }

  return infos;
};