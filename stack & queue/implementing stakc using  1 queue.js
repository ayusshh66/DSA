
var MyStack = function() {
    this.q1=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;

    for(let i=0; i < n-1 ; i++){
        let x = this.q1.shift()
        this.q1.push(x)
    }
    return this.q1.shift()

    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;

    for(let i=0; i < n-1 ; i++){
        let x = this.q1.shift()
        this.q1.push(x)
    }
    let ans = this.q1[0];
    this.q1.push(this.q1.shift())

    return ans;
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
        let n = this.q1.length;
    if(n===0){
        return true
    }else{
        return false
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */