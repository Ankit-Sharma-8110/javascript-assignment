var h1tag = document.querySelector("#msg-1");
keyLength = document.querySelectorAll(".greetings").length;
console.log(keyLength);
h1tag.style.color = "green";        
            
let greetings = () => {
    //I'M UNABLE TO SET THE KEY. PLEASE HELP!!!
    for (let i = 0; i < keyLength; i++) {
        
        switch (i) {
            case 0:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                break;
        
            case 1:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                break;
        
            case 2:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                break;
        
            case 3:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                break;
        }
    }
};