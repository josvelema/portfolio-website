// portfolio Jos Velema 2021

const source = document.getElementsByTagName('html')[0].innerHTML
const clickPrint = document.getElementById('clickPrint')
const domContainer = document.getElementById('domContainer')
clickPrint.addEventListener("click",function printDOM() {
    domContainer.innerText = source
})

domContainer.innerText = source