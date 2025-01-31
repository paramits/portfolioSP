//PERSONA CARDS
//create a variable for the cards
const personaCard = document.querySelectorAll(".personaCard");

const content = document.querySelector(".personaContent");
const personaImg = document.querySelector(".personaFull");
const personaImg1 = document.querySelector(".pFull1");
const personaCont1 = document.querySelector(".pContent1");
const personaImg2 = document.querySelector(".pFull2");
const personaCont2 = document.querySelector(".pContent2");
const personaImg3 = document.querySelector(".pFull3");
const personaCont3 = document.querySelector(".pContent3");

personaCard.forEach((card) => {
      card.addEventListener("click", (e) => {
        console.log("CLICKED");
        const val = card.getAttribute('data-value');
        if (val==3){
            console.log("it's 3");
            personaImg1.style.display = "none";
            personaCont1.style.display = "block";
            personaImg2.style.display = "none";
            personaCont2.style.display = "block";
            personaImg3.style.display = "block";
            personaCont3.style.display = "none";
        }
        else if(val==2){
            console.log("it's 2");
            personaImg1.style.display = "none";
            personaCont1.style.display = "block";
            personaImg3.style.display = "none";
            personaCont3.style.display = "block";
            personaImg2.style.display = "block";
            personaCont2.style.display = "none";
        }
        else if(val==1){
            console.log("it's 1");
            personaImg2.style.display = "none";
            personaCont2.style.display = "block";
            personaImg3.style.display = "none";
            personaCont3.style.display = "block";
            personaImg1.style.display = "block";
            personaCont1.style.display = "none";
        }
        console.log("VALUE IS =" + val);
        e.stopPropagation(); // Prevent click from propagating to the document
        removeActive();
                
       
        card.classList.add("active");

       
      });
    });

    function removeActive() {
        personaCard.forEach((card) => {
            // personaImg.style.display = "none";
            // content.style.display = "block";
        card.classList.remove("active");
      
      });
    }

    // Add a click listener to the document to handle clicks outside
    document.addEventListener("click", (e) => {
        personaImg1.style.display = "none";
        personaCont1.style.display = "block";
        personaImg2.style.display = "none";
        personaCont2.style.display = "block";
        personaImg3.style.display = "none";
        personaCont3.style.display = "block";
      removeActive(); // Remove active class if clicking outside
    //   personaImg.style.display = "none";
    //   content.style.display = "block";
    });



// function checkVal(card){
//     const personaCard1 = document.querySelectorAll(".personaCard1");
// const personaCard2 = document.querySelectorAll(".personaCard2");
// const personaCard3 = document.querySelectorAll(".personaCard3");
//     const val = card.getAttribute('data-value');
//     console.log("VAL = " + val);

//     if(val==1){
//         card.classList.add("active");
//     }
//     else if(val==2){
//         personaCard1.classList.remove("active");
//     }
// }