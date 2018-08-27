// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAF5NZJPrywQkm02ixtaGurS0RUFtasMS8",
    authDomain: "mygrandmother-feedthechickens.firebaseapp.com",
    databaseURL: "https://mygrandmother-feedthechickens.firebaseio.com",
    projectId: "mygrandmother-feedthechickens",
    storageBucket: "mygrandmother-feedthechickens.appspot.com",
    messagingSenderId: "826622115376"
  }
};
