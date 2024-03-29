"use strict";
const format = (value) => {
    if (typeof value === "number") {
        return `$${value}`;
    }
    else if (typeof value === "boolean") {
        return (value = true ? "yes" : "no");
    }
    else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
};
console.log(format(true));
console.log(format(23));
console.log(format("dinky"));
