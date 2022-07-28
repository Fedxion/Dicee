
let img1 = Math.floor((Math.random() * 6 )+ 1);
let img2 = Math.floor((Math.random() * 6 )+ 1);
   
    
      if (img1 === 1){
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        }
      else if(img1 === 2){
         document.querySelector(".img1").setAttribute("src", "images/dice2.png");
       }
       else if(img1 === 3){
         document.querySelector(".img1").setAttribute("src", "images/dice2.png");
       }
       else if(img1 === 4){
         document.querySelector(".img1").setAttribute("src", "images/dice3.png");
       }
       else if(img1 === 5){
         document.querySelector(".img1").setAttribute("src", "images/dice5.png");
       }
       else{
         document.querySelector(".img1").setAttribute("src", "images/dice6.png");
       }
    
     
             
          if (img2 === 1){
            document.querySelector(".img2").setAttribute("src", "images/dice1.png");
            }
          else if(img2 === 2){
             document.querySelector(".img2").setAttribute("src", "images/dice2.png");
           }
           else if(img2 === 3){
             document.querySelector(".img2").setAttribute("src", "images/dice2.png");
           }
           else if(img2 === 4){
             document.querySelector(".img2").setAttribute("src", "images/dice3.png");
           }
           else if(img2 === 5){
             document.querySelector(".img2").setAttribute("src", "images/dice5.png");
           }
           else{
             document.querySelector(".img2").setAttribute("src", "images/dice6.png");
           }
        

    if (img1 > img2){
        document.querySelector("h1").textContent = "Player1 Wins!";
    }else if (img1 < img2){
        document.querySelector("h1").textContent = "Player2 Wins!";
    }
    else{
        document.querySelector("h1").textContent = "Draw!";
    }

      

