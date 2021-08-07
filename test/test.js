const { MESSAGES, ERRORS }  = require('../constants');
const { isNuts, isVisual, isVisualNuts, handleNum, main } = require('../ex1');
const languagesAnalytics = require('../ex2');

const countriesData = require('../source');


describe('Exercise #1 visual nuts test', () => {
    test('test isNuts function', () => {
        expect(isNuts(25)).toBeTruthy();
    });

    test('test isVisual function', () => {
        expect(isVisual(9)).toBeTruthy();
    });

    test('test isVisualNuts function', () => {
        expect(isVisualNuts(15)).toBeTruthy();
    });

    test('test handleNum function', () => {
        expect(handleNum(33)).toBe(MESSAGES.VISUAL);
        expect(handleNum(55)).toBe(MESSAGES.NUTS);
        expect(handleNum(75)).toBe(MESSAGES.VISUAL_NUTS);
        expect(handleNum(7)).toBe(7);
    });

    test('test throw exception', () => {
        expect(() => {main(1600)}).toThrow(ERRORS.EXCEED_MAX_NUM);
    });

    /*
    test('test mail function', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        const maxNum = 15;
        main(maxNum);

        for( let i = 0; i < maxNum; i++) {

            let message = i;

            if (i % 3 === 0) {
                message = MESSAGES.NUTS;
            }

            if (i % 5 === 0) {
                message = MESSAGES.VISUAL;
            }

            if (i % 5 === 0 && i % 3 === 0) {
                message = MESSAGES.VISUAL_NUTS;
            }

            expect(consoleSpy).toHaveBeenCalledWith(message);
        }

    });

     */
});

describe('Exercise #2 languages analytics', () => {
    test('test languagesAnalytics function', () => {
        expect(languagesAnalytics(countriesData)).toMatchObject({
                numberCountries: 5,
                mostOfficialLangCountries: 'BE',
                allOfficialLanguages: 6,
                highestLangCountry: 'BE',
                mostOfficialLanguages: [ 'nl', 'de' ]
            }
        )
    });

    test('test invalid input data', () => {
        expect(() => {
            languagesAnalytics({}).toThrow(ERRORS.INVALID_DATA)
        });
    });

});