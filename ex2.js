const { ERRORS } = require('./constants');

function languagesAnalytics(countries, mostCommonLang = 'de') {
    if (!Array.isArray(countries)) {
        throw new TypeError(ERRORS.INVALID_DATA);
    }

    const mostOfficialLang = { country: '', languages: 0};
    const allOfficialLanguages = new Set();
    const highestLangCountry = { country: '', languages: 0};
    const languages = {};
    const mostOfficialLanguages = [];

    for (const country of countries) {

        // Subtask #2
        if (country.languages.includes(mostCommonLang) && country.languages.length > mostOfficialLang.languages) {
            mostOfficialLang.country = country.country;
            mostOfficialLang.languages = country.languages;
        }

        // Subtask #3
        country.languages.forEach( lang => {
            allOfficialLanguages.add(lang);
        });

        // Subtask #4
        if (country.languages.length > highestLangCountry.languages) {
            highestLangCountry.country = country.country;
            highestLangCountry.languages = country.languages.length;
        }

        //Subtask #5
        country.languages.forEach( lang => {
            if (!languages[lang]) {
                languages[lang] = 1;
            } else {
                languages[lang] += 1;
            }
        });
    }

    const maxValue = Math.max.apply(null, Object.values(languages));


    for (const lang in languages ) {
        if (languages.hasOwnProperty(lang) && languages[lang] === maxValue) {
            mostOfficialLanguages.push(lang);
        }
    }

    return {
        numberCountries : countries.length,
        mostOfficialLangCountries: mostOfficialLang.country,
        allOfficialLanguages: allOfficialLanguages.size,
        highestLangCountry: highestLangCountry.country,
        mostOfficialLanguages: mostOfficialLanguages
    }
}

module.exports = languagesAnalytics;