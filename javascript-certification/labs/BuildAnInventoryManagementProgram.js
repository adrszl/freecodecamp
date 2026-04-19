const inventory = [];

const findProductIndex = (productName) => {
    return inventory.findIndex(
        (product) => product.name === productName.toLowerCase()
    );
};

const addProduct = (productObject) => {
    const name = productObject.name.toLowerCase();
    const index = findProductIndex(name);

    if (index !== -1) {
        inventory[index].quantity += productObject.quantity;
        console.log(`${name} quantity updated`);
    } else {
        inventory.push({ name, quantity: productObject.quantity });
        console.log(`${name} added to inventory`);
    }
};

const removeProduct = (productName, productQuantity) => {
    const name = productName.toLowerCase();
    const index = findProductIndex(name);

    if (index === -1) {
        console.log(`${name} not found`);
        return;
    }

    const product = inventory[index];

    if (product.quantity < productQuantity) {
        console.log(
            `Not enough ${name} available, remaining pieces: ${product.quantity}`
        );
    } else {
        product.quantity -= productQuantity;

        if (product.quantity === 0) {
            inventory.splice(index, 1);
        }

        console.log(`Remaining ${name} pieces: ${product.quantity}`);
    }
};