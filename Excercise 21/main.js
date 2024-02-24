var countriesInfo = [
    {
        country: "France",
        cities: ["Paris", "Marseille", "Lyon"],
        languages: ["French"],
        landmarks: ["Eiffel Tower", "Louvre Museum"]
    },
    {
        country: "Japan",
        cities: ["Tokyo", "Kyoto", "Osaka"],
        languages: ["Japanese"],
        landmarks: ["Mount Fuji", "Tokyo Tower"]
    },
    {
        country: "Italy",
        cities: ["Rome", "Venice", "Florence"],
        languages: ["Italian"],
        landmarks: ["Colosseum", "Leaning Tower of Pisa"]
    }
];
countriesInfo.forEach(function (countryInfo) {
    console.log("Country:", countryInfo.country);
    console.log("Cities:", countryInfo.cities.join(", "));
    console.log("Languages:", countryInfo.languages.join(", "));
    console.log("Landmarks: ".concat(countryInfo.landmarks.join(", "), "\n"));
});
