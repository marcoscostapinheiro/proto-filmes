var visibility = false
var input = document.getElementById('search-box')
var label = document.getElementById('ilabel')
var menu = document.getElementById('icon-menu')
var options = document.getElementById('options')

function reveal(clicked, target){
    if(visibility){
        target.style.display = 'none'
        clicked.style.backgroundColor = 'transparent'
        clicked.style.color = 'white'
        clicked.style.borderRadius = '0'
        visibility = false
        if(clicked === menu){
            clicked.style.transform = 'rotate(0)'
            clicked.style.padding = '5px 10px'
        }
        if(clicked === label){
            label.innerText = 'search'
        }
    }
    else{
        clicked.style.backgroundColor = 'transparent'
        clicked.style.color = 'black'
        clicked.style.backgroundColor = '#31465f'
        target.style.display = 'block'
        visibility = true
        if(clicked === menu){
            clicked.style.transform = 'rotate(270deg)'
        }
        if(clicked === label){
            label.innerText = 'search_off'
        }
    }
}

function mouseEnter(target){
    if(visibility === false){
        target.style.backgroundColor = 'white'
        target.style.cursor = 'pointer'
        target.style.color = 'black'
        target.style.borderRadius = '5px'
    }
    
}

function mouseOut(target){
    if(visibility === false){
        target.style.backgroundColor = 'transparent'
        target.style.color = 'white'
        target.style.borderRadius = '0'
    }
}
