
import Ofertas from "../offers/Ofertas";

export default function OfertasHome() {
    const produtosEmOferta = [7, 12, 1, 8];

    return (
        <div >
            {produtosEmOferta.map((id) => (
                <Ofertas
                    key={id}
                    idProduto={id}
                />
            ))}
        </div>
    );
}
