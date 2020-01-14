# News-Scraper

##### Licensing Information: READ LICENSE
---
##### Project source can be downloaded from https://github.com/lordpaulthomas/clicky-game
----
Author
-----------
Paul Thomas


Description of App
-----------


News Scraper is a full stack application that scrapes _www.CoinDesk.com_'s top stories from thier news feed and displays it to the user.  Articles can then be saved or removed.  Saved articles appear on the save page located under the saved tab.  News Scraper was built using **Mongodb**, **Express.js**, **React.js**, **Node.js**.  Web Scraping performed with **Cheerio**.

Live demo: https://crypto-desk.herokuapp.com/

To run app locally:
--------
1) From your **_command line interface_**,
navigate to desired folder to store app.

2) Clone repository to computer:

   ```git clone https://github.com/lordpaulthomas/News-Scraper.git```

3) Navigate into cloned file:  

   ```cd News-Scraper/``` 
4) Install all server/client Node.js dependencies:
   
   ```  npm install``` 

5) Start app on your computer 

   ```  npm start``` 
6) Open browser and navigate to http://localhost:3000



## **_Screen Shot of App_**

![database](./assets/screenShot.png)

Node Dependencies:
-----
**Server Side**

   ``` "axios": "^0.19.0"``` 

   ```"body-parser": "^1.19.0"``` 

   ```"cheerio": "^1.0.0-rc.3" ```

   ```"cors": "^2.8.5" ```

   ```"express": "^4.17.1" ```

   ```"if-env": "^1.0.4"``` 

   ```"mongojs": "^3.1.0"```
    
   ```"mongoose": "^5.7.7"``` 

   ```"serialize-javascript": "^2.1.2"```

**Client Side**

  ```"cors": "^2.8.5" ```

  ```"react": "^16.11.0"```
 
  ```"react-dom": "^16.11.0"```
 
  ```"react-router-dom": "^5.1.2"```
 
  ```"react-scripts": "3.2.0"```

