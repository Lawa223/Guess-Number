'use strict';
const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".show-modal");



const showModal = function (){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');

};

const closedModal = function (){
    modal.classList.add('hidden');
    overLay.classList.add('hidden');

};
for(let i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click',showModal);
}
overLay.addEventListener('click',closedModal);
closeModal.addEventListener('click',closedModal)



