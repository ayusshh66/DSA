function water(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === "." && str[i] === "." && str[i + 1] === ".") {
            return 2;
        }
    }

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            count++;
        }
    }

    return count;
}

console.log(water("###.###..."))