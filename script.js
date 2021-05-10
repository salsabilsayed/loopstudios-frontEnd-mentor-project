const header = document.querySelector('header');
const nav = document.querySelector('.logo');
const headerBtn = document.querySelector('header button');
const navList = document.querySelector('header ul');
const icon = document.querySelector('header i');



function openCloseNav(){
    if(header.classList.contains('bg-black')){
        header.classList.remove('bg-black');
        navList.classList.remove('navBlock');
        nav.classList.remove('bg-black');
        icon.classList.replace('fa-times','fa-align-justify')
    }
    else{
        header.classList.add('bg-black');
        navList.classList.add('navBlock');
        icon.classList.replace('fa-align-justify','fa-times');
        nav.classList.add('bg-black');
    }
}


headerBtn.addEventListener('click', openCloseNav);