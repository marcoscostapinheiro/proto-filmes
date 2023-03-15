var visibility = false
var input = document.getElementById('search-box')
var label = document.getElementById('ilabel')
var menu = document.getElementById('icon-menu')
var options = document.getElementById('options')
var arrow = document.getElementById('arrow')
var sum = [0, 0, 0, 0, 0, 0, 0]

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
            clicked.innerText = 'menu'
        }
        if(clicked === label){
            label.innerText = 'search'
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
            clicked.innerText = 'close'
        }
        
        if(clicked === label){
            label.innerText = 'search_off'
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

function swapperBoxMovies(i, side){
    let target = document.getElementsByClassName('container-cards')[i]
    let arrowLeft = document.getElementsByClassName('arrow-left')[i]
    let arrowRight = document.getElementsByClassName('arrow-right')[i]

    if(side === 'left'){
        if(sum[i] === 1286){
            target.style.transform += 'translateX(210px)'
            sum[i] -= 210
        }
        else if(sum[i] > 0){
            target.style.transform += 'translateX(269px)'
            sum[i] -= 269
        }  
    }

    if(side === 'right'){
        if(sum[i] < 1076){
            target.style.transform += 'translateX(-269px)'
            sum[i] += 269
        }
        else if(sum[i] === 1076){
            target.style.transform += 'translateX(-210px)'
            sum[i] += 210
        }
        
    }

    if(sum[i] === 0){
        arrowLeft.style.color = 'rgb(88, 88, 88)'
    }
    else if(sum[i] > 0 && sum[i] < 1286){
        arrowLeft.style.color = 'white'
    }

    if(sum[i] >= 0 && sum[i] < 1286){
        arrowRight.style.color = 'white'
    }
    else if(sum[i] >= 1286){
        arrowRight.style.color = 'rgb(88, 88, 88)'
    }
}

























