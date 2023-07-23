// //////////////////////////////////////////////////////////
// DATE CURRENT YEAR
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// //////////////////////////////////////////////////////////
// CHANGING DESIGN COLOR
const btnPallete1 = document.querySelector(".btn-palette-1");
const btnPallete2 = document.querySelector(".btn-palette-2");
const btnPallete3 = document.querySelector(".btn-palette-3");
const boxHidden = document.querySelector(".btn-box");

const colorP = document.querySelector("body");
const pText = document.querySelector("p");
const h2 = document.querySelector("h2");

btnPallete1.addEventListener("click", function () {
  colorP.className = "";
  colorP.classList.add("design-palette-1");
  pText.textContent = "You are using Baby Blue Palette";
  h2.textContent = "Baby Blue";
});

btnPallete2.addEventListener("click", function () {
  colorP.className = "";
  colorP.classList.add("design-palette-2");
  pText.textContent = "You are using Calm Dark Palette";
  h2.textContent = "Calm Dark";
});

btnPallete3.addEventListener("click", function () {
  colorP.className = "";
  pText.textContent = "You are using Simple White Palette";
  h2.textContent = "Simple White";
});
//////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////
// PROMPT MANUALLY CHOOSING DESIGN

const btnPrompt = document.querySelector(".btn-prompt");

btnPrompt.addEventListener("click", function () {
  const answer = prompt(`Choose design: baby blue, calm dark, simple white`);
  if (
    answer == `baby blue` ||
    answer == `Baby Blue` ||
    answer == `BabyBlue` ||
    answer == `babyblue` ||
    answer == `blue` ||
    answer == `Blue`
  ) {
    colorP.className = "";
    colorP.classList.add("design-palette-1");
    pText.textContent = "You are using Baby Blue Palette";
    h2.textContent = "Baby Blue";
    alert(`Baby Blue palette will be turned on`);
  } else if (
    answer == `calm dark` ||
    answer == `Calm Dark` ||
    answer == `CalmDark` ||
    answer == `calmdark` ||
    answer == `dark` ||
    answer == `Dark`
  ) {
    colorP.className = "";
    colorP.classList.add("design-palette-2");
    pText.textContent = "You are using Calm Dark Palette";
    h2.textContent = "Calm Dark";
    alert(`Calm Dark palette will be turned on`);
  } else if (
    answer == `simple white` ||
    answer == `Simple White` ||
    answer == `simplewhite` ||
    answer == `SimpleWhite` ||
    answer == `white` ||
    answer == `White`
  ) {
    colorP.className = "";
    pText.textContent = "You are using Simple White Palette";
    h2.textContent = "Simple White";
    alert(`Simple White palette will be turned on`);
  } else {
    colorP.className = "";
    pText.textContent = "You are using Simple White Palette";
    h2.textContent = "Simple White";
    alert(
      `You didn't choose the correct name. Simple White will be selected automatically!`
    );
  }
});

/////////////////////////////////////////////////////////////////
// SHOWING MANUALLY BOX WITH INPUT

// const btnCloseBox = document.querySelector(".btn-cancel");
// const boxManual = document.querySelector(".btn-box-div");
// const btnSubmit = document.querySelector(".submit");
// const nameInput = document.getElementById("name");
// const nameDesign = nameInput.name.value;

// btnPrompt.addEventListener("click", function () {
//   boxManual.classList.remove("hidden");

//   btnSubmit.addEventListener("click", function () {
//     if (
//       nameInput.name.value === `baby blue` ||
//       nameInput.name.value === `Baby Blue` ||
//       nameInput.name.value === `BabyBlue` ||
//       nameInput.name.value === `babyblue` ||
//       nameInput.name.value === `blue` ||
//       nameInput.name.value === `Blue`
//     ) {
//       colorP.className = "";
//       colorP.classList.add("design-palette-1");
//       pText.textContent = "You are using Baby Blue Palette";
//       h2.textContent = "Baby Blue";
//       alert(`Baby Blue palette will be turned on`);
//     } else if (
//       (nameInput.name.value === `calm dark`,
//       nameInput.name.value === `Calm Dark`,
//       nameInput.name.value === `CalmDark`,
//       nameInput.name.value === `calmdark`,
//       nameInput.name.value === `dark`,
//       nameInput.name.value === `Dark`)
//     ) {
//       colorP.className = "";
//       colorP.classList.add("design-palette-2");
//       pText.textContent = "You are using Calm Dark Palette";
//       h2.textContent = "Calm Dark";
//       alert(`Calm Dark palette will be turned on`);
//     } else if (
//       (nameInput.name.value === `simple white`,
//       nameInput.name.value === `Simple White`,
//       nameInput.name.value === `simplewhite`,
//       nameInput.name.value === `SimpleWhite`,
//       nameInput.name.value === `white`,
//       nameInput.name.value === `White`)
//     ) {
//       colorP.className = "";
//       pText.textContent = "You are using Simple White Palette";
//       h2.textContent = "Simple White";
//       alert(`Simple White palette will be turned on`);
//     } else {
//       colorP.className = "";
//       pText.textContent = "You are using Simple White Palette";
//       h2.textContent = "Simple White";
//       alert(
//         `You didn't choose the correct name. Simple White will be selected automatically!`
//       );
//     }
//   });

//   btnCloseBox.addEventListener("click", function () {
//     boxManual.classList.add("hidden");
//   });
// });
