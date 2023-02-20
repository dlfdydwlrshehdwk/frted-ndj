
window.addEventListener('DOMContentLoaded', 함수구역);


function 함수구역(){
    const myvid = document.querySelector("#myvid");
    myvid.addEventListener("timeupdate",check);

    function check(){
        if(myvid.paused){
            location.href="index.html";
        }
    }
}