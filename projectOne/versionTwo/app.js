var home = document.getElementById('home');
var svgOne = document.getElementById('svgOne');
var svgTwo = document.getElementById('svgTwo');
var svgThree = document.getElementById('svgThree');
var svgFour = document.getElementById('svgFour');

var homeButton = document.getElementById('homeButton');
var svgTwoFloor = document.getElementById('svgTwoFloor');
var svgThreeFloor = document.getElementById('svgTwoFloor');
var welcomeBookOne = document.getElementById('welcomeBookOne');
var welcomeBookTwo = document.getElementById('welcomeBookTwo');

//Interaction 1: Click on door to enter cafe

home.addEventListener("mouseover", () =>{
home.style.fill = 'beige';
});

home.addEventListener("mouseout", () =>{
home.style.fill = '#6C6259';
});

home.addEventListener("click", () =>{
svgOne.style.display = 'none';
svgTwo.style.display = 'unset';
document.getElementById("player").play();
});

//Interaction 2: Click on floor to go back to home

svgTwoFloor.addEventListener("mouseover", () =>{
    svgTwoFloor.style.fill = 'beige';
  });

svgTwoFloor.addEventListener("mouseout", () =>{
svgTwoFloor.style.fill = '#F1ECE7';
});

svgTwoFloor.addEventListener("click", () =>{
svgTwo.style.display = 'none';
svgOne.style.display = 'unset';
});

//Interaction 3: Click on welcome book to browse

welcomeBookOne.addEventListener("mouseover", () =>{
    welcomeBookOne.style.fill = 'white';
    welcomeBookTwo.style.fill = 'white';

  });

welcomeBookOne.addEventListener("mouseout", () =>{
    welcomeBookOne.style.fill = '#77B9B9';
    welcomeBookTwo.style.fill = '#77B9B9';
});

welcomeBookOne.addEventListener("click", () =>{
    svgTwo.style.display = 'none';
    svgThree.style.display = 'unset';
});

welcomeBookTwo.addEventListener("mouseover", () =>{
    welcomeBookOne.style.fill = 'white';
    welcomeBookTwo.style.fill = 'white';
  });

welcomeBookTwo.addEventListener("mouseout", () =>{
    welcomeBookOne.style.fill = '#77B9B9';
    welcomeBookTwo.style.fill = '#77B9B9';
});

welcomeBookTwo.addEventListener("click", () =>{
    svgTwo.style.display = 'none';
    svgThree.style.display = 'unset';
});

//Interaction 4: Back button on svg three leads user back to cafe

var svgThreeBackButton = document.getElementById('svgThreeBackButton');

svgThreeBackButton.addEventListener("mouseover", () =>{
    svgThreeBackButton.style.fill = 'black';
  });

svgThreeBackButton.addEventListener("mouseout", () =>{
    svgThreeBackButton.style.fill = '#FCFAF4';
});

svgThreeBackButton.addEventListener("click", () =>{
    svgTwo.style.display = 'unset';
    svgThree.style.display = 'none';
});

//Interaction 5: Click on any of the books on bookshelve opens svgFour

var bookCover = document.getElementById("bookCover");
var books = document.getElementsByClassName("books");
var bookOne = document.getElementById("bookOne");
var bookTwo = document.getElementById("bookTwo");
var bookThree = document.getElementById("bookThree");
var bookFour = document.getElementById("bookFour");
var bookFive = document.getElementById("bookFive");
var bookSix = document.getElementById("bookSix");
var bookSeven = document.getElementById("bookSeven");
var bookEight = document.getElementById("bookEight");

//book one

bookOne.addEventListener("mouseover", () =>{
    bookOne.style.fill="white";
    });
    
bookOne.addEventListener("mouseout", () =>{
    bookOne.style.fill="#EF9262";
    });

bookOne.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#EF9262"
    });

//book two

bookTwo.addEventListener("mouseover", () =>{
    bookTwo.style.fill="white";
    });
    
bookTwo.addEventListener("mouseout", () =>{
    bookTwo.style.fill="#FFD87E";
    });
    
bookTwo.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#FFD87E"
    });

//book three

bookThree.addEventListener("mouseover", () =>{
    bookThree.style.fill="white";
    });
    
bookThree.addEventListener("mouseout", () =>{
    bookThree.style.fill="#CAB177";
    });
    
bookThree.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#CAB177"
    });

//book four

bookFour.addEventListener("mouseover", () =>{
    bookFour.style.fill="white";
    });
    
bookFour.addEventListener("mouseout", () =>{
    bookFour.style.fill="#B198C3";
    });
    
bookFour.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#B198C3"
    });

//book five

bookFive.addEventListener("mouseover", () =>{
    bookFive.style.fill="white";
    });
    
bookFive.addEventListener("mouseout", () =>{
    bookFive.style.fill="#E89FCB";
    });
    
bookFive.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#E89FCB"
    });

//book six

bookSix.addEventListener("mouseover", () =>{
    bookSix.style.fill="white";
    });
    
bookSix.addEventListener("mouseout", () =>{
    bookSix.style.fill="#BF8484";
    });
    
bookSix.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#BF8484"
    });


//book seven

bookSeven.addEventListener("mouseover", () =>{
    bookSeven.style.fill="white";
    });
    
bookSeven.addEventListener("mouseout", () =>{
    bookSeven.style.fill="#BF8484";
    });
    
bookSeven.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#BF8484"
    });
    
//book eight

bookEight.addEventListener("mouseover", () =>{
    bookEight.style.fill="white";
    });
    
bookEight.addEventListener("mouseout", () =>{
    bookEight.style.fill="#7B80EE";
    });
    
bookEight.addEventListener("click", () =>{
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#7B80EE"
    });

//Back Button
var bookBackButton = document.getElementById("bookBackButton");

bookBackButton.addEventListener("mouseover", () =>{
    bookBackButton.style.fill="black";
    });
    
bookBackButton.addEventListener("mouseout", () =>{
    bookBackButton.style.fill="white";
    });

bookBackButton.addEventListener("click", () =>{
    svgFour.style.display = 'none';
    svgTwo.style.display = 'unset';
    });

//API Fetch

window.addEventListener('load', function() {
    console.log('page is loaded');
    
   fetch('https://poetrydb.org/title')
   .then(response => response.json())
   .then(data => {
        //do something
        for (var i=0; i<data.titles.length;i++){
            this.console.log(data.titles[i]);
        }
   })
   .catch(error => {
       console.log("Error!!! : " + error);
   })

})


