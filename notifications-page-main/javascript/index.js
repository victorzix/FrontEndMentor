let situation = document.querySelectorAll("[id=unread]");
let newMessage = document.querySelectorAll("[id=contentWrapper]");
let qtd = document.querySelector(".qtd");

let read;

for (let content of newMessage) {
  if (content.querySelector(".unread") !== null) {
    content.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--light-blue1");
    read = false;
  }

  qtd.textContent = 3;
  function readAll() {
    for (let div of situation) {
      div.style.display = "none";
      read = true;
    }

    setTimeout(() =>{if(read){
        for(let content of newMessage){
            content.style.backgroundColor = 'white'
        }
    }}, 300)
    
    qtd.textContent = "0";
  }
}
