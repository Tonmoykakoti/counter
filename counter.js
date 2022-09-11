const heading2 = document.querySelector('.heading2')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const decrease = document.querySelector('.decrease')
let data = 0

increase.addEventListener('click',function(){
    if(data > 0){
        heading2.style.color = 'green'
    }
    data = data + 1;
    heading2.innerText = data
})
decrease.addEventListener('click',function(){
    if( data < 0){
        heading2.style.color = 'red'
    }
    data = data - 1;
    heading2.innerText = data

})
reset.addEventListener('click',function(){
    if( data === 0){
        heading2.style.color = 'black'
    }
    data = 0;
    heading2.innerText = data
})