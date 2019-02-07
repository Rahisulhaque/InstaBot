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
    });
  //await page.waitFor(5000);
  
  //wait for couple of seconds

  await page.waitFor(() => 
    document.querySelector('[placeholder=Search]')
  );

  await page.evaluate(() => 
    document.querySelector('[href="/accounts/activity/"]').click()
    );
  // 
  await page.waitFor(() => document.querySelectorAll('[type=button]._0mzm-').length);
 //following the followers
 await page.evaluate(() => {
   const elements = document.querySelectorAll('[role=button]._0mzm-');

   elements.forEach( element => {
     if( element.innerText === 'Follow'){
       element.click();
     }
   });
 })

  await pafe
  await page.waitFor(2000);
  //await browser.close();
  await page.waitFor(10000);
})();

