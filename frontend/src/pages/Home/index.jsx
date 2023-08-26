import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section class={styles.container}>
      <div className={styles.content_left}></div>
      <div className={styles.content_rigth}>
        <div className={styles.inner_content}>
          <h1>Bem-Vindo</h1>
          <input type="text" placeholder="Digite seu login"></input>
          <input type="text" placeholder="Digite sua senha"></input>
          <input type="submit" value={"Acessar"} className={styles.submit}></input>

        </div>
      </div>
    </section>
  );
};

export default Home;
