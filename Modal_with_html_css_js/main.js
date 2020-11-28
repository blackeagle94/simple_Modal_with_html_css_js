// get the modal element
let modal = document.querySelector('#simpleModal')
// get open modaol button
let modalBtn = document.querySelector('#modalBtn')
// close button
let closeBtn = document.querySelector('.closeBtn')

// listen for click
modalBtn.addEventListener('click', openModal)

// listen for close click
closeBtn.addEventListener('click', closeModal)

//liten for outside click
window.addEventListener('click', clickOutside)

//function to open modal

function openModal () {
    modal.style.display = 'block'
}

//function to close modal

function closeModal () {
    modal.style.display = 'none'
}

//function to clickoutside modal

function clickOutside (e) {
    if (e.target == modal){
        modal.style.display = 'none'
    }
}