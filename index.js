const btns = document.querySelectorAll('.btn')
// console.log(btn);

const body =document.querySelector("body")

btns.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(eventbg){
        console.log(eventbg);
        console.log(eventbg.target);
        
        if(eventbg.target.id ==='grey'){
            body.style.backgroundColor = 'grey'
        }
        if(eventbg.target.id === 'red'){
            body.style.backgroundColor = eventbg.target.id
        }
        if(eventbg.target.id === 'blue'){
            body.style.backgroundColor = eventbg.target.id
        }
        if(eventbg.target.id === 'green'){
            body.style.backgroundColor = eventbg.target.id
        }
        if(eventbg.target.id === 'yellow'){
            body.style.backgroundColor = eventbg.target.id
        }
       
    })
    
})