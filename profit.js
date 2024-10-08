//function calculateProfit
function calculateProfit(SP, CP, units){
    selling_price = units*SP
    cost_price = units*CP
    profit = selling_price-cost_price
    return profit
}
SP=9000
CP=5000
units=5
console.log("Profit:", calculateProfit(SP, CP, units))