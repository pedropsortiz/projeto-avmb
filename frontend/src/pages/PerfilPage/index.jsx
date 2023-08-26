import React from "react";
import styles from "./PaginaPerfil.module.scss";

const PerfilPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <button>Acessar Banco de Dados</button>
          <button>Acessar Usuarios</button>
        </div>
      </div>
    </section>
  );
};

export default PerfilPage;
