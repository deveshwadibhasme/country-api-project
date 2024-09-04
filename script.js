const container = document.querySelector('.country-container')
fetch('data.json')
    .then((res) => res.json())
    .then((data) => data.forEach(country => {
        let countryCard = document.createElement('div')
        countryCard.classList.add('country-card')
        countryCard.innerHTML = `<div class="country-card">
        <div class="img-container">
            <img src="${country.flags.svg}" style="object-fit: cover;"alt="${(country.name).toLowerCase()}-flag" height=100% width=100%>
        </div>
            <div class="country-info">
                <h2 class="country-name">${country.name}</h2>
                <div class="more-info">
                    <h5 class="population">Population: <span class="value">${country.population}</span></h5>
                    <h5 class="region">Region: <span class="value">${country.region}</span></h5>
                    <h5 class="capital">Capital: <span class="value">${country.capital}</span></h5>
                </div>
            </div>
        </div>`
        container.appendChild(countryCard)
    })
    )

const ibutton = document.querySelector('#mode i')
const mode = document.querySelector('#mode')
const lightMode = document.querySelector('#mode-title #light')
const darkMode = document.querySelector('#mode-title #dark')
const header = document.querySelector('header')
const main = document.querySelector('main')

mode.addEventListener('click', () => {
    ibutton.classList.toggle('fa-moon')
    lightMode.toggleAttribute('hidden')
    darkMode.toggleAttribute('hidden')
    header.classList.toggle('header-light')
    main.classList.toggle('darkmode')
})
mode.addEventListener('touchdown', () => {
    ibutton.classList.toggle('fa-moon')
    lightMode.toggleAttribute('hidden')
    darkMode.toggleAttribute('hidden')
    header.classList.toggle('header-light')
    main.classList.toggle('darkmode')
})




