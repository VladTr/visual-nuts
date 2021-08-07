const { MESSAGES, ERRORS, MAX_VALUE }  = require('./constants');

function isNuts(num) {
    return num % 5 === 0;
}

function isVisual(num) {
    return num % 3 === 0;
}

function isVisualNuts(num) {
    return num % 3 === 0 && num % 5 === 0;
}

function handleNum(num) {
    let result;
    switch (true) {
        case isVisualNuts(num):
            result = MESSAGES.VISUAL_NUTS;
            break;
        case isVisual(num):
            result = MESSAGES.VISUAL;
            break;
        case isNuts(num):
            result = MESSAGES.NUTS;
            break;
        default:
            result = num;
    }

    return result;
}


function main(maxNum) {

    if (maxNum >= MAX_VALUE) {
        throw new Error(ERRORS.EXCEED_MAX_NUM)
    }

    /*Todo add range error exception & type exception*/

    for(let i = 0; i < maxNum; i++) {
        console.log(handleNum(i));
    }
}

module.exports = {
    isNuts,
    isVisual,
    isVisualNuts,
    handleNum,
    main
};