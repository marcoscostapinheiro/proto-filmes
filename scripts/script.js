var visibility = false
const input = document.getElementById('search-box')
const label = document.getElementById('ilabel')
const menu = document.getElementById('icon-menu')
const options = document.getElementById('options')
const arrow = document.getElementById('arrow')
const boxCarousel = document.getElementById('box-carousel')
const teste = document.getElementsByClassName('teste')
var loaderClicked
var loaderActual
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

function Carousel(i, jump){
    let selected = document.getElementsByClassName('teste')
    teste[i].classList.add('selected')
    loaderActual = i

    if(loaderClicked !== undefined && loaderClicked !== loaderActual){
        teste[loaderClicked].classList.remove('selected')
    }

    if(i !== 4){
        setTimeout(function(){
            teste[i].classList.remove('selected')
            boxCarousel.style.marginLeft = `${jump}%`
            return Carousel(i + 1, jump - 100.2)
        }, 5000)
    }

    else{
        setTimeout(function(){
            teste[i].classList.remove('selected')
            boxCarousel.style.marginLeft = '0'
            return Carousel(0, - 100.2)
        }, 5000)
    }
}

function swapImage(target){
    if(target === 0){
        if(loaderClicked !== undefined){
            teste[loaderClicked].classList.remove('selected')
        }

        if(loaderActual !== undefined){
            teste[loaderActual].classList.remove('selected')
        }

        teste[target].classList.add('selected')
        boxCarousel.style.marginLeft = '0'
        loaderClicked = target
    }

    if(target === 1){
        if(loaderClicked !== undefined){
            teste[loaderClicked].classList.remove('selected')
        }

        if(loaderActual !== undefined){
            teste[loaderActual].classList.remove('selected')
        }
        
        teste[target].classList.add('selected')
        boxCarousel.style.marginLeft = '-100.2%'
        loaderClicked = target
    }

    if(target === 2){
        if(loaderClicked !== undefined){
            teste[loaderClicked].classList.remove('selected')
        }

        if(loaderActual !== undefined){
            teste[loaderActual].classList.remove('selected')
        }

        teste[target].classList.add('selected')
        boxCarousel.style.marginLeft = '-200.4%'
        loaderClicked = target
    }

    if(target === 3){
        if(loaderClicked !== undefined){
            teste[loaderClicked].classList.remove('selected')
        }

        if(loaderActual !== undefined){
            teste[loaderActual].classList.remove('selected')
        }

        teste[target].classList.add('selected')
        boxCarousel.style.marginLeft = '-300.6%'
        loaderClicked = target
    }

    if(target === 4){
        if(loaderClicked !== undefined){
            teste[loaderClicked].classList.remove('selected')
        }

        if(loaderActual !== undefined){
            teste[loaderActual].classList.remove('selected')
        }
        
        teste[target].classList.add('selected')
        boxCarousel.style.marginLeft = '-400.8%'
        loaderClicked = target
    }
}

Carousel(0, -100.2)



























