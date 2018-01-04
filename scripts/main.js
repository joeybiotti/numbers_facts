console.log('main.js loaded');

//vars
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let yearFact = document.querySelector('#yearFact');
let yearFactText = document.querySelector('#yearFactText');

//Event Listeners
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getYearFactFetch);

// AJAX Call for Number Facts
function getFactAjax(){
    let number = numberInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number);

    xhr.onload = function(){
        if(this.status == 200 && number != ' '){
            fact.style.display = 'block';
            factText.innerHTML = this.responseText;

        }
    }
    xhr.send();
}

// Fetch API for Number Facts
function getFactFetch(){
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+ number)
        .then((res) => res.text())
        .then(data => {
            if(number != ' '){
                fact.style.display = 'block';
                factText.innerHTML = data;
            }
        })
        .catch(err => console.log(err));
}

//AJAX Call for year fact
function getYearFactAjax(){
    let year = yearInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + year +'/year');

    xhr.onload = function(){
        if(this.status == 200 && year != ' '){
            console.log(this.responseText);
            yearFact.style.display = 'block';
            yearFactText.innerHTML = this.responseText;
        }
    }
    xhr.send();
}

//Fetch API for year fact

function getYearFactFetch(){

    let year = yearInput.value;

    fetch('http://numbersapi.com/' + year +'/year')
    .then((res) => res.text())
    .then(data => {
        if(year != ' '){
            yearFact.style.display = 'block';
            yearFactText.innerHTML = data;
        }
    })
    .catch(err => console.log(err));
}