const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const input = document.querySelector('input');
        input.addEventListener('keyup', (e) => fillData(data, input));
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function fillData(data, input) {
    const search = input.value;
    const ul = document.querySelector('.suggestions');
    if (search !== "") {
        data = data.filter(city => city.city.toLowerCase().includes(search.toLowerCase()) || city.state.toLowerCase().includes(search.toLowerCase()));
        console.table(data);
        ul.innerHTML = "";
        for (city of data) {
            let li = document.createElement('li');
            let regex = new RegExp(`(${search})`, "gi");
            let name = city.city.replace(regex, '<span class="hl">$1</span>');
            let state = city.state.replace(regex, '<span class="hl">$1</span>');
            li.innerHTML = `<span class='left'>${name}, ${state}</span><span class='right'>${Number(city.population).toLocaleString()}</span>`;
            ul.appendChild(li);
        }
    } else {
        ul.innerHTML = "<li>Filter for a city</li><li> or a state</li>";
    }

}