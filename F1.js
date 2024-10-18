function calculateTax(income){
    let tax_payable = income*(15/100);
    return tax_payable;
}
console.log("Tax payable:",calculateTax(100000));