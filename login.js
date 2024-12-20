loading();
function loading(){
    let google = document.querySelector(".google");
    let facebook = document.querySelector(".facebook");
    let twitter = document.querySelector(".twitter");
    let loginBtn = document.querySelector(".log");
    let login = document.querySelector(".login");
    let loader = document.querySelector(".loader");
    let verified = document.querySelector(".verified");
    loginBtn.addEventListener("click",()=>{
        login.style.opacity = "0";
        loader.style.opacity = "1";
        setTimeout(() => {
            loader.remove();
            verified.style.opacity = "1";
        }, 1900);
        });
        google.addEventListener("click",()=>{
        login.style.opacity = "0";
        loader.style.opacity = "1";
        setTimeout(() => {
            loader.remove();
            verified.style.opacity = "1";
        }, 1900);
        });
        facebook.addEventListener("click",()=>{
        login.style.opacity = "0";
        loader.style.opacity = "1";
        setTimeout(() => {
            loader.remove();
            verified.style.opacity = "1";
        }, 1900);
        });
        twitter.addEventListener("click",()=>{
        login.style.opacity = "0";
        loader.style.opacity = "1";
        setTimeout(() => {
            loader.remove();
            verified.style.opacity = "1";
        }, 1900);
        });
}









