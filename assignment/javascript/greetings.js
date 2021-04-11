var h1tag = document.querySelector("#msg-1");
//To access the tag associated with id="msg-1"

keyLength = document.querySelectorAll(".greetings").length;
//Calculating the iterating variable.

console.log(keyLength);
//To authenticate the iterating variable.

h1tag.style.color = "green";        
//Sets the default color of text fetched for printing.

let greetings = () => {
    //I'M UNABLE TO SET THE KEY. PLEASE HELP!!!
    for (let i = 0; i < keyLength; i++) {
        
        //Begining of Loop
        switch (i) {

            //Checks for the text inside first member of class="greetings".
            case 0:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                //Prints the "Good Morning" message.
                break;

            //Checks for the text inside second member of class="greetings".
            case 1:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                //Prints the "Good Afternoon" message.
                break;
            
            //Checks for the text inside third member of class="greetings".
            case 2:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                //Prints the "Good Evening" message.
                break;
        
            //Checks for the text inside fourth member of class="greetings".
            case 3:
                h1tag.innerText = document.querySelectorAll(".greetings")[i].innerHTML;
                //Prints the "Good Night" message.
                break;
        }
    }
};