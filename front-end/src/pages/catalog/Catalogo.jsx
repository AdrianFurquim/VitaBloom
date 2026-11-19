
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../context";
import { getProducts, addProductInCart } from "../../servises/product/product";

import carrinho from "../../assets/img/carrinho-de-compras.png";

import cremeUvaDivno from "../../assets/img/produto_uva_1.png";
import essenciaUvaCelestial from "../../assets/img/produto_uva_2.png";
import abacaxiOlimpus from "../../assets/img/produto_abacaxi_2.png";
import avocadoGlow from "../../assets/img/produto_abacate_1.png";
import pineappleDeling from "../../assets/img/produto_abacaxi_1.png";
import bananaBliss from "../../assets/img/produto_banana_1.png";
import citrusBurst from "../../assets/img/produto_laranja_1.png";
import orangeRadiano from "../../assets/img/produto_laranja_2.png";
import sunriseCitrus from "../../assets/img/produto_laranja_4.png";
import greenAplleRevive from "../../assets/img/produto_maca_1.png";
import strawberryKiss from "../../assets/img/produto_morango_1.png";
import berryFreshness from "../../assets/img/produto_morango_5.png";

// Imagens associadas aos IDs dos produtos
const imagensProdutos = {
    1: cremeUvaDivno,
    2: essenciaUvaCelestial,
    3: abacaxiOlimpus,
    4: avocadoGlow,
    5: pineappleDeling,
    6: bananaBliss,
    7: citrusBurst,
    8: orangeRadiano,
    9: sunriseCitrus,
    10: greenAplleRevive,
    11: strawberryKiss,
    12: berryFreshness,
};

// Produtos que possuem ofertas especiais
const produtosEmOferta = [1, 7, 12];

// Formatação de valores em reais
const formatarPreco = (valor) => {
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
};

// ============================================================
// CARD DE PRODUTO
// ============================================================

function Produto({
    imagem,
    nome,
    valor,
    descricao,
    idProduto,
    idUsuario,
}) {
    const { userInfos } = useContext(Context);

    const navigate = useNavigate();

    const [adicionado, setAdicionado] = useState(false);
    const timerRef = useRef(null);

    const emOferta = produtosEmOferta.includes(Number(idProduto));

    // Limpa o temporizador ao desmontar o componente
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    // Adiciona produto ao carrinho
    const handleAdicionarCarrinho = async () => {
        if (!userInfos) {
            navigate("/usuario/login");
            return;
        }

        try {
            await addProductInCart(
                idUsuario?.idUsuario ?? userInfos.idUsuario,
                idProduto
            );

            setAdicionado(true);

            clearTimeout(timerRef.current);

            timerRef.current = setTimeout(() => {
                setAdicionado(false);
            }, 2000);

        } catch (error) {
            console.error("Erro ao adicionar produto ao carrinho:", error);
        }
    };

    return (
        <article
            className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                adicionado
                    ? "border-[#a5ce91] bg-[#f5fbef]"
                    : "border-[#eee5d8] hover:border-[#e2c69e]"
            }`}
        >
            {/* IMAGEM DO PRODUTO */}
            <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden bg-[#faf7f1] p-5 sm:h-[280px]">

                <img
                    src={imagem}
                    alt={nome}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                />

                {/* ETIQUETA DE OFERTA */}
                {emOferta && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#b95b45] px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm">
                        OFERTA
                    </span>
                )}

                {/* BOTÃO DO CARRINHO */}
                <button
                    type="button"
                    onClick={handleAdicionarCarrinho}
                    aria-label={`Adicionar ${nome} ao carrinho`}
                    title="Adicionar ao carrinho"
                    className={`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95 ${
                        adicionado
                            ? "bg-[#83b86d]"
                            : "bg-[#f5d7a9] hover:bg-[#eec181]"
                    }`}
                >
                    {adicionado ? (
                        <span className="text-xl font-bold text-white">
                            ✓
                        </span>
                    ) : (
                        <img
                            src={carrinho}
                            alt=""
                            className="h-6 w-6 object-contain"
                        />
                    )}
                </button>
            </div>

            {/* INFORMAÇÕES */}
            <div className="flex flex-1 flex-col p-5">

                {/* NOME */}
                <h2 className="min-h-[52px] text-lg font-semibold leading-snug text-[#49382d]">
                    {nome}
                </h2>

                {/* PREÇO */}
                <div className="mt-3 min-h-[65px]">

                    {emOferta ? (
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-[#9b8c7e]">
                                De:{" "}
                                <span className="text-[#bd6255] line-through">
                                    {formatarPreco(Number(valor) + 100)}
                                </span>
                            </span>

                            <span className="text-xl font-bold text-[#b98745]">
                                Por: {formatarPreco(valor)}
                            </span>
                        </div>
                    ) : (
                        <span className="text-xl font-bold text-[#b98745]">
                            {formatarPreco(valor)}
                        </span>
                    )}
                </div>

                {/* DESCRIÇÃO */}
                <p
                    className="mt-3 min-h-[66px] text-sm leading-6 text-[#857568]"
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                    }}
                    title={descricao}
                >
                    {descricao}
                </p>

                {/* BOTÃO */}
                <button
                    type="button"
                    onClick={handleAdicionarCarrinho}
                    className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        adicionado
                            ? "bg-[#83b86d] text-white"
                            : "bg-[#f5e5cd] text-[#76552e] hover:bg-[#e9d0a9]"
                    }`}
                >
                    {adicionado ? (
                        <>
                            <span>✓</span>
                            Adicionado ao carrinho
                        </>
                    ) : (
                        <>
                            <span>+</span>
                            Adicionar ao carrinho
                        </>
                    )}
                </button>
            </div>
        </article>
    );
}

// ============================================================
// CATÁLOGO
// ============================================================

export default function Catalogo({ idUsuario }) {
    const {
        productList,
        setProductList,
        userInfos,
    } = useContext(Context);

    // Busca os produtos do banco de dados
    useEffect(() => {
        getProducts(setProductList);
    }, [setProductList]);

    const produtos = productList || [];

    return (
        <main className="min-h-[70vh] bg-[#fffdf9] pb-20">

            {/* CABEÇALHO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#fff3df] via-[#ffebce] to-[#f5dfbd] px-6 py-16 text-center sm:py-20">

                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/40 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#d9a85e]/15 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-3xl">

                    <span className="inline-block rounded-full border border-[#dfc49f] bg-white/60 px-5 py-2 text-xs font-bold tracking-[3px] text-[#a97836]">
                        NOSSA COLEÇÃO
                    </span>

                    <h1 className="mt-7 text-3xl font-semibold leading-tight text-[#49382d] sm:text-4xl md:text-5xl">
                        Nosso jeitinho{" "}
                        <span className="bg-gradient-to-r from-[#a66ac5] via-[#df7892] to-[#d6a044] bg-clip-text font-serif italic text-transparent">
                            Vita Bloom
                        </span>
                        <br className="hidden sm:block" />
                        {" "}de ser com{" "}
                        <span className="text-[#c45c50]">
                            amor ❤️
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 text-sm leading-7 text-[#857362] sm:text-base">
                        Descubra nossa coleção de produtos e encontre
                        o cuidado ideal para valorizar sua beleza natural.
                    </p>

                    <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#d3a15c]" />
                </div>
            </section>

            {/* PRODUTOS */}
            <section className="mx-auto max-w-[1500px] px-6 pt-14 sm:px-10 lg:px-14">

                {/* CONTADOR */}
                <div className="mb-9 flex items-center justify-between gap-4 border-b border-[#eee5d8] pb-5">

                    <div>
                        <h2 className="text-xl font-semibold text-[#49382d] sm:text-2xl">
                            Nossos produtos
                        </h2>

                        <p className="mt-1 text-sm text-[#958576]">
                            Escolha seus favoritos.
                        </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#f8eddf] px-4 py-2 text-xs font-semibold text-[#a97836] sm:text-sm">
                        {produtos.length}{" "}
                        {produtos.length === 1 ? "produto" : "produtos"}
                    </span>
                </div>

                {/* GRID */}
                {produtos.length > 0 ? (
                    <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {produtos.map((produto) => (
                            <Produto
                                key={produto.id}
                                idUsuario={idUsuario || userInfos}
                                nome={produto.nomeProduto}
                                valor={produto.valorProduto}
                                descricao={produto.descricaoProduto}
                                imagem={imagensProdutos[produto.idProduto]}
                                idProduto={produto.idProduto}
                            />
                        ))}

                    </div>
                ) : (
                    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#e6d5bc] bg-[#fffaf3] px-6 text-center">

                        <span className="text-5xl text-[#c99b5b]">
                            ✿
                        </span>

                        <h3 className="mt-5 text-xl font-semibold text-[#574638]">
                            Nenhum produto encontrado
                        </h3>

                        <p className="mt-2 text-sm text-[#958576]">
                            Não há produtos disponíveis no momento.
                        </p>
                    </div>
                )}
            </section>

        </main>
    );
}
