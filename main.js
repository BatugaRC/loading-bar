const counterEl = document.querySelector(".counter")
const barEl = document.querySelector(".loading-bar-front")
const restartBtn = document.getElementById("restartButton")

let idx = 0;


updateNum()


function updateNum(){
    counterEl.innerHTML = idx + "%"
    barEl.style.width = idx + "%"
    idx++
    if (idx <101) {
        setTimeout(updateNum, 17)
    }
    if (idx === 100) {
        restartBtn.classList.remove("hide");
    }
}
function restartBar() {
    location.reload()
}
