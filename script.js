
const buttons = document.querySelectorAll('.button');
const bodys = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target.id);
        if(event.target.id == "red"){
            bodys.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "green"){
            bodys.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "blue"){
            bodys.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "black"){
            bodys.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "purple"){
            bodys.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "orange"){
            bodys.style.backgroundColor = event.target.id;
        }
        if(event.target.id == "yellow"){
            bodys.style.backgroundColor = event.target.id;
        }if(event.target.id == "pink"){
            bodys.style.backgroundColor = event.target.id;
        }if(event.target.id == "brown"){
            bodys.style.backgroundColor = event.target.id;
        }
    })
})
