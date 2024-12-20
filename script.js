let moon = document.querySelector(".fa-moon");
let idx = 0;
moon.addEventListener("click",()=>{
if(idx === 0){
idx = 1;
document.querySelector("body").style.backgroundColor = "black";
document.querySelector("body").style.color = "white";
moon.style.color = "white";
}
else{
    idx = 0;
document.querySelector("body").style.backgroundColor = "white";
document.querySelector("body").style.color = "black";
moon.style.color = "black";
}
});
let cookies = document.querySelector(".cookies");
let navbar = document.querySelector(".navbar");
let firstPage = document.querySelector(".firstPage");
let circle = document.querySelector(".circle");
let maincontainer = document.querySelector(".maincontainer");
window.onload = function(){
  setTimeout(() => {
    firstPage.style.opacity = "1";
navbar.style.opacity = "1";
maincontainer.style.opacity = "1";
document.querySelector(".footer").style.opacity = "1"
    circle.remove();
  }, );

  setTimeout(() => {
    cookies.style.opacity = "1";
    cookiesButton();
  }, 7000);
}

let Bookimages = document.querySelector(".images");
let count = 0;
let bookItem = [
    {
        photoUrl : "poweroflaw.jpg",
    },
    {
        photoUrl : "habits.jpg",
    },
    {
        photoUrl : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    },
    {
        photoUrl : "https://m.media-amazon.com/images/I/811Q+Ij6h0L._SL1500_.jpg",
    },
    {
        photoUrl : "https://pathakshamabesh.com/wp-content/uploads/2022/02/61Iz2yy2CKL.jpg",
    },
    {
        photoUrl : "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        photoUrl : "https://m.media-amazon.com/images/I/81gTRv2HXrL._UF1000,1000_QL80_.jpg",
    },
    {
        photoUrl : "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg",
    },
    {
        photoUrl : "https://diwanegypt.com/wp-content/uploads/2020/08/9780722538074.jpg",
    },
    {
        photoUrl : "https://static-01.daraz.com.bd/p/edf838f7680dcac7d4d223a6c4ad7f26.jpg",
    },
    {
        photoUrl : "https://static-01.daraz.com.bd/p/cf53904fe78ce455505d07889c77a0c6.jpg",
    },
    {
        photoUrl : "https://static-01.daraz.com.bd/p/3bd63918ba7ca8ced984591bea349e67.jpg",
    },
];

changePhoto();
function changePhoto(){
    let{photoUrl} = bookItem[count];
    Bookimages.src = photoUrl;
    count++;
if(count === bookItem.length){
count = 0;
}
    setTimeout(() => {

        changePhoto();
    }, 1800); 
}


let write = document.querySelector(".write");
let things = ["Knowledge","Creativity","Motivation","Inspiration","Wisdom","Growth"];
let carrerIndex = 0;
let characterIndex = 0;
changingWord();
function changingWord(){
characterIndex++;
write.innerHTML = `<h1 style="font-size:23px; margin:50px 20px; font-weight:600;color:blue    ">Read books for ${things[carrerIndex].slice(0,characterIndex)}</h1>
`
if(characterIndex === things[carrerIndex].length){
carrerIndex++;
characterIndex = 0;
}
if(carrerIndex === things.length){
    characterIndex++;
carrerIndex = 0;
}
setTimeout(() => {
    changingWord();
}, 300);
}


let tetxt = document.querySelector(".tetxt");
let aurthor = document.querySelector(".aurthor");
let identity = 0;
let itemsss = [
    {
    lheka : "'A room without books is like a body without a soul.'",
    namee : "- Marcus Tullius Cicero"
    },
    {
    lheka : "'The only thing that you absolutely have to know, is the location of the library.'",
    namee : "- Albert Einstein"
    },
    {
    lheka : "'Books are a uniquely portable magic.'",
    namee : "- Stephen King"
    },
    {
    lheka : "'Reading is essential for those who seek to rise above the ordinary.'",
    namee : "- Jim Rohn"
    },
    {
    lheka : "'A book is a dream that you hold in your hands.'",
    namee : "- Neil Gaiman"
    },
];
changingtext();
function changingtext(){
let {lheka,namee} = itemsss[identity];
tetxt.innerHTML = lheka;
aurthor.innerHTML = namee;
identity++;
if(identity === itemsss.length){
    identity = 0;
}
    setTimeout(() => {
        changingtext();
    }, 2000);
}

let accept = document.querySelector(".accept");
let reject = document.querySelector(".reject");

cookiesButton();
function cookiesButton(){
accept.addEventListener("click", ()=>{
cookies.style.opacity = "0";
});
reject.addEventListener("click",()=>{
    cookies.style.opacity = "0";
});

}

























