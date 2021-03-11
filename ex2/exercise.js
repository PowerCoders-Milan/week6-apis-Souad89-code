fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=a38f1a073f4588f03125436c77238d34')  
    .then(response => response.json()) 
    .then(data => {
        let body = document.querySelector('body');
        let p = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        body.appendChild(p);
        p.appendChild(p1);
        p.appendChild(p2);
        p.appendChild(p3);
        p1.innerHTML= `The name of the city: ${data.name}`
        p2.innerHTML= `The temperature : ${data.main.temp}°`
        p3.innerHTML= `The weather : ${data.weather[0].main}`
        console.log(data);
    })

   