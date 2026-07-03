/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
    let min = Infinity;
    let maxProfit = 0;

    for(i=0; i<prices.length; i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i]-min
        }else if(prices[i]<min){
            min = prices[i]
        }
    }
    return maxProfit;
    
};