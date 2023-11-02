(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const apiKey = 'dd511b318f1342e1b21182703232010';
const baseweatherUrl = 'https://api.weatherapi.com/v1/current.json?key=';
const query = 'fultondale';
const wholeWebsite = `${baseweatherUrl}${apiKey}&q=${query}&aqi=no`;

let websiteData = {};

fetch(wholeWebsite)
  .then((response) => {
    websiteData = response;
    console.log(websiteData);
  })
  .catch((e) => {
    console.log(e);
  });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlLEVBQUUsT0FBTyxLQUFLLE1BQU07O0FBRTNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpS2V5ID0gJ2RkNTExYjMxOGYxMzQyZTFiMjExODI3MDMyMzIwMTAnO1xuY29uc3QgYmFzZXdlYXRoZXJVcmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0nO1xuY29uc3QgcXVlcnkgPSAnZnVsdG9uZGFsZSc7XG5jb25zdCB3aG9sZVdlYnNpdGUgPSBgJHtiYXNld2VhdGhlclVybH0ke2FwaUtleX0mcT0ke3F1ZXJ5fSZhcWk9bm9gO1xuXG5sZXQgd2Vic2l0ZURhdGEgPSB7fTtcblxuZmV0Y2god2hvbGVXZWJzaXRlKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB3ZWJzaXRlRGF0YSA9IHJlc3BvbnNlO1xuICAgIGNvbnNvbGUubG9nKHdlYnNpdGVEYXRhKTtcbiAgfSlcbiAgLmNhdGNoKChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9