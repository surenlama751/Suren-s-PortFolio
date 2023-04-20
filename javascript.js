let menu =document.querySelector('#suren');
let navList = document.querySelector('.information');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('#image1',{delay:200,origin:'top'});