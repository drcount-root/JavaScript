"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModalFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// open by clicking any of these buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModalFunc);
}

// close by clicking x sign
btnCloseModal.addEventListener("click", closeModalFunc);

// close by clicking outside
overlay.addEventListener("click", closeModalFunc);

// Close by pressing escape key
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});
