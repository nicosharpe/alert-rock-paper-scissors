// we need to know if the user chooses R, P or S 

// computer will respond with a random  R, P or S

// Prompt will pop up with an input for user to type their choice

// compare results 

// keep score wins/losses

// option button with "try again"



var random= ["R", "P", "S"];
var CPU=random [Math.floor(Math.random() * random.length)];
var Selection= ["R", "P", "S"];
var totalWin=0;
var totalLoss=0;
var userChoice;
var totalTie=0;


// if user chooses R + CPU chooses P
// then: LOSE 

// if user chooses P + CPU chooses P
// then: TIE 

// if user chooses P + CPU chooses S
// then: WIN


// Math.floor(Math.random() * 4);

for(var count=0; count<10; count++) {
    var CPU=random [Math.floor(Math.random() * random.length)]
    var userChoice=prompt("Enter your choice for Rock, Paper, Scissors. Choose R, P or S.");
    userChoice=userChoice.toUpperCase()
    // if (userChoice!=="R"||userChoice!=="P"||userChoice!=="S"){
    //     alert("Try again. Choose R, P or S.")

     if (userChoice==CPU){
        alert("TIE!");
        totalTie++;
     }
       else if (userChoice=="R"){
        if (CPU=="P"){
            alert("YOU LOST!")
            totalLoss++;
        } else if (CPU=="S") {
            alert("YOU WON!")
            totalWin++;
        }
    }
       
        else if (userChoice=="P"){
            if (CPU=="S"){
                alert("YOU LOST!")
                totalLoss++;
            } else if (CPU=="R") {
                alert("YOU WON!")
                totalWin++;
            }
        }
            else if (userChoice=="S"){
                if (CPU=="R"){
                    alert("YOU LOST!")
                    totalLoss++;
                } else if (CPU=="P") {
                    alert("YOU WON!")
                    totalWin++;
                }
    
            }
        }



        
// alert("You lost"+totalLoss, "You won"+totalWin, "You Tie"+totalTie);
alert("You won:"+totalWin+" You lost:"+totalLoss+" You tied:"+totalTie);