// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
var detailId = document.getElementById("details")
detailId.addEventListener("click", function () { alert("Not Available in Hawaii"); });

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
var jordan2Des = document.getElementById("descrip1")
name1.addEventListener("mouseover", function () { displayDescrip(jordan2Des); });
name1.addEventListener("mouseout", function () { displayDescrip(jordan2Des); });

function displayDescrip(des) {
    console.log(des);
    if (!des.style.display || des.style.display === "none") {
        des.style.display = "block";
    } else {
        des.style.display = "none";
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 
var jordan3Des = document.createElement("div");
jordan3Des.id = "descrip2";
jordan3Des.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
name2.appendChild(jordan3Des);
name2.addEventListener("click", function () { displayDescrip(jordan3Des); });


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
var thumbsUpClass = document.getElementsByClassName("far fa-thumbs-up");

for (let i = 0; i < thumbsUpClass.length; i++) {
    var countClass = document.createElement("div");
    countClass.className = "countin";
    countClass.innerHTML = 0;
    thumbsUpClass[i].appendChild(countClass);
    thumbsUpClass[i].addEventListener("click", function () {
        countUp(i);
    });
}


//track of the number of times clicked and go up one everytime
function countUp(num) {
    var countClass = document.getElementsByClassName("countin")[num];
    var plusone = parseInt(countClass.innerHTML);

    if (countClass.innerHTML >= 1) {
        plusone += 1;
    } else {
        plusone = 1;
    }

    countClass.innerHTML = plusone;
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

var increaseIcon = increase.children[0];
var airJordan5Price = increase.parentElement;
increaseIcon.addEventListener("click", increasePrice);

function increasePrice() {
    var num = parseInt(airJordan5Price.innerText) + 1;
    // I have to use innerHTML here because innerText wipes out everything
    airJordan5Price.innerHTML = num + "<span id='increase'><i class='far fa-plus-square'></i></span>";
    //I have to redo the button, because the button seems to be wiped out too.
    increaseIcon = increase.children[0];
    increaseIcon.addEventListener('click', increasePrice);
}


//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.


//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 


//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.