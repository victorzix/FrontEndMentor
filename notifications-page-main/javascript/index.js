let situation = document.querySelectorAll('[id=unread]')
let newMessage = document.querySelectorAll('[id=contentWrapper]')
let qtd = document.querySelector('.qtd')

console.log(newMessage)
let read;



qtd.textContent = 3
function readAll(){
    for(let div of situation){
        div.style.display = 'none'
        read = true;
    }
    qtd.textContent = '0'
}

