
const countryEx = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countryDetale(data))
}


const countryDetale = mainData => {
    const divContainer = document.getElementById('country-container');
    mainData.forEach(main => {
        console.log(main);
        const div = document.createElement('div');
        div.innerHTML = `
         <h1>All Country </h1>
         <h3>Country Name: ${main.capital}</h3>
        `;
        divContainer.appendChild(div)
    })
}

countryEx();