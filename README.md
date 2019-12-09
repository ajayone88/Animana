Complete the steps to run locally

1) Check out the code 

2) cd into folder  ../backend and run npm install

3) cd into folder  ../frontend and run npm install

4) cd into folder Animana and run npm install 

5) Add script to package.json in Animana folder : -  
    "scripts": {
        "start": "lerna run start --parallel"
    },
6) npm run start.