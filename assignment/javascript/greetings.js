var h1tag = document.querySelector("#msg-1");
keyLength = document.querySelectorAll(".greetings").length;
console.log(keyLength);
h1tag.style.color = "green";        
            
function greetings() {
    //I'M UNABLE TO SET THE KEY. PLEASE HELP!!!
    for (let i = 0; i < keyLength; i++) {
        
        switch (i) {
            case 0:
                h1tag.innerText = document.querySelectorAll(".greetings")[0].innerHTML;
                break;
        
            case 1:
                h1tag.innerText = document.querySelectorAll(".greetings")[1].innerHTML;
                break;
        
            case 2:
                h1tag.innerText = document.querySelectorAll(".greetings")[2].innerHTML;
                break;
        
            case 3:
                h1tag.innerText = document.querySelectorAll(".greetings")[3].innerHTML;
                break;
        }
    }
};