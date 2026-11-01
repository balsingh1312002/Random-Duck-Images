const duckImg=document.getElementById("duckImg");
const btn=document.getElementById("btn");
const savedDuck=localStorage.getItem("duckImage");
function randomDuck(){
    duckImg.src="https://random-d.uk/api/randomimg?t=" + Date.now();
}

btn.addEventListener("click", randomDuck);
