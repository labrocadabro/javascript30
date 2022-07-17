function fillData() {
    const search = this.value;
    const ul = document.querySelector('.suggestions');
    if (search !== "") {
        // cleaned this up
        const regex = new RegExp(search, "gi");
        let data = cities.filter(city => city.city.match(regex) || city.state.match(regex));
        // changed from ul.appendChild to ul.innerHTML and the speed increased dramatically!
        const html = data.map(city => {
            // tried to use search before, thought it didn't work but it seems to be fine, must have changed something else along the way
            let name = city.city.replace(regex, `<span class="hl">${search}</span>`);
            let state = city.state.replace(regex, `<span class="hl">${search}</span>`);
            return `<li><span class='left'>${name}, ${state}</span><span class='right'>${Number(city.population).toLocaleString()}</span></li>`;
        }).join('');
        ul.innerHTML = html;
    } else {
        ul.innerHTML = "<li>Filter for a city</li><li> or a state</li>";
    }

}

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // cleaned this up
        cities = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const input = document.querySelector('input');

// cleaned this up
input.addEventListener('keyup', fillData);