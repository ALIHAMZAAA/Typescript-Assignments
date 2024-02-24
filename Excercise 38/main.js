// Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var describeCity = function (city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    if (city !== 'Paris') {
        console.log("".concat(city, " is in ").concat(country, "."));
    }
    else {
        console.log("".concat(city, " is not in ").concat(country, "."));
    }
};
describeCity('Karachi');
describeCity('Paris');
describeCity('Lahore');
