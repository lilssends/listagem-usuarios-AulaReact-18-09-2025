import styles from "./CardUsuario.module.css"

function CardUsuario({nome, email}) {
  return (
    <div className={styles.card}>
      <p>Nome: {nome}</p> 
      <p>Email: {email}</p> 
    </div>
  );
}

export default CardUsuario;