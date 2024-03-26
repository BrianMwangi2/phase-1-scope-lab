// Write your solution in this file!
var customerName = "bob";
//console.log(customerName);
function upperCaseCustomerName() {
    return customerName=customerName.toUpperCase();
}
function setBestCustomer(){
    return bestCustomer=`not bob`
}
function overwriteBestCustomer(){
    return bestCustomer=`maybe bob`;
}
function changeLeastFavoriteCustomer(){
    throw 'Assignment to constant variable.';
}