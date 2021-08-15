var ham = document.querySelector('.hamburger')
var side = document.querySelector('.sidebar')

ham.addEventListener("click", ()=>toggleMenu())

const toggleMenu = ()=>{
    if(side.classList.contains('open')){
        side.classList.remove('open')
        ham.classList.remove('open')
    }else{
        side.classList.add('open')
        ham.classList.add('open')
    }
}