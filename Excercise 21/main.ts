// Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type CountryInfo = {
    country: string;
    cities: string[];
    languages: string[];
    landmarks: string[];
}

let countriesInfo: CountryInfo[] = [
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
]

countriesInfo.forEach(countryInfo => {
    console.log("Country:", countryInfo.country);
    console.log("Cities:", countryInfo.cities.join(", "));
    console.log("Languages:", countryInfo.languages.join(", "));
    console.log(`Landmarks: ${countryInfo.landmarks.join(", ")}\n`);
})

