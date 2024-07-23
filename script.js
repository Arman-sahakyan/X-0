'use strict';

const top_left = document.querySelector('.topLeft');
const top_middle = document.querySelector('.topMiddle');
const top_right = document.querySelector('.topRight');
const middle_left = document.querySelector('.middleLeft');
const middle_right = document.querySelector('.middleRight');
const middle_middle = document.querySelector('.middleMiddle');
const bottom_left = document.querySelector('.bottomLeft');
const bottom_middle = document.querySelector('.bottomMiddle');
const bottom_right = document.querySelector('.bottomRight');

const middleXLine = document.querySelector('.middleXLine')
const topXLine=document.querySelector('.topXLine')
const bottomXLine = document.querySelector('.bottomXLine')
const leftYLine = document.querySelector('.leftYLine')
const middleYLine = document.querySelector('.middleYLine')
const rightYLine = document.querySelector('.rightYLine')
const leftZLine = document.querySelector('.leftZLine')
const rightZLine = document.querySelector('.rightZLine')

const boxArray = document.querySelector('.game')

let color = 'rgb(255, 0, 200)'

let value = 'x'

let result = false

function handleClick(e){
    if ((!e.target.innerHTML.length||e.target.innerHTML === ' ') && !victory()){
        e.target.innerHTML = value
        if(value==='x'){
            color = 'rgb(255, 0, 200)'
        }else{
            color = 'rgb(0, 200, 255)'
        }
        e.target.style.color = color
        if (victory()){
            setTimeout(()=> {
                alert(result?'nichya':value + ' win')
                top_left.innerHTML = ' '
                top_middle.innerHTML = ''
                top_right.innerHTML = ''
                middle_left.innerHTML = ''
                middle_right.innerHTML = ' '
                middle_middle.innerHTML = ' '
                bottom_left.innerHTML = ''
                bottom_middle.innerHTML = ' '
                bottom_right.innerHTML = ''

                middleXLine.style.cssText=`width: 0 !important;  visibility: hidden;`
                topXLine.style.cssText=`width: 0 !important; visibility: hidden;`
                bottomXLine.style.cssText=`width: 0 !important; visibility: hidden;`
                leftYLine.style.cssText=`height: 0 !important; visibility: hidden;`
                middleYLine.style.cssText=`height: 0 !important; visibility: hidden;`
                rightYLine.style.cssText=`height: 0 !important; visibility: hidden;`
                leftZLine.style.cssText=`height: 0 !important; visibility: hidden;`
                rightZLine.style.cssText=`height: 0 !important; visibility: hidden;`
            },2000)
            
        }else{
            value = value==='x'?'0':'x'
        }
        
    }
}
function victory(){
    result = false
    if(middle_left.innerHTML === middle_middle.innerHTML && middle_left.innerHTML===middle_right.innerHTML){
        middleXLine.style.cssText=`width: 100% !important; visibility: visible; background: ${color};`
        return true
    }else if(top_right.innerHTML === top_middle.innerHTML && top_right.innerHTML===top_left.innerHTML){
        topXLine.style.cssText=`width: 100% !important;  visibility: visible; background-color: ${color} ;`
        return true
    }else if(bottom_right.innerHTML === bottom_middle.innerHTML && bottom_right.innerHTML===bottom_left.innerHTML){
        bottomXLine.style.cssText=`width: 100% !important;  visibility: visible; background-color: ${color};`
        return true
    }else if(middle_left.innerHTML === top_left.innerHTML && middle_left.innerHTML === bottom_left.innerHTML){
        leftYLine.style.cssText=`height: 100% !important;  visibility: visible; background-color: ${color};`
        return true
    }else if(middle_middle.innerHTML === top_middle.innerHTML && middle_middle.innerHTML===bottom_middle.innerHTML){
        middleYLine.style.cssText=`height: 100% !important;  visibility: visible; background-color: ${color};`
        return true
    }else if(middle_right.innerHTML === top_right.innerHTML && middle_right.innerHTML === bottom_right.innerHTML){
        rightYLine.style.cssText=`height: 100% !important;  visibility: visible; background-color: ${color} ;`
        return true
    }else if(top_left.innerHTML === middle_middle.innerHTML && middle_middle.innerHTML === bottom_right.innerHTML){
        leftZLine.style.cssText=`height: 140% !important;  visibility: visible; background-color: ${color};`
        return true
    }else if(top_right.innerHTML === middle_middle.innerHTML && middle_middle.innerHTML === bottom_left.innerHTML){
        rightZLine.style.cssText=`height: 140% !important;  visibility: visible; background-color: ${color};`
        return true
    }
    for(let i = 0; i < boxArray.children.length; i++){
        console.log(boxArray);
        if(boxArray.children[i].innerHTML=='x'||boxArray.children[i].innerHTML=='0'){
            
            result = true
        }else{
            result = false
            break
        }
    }
    console.log(result);
    return result
}
