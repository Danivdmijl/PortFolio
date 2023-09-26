const updateTime = () => {
    const today = new Date();
    document.querySelector("#js--time").textContent = `${today.getHours()}:${today.getMinutes()}`;
  };
  
  const updateTimeInterval = setInterval(() => updateTime(), 1000);

const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;


startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 1000);
}


stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function(){
    seconds = 0;
    minutes = 0;

    secondsTimer.innerText = seconds;
    minutesTimer.innerText = minutes;
};


/* Code Charts*/

const response = await fetch("data.json");
const responseData = await response.json();

const data = {
  labels: responseData.map(({ label }) => label),
  datasets: [
    {
      label: "Most played consoles in hours",
      data: responseData.map(({ data }) => data),
      backgroundColor: responseData.map(({ color }) => `#${color}`)
    }
  ]
};

const chart = [...document.querySelectorAll(".chart canvas")].map(
  (el) => new Chart(el, { type: el.dataset.type, data })
);


//Niet meer aan de code hierboven komen

const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 897 + 1);


console.log(randomNumber)


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage.src = realData.sprites.front_default;
    Pokemontype1 = realData.types[0].type.name;
    console.log(Pokemontype1);
});



const pokemonImage1 = document.getElementById("js--pokemon-image1");
let randomNumber1 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber1)


let pokemon1 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber1)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage1.src = realData.sprites.front_default;
});


const pokemonImage2 = document.getElementById("js--pokemon-image2");
let randomNumber2 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber2)


let pokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber2)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage2.src = realData.sprites.front_default;
});


const pokemonImage3 = document.getElementById("js--pokemon-image3");
let randomNumber3 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber3)


let pokemon3 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber3)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage3.src = realData.sprites.front_default;
});


const pokemonImage4 = document.getElementById("js--pokemon-image4");
let randomNumber4 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber4)


let pokemon4 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber4)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage4.src = realData.sprites.front_default;
});


const pokemonImage5 = document.getElementById("js--pokemon-image5");
let randomNumber5 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber5)


let pokemon5 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber5)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage5.src = realData.sprites.front_default;
});


const pokemonImage6 = document.getElementById("js--pokemon-image6");
let randomNumber6 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber6)


let pokemon6 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber6)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage6.src = realData.sprites.front_default;
});


const pokemonImage7 = document.getElementById("js--pokemon-image7");
let randomNumber7 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber7)


let pokemon7 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber7)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage7.src = realData.sprites.front_default;
});


const pokemonImage8 = document.getElementById("js--pokemon-image8");
let randomNumber8 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber8)


let pokemon8 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber8)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage8.src = realData.sprites.front_default;
});

const pokemonImage9 = document.getElementById("js--pokemon-image9");
let randomNumber9 = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber9)


let pokemon9 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber9)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage9.src = realData.sprites.front_default;
});



// Pokemon types chart

// const ptagtest = document.getElementById("kaas");
// let randomNumber10 = Math.floor(Math.random() * 897 + 1);

// let pokemon10 = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber10)
// .then(function(response){
//     return response.json();
// })
// .then(function(realData){
//     console.log(realData);
//     ptagtest.innerHTML = realData.types.type.name;
//     console.log()
// });




const labels2 = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Flying',
    'Fighting',
    'Poison',
    'Electric',
    'Ground',
    'Rock',
    'Psychic',
    'Ice',
    'Bug',
    'Ghost',
    'Steel',
    'Dragon',
    'Dark',
    'Fairy',
  ];

  const data2 = {
    labels: labels2,
    datasets: [{
      label: 'Pokemon Types',
      backgroundColor: '#6BCB77',
      borderColor: '#6BCB77',
      data: [10, 10, 10, 10, 10, 10, 10],
    }]
  };

  const config = {
    type: 'line',
    data: data2,
    options: {}
};
  
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
  );