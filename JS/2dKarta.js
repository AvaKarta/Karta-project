"use strict";

/* skapar tids variablar */

const d = new Date();
let weekDay = d.getDay() - 1;

let monthday = d.getDate();
let month = d.getMonth() + 1;
let startDate = new Date(d.getFullYear(), 0, 1);
let minutes = d.getMinutes();
let hour = d.getHours();
hour = 12;
let week = Math.ceil(Math.floor((d - startDate) / (24 * 60 * 60 * 1000)) / 7);
week = 0;
console.log(week, weekDay, hour, minutes);
let weekdays = [
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
  "Söndag",
];

/*   Ett objekt med schema för olika klasser  */

const schema = {
  te21d: [
    [
      [
        {
          start: { hour: 8, minute: 55 },
          end: { hour: 10, minute: 10 },
          sal: 5246,
          type: "lektion",
          order: 0,
        },
        {
          start: { hour: 10, minute: 11 },
          end: { hour: 10, minute: 19 },
          sal: "none",
          type: "rast",
          order: 1,
        },
        {
          start: { hour: 10, minute: 20 },
          end: { hour: 11, minute: 20 },
          sal: 4209,
          type: "lektion",
          order: 1,
        },
        {
          start: { hour: 11, minute: 21 },
          end: { hour: 12, minute: 44 },
          sal: "none",
          type: "lunch",
          order: 2,
        },
        {
          start: { hour: 12, minute: 45 },
          end: { hour: 14, minute: 0 },
          sal: 3536,
          type: "lektion",
          order: 2,
        },
        {
          start: { hour: 14, minute: 1 },
          end: { hour: 14, minute: 9 },
          sal: "none",
          type: "rast",
          order: 3,
        },
        {
          start: { hour: 14, minute: 10 },
          end: { hour: 15, minute: 35 },
          sal: "3604B",
          type: "lastLesson",
          order: 3,
        },
      ],
      [
        {
          start: { hour: 8, minute: 20 },
          end: { hour: 9, minute: 50 },
          sal: "3531A",
          type: "lektion",
          order: 0,
        },
        {
          start: { hour: 9, minute: 51 },
          end: { hour: 9, minute: 59 },
          sal: "none",
          type: "rast",
          order: 0,
        },
        {
          start: { hour: 10, minute: 0 },
          end: { hour: 11, minute: 15 },
          sal: 3612,
          type: "lektion",
          order: 1,
        },
        {
          start: { hour: 11, minute: 16 },
          end: { hour: 12, minute: 9 },
          sal: "none",
          type: "lunch",
          order: 1,
        },
        {
          start: { hour: 12, minute: 10 },
          end: { hour: 13, minute: 30 },
          sal: 4210,
          type: "lektion",
          order: 2,
        },
        {
          start: { hour: 13, minute: 31 },
          end: { hour: 13, minute: 34 },
          sal: "none",
          type: "rast",
          order: 2,
        },
        {
          start: { hour: 13, minute: 35 },
          end: { hour: 14, minute: 5 },
          sal: 4210,
          type: "lektion",
          order: 3,
        },
        {
          start: { hour: 14, minute: 6 },
          end: { hour: 14, minute: 19 },
          sal: "none",
          type: "rast",
          order: 3,
        },
        {
          start: { hour: 14, minute: 20 },
          end: { hour: 15, minute: 45 },
          sal: 3607,
          type: "lastLesson",
          order: 4,
        },
      ],
      [
        {
          start: { hour: 9, minute: 35 },
          end: { hour: 10, minute: 50 },
          sal: 3607,
          type: "lektion",
          order: 0,
        },
        {
          start: { hour: 10, minute: 56 },
          end: { hour: 11, minute: 4 },
          sal: "none",
          type: "rast",
          order: 0,
        },
        {
          start: { hour: 11, minute: 5 },
          end: { hour: 12, minute: 15 },
          sal: "3531A",
          type: "lektion",
          order: 1,
        },
        {
          start: { hour: 12, minute: 16 },
          end: { hour: 13, minute: 9 },
          sal: "none",
          type: "lunch",
          order: 1,
        },
        {
          start: { hour: 13, minute: 10 },
          end: { hour: 14, minute: 35 },
          sal: 6233,
          type: "lastLesson",
          order: 2,
        },
      ],
      [
        {
          start: { hour: 10, minute: 0 },
          end: { hour: 11, minute: 15 },
          sal: 4246,
          type: "lektion",
          order: 0,
        },
        {
          start: { hour: 11, minute: 16 },
          end: { hour: 11, minute: 24 },
          sal: "none",
          type: "rast",
          order: 0,
        },
        {
          start: { hour: 11, minute: 25 },
          end: { hour: 12, minute: 35 },
          sal: 5209,
          type: "lektion",
          order: 1,
        },
        {
          start: { hour: 12, minute: 36 },
          end: { hour: 13, minute: 24 },
          sal: "none",
          type: "lunch",
          order: 1,
        },
        {
          start: { hour: 13, minute: 25 },
          end: { hour: 14, minute: 35 },
          sal: 3607,
          type: "lastLesson",
          order: 2,
        },
      ],
      [
        {
          start: { hour: 8, minute: 40 },
          end: { hour: 9, minute: 50 },
          sal: 3536,
          type: "lektion",
          order: 0,
        },
        {
          start: { hour: 9, minute: 51 },
          end: { hour: 9, minute: 59 },
          sal: "none",
          type: "rast",
          order: 0,
        },
        {
          start: { hour: 10, minute: 0 },
          end: { hour: 11, minute: 15 },
          sal: 6234,
          type: "lektion",
          order: 1,
        },
        {
          start: { hour: 11, minute: 16 },
          end: { hour: 12, minute: 4 },
          sal: "none",
          type: "lunch",
          order: 1,
        },
        {
          start: { hour: 12, minute: 5 },
          end: { hour: 13, minute: 30 },
          sal: 3403,
          type: "lektion",
          order: 2,
        },
        {
          start: { hour: 13, minute: 31 },
          end: { hour: 13, minute: 39 },
          sal: "none",
          type: "rast",
          order: 2,
        },
        {
          start: { hour: 13, minute: 40 },
          end: { hour: 15, minute: 5 },
          sal: "4210",
          type: "lastLesson",
          order: 3,
        },
      ],
    ],
  ],
};

/* Ett objekt med kordinater för alla klassrum*/

const salar = {
  1: { x: 0.85, y: 0.35, level: 5 },
  Aulan: { x: 0.845, y: 0.88, level: 3 },
  2207: { x: 0.833, y: 0.663, level: 2 },
  2208: { x: 0.833, y: 0.622, level: 2 },
  2209: { x: 0.833, y: 0.583, level: 2 },
  2244: { x: 0.953, y: 0.08, level: 2 },
  2247: { x: 0.953, y: 0.12, level: 2 },
  2250: { x: 0.953, y: 0.1419, level: 2 },
  2248: { x: 0.953, y: 0.18, level: 2 },
  2251: { x: 0.953, y: 0.23, level: 2 },
  2252: { x: 0.93, y: 0.267, level: 2 },
  2254: { x: 0.953, y: 0.29, level: 2 },
  2255: { x: 0.953, y: 0.33, level: 2 },
  2256: { x: 0.953, y: 0.381, level: 2 },
  2257: { x: 0.953, y: 0.421, level: 2 },
  2258: { x: 0.943, y: 0.451, level: 2 },
  2260: { x: 0.953, y: 0.502, level: 2 },
  2266: { x: 0.953, y: 0.565, level: 2 },
  2268: { x: 0.978, y: 0.6, level: 2 },
  2269: { x: 0.953, y: 0.62, level: 2 },
  2270: { x: 0.953, y: 0.658, level: 2 },
  3403: { x: 0.55, y: 0.05, level: 3 },
  "3531A": { x: 0.365, y: 0.05, level: 3 },
  3536: { x: 0.22, y: 0.05, level: 3 },
  "3604B": { x: 0.384, y: 0.35, level: 3 },
  3607: { x: 0.315, y: 0.21, level: 3 },
  3612: { x: 0.181, y: 0.35, level: 3 },
  4209: { x: 0.833, y: 0.655, level: 4 },
  4210: { x: 0.833, y: 0.6, level: 4 },
  4214: { x: 0.833, y: 0.486, level: 4 },
  4215: { x: 0.833, y: 0.43, level: 4 },
  4216: { x: 0.833, y: 0.34, level: 4 },
  4220: { x: 0.833, y: 0.273, level: 4 },
  4221: { x: 0.833, y: 0.22, level: 4 },
  4228: { x: 0.833, y: 0.106, level: 4 },
  4229: { x: 0.833, y: 0.052, level: 4 },
  4237: { x: 0.953, y: 0.045, level: 4 },
  4238: { x: 0.953, y: 0.085, level: 4 },
  4241: { x: 0.953, y: 0.135, level: 4 },
  4242: { x: 0.953, y: 0.197, level: 4 },
  4243: { x: 0.953, y: 0.26, level: 4 },
  4244: { x: 0.953, y: 0.315, level: 4 },
  4246: { x: 0.953, y: 0.375, level: 4 },
  4247: { x: 0.953, y: 0.432, level: 4 },
  4248: { x: 0.953, y: 0.485, level: 4 },
  4249: { x: 0.953, y: 0.523, level: 4 },
  4250: { x: 0.953, y: 0.559, level: 4 },
  4251: { x: 0.953, y: 0.594, level: 4 },
  4252: { x: 0.953, y: 0.644, level: 4 },
  5209: { x: 0.833, y: 0.655, level: 5 },
  5210: { x: 0.833, y: 0.6, level: 5 },
  5214: { x: 0.833, y: 0.485, level: 5 },
  5215: { x: 0.833, y: 0.445, level: 5 },
  5216: { x: 0.833, y: 0.415, level: 5 },
  5217: { x: 0.833, y: 0.365, level: 5 },
  5218: { x: 0.833, y: 0.31, level: 5 },
  5219: { x: 0.833, y: 0.255, level: 5 },
  5220: { x: 0.833, y: 0.21, level: 5 },
  5224: { x: 0.833, y: 0.105, level: 5 },
  5225: { x: 0.833, y: 0.05, level: 5 },
  5233: { x: 0.953, y: 0.037, level: 5 },
  5234: { x: 0.953, y: 0.079, level: 5 },
  5236: { x: 0.953, y: 0.15, level: 5 },
  5237: { x: 0.953, y: 0.205, level: 5 },
  5238: { x: 0.953, y: 0.232, level: 5 },
  5239: { x: 0.953, y: 0.276, level: 5 },
  5240: { x: 0.953, y: 0.33, level: 5 },
  5241: { x: 0.953, y: 0.372, level: 5 },
  5242: { x: 0.953, y: 0.414, level: 5 },
  5243: { x: 0.953, y: 0.464, level: 5 },
  5244: { x: 0.953, y: 0.499, level: 5 },
  5245: { x: 0.953, y: 0.544, level: 5 },
  5246: { x: 0.953, y: 0.6, level: 5 },
  5247: { x: 0.953, y: 0.655, level: 5 },
  6212: { x: 0.833, y: 0.62, level: 6 },
  6214: { x: 0.833, y: 0.488, level: 6 },
  6215: { x: 0.833, y: 0.454, level: 6 },
  6216: { x: 0.833, y: 0.423, level: 6 },
  6218: { x: 0.815, y: 0.405, level: 6 },
  6219: { x: 0.815, y: 0.388, level: 6 },
  6220: { x: 0.815, y: 0.373, level: 6 },
  6221: { x: 0.815, y: 0.358, level: 6 },
  6222: { x: 0.815, y: 0.341, level: 6 },
  6223: { x: 0.833, y: 0.32, level: 6 },
  6224: { x: 0.82, y: 0.3, level: 6 },
  6226: { x: 0.82, y: 0.27, level: 6 },
  6227: { x: 0.848, y: 0.268, level: 6 },
  6228: { x: 0.833, y: 0.226, level: 6 },
  6233: { x: 0.833, y: 0.105, level: 6 },
  6234: { x: 0.833, y: 0.05, level: 6 },
  6242: { x: 0.953, y: 0.035, level: 6 },
  6262: { x: 0.953, y: 0.545, level: 6 },
  6266: { x: 0.953, y: 0.63, level: 6 },
};

const classroom = document.querySelector("#classroom");
const dateInformation = document.querySelector("#date-information");
const dataList = document.querySelector("#salar");

/* Lägger till sökbara termer till sök input */

const salLista = Object.keys(salar);
const klasser = Object.keys(schema);
klasser.forEach((klass) => {
  dataList.innerHTML += `<option>${klass}</option>`;
});
salLista.forEach((sal) => {
  dataList.innerHTML += `<option>${sal}</option>`;
});

/*  En funktion för att veta visa vilken sal som en klass har lektion i */

function getLektion(klass) {
  let sal = "";
  let nextSal = "";
  const day = schema[klass][week][weekDay];
  let free = true;
  let type = "";
  let order;

  for (let index = 0; index < day.length; index++) {
    let lektion = day[index];
    if (
      lektion.start.hour * 60 + lektion.start.minute <= hour * 60 + minutes &&
      lektion.end.hour * 60 + lektion.end.minute >= hour * 60 + minutes
    ) {
      if (lektion.sal == "none") {
        sal = "rast";
        nextSal = day[index + 1].sal;
        free = false;
        type = lektion.type;
        order = lektion.order;
      } else if (lektion.type == "lastLesson") {
        sal = lektion.sal;
        nextSal = "none";
        free = false;
        type = lektion.type;
        order = lektion.order;
      } else {
        sal = lektion.sal;
        nextSal = day[index + 2].sal;
        free = false;
        type = lektion.type;
        order = lektion.order;
      }
    }
  }

  if (free) {
    classroom.innerHTML = "<span>Just nu har du ingen skola</span>";
  } else {
    if (type == "rast" || type == "lunch") {
      dateInformation.innerHTML = `<span id="week">Vecka ${week}</span>
      <span id="weekday">${weekdays[weekDay]}</span>
      <span id="date" style="margin-bottom:25px;">${monthday}/${month}</span>`;
      classroom.innerHTML = `
      <span>Just nu har du Rast.</span>
      <span>Nästa lektion är i sal  ${nextSal}.</span>`;
      return [nextSal, order];
    } else if (type == "lastLesson") {
      dateInformation.innerHTML = `<span id="week">Vecka ${week}</span>
    <span id="weekday">${weekdays[weekDay]}</span>
    <span id="date" style="margin-bottom:25px;">${monthday}/${month}</span>`;
      classroom.innerHTML = `<span>Just nu har du lektion i sal ${sal}.</span>
      <span>Efteråt har du ingen skola.</span>`;
      return [sal, order];
    } else {
      dateInformation.innerHTML = `<span id="week">Vecka ${week}</span>
      <span id="weekday">${weekdays[weekDay]}</span>
      <span id="date" style="margin-bottom:25px;">${monthday}/${month}</span>`;
      classroom.innerHTML = `<span>Just nu har du lektion i sal ${sal}.</span>
    <span>Nästa lektion är i sal ${nextSal}.</span>`;
      return [sal, order];
    }
  }
}

/* skapar några variablar */

const infoBox = document.querySelector("#infoBox");
const infoBoxcontainer = document.querySelector("#infoBoxcontainer");
infoBoxcontainer.style.display = "none";
const rightButton = document.querySelector("#right-button");
const leftButton = document.querySelector("#left-button");
const rightCalendarbutton = document.querySelector("#right-calendar-button");
const leftCalendarbutton = document.querySelector("#left-calendar-button");
const apiKey = "ea9430c8ead841e493b132724231602";
const weatherContainer = document.querySelector("#weather");

const api =
  "https://api.weatherapi.com/v1/current.json?key=ea9430c8ead841e493b132724231602&q=Taby&aqi=no";

/* kollar upp vädret vid åva och skriver ut det i section*/

async function getWeather(url) {
  try {
    let response = await fetch(url);
    // Detta gör om resultatet från APIet till ett JSON-objekt.
    let json = await response.json();
    console.log(json);
    weatherContainer.innerHTML = `<img id="weather-icon" src="${
      json.current.condition.icon
    }" alt="Weather icon" height="${window.innerHeight * 0.1}px">
    <span>${json.current.condition.text}</span>
    <span>Känns  som ${json.current.feelslike_c}°</span>`;
  } catch (error) {
    weatherContainer.innerHTML = `<span>Kunde inte hitta väder data.</span>`;
  }
}

getWeather(api);

/*  Skapar det nödvändgia för THREE.js*/

/* Skapar en skybox*/

/* Skapar Height och Width variablar för canvas*/

let height = window.innerHeight * 0.9;
let width = window.innerWidth;
if (window.innerWidth > 1400) {
  width = 1400;
}

/* Laddar in 3d byggnad Alla kod som manipulerar 3dmodelen måsta vara innanför load() */

/*  Sorterar våningarna eftersom det har slumpmässiga platser i arrayen då det laddas in.*/

/* Postionerar vånigarna korrekt */

const buttons = document.querySelectorAll(".buttons");
const canvas = document.querySelector("#bg");
canvas.width = height * 0.7;
canvas.height = height;

let imageWidth = height * 0.58869701726;

const ctx = canvas.getContext("2d");
const plan2 = document.querySelector("#plan2");
const plan3 = document.querySelector("#plan3");
const plan4 = document.querySelector("#plan4");
const plan5 = document.querySelector("#plan5");
const plan6 = document.querySelector("#plan6");

let levels = [plan2, plan3, plan4, plan5, plan6];

ctx.imageSmoothingEnabled = false;
ctx.drawImage(plan2, 0, 0, imageWidth, height);

let cameraKey = false;
let animationKey = false;

let level = 0;
let devToggle = false;
let input = "";
let count = 0;
let lesson = "";
let tempInput = "";
let result = "";
let startHour = "";
let startMinute = "";
let endHour = "";
let endMinute = "";
let dayOffset = 0;
let weekOffset = 0;
let weekDayoffset = 0;
let monthOffset = 0;
let yearOffset = 0;
let alteredMonth = month + monthOffset;
let alteredDay = monthday + dayOffset;
let alteredWeekday = weekDayoffset + weekDay;
let alteredWeek = weekOffset + week;
// let sortedLessons = [];

rightCalendarbutton.addEventListener("click", (event) => {
  dayOffset += 1;
  weekDayoffset += 1;

  if (
    alteredMonth == 1 ||
    alteredMonth == 3 ||
    alteredMonth == 5 ||
    alteredMonth == 7 ||
    alteredMonth == 8 ||
    alteredMonth == 10 ||
    alteredMonth == 12
  ) {
    if (alteredDay >= 31) {
      monthOffset += 1;
      dayOffset = 1;
      monthday = 0;
    }
  } else if (
    alteredMonth == 4 ||
    alteredMonth == 6 ||
    alteredMonth == 9 ||
    alteredMonth == 11
  ) {
    if (alteredDay >= 30) {
      monthOffset += 1;
      dayOffset = 1;
      monthday = 0;
    }
  } else {
    if (alteredDay >= 29) {
      monthOffset += 1;
      dayOffset = 1;
      monthday = 0;
    }
  }

  if (alteredWeekday >= 6) {
    weekDayoffset = 0;
    weekDay = 0;
    weekOffset += 1;
  }

  if (alteredWeek >= 52) {
    weekOffset = 0;
    week = 0;
  }

  if (alteredMonth >= 12) {
    month = 0;
    monthOffset = 0;
  }
  alteredMonth = month + monthOffset;
  alteredDay = monthday + dayOffset;
  alteredWeekday = weekDayoffset + weekDay;
  alteredWeek = weekOffset + week;
  console.log(alteredWeekday, weekDayoffset, weekDay);
  dateInformation.innerHTML = `<span id="week">Vecka ${alteredWeek}</span>
      <span id="weekday">${weekdays[alteredWeekday]}</span>
      <span id="date" style="margin-bottom:25px;">${alteredDay}/${alteredMonth}`;
});

leftCalendarbutton.addEventListener("click", (event) => {
  dayOffset -= 1;
  weekDayoffset -= 1;

  if (
    alteredMonth == 1 ||
    alteredMonth == 3 ||
    alteredMonth == 5 ||
    alteredMonth == 7 ||
    alteredMonth == 8 ||
    alteredMonth == 10 ||
    alteredMonth == 12
  ) {
    if (alteredDay <= 1) {
      monthOffset -= 1;
      dayOffset = 31;
      monthday = 0;
    }
  } else if (
    alteredMonth == 4 ||
    alteredMonth == 6 ||
    alteredMonth == 9 ||
    alteredMonth == 11
  ) {
    if (alteredDay <= 1) {
      monthOffset -= 1;
      dayOffset = 31;
      monthday = 0;
    }
  } else {
    if (alteredDay <= 1) {
      monthOffset -= 1;
      dayOffset = 31;
      monthday = 0;
    }
  }

  if (alteredWeekday <= 0 || (alteredWeekday <= 0 && weekDayoffset < 0)) {
    weekDayoffset = 6;
    weekDay = 0;
    weekOffset -= 1;
  }

  if (alteredWeek <= 0) {
    weekOffset = 52;
    week = 0;
  }

  if (alteredMonth <= 0) {
    month = 0;
    monthOffset = 12;
  }

  alteredMonth = month + monthOffset;
  alteredDay = monthday + dayOffset;
  alteredWeekday = weekDayoffset + weekDay;
  alteredWeek = weekOffset + week;
  console.log(alteredWeekday, weekDayoffset, weekDay);
  console.log(alteredWeek, weekOffset, week);
  dateInformation.innerHTML = `<span id="week">Vecka ${alteredWeek}</span>
      <span id="weekday">${weekdays[alteredWeekday]}</span>
      <span id="date" style="margin-bottom:25px;">${alteredDay}/${alteredMonth}`;
  console.log(weekDay);
});

rightButton.addEventListener("click", (event) => {
  console.log(input, week, alteredWeekday);
  let lessons = schema[input][week][alteredWeekday];
  console.log(lessons);
  let sortedLessons = [];
  lessons.forEach((element) => {
    if (element.type == "lektion" || element.type == "lastLesson") {
      sortedLessons.push(element);
    }
  });
  console.log(sortedLessons);
  console.log(count);
  console.log(tempInput);
  console.log(result[1]);
  let checkCount = count;
  if (sortedLessons[result[1] + count + 1] == undefined) {
    count = checkCount;
  } else {
    console.log(sortedLessons[result[1] + count]);
    count += 1;
  }

  lesson = sortedLessons[result[1] + count].sal;
  startHour = sortedLessons[result[1] + count].start.hour;
  startMinute = sortedLessons[result[1] + count].start.minute;
  endHour = sortedLessons[result[1] + count].end.hour;
  endMinute = sortedLessons[result[1] + count].end.minute;
  console.log(lesson);
  console.log(salar[lesson].level);

  level = salar[lesson].level;
  ctx.drawImage(levels[level - 2], 0, 0, imageWidth, height);

  ctx.beginPath();
  ctx.arc(
    salar[lesson].x * imageWidth,
    salar[lesson].y * height,
    10,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "red";
  ctx.fill();

  classroom.innerHTML = `<span>Sal ${lesson} </span><span>${startHour}:${startMinute} - ${endHour}:${endMinute}</span>`;
});

leftButton.addEventListener("click", (event) => {
  let lessons = schema[input][week][alteredWeekday];
  console.log(lessons);
  let sortedLessons = [];
  lessons.forEach((element) => {
    if (element.type == "lektion" || element.type == "lastLesson") {
      sortedLessons.push(element);
    }
  });
  console.log(sortedLessons);
  console.log(count);
  console.log(tempInput);
  console.log(result[1]);
  let checkCount = count;
  console.log(sortedLessons[result[1] - count - 1]);
  if (result[1] + count - 1 < 0) {
    count = checkCount;
    console.log(count);
  } else {
    console.log(sortedLessons[result[1] + count]);
    count -= 1;
  }

  lesson = sortedLessons[result[1] + count].sal;
  startHour = sortedLessons[result[1] + count].start.hour;
  startMinute = sortedLessons[result[1] + count].start.minute;
  endHour = sortedLessons[result[1] + count].end.hour;
  endMinute = sortedLessons[result[1] + count].end.minute;
  console.log(lesson);
  console.log(salar[lesson].level);

  level = salar[lesson].level;

  ctx.drawImage(levels[level - 2], 0, 0, imageWidth, height);

  ctx.beginPath();
  ctx.arc(
    salar[lesson].x * imageWidth,
    salar[lesson].y * height,
    10,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "red";
  ctx.fill();

  classroom.innerHTML = `<span>Sal ${lesson} </span>
      <span>${startHour}:${startMinute} - ${endHour}:${endMinute}</span>`;
});

addEventListener("submit", (event) => {
  event.preventDefault();
  input = document.getElementById("search").value;
  tempInput = input;
  if (schema.hasOwnProperty(input)) {
    result = getLektion(input);
    console.log(result);
    tempInput = result[0];
    buttons.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    buttons.forEach((element) => {
      element.style.display = "none";
    });
  }
  if (salar.hasOwnProperty(input) || schema.hasOwnProperty(input)) {
    // console.log(tempInput);
    // console.log(salar[tempInput].level);

    level = salar[tempInput].level - 2;

    ctx.drawImage(levels[level], 0, 0, imageWidth, height);

    ctx.beginPath();
    ctx.arc(
      salar[tempInput].x * imageWidth,
      salar[tempInput].y * height,
      10,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "red";
    ctx.fill();

    animationKey = true;
  } else if (input == "dev") {
    if (devToggle == true) {
      infoBoxcontainer.style.display = "none";
      devToggle = false;
    } else {
      infoBoxcontainer.style.display = "block";
      devToggle = true;
    }
  } else {
    alert("Salen finns inte!");
  }
});

function animate() {
  requestAnimationFrame(animate);
  {
  }
}

animate();

/* uppdatera storlek på canvas då fönstret ändrar storlek*/

function resize() {
  let factor = 0.9;
  let w = window.innerWidth;
  let h = window.innerHeight * factor;
  if (window.innerWidth > 1000) {
    w = 1000;
  }
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);
