const getAllProductsUrl = "http://localhost:5000/products";
const addProductUrl = "http://localhost:5000/products/add-product";

export const addProduct = async (product) => {
    const request = await fetch(addProductUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/JSON',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: product,
    });

    const response = await request.json();

    if(!request.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const getAllProducts = async () => {
    const request = await fetch(getAllProductsUrl, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        //credentials: 'include',
    });

    const response = await request.json();

    return response;
};
