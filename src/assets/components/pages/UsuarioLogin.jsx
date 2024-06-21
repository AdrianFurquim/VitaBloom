import { Link, useNavigate } from "react-router-dom";
import styles from "./UsuarioLogin.module.css"
import logo_imagem from "../../img/logo_imagem.png"
import logo_escrita from "../../img/logo_escrita.png"
import { useState , useEffect} from "react"

export default function UsuarioLogin(props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemEmail, setMensagemEmail] = useState(styles.mensagem);
    const [mensagemSenha, setMensagemSenha] = useState(styles.mensagem);
    const [mensagemSemCad, setMensagemSemCad] = useState(styles.mensagem);
    const [usuario, setUsuario] = useState();
    const navigate = useNavigate();

    // Verificação para se o usuário preencheu os dados.
    function verificaDados(e) {
        if (!email) {
            setMensagemEmail(styles.mensagem_error);
            e.preventDefault();
            return;
        }else{
            setMensagemEmail(styles.mensagem);
        }
        if (!senha) {
            setMensagemSenha(styles.mensagem_error);
            e.preventDefault();
            return;
        }else{
            setMensagemSenha(styles.mensagem);
        }
        verificarCadastro();
    }

    // Função para verificar se o login realizado existe realmente no banco de dados.
    function verificarCadastro(e) {
        fetch(`http://localhost:8443/vitabloom/usuarios/verificar/${email}/${senha}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("Dados recebidos:", data);
            setUsuario(data);
            handleClick(data.nome, data.idUsuario)
            setMensagemSemCad(styles.mensagem);
        })
        .catch((err) => {
            console.log("Erro na requisição:", err);            
            setMensagemSemCad(styles.mensagem_error);
        });
    }

    // Handle click para passar que o usuário está logado, e para voltar a home.
    function handleClick(nome, idUsuario) {
        props.handleResult(nome, idUsuario);
        navigate("/");
    }

    return(
        <section className={styles.section_login}>
            <div className={styles.conteiner_logo}>
                <img src={logo_imagem} className={styles.logo_imagem} alt="Logo_Vita_Bloom" />
                <img src={logo_escrita} className={styles.logo_escrita} alt="Logo_Escrita_nome_Vita_Bloom" />
                <div className={styles.texto_login}>
                    <h1>Venha fazer parte da Família Vita Bloom!</h1>
                    <br />
                    <h1>Com os melhores preços e melhores produtos!</h1>
                </div>
            </div>
            <div className={styles.conteiner_login}>
                <h3>Login</h3>
                <form>
                    <div className={mensagemEmail}>Por favor, insira um email</div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <div className={mensagemSenha}>Por favor, insira a senha</div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} />
                    <br />
                    <div className={mensagemSemCad}>Usuário não reconhecido</div>
                </form>
                <button className={styles.btnLogin} onClick={verificaDados}>Enviar</button>
                <p className={styles.cadastrar}>Não possuo cadastro, 
                    <Link to="/usuario/cadastro"> Cadastrar</Link>
                </p>
            </div>
        </section>
    )
}
