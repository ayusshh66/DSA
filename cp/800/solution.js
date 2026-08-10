function reverse(n, k, arr) {
    let check = 0;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            check++;
        }
    }
    if (check === n - 1) {
        return "YES";
    } else {
        if (k === 1) return "NO";
        return "YES";
    }
}

console.log(reverse(4, 2, [1, 5, 3, 2])); 
console.log(reverse(3, 1, [9, 9, 9]));   