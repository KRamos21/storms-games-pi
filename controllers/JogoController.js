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
  try {
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
    
  } catch (error) {
    const psStorePrice = "Não disponível";
    const psStoreUrl = "https://www.playstation.com/pt-br/";
    
    return { psStorePrice, psStoreUrl };
  }  
};

async function accessSteam (titulo, page) {
  try {
    await page.goto("https://store.steampowered.com/");

    const searchBox = await page.waitForSelector("input[id=store_nav_search_term]");
    await searchBox.type(titulo);

    const firstResult = await page.waitForSelector("div[id=search_suggestion_contents] a:first-child");
    await firstResult.click();

    await page.waitForNavigation();

    const ageGate = await page.evaluate(() => {
      const ageGateDiv = document.querySelector("div[id=app_agegate]"); 

      return ageGateDiv ? ageGateDiv.innerText : "";
    });

    if (ageGate) {
      await page.select("#ageYear", "1990");
      await page.click("div.agegate_text_container.btns a:first-child");
    }

    await page.waitForSelector("div.game_purchase_price.price");

    const steamPrice = await page.evaluate(() => {
      const price = document.querySelector("div.game_purchase_price.price");

      return price.innerText;
    });

    const steamUrl = await page.url();

    return { steamPrice, steamUrl };  
  
  } catch (error) {
    const steamPrice = "Não disponível";
    const steamUrl = "https://store.steampowered.com/";
    
    return { steamPrice, steamUrl }
  }  
}

async function accessEpic (titulo, page) {
  try {
    await page.goto("https://www.epicgames.com/store/pt-BR/");

    const magnifierBtn = await page.waitForSelector("button[class=css-963b88]");
    await magnifierBtn.click();
  
    const searchBox = await page.waitForSelector("div[class=css-17zagfn] input[id=searchInput]");
    await searchBox.type(titulo);
  
    await page.waitForTimeout(1500);
  
    const firstResult = await page.waitForSelector("a[id=result-item-0]");
    await firstResult.click();
  
    await page.waitForSelector("div[data-component=PriceLayout] span[class=css-z3vg5b]");
  
    const epicPrice  = await page.evaluate(() => {
      const price = document.querySelector("div[data-component=PriceLayout] span[class=css-z3vg5b]");
  
      return price.innerText;
    });
  
    const epicUrl = await page.url();

    return { epicPrice, epicUrl};

  } catch (error) {
    const epicPrice = "Não disponível";
    const epicUrl = "https://www.epicgames.com/store/pt-BR/";
    
    return { epicPrice, epicUrl };
  }
}

async function accessYoutube (titulo, page) {
  await page.goto("https://www.youtube.com/");

  await page.waitForTimeout(1000);

  const searchBox = await page.waitForSelector("input[id=search]");
  await searchBox.type(titulo);
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

  // Steam 
  const { steamPrice, steamUrl } = await accessSteam(titulo, page);

  // Epic
  const { epicPrice, epicUrl } = await accessEpic(titulo, page);

  // YouTube
  const youtubeUrls = await accessYoutube(titulo, page);

  await browser.close();

  const infos = {
    grade,
    openCriticUrl,
    psStorePrice,
    psStoreUrl,
    steamPrice,
    steamUrl,
    epicPrice,
    epicUrl,
    youtubeUrls,
  }

  return infos;
};