const btn_menu=document.getElementById('btn_menu')
const nav=document.getElementById('menu')

btn_menu.addEventListener('click',(e)=>{
    nav.classList.toggle('change')
    btn_menu.classList.toggle('change2')
})
