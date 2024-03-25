let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');

btn1.addEventListener('click', function() {
    btn2.style.backgroundColor = 'grey';
    btn1.style.backgroundColor = 'rgb(255, 196, 0)';
    btn3.style.backgroundColor = 'grey';
})

btn2.addEventListener('click', function() {
    btn1.style.backgroundColor = 'grey';
    btn2.style.backgroundColor = 'rgb(255, 196, 0)';
    btn3.style.backgroundColor = 'grey';
})

btn3.addEventListener('click', function() {
    btn1.style.backgroundColor = 'grey';
    btn3.style.backgroundColor = 'rgb(255, 196, 0)';
    btn2.style.backgroundColor = 'grey';
})
