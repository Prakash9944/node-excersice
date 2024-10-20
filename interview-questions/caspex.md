'use strict';

const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'finestFoodOutlet' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING city
 *  2. INTEGER votes
 * API URL https://jsonmock.hackerrank.com/api/food_outlets?city={city}&page={page_no}
 */

async function finestFoodOutlet(city, votes) {
    var page_no = 1

    try {
        var url = `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page_no}`
        var result = await axios.get(url);
        var data = result.data.data
        var maxVotes = data.filter((element) => {
            return element.user_rating.votes >= votes
        });

        // var highRating = maxVotes.find((item) => {
        //     return item.user_rating.votes >= votes && item.user_rating.votes.average_rating > 4
        // });
        // console.log("highRating", highRating)
        var array = []
        maxVotes.forEach(function(item) {
            if (item.user_rating.average_rating >= 4.9) {
                // if (array.length ==)
            }
        })

        // console.log("maxVotes", maxVotes)
    }catch (err) {
        console.error("Error: ", err)
    }

}


async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const city = readLine();

    const votes = parseInt(readLine().trim(), 10);

    const result = await finestFoodOutlet(city, votes);

    ws.write(result + '\n');

    ws.end();
}