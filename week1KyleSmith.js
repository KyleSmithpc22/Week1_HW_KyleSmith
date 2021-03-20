// About me variables
var firstName = "Kyle";
var lastName = "Smith";
var middleInitial = 'J';
var ageInYears = 21;

// Item price and money variables
var itemprice = 12.99;
var amountOfMoneyInWallet = 50.00;

// freinds and freinds gained by my age variables and math
var numberOfFriends = 3;
var numberOfFriendsGained = ageInYears*2;
var finalNumberOfFriends = numberOfFriends + numberOfFriendsGained;

// putting the 3 parts of my name into 1
var fullName = firstName + " " + middleInitial + " " + lastName;
// setting my money to a lower amount due to the purchesing of the item
var newAmountOfMoney = amountOfMoneyInWallet - itemprice;

// the logs that will display when the consel is opened within the deafualt brosers with the approprat link.
console.log("My fullname is " + fullName + ".");
console.log("I have " + newAmountOfMoney + " in my wallet after my purchase.");
console.log("I have " + finalNumberOfFriends + " friends after all these years.");


