/*fetch('http://www.omdbapi.com/?t=harry+potter&apikey=6dc46c0a')  
    .then(response => response.json()) 
    .then(data => {
        let body = document.querySelector('body');
        let p = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        body.appendChild(p);
        p.appendChild(p1);
        p.appendChild(p2);
        p1.innerHTML= `The title of the movie: ${data.Title}`
        p2.innerHTML= `The year of Release : ${data.Year}`
        console.log(data);
        let image = document.createElement('img')
        image.setAttribute('src', data.Poster)
        body.appendChild(image);        
    })*/

fetch('http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7')  
    .then(response => response.json()) 
    .then(data => data.search.forEach(element => {
            let body = document.querySelector('body');
            let p = document.createElement('div');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            body.appendChild(p);
            p.appendChild(p1);
            p.appendChild(p2);
            p1.innerHTML= `The title of the movie: ${element.Title}`
            p2.innerHTML= `The year of Release : ${element.Year}`
            console.log(p1);
            console.log(p2);
            let image = document.createElement('img')
            image.setAttribute('src', element.Poster)
            body.appendChild(image);
        }));