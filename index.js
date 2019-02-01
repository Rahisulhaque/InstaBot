// ***************************************************************************************** //
//                                                                                           //
//                                                                                           //
//   index.js                                                        __    _            __   //
//                                                       _________ _/ /_  (_)______  __/ /   //
//   By: rahisulhaque <rahisul@icloud.com>              / ___/ __ `/ __ \/ / ___/ / / / /    //
//                                                     / /  / /_/ / / / / (__  ) /_/ / /     //
//   Created: 2019/02/01 10:52:12 by rahisulhaque     /_/   \__,_/_/ /_/_/____/___,_/_/      //
//   Updated: 2019/02/01 11:02:15 by rahisulhaque                                            //
//                                                                                           //
// ***************************************************************************************** //

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({  
      headless: false,
    });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/', {
      waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
  });


  await page.waitFor(() => document.querySelectorAll('input').length);


  //Lets automate login  
  await page.type('[name=username]', 'realaudreywinters')
  await page.type('[name=password]', 'SM*90404');
  

  //login

  await page.evaluate(() => {
    document.querySelector('[type=submit]._0mzm-').click()
  q  });
  await page.waitFor(5000);
  
  // 
  //await page.evaluate(() => document.querySelector('._0mzm-').click(), );
  await page.waitFor(2000);
  await browser.close();
  await page.waitFor(10000);
})();

