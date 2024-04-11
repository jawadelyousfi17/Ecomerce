const path = require('path');
const fs = require('fs');



const englishData = require('./data/english.json')
const geolocationData = require('./data/geolocation.json')
const globalData = require('./data/global.json')
const shoppingData = require('./data/shopingData.json')
const imagesData = require('./data/images-path/general.json')
const productsImagesData = require('./data/images-path/products.json')

function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}




/**
 * Represents a Dummy class.
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nisl quis ligula malesuada, eget ullamcorper urna bibendum.
 * Integer lobortis orci non sapien fringilla malesuada. Duis in ex ut odio mattis volutpat a sed leo. Nunc egestas est nisi.
 */
class Dummy {
    /**
     * Generate random sentences without ponctuation
     * @param {number} stringLength 
     * @returns {string}
     */
    static string(stringLength = 1) {
        let dummyString = ''
        for (let index = 0; index < stringLength; index++) {
            dummyString += getRandomNumber(0, 10) > 2 ? getRandomItemFromArray(englishData.commonSubjects).toLowerCase() + ' ' : getRandomItemFromArray(globalData.names) + ' '
            dummyString += getRandomNumber(0, 10) > 4 ? getRandomItemFromArray(englishData.commonEnglishVerbs) + ' ' : getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishObjects) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomNumber(0, 10) > 8 ? getRandomItemFromArray(englishData.commonEnglishWords) : getRandomItemFromArray(englishData.commonEnglishObjects)
            dummyString += ''
        }
        return dummyString
    }
    /**
     * Generate random sentences with ponctuation
     * @param {number} stringLength 
     * @returns {string}
     */
    static stringWithPonctuation(stringLength = 1) {
        let dummyString = ''
        let ponctuationMark = ''
        for (let index = 0; index < stringLength; index++) {
            dummyString += getRandomNumber(0, 10) > 2 ? getRandomItemFromArray(englishData.commonSubjects).toLowerCase() + ' ' : getRandomItemFromArray(globalData.names) + ' '
            dummyString += getRandomNumber(0, 10) > 4 ? getRandomItemFromArray(englishData.commonEnglishVerbs) + ' ' : getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishObjects) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomNumber(0, 10) > 8 ? getRandomItemFromArray(englishData.commonEnglishWords) : getRandomItemFromArray(englishData.commonEnglishObjects)
            if (index != stringLength - 1) {
                dummyString += `${getRandomItemFromArray(englishData.commonPunctuation)} `
            }

        }
        return dummyString
    }

    /**
     * Generate random paragraphs
     * @param {number} paragraphLength - The number of paragraph , 1 paragraph by default
     * @returns {string}
     */
    static paragraph(paragraphLength = 1) {
        let dummyParagraph = ''
        for (let index = 0; index < paragraphLength; index++) {
            dummyParagraph += capitalizeFirstLetter(this.stringWithPonctuation(getRandomNumber(10, 20)))
            dummyParagraph += `.\n`
        }
        return dummyParagraph
    }
    static word = () => {
        const randomNumber = getRandomNumber(0, 7)
        if (randomNumber === 0) return getRandomItemFromArray(globalData.names)
        if (randomNumber === 1) return getRandomItemFromArray(englishData.commonAdjectives)
        if (randomNumber === 2) return getRandomItemFromArray(englishData.commonEnglishObjects)
        if (randomNumber === 3) return getRandomItemFromArray(englishData.commonSubjects)
        if (randomNumber === 4) return getRandomItemFromArray(englishData.commonEnglishWords)
        if (randomNumber === 5) return getRandomItemFromArray(geolocationData.countries)
        if (randomNumber === 6) return getRandomItemFromArray(geolocationData.cities)
        if (randomNumber === 7) return getRandomItemFromArray(shoppingData.productNames)
    }
    static subject = () =>
        getRandomItemFromArray(englishData.commonSubjects)
    static name = () =>
        getRandomItemFromArray(globalData.names)
    static object = () =>
        getRandomItemFromArray(englishData.commonEnglishObjects)
    static productName = () => getRandomItemFromArray(shoppingData.productNames)
    static country = () => getRandomItemFromArray(geolocationData.countries)
    static city = () => getRandomItemFromArray(geolocationData.cities)
    static image = () => `dummy/images/general/${getRandomItemFromArray(imagesData.images)}`
    static productsImage = () => `dummy/images/products/${getRandomItemFromArray(productsImagesData.images)}`
    static number = (min=0,max=10) => getRandomNumber(min,max)
}




module.exports = Dummy