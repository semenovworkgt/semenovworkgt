//requirements for coffee cups
const input = require('sync-input');
let dots = input("Write how many cups of coffee you will need:\n");
console.log("For " + dots + " cups of coffee you will need:");
console.log((dots * 200) + " ml of water");
console.log((dots * 50) + " ml of milk");
console.log((dots * 15) + " g of coffee beans");

// how many cups needed
let waterFirst = Number(input('Write how many ml of water the coffee machine has: '));
let milkFirst = Number(input('Write how many ml of milk the coffee machine has: '));
let beansFirst = Number(input('Write how many grams of coffee beans the coffee machine has: '));
let amountFirst = Number(input('Write how many cups of coffee you will need: '));

max_cups = Math.floor(Math.min(waterFirst / 200, milkFirst / 50, beansFirst / 15));
if (max_cups > amount) {
    console.log('Yes, I can make that amount of coffee (and even ' + (max_cups - amount) + ' more than that)');
} else if (max_cups === amount) {
    console.log('Yes, I can make that amount of coffee')
} else {
    console.log('No, I can make only ' + max_cups + ' cups of coffee')
}

//start values
let money = 550;
let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;

// display start values
function currentState() {
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
$${money} of money
`);
};

//function buy
function buy() {
    let choice = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ');
    
    switch (choice) {
        case "1":
            if ((water >= 250) && (beans >= 16) && (cups => 1)) {
                console.log("I have enough resources, making you a coffee!");
                water -= 250;
                beans -= 16;
                cups--;
                money += 4;
            } else if (water < 250) {
                console.log("Sorry, not enough water!");
            } else if (beans < 16) {
                console.log("Sorry, not enough beans!");
            } else if (cups < 1) {
                console.log("Sorry, not enough cups!");
            };
            /*
                if (water < 250) {
                } else if (beans < 16) {
                    console.log("Sorry, not enough beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                };
                */
            break;
        case "2":
            if ((water >= 350) && (milk >= 75) && (beans >= 20) && (cups => 1)) {
                console.log("I have enough resources, making you a coffee!");
                water -= 350;
                milk -= 75;
                beans -= 20;
                cups--;
                money += 7;
            } else if (water < 350) {
                console.log("Sorry, not enough water!");
            } else if (milk < 75) {
                console.log("Sorry, not enough milk!");
            } else if (beans < 20) {
                console.log("Sorry, not enough beans!");
            } else if (cups < 1) {
                console.log("Sorry, not enough cups!");
            };
            break;
                /*
                if (water < 350) {
                    console.log("Sorry, not enough water!");
                } else if (milk < 75) {
                    console.log("Sorry, not enough milk!");
                } else if (beans < 20) {
                    console.log("Sorry, not enough beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                } */
        case "3":
            if ((water >= 250) && (milk >= 100) && (beans >= 12) && (cups => 1)) {
                console.log("I have enough resources, making you a coffee!");
                water -= 200;
                milk -= 100;
                beans -= 12;
                cups--;
                money += 6;
            } else {
                if (water < 250) {
                    console.log("Sorry, not enough water!");
                } else if (milk < 100) {
                    console.log("Sorry, not enough milk!");
                } else if (beans < 12) {
                    console.log("Sorry, not enough beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            };
            break;
        case "back":
            break;
    };
        
    return water, milk, beans, cups, money;
};

//function fill
function fill() {
    let amountWater = Number(input('Write how many ml of water you want to add: '));
    let amountMilk = Number(input('Write how many ml of milk you want to add: '));
    let amountBeans = Number(input('Write how many grams of coffee beans you want to add: '));
    let amountCups = Number(input('Write how many disposable coffee cups you want to add: '));
            
    water += amountWater;
    milk += amountMilk;
    beans += amountBeans;
    cups += amountCups;
        
    return water, milk, beans, cups;
};

//function take
function take() {
    console.log(`I gave you $${money}`);
    money = 0;
        
    return money;
};

//main mechanism
let chooseAction = input(`Write action (buy, fill, take, remaining, exit): `);

while (chooseAction !== "exit") {

    switch (chooseAction) {
        case "remaining":
            currentState();
            break;
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "exit":
            break;
    };
    
    chooseAction = input(`Write action (buy, fill, take, remaining, exit): `);
}