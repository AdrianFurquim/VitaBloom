import loading from "../../img/loading.svg"
import styles from "./Loading.module.css"

export default function Loading(){
    // Tela =============================================================================================================
    return(
        <div className={styles.loader_conteiner}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )
}