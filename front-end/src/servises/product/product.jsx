import Api from "../index"

async function getProducts(
    // Passar parametros como o setProduct que ira ter
    setProductList
) {
    try {
        const response = await Api.get(`/vitabloom/produtos`);
        setProductList(response.data);
        console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}

async function getProductsByOffer(
    idProduto, 
    setProductListOffer
) {
    try {
        const response = await Api.get(`vitabloom/produto/${idProduto}`);
        setProductListOffer(response.data);
    } catch (err) {
        console.log(err)
    }
}

async function addProductInCart(
    idUsuario, 
    idProduto
) {
    try {
        const bodyData = {
            produto: {
                idProduto: idProduto
            },
            quantidade: 1
        }
        const response = await Api.put(`vitabloom/usuario/adicionaritem/${idUsuario}`, bodyData);
    } catch (err) {
        console.log(err)
    }
}

export {
    getProducts, 
    getProductsByOffer, 
    addProductInCart
}