//Solving the problems using array functions on rest countries data

//First fetch the data from the link
fetch('https://restcountries.com/v3.1/all')
.then((res) => res.json())
.then((data) => {
    //a. Get all the countries from Asia continent/region using the filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Asia Continent Countries : ', asiaCountries);

    //b. Get all the countries with a population of less than 2 lakhs using filter function
    const lessPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with Less than 2 lakhs Population: ', lessPopulationCountries);

    //c. Print the following details name, capital, flag using forEach function
    data.forEach(country => {
        console.log('Name: ', country.name.common);
        console.log('Capital: ', country.capital);
        console.log('Flag: ', country.flags.svg );
        console.log();
    });

    //d. Print the total population of countries using reduce function
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log('Total Population: ', totalPopulation);

    //e. Print all the country which uses US Dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD);
    console.log('Country with USD as Currency:', countryWithUSD);
});