// Write your solution in this file!

var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'vuslat';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'maybe vuslat'
    return leastFavoriteCustomer;
}

