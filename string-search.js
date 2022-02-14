const products = [
    'Dell hardcore i29 200GB Laptop',
    'iphone 1TB flashlight Phone',
    'Yellow laptop with black camera',
    '1x76 Lenovo commercial yoga Laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Dell Purple color phone with Laptop'
];
const searching = 'Dell';

// indexOf()
/* const output = [];
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searching) != -1) {
        output.push(product);
    };

};
console.log(output); */


// includes()
/* const output = [];
for (const product of products) {
    if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
        output.push(product)
    }
}
console.log(output); */

// startsWith()
const output = [];
for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product);
    }
};
console.log(output);