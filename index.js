"use strict";
const btnsOpenModal = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Refactor code
// the btnCloseModal and overlay when click it same the same code => we can export this code in funtion and call it more than once like this .
// Note => we cant , when use addEventListener , and use function declartion cant use name of function() , with () => because it will make function work alone without addEvenetListener click
//Exe
// btnCloseModal.addEventListener("click", closeModal); => Correct
// btnCloseModal.addEventListener("click", closeModal()); => Wrong

//function to open modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//Show modal when click an any button
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
//function to close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//Close Modal when click closeButton , or in click on overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// use key events => its globle event we use document with addeventlistener
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  // its mean if i pressed Escape btn and modal didnt have class hidden => work function closeModal();
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
