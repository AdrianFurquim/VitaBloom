import styles from "./Produto.module.css";
import carrinho from "../../assets/img/carrinho-de-compras.png";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProductInCart } from "../../servises/product/product";
import { Context } from "../../context";


export default function Produto({ imagem, nome, valor, descricao, idProduto, idUsuario }) {

  // Variáveis =============================================================================================================
  const { userInfos } = useContext(Context)

  const [containerClass, setContainerClass] = useState(styles.produto_container);
  const navigate = useNavigate();

  // Funções =============================================================================================================

  function adicionarItemCarrinho(idProdutoFunc, idUsuarioFunc) {
    addProductInCart(
      idUsuarioFunc, 
      idProdutoFunc
    )
  }

  const toAddProductInCart = () => {
    addProductInCart(
      idUsuario, 
      idProduto
    )
}

  // Função para alterar a cor durante um momento para adição do item.
  function alteraCor() {
    setContainerClass(styles.produto_container_verde);

    // Define um timeout para retornar à classe original após 2 segundos.
    setTimeout(() => {
        setContainerClass(styles.produto_container);
    }, 2000);
  }

  // Handle click para ferificar se o usuário está logado.
  // Caso não esteja é encaminhado para a tela de Login.  
  function handleClick(idProduto) {
    if(!userInfos){
      navigate("/usuario/login");
    }else{
      adicionarItemCarrinho(idProduto, userInfos.idUsuario);
      alteraCor();
    }
  }

  // Função para renderizar do banco as ofertas especiais
  const renderizaOferta = () => {
    // Escolhendo os produtos em promoção.
    if(idProduto == 1 || idProduto == 7 || idProduto == 12){
      return (
        <>
          <p>De: <span className={styles.valor_antigo}>R$ {valor + 100}</span></p>
          <h2>Por: <span className={styles.valor_novo}>R$ {valor}</span></h2>
        </>
      )
    }else{
      return (
        <>
          <p>R$ {valor}</p>
        </>
      )
    }
  }

  // Tela =============================================================================================================

  return (
    <>
      <div className={containerClass}>
          <div className={styles.produto_opcoes}>
            {/* Botão de adicionar no carrinho */}
            <button
              className={styles.btn}
              onClick={() => handleClick(idProduto)}
            >
              <img src={carrinho} alt="" className={styles.carrinho} />
            </button>
          </div>

        {/* Imagem do produto */}
        <img className={styles.imagem_produto} src={imagem} alt="" />

        <div className={styles.informacoes}>

          <div className={styles.linhadebaixo}>
            {/* Nome do produto */}
            <div>
              <h1>{nome}</h1>
            </div>

            {/* Renderizando as Ofertas */}
            <div className={styles.valor}>
              {renderizaOferta()}
            </div>
          </div>

          <br></br>

          {/* Descrição dinâmica dos produtos */}
          <p className={styles.invisivel}>{descricao}</p>
          <br></br>

        </div>
      </div>
    </>
  );
}
