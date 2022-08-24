function arrayOfProducts(array) {
    const productsBefore = [1];
    let beforeTemp = 1;
    const productsAfter = [1];
    let afterTemp = 1;

    for (let i = 0; i < array.length - 1; i++) {
        const currentProduct = beforeTemp * array[i];
        productsBefore.push(currentProduct);
        beforeTemp = currentProduct;
    }

    for (let i = array.length - 1; i > 0; i--) {
        const currentProduct = afterTemp * array[i];
        productsAfter.push(currentProduct);
        afterTemp = currentProduct;
    }
    const output = new Array(array.length);
    for (let i = 0; i < output.length; i++) {
        output[i] = productsBefore[i] * productsAfter[output.length - 1 - i];
    }
    return output;
}
