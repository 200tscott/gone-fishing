const prompt = require("prompt-sync")();

let fish = ([
    {name: 'Ghanaian tilapia ', weight: 0.43, money: 3.47},
    {name: 'Chilean sea bass', weight: 4.23, money: 20.17},
    {name: 'Giant Rainbow fish', weight: 0.11, money: 3.87},
    {name: 'Silver spotted Clownfish', weight: 0.82, money: 1.24},
    {name: 'Royal blue Tang ', weight: 1.43, money: .99},
]);
let stats = {
    fishCount: 0,
    fishWeight: 0,
    fishMoney: 0
}

let caught = [];
let random = Math.floor(Math.random() * fish.length);
let fishing = fish[random];

let time = 6



console.log(' ');
console.log('Cast your line!');
console.log('Our hours are from 6am-12pm (you can catch no more than 10lbs)');
console.log(' ');





while (time < 12) {

    console.log(' ');
    console.log('===============================================================');
    console.log(' ');
    console.log(`The time is ${time}:00 am. So far you've caught:`);
    console.log(`${stats.fishCount} fish, ${stats.fishWeight} lbs, $${stats.fishMoney}`);
    console.log(' ');
    console.log('===============================================================');
    console.log(' ');
    random = Math.floor(Math.random() * fish.length);
    fishing = fish[random];
    console.log(' ');
    console.log('You\'ve caught a:');
    console.log(`${fishing.name}, ${fishing.weight} lbs, $${fishing.money}`)
    time += 1;
    console.log(' ');
    console.log('Your action: [c]atch or [r]elease?');
    console.log(' ');
    let action = prompt();

    if (action == 'c') {
        caught.push(fishing);

        for (let update in caught) {
            stats.fishCount = caught.length;
            stats.fishWeight += caught[update].weight;
            stats.fishMoney += caught[update].money;
        }
    }

    if (action == 'r') {
        console.log(' ');
        console.log('You chose to release the fish');
    }



}


    console.log(' ');
    console.log('The time is 12:00pm. Times up!');
    console.log(' ');
    console.log(`You caught ${stats.fishCount} fish:`);
    console.log('------------------------------------');
    console.log(' ');
    for (i = 0; i < caught.length; i++) {
            console.log('[' + [i + 1]+ '] ' + caught[i].name + ', ' + caught[i].weight + ' lbs' + ', $' + caught[i].money)
        } 
    console.log(' ');
