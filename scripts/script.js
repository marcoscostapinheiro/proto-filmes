var visibility = false
var input = document.getElementById('isearch')
var label = document.getElementById('ilabel')
var menu = document.getElementById('icon-menu')
var options = document.getElementById('options')

function reveal(clicked, target){
    if(visibility){
        target.style.display = 'none'
        clicked.style.backgroundColor = 'black'
        clicked.style.color = 'white'
        clicked.style.borderRadius = '0'
        visibility = false
    }
    else{
        clicked.style.borderRadius = '50% 50% 0 0'
        clicked.style.backgroundColor = 'white'
        clicked.style.color = 'black'
        target.style.display = 'block'
        visibility = true
    }
}

label.addEventListener("mouseenter", () => {
    if(visibility === false){
        label.style.backgroundColor = 'white'
        label.style.cursor = 'pointer'
        label.style.color = 'black'
        label.style.borderRadius = '50%'
    }
})

label.addEventListener("mouseout", () => {
    if(visibility === false){
        label.style.backgroundColor = 'black'
        label.style.color = 'white'
        label.style.borderRadius = '0'
    }
})

menu.addEventListener("click", () => {

})
