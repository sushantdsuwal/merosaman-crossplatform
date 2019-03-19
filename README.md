# merosama
This little project is my humble attempt two bridge to worlds 🚠. The world of web apps and the world of native apps. Using [react native](https://facebook.github.io/react-native/) and [react dom](https://reactjs.org/). Majority of code share the same base. This means that almost every screen and component you see is a universal one, shared between those two platforms. This reduces the codebase to maintain, thus reducing the cost of development 💰!

## Tech 🛠

- [ReactJS](https://reactjs.org) via [create-react-app](https://github.com/facebook/create-react-app) - web rendering and PWA functionality in one neat package
- [React Native](https://facebook.github.io/react-native/) - native rendering
- [React Native Web](https://github.com/necolas/react-native-web) - the most important module, that makes all the magic hapen.
- [React Navigation](https://reactnavigation.org/) - navigation framework for the native app
- TODO:

## Watch out the bugs

This code is still really messy! There's no proper error handling, some things don't work.

## Building and contributing

If you want to check the code yourself, make some changes or add something to it you are more then welcome!
You need to have create-react-app scripts installed
Fork or clone the repo and run:

```
yarn install
```

or

```
npm install
```

Here are the scripts:

`yarn start` - run the native react metro bundler

`yarn start-ios` - run the native react ios app in iOS Simulator

`yarn start-web` - run the react web app in the browser

`yarn build` - build the web app

## To do 📋

- a module to provide a coherent way to navigate on both platforms
- proper error handling
- enhance Performance
- bug fixes