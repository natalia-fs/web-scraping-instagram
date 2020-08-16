const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const account = readlineSync.question('Insira uma conta do Instagram: ');
  await page.goto(`https://www.instagram.com/${account}/`);
  
  const imgList = await page.evaluate(() =>{
    //   Executado no browser
    const nodeList = document.querySelectorAll('article img');
    const imgs = [...nodeList];
    const imgList = imgs.map(img => ({
        src: img.src
    }));

    return imgList;
  });

  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err =>{
      if(err) throw new Error('Something went wrong');
      console.log('Json salvo!');
  });

  await browser.close();
})();