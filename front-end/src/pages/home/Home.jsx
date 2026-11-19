
import LinkButton from "../../components/layout/LinkButton";
import OfertasHome from "../../components/product/OfertasHome";

import produtos from "../../assets/img/produtos_na_caixa.png";
import sacola from "../../assets/img/produto_sacola.png";

const categories = [
    {
        icon: "✿",
        title: "Cuidados com a pele",
        description: "Nutrição e cuidado para revelar sua beleza natural.",
    },
    {
        icon: "❀",
        title: "Cuidados com o cabelo",
        description: "Mais vida, brilho e vitalidade para seus fios.",
    },
    {
        icon: "♡",
        title: "Beleza e bem-estar",
        description: "Pequenos momentos de cuidado com você.",
    },
];

const benefits = [
    {
        icon: "🌿",
        title: "Essência natural",
        description: "Inspirados na riqueza dos ingredientes tropicais.",
    },
    {
        icon: "♡",
        title: "Cuidado especial",
        description: "Produtos pensados para sua beleza e bem-estar.",
    },
    {
        icon: "✿",
        title: "Beleza consciente",
        description: "Uma relação mais próxima com a natureza.",
    },
];

export default function Home() {
    return (
        <main className="overflow-hidden bg-[#fffdf9] text-[#46382d]">

            {/* HERO */}
            <section className="relative bg-[#f8eddf]">

                <div className="mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-2 items-center gap-10 px-10 py-20 lg:px-20 max-md:grid-cols-1 max-md:gap-8 max-md:px-6 max-md:py-14">

                    <div className="relative z-10 max-w-xl max-md:text-center">

                        <span className="inline-flex items-center gap-2 rounded-full border border-[#dfc49f] bg-white/60 px-4 py-2 text-xs font-semibold tracking-[2px] text-[#a97836]">
                            <span>✦</span>
                            BELEZA NATURAL, ESSÊNCIA TROPICAL
                        </span>

                        <h1 className="mt-8 text-5xl font-medium leading-[1.13] tracking-tight text-[#49382b] sm:text-6xl lg:text-[68px]">
                            Sua beleza floresce
                            <span className="mt-1 block font-serif italic text-[#bd8b45]">
                                com a natureza.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-lg text-base leading-8 text-[#79695a] max-md:mx-auto">
                            Descubra uma experiência única de cuidado e
                            bem-estar com produtos inspirados na riqueza
                            dos ingredientes naturais e nos aromas tropicais.
                        </p>

                        <div className="mt-9 flex items-center gap-5 max-md:justify-center">
                            <LinkButton
                                to="/catalogo"
                                text="Explorar produtos"
                            />
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#8c765d] max-md:justify-center">
                            <span>✿ Ingredientes naturais</span>
                            <span>✿ Cuidado e bem-estar</span>
                        </div>
                    </div>
                    
                    <div className="relative mx-auto flex min-h-[520px] w-full max-w-[620px] items-center justify-center max-md:min-h-[380px]">

                        <div className="absolute aspect-square w-[95%] rounded-full bg-[#e8cfac]" />

                        <div className="absolute aspect-square w-[83%] rounded-full border border-white/60" />

                        <img
                            src={produtos}
                            style={{ width: "20em" }}
                            alt="Produtos naturais Vita Bloom"
                            className="relative z-10 h-full rounded-full w-full drop-shadow-[0_24px_25px_rgba(83,57,29,0.18)]"
                        />

                        <div className="absolute bottom-[5%] right-0 z-20 rounded-full bg-white px-6 py-4 shadow-xl">
                            <p className="font-serif text-lg italic text-[#b58442]">
                                Naturalmente sua.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CATEGORIES */}
            <section className="mx-auto max-w-[1300px] px-8 py-24 max-md:px-5 max-md:py-16">

                <div className="mb-14 text-center">
                    <span className="text-xs font-bold tracking-[3px] text-[#bd8b45]">
                        ENCONTRE SEU CUIDADO
                    </span>

                    <h2 className="mt-4 font-serif text-3xl text-[#49382b] sm:text-4xl">
                        Um universo de possibilidades
                    </h2>

                    <p className="mt-4 text-[#8a7b6d]">
                        Produtos pensados para valorizar sua beleza natural.
                    </p>
                </div>

                
                <div className="grid grid-cols-3 items-stretch gap-6 max-md:grid-cols-1">
                    {categories.map((category) => (
                        <a
                            key={category.title}
                            href="/catalogo"
                            className="flex flex-col items-center justify-between rounded-2xl border border-[#eee2d2] bg-[#fffaf3] px-7 py-9 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#d9bb91] hover:bg-[#f8eddf] hover:shadow-lg"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2e2ca] font-serif text-3xl text-[#b98745] transition-transform duration-300 group-hover:scale-110">
                                    {category.icon}
                                </span>
                                <h3 className="flex items-center justify-center text-lg font-semibold leading-snug text-[#574638]">
                                    {category.title}
                                </h3>
                                <p className="text-sm leading-6 text-[#8b7b6c]">
                                    {category.description}
                                </p>
                            </div>
                            <span className="mt-6 text-xs font-semibold tracking-wide text-[#b98745] transition-colors group-hover:text-[#805b2c]">
                                EXPLORAR →
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="bg-[#f8f4ed]">

                <div className="mx-auto grid max-w-325 grid-cols-2 items-center gap-20 px-10 py-24 lg:px-16 max-md:grid-cols-1 max-md:gap-10 max-md:px-6 max-md:py-16">

                    <div className="relative flex min-h-120 items-center justify-center max-md:min-h-87.5">

                        <div className="absolute bottom-3 left-[5%] h-[90%] w-[90%] rounded-t-full bg-[#ead8bd]" />

                        <img
                            src={sacola}
                            style={{ width: "20em" }}
                            alt="Sacola com produtos Vita Bloom"
                            className="relative z-10 max-h-135 rounded-t-full w-full scale-110 object-contain drop-shadow-[0_20px_25px_rgba(80,55,25,0.12)]"
                        />

                        <div className="absolute bottom-5 left-0 z-20 rounded-xl border border-[#eee2d2] bg-white px-5 py-4 shadow-lg">
                            <span className="block font-serif text-xl italic text-[#b98745]">
                                Vita Bloom
                            </span>
                            <span className="text-[10px] tracking-[2px] text-[#8b7b6c]">
                                BELEZA QUE FLORESCE
                            </span>
                        </div>
                    </div>

                    <div className="max-md:text-center">

                        <span className="text-xs font-bold tracking-[3px] text-[#bd8b45]">
                            NOSSA ESSÊNCIA
                        </span>

                        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#49382b] sm:text-5xl">
                            A natureza é nossa
                            <span className="block italic text-[#bd8b45]">
                                maior inspiração.
                            </span>
                        </h2>

                        <div className="my-7 h-[2px] w-16 bg-[#c99b5b] max-md:mx-auto" />

                        <p className="text-base leading-8 text-[#79695a]">
                            A Vita Bloom nasceu da conexão entre beleza e
                            natureza. Nossa proposta é trazer a exuberância
                            dos ingredientes tropicais para sua rotina de
                            cuidados com a pele e cabelo.
                        </p>

                        <p className="mt-5 text-base leading-8 text-[#79695a]">
                            Cada produto representa nossa dedicação ao
                            bem-estar, combinando cuidado, qualidade e uma
                            experiência inspirada na biodiversidade brasileira.
                        </p>

                        <div className="mt-9 max-md:flex max-md:justify-center">
                            <LinkButton
                                to="/catalogo"
                                text="Conheça nossos produtos"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* OFFERS */}
            <section className="mx-auto max-w-[1400px] px-8 py-24 max-md:px-5 max-md:py-16">

                <div className="mb-14 text-center">
                    <span className="text-xs font-bold tracking-[3px] text-[#bd8b45]">
                        OPORTUNIDADES ESPECIAIS
                    </span>

                    <h2 className="mt-4 font-serif text-3xl text-[#49382b] sm:text-4xl">
                        Ofertas que florescem para você
                    </h2>

                    <p className="mt-4 text-[#8a7b6d]">
                        Aproveite nossos produtos selecionados.
                    </p>
                </div>

                <div className="w-full">
                    <OfertasHome />
                </div>
            </section>

            {/* BENEFITS */}
            <section className="border-y border-[#eee1cf] bg-[#fdf8f0]">

                <div className="mx-auto grid max-w-[1250px] grid-cols-3 gap-10 px-8 py-20 max-md:grid-cols-1 max-md:gap-12 max-md:px-6">

                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="text-center"
                        >
                            <span className="text-4xl text-[#bd8b45]">
                                {benefit.icon}
                            </span>

                            <h3 className="mt-5 text-lg font-semibold text-[#574638]">
                                {benefit.title}
                            </h3>

                            <p className="mx-auto mt-3 text-sm leading-7 text-[#897b6d]">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-[#e9d1ae] px-6 py-24 text-center">

                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#c69a61]/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-2xl">

                    <span className="text-xs font-bold tracking-[3px] text-[#98703e]">
                        SUA JORNADA COMEÇA AQUI
                    </span>

                    <h2 className="mt-5 font-serif text-4xl text-[#49382b] sm:text-5xl">
                        Permita-se florescer!
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg leading-8 text-[#725a43]">
                        Encontre os produtos ideais para transformar
                        sua rotina de cuidados.
                    </p>

                    <div className="mt-9 flex justify-center">
                        <LinkButton
                            to="/catalogo"
                            text="Ver nosso catálogo"
                        />
                    </div>
                </div>
            </section>

            {/* ANIMATIONS */}
            <style>{`
                @media (prefers-reduced-motion: no-preference) {
                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(25px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    main > section:first-child h1 {
                        animation: fadeUp .8s ease both;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation: none !important;
                        transition: none !important;
                        scroll-behavior: auto !important;
                    }
                }
            `}</style>

        </main>
    );
}
