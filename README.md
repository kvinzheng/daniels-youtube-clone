# Daniel's YouTube Clone

Deployed site: https://danielyoutubeclone.herokuapp.com/

### Getting Started
1. Please fork and clone this repo.
2. `npm install` to install dependencies.
3. `cd src/actions/` change into the actions directory.
4. `touch apiKey.js` to create an apiKey file.
5. Visit the [Google Developers Console](https://console.developers.google.com/apis/dashboard) and select 'Credentials'.
6. Click on 'Create Credentials' and follow the steps to obtaining an API Key.
7. inside of `apiKey.js` add the API Key. Your file shoudl look like this:
```
const API_KEY = 'YOUR API KEY HERE'

export default API_KEY
```
8. `cd ../../` to go back to the root directory.
9. `npm start` to launch the app on `localhost:3000`.
10. Enjoy some youtube videos!!

###  testing-breakout branch

This branch is used for my React Testing with Jest Breakout sessions at Galvanize
