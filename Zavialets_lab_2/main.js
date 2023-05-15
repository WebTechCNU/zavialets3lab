const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

let arrayProducts = [
    {
        img: "assets/products/1.png",
        name: "Product num 1",
        description: "Coca-Cola Coffe",
        price: "10 dollars",
    },
    {
        img: "assets/products/2.png",
        name: "Product num 2",
        description: "Coca-Cola Zero 2L",
        price: "12 dollars",
    },
    {
        img: "assets/products/3.png",
        name: "Product num 3",
        description: "Coca-Cola Zero 0.5L",
        price: "8.5 dollars",
    },
    {
        img: "assets/products/4.png",
        name: "Product num 4",
        description: "Coca-Cola Zero 1L",
        price: "11 dollars",
    },
    {
        img: "assets/products/5.png",
        name: "Product num 5",
        description: "Coca-Cola Caramel 0.5L", 
        price: "9 dollars",
    }, 
    {
        img: "assets/products/6.png",
        name: "Product num 6",
        description: "Coca-Cola Zero 1.5L",
        price: "12 dollars",
    },
];

function getElements(){
    let container = document.querySelector("#container");
    let output = "<div class='row'>";
    let i = 0;
    arrayProducts.forEach(element => {
        let elem = "<div class='col-sm-4'><img class='img-fluid d-block' src="+ element.img +" alt="+element.name+"> <label>"+element.name+" : "+element.description+ "\n"+"price - "+element.price+"</label></div>"
        if(i % 3 == 2){
            elem += "</div><div class='row'>"
        }
        i ++;
        output += elem;
    });
    output += "</div>";
    container.innerHTML = output;
}

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "assets/images/cross.png";
    } else {
        navBtnImg.src = "assets/images/hamburg.png";
    }
}
var popup = document.getElementById("popup");
var acceptBtn = document.getElementById("accept");
var rejectBtn = document.getElementById("reject");


setTimeout(function() {
  if (!localStorage.getItem("subscribed")) {
    popup.style.display = "flex";
  }
}, 5000);


acceptBtn.addEventListener("click", function() {
  popup.style.display = "none";
  localStorage.setItem("subscribed", true);
});

rejectBtn.addEventListener("click", function() {
  popup.style.display = "none";
});
var message = document.createElement("div");
message.innerHTML = "Дякуємо за підписку!";
document.body.appendChild(message);


setTimeout(function() {
  document.body.removeChild(message);
}, 3000);




const modalWrapper = document.getElementById("modal-wrapper");
const closeButton = document.getElementById("close-button");
const timeLeftSpan = document.getElementById("time-left");

let timeLeft = 10;


setTimeout(() => {
  modalWrapper.style.display = "flex";
  const timer = setInterval(() => {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      closeButton.removeAttribute("disabled");
      timeLeftSpan.parentElement.style.display = "none";
    }
  }, 1000);
}, 10000);

closeButton.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});



