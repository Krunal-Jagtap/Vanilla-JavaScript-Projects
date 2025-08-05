// Math - work with ( numbers ✅ ) / ( bigint ❌ )

// abs - Distent between 0
console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5

// round 2.4 ⬇️  |  2.5 ⬆️
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.9)); // 3

// ceil ⬆️
console.log(Math.ceil(2.0)); // 2
console.log(Math.ceil(2.1)); // 3
console.log(Math.ceil(2.5)); // 3
console.log(Math.ceil(2.9)); // 3

// floor ⬇️
console.log(Math.floor(2.0)); // 2
console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.5)); // 2
console.log(Math.floor(2.9)); // 2

// trunc - ignore number after .
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(-2.9)); // -2

// pow
console.log(Math.pow(2, 4)); // 16
console.log(2 ** 4); // 16

// sqrt
console.log(Math.sqrt(25)); // 5

// random ( here number 10 not include )
console.log(Math.random());
console.log(Math.round(Math.random() * 10));
