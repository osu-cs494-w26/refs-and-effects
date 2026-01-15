# Interacting with External Systems using Refs and Effects

This code will serve as our starting point for exploring how to use two React hooks, `useRef()` and `useEffect()` to help us interact and synchronize with systems outside our React app.

Note that this project was bootstrapped with [Vite](https://vitejs.dev/), which is a tool we'll explore later in the course that provides development and build tooling for modern web apps.  Because the project was bootstrapped with Vite, there's some stuff here that you don't need to worry about yet.  For now, we'll focus our development on the file [src/main.jsx](src/main.jsx) and some nearby files.

The first time you run this app, make sure to run `npm install` first, to install needed dependencies.  Then, to run the app and see it in your browser, you can run
```
npm run dev
```
This will run the app using Vite's development server.  You should be able to visit the running app by viewing [http://localhost:5173](http://localhost:5173) to view the app in your browser.  The development server is set up to use "Hot Module Replacement" (HMR), so the app will automatically reload in your browserif you make edits to the code.
