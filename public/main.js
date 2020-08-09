let input = document.querySelector("input")
let button = document.querySelector("button")
let img = document.querySelector("img")




button.addEventListener("click",() => {
    button.disabled = true
    let value = Array.from(input.value.toUpperCase())
    let i = 0
    let interval = setInterval(() => {
        if(i < value.length){
            img.src = "StrangerThingsPhotos/" + value[i] + ".jpg"
            i++
            console.log(i)
        } else {
            i = 0;
            button.disabled = false
        }      
    }, 1000)
    setTimeout(() => {
        clearInterval(interval);
        img.src = "StrangerThingsPhotos/default.jpg"
    }, (value.length * 1000) + 1000)
})