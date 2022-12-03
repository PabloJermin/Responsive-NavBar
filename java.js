const navToogle = document.querySelector('.nav-toogle');
const links = document.querySelector('.links');


navToogle.addEventListener('click', function(){
   /* if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
    } */

    links.classList.toggle('show-links');
});