import persons from "../../Assets/person.json";

const people = persons;

const allCountryNamesCleaned = people.map((person) => {
  return (
    person.location.country
      ?.replace(/ *\([^)]*\) */g, "")
      .replace(/[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+/g, "")
      .replace(/  +/g, " ")
      .trim()
  );
});

const allCountryNamesFixedToMatchAPINames = allCountryNamesCleaned.map(
  (country) => {
    switch (country) {
      case "US":
        return "United States";
      case "USA":
        return "United States";
      case "United States":
        return "United States";
      case "United States Of America":
        return "United States";
      case "UAE":
        return "United Arab Emirates";
      case "UK":
        return "United Kingdom";
      case "INDIA":
        return "India";
      case "IN":
        return "India";
      case "RU":
        return "Russian Federation";
      case "Russia":
        return "Russian Federation";
      case "CH":
        return "China";
      case "Perú":
        return "Peru";
      case "SriLanka":
        return "Sri Lanka";
      case "NIGERIA":
        return "Nigeria";
      default:
        return country;
    }
  }
);

function removeDuplicateCountryNames(countryArrayWithDuplicateValues) {
  let deduplicatedCountries = countryArrayWithDuplicateValues.reduce(
    (prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1;
      return prev;
    },
    {}
  );

  return deduplicatedCountries;
}

export const countriesWithNumOfDevsObj = removeDuplicateCountryNames(
  allCountryNamesFixedToMatchAPINames
);
