var visibility = false
var input = document.getElementById('search-box')
var label = document.getElementById('ilabel')
var menu = document.getElementById('icon-menu')
var options = document.getElementById('options')
var titleCategories = document.getElementById('title-categories')
var categories = document.getElementById('box-categories')

function reveal(clicked, target){
    if(visibility){
        if(clicked === label || clicked === menu){
            target.style.display = 'none'
            clicked.style.backgroundColor = 'transparent'
            clicked.style.color = 'white'
            clicked.style.borderRadius = '0'
            visibility = false
        }
        if(clicked === menu){
            clicked.style.transform = 'rotate(0)'
            clicked.style.padding = '5px 10px'
        }
        if(clicked === label){
            label.innerText = 'search'
        }
        if(clicked === titleCategories){
            clicked.style.backgroundColor = 'transparent'
            target.style.display = 'none'
            visibility = false
        }
    }
    else{
        if(clicked === label || clicked === menu){
            clicked.style.backgroundColor = 'transparent'
            clicked.style.color = 'black'
            clicked.style.backgroundColor = '#31465f'
            target.style.display = 'block'
            visibility = true
        }
        
        if(clicked === menu){
            clicked.style.transform = 'rotate(270deg)'
        }
        if(clicked === label){
            label.innerText = 'search_off'
        }
        if(clicked === titleCategories){
            clicked.style.backgroundColor = '#465f7a'
            target.style.display = 'block'
            visibility = true
        }
    }
}

function mouseEnter(target){
    if(visibility === false){
        if(target === label || target == menu){
            target.style.backgroundColor = 'white'
            target.style.cursor = 'pointer'
            target.style.color = 'black'
            target.style.borderRadius = '5px'
        }
        if(target === titleCategories){
            target.style.cursor = 'pointer'
        }
    }
    
}

function mouseOut(target){
    if(visibility === false){
        if(target === label || target == menu){
            target.style.backgroundColor = 'transparent'
            target.style.color = 'white'
            target.style.borderRadius = '0'
        }
        
    }
}
