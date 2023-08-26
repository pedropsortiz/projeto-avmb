import React, { useEffect } from 'react'
import styles from "./TabelasPage.module.scss"
import { apiService } from '../../Services/apiService'

const TabelasPage = () => {
    useEffect(() => {
        const data = apiService.fetchData()
        console.log(data)
    }, [])
  return (
    <section class={styles.container}>
    <div className={styles.content_left}></div>
    <div className={styles.content_rigth}>
      <div className={styles.inner_content}>
        <h1>Bem-Vindo</h1>
        <input type="text" placeholder="Host"></input>
        <input type="number" placeholder="Port"></input>
        <input type="text" placeholder="Banco"></input>
        <input type="text" placeholder="Usuario"></input>
        <input type="password" placeholder="Senha"></input>

        <input type="submit" value={"Acessar"} className={styles.submit}></input>

      </div>
    </div>
  </section>
  )
}

export default TabelasPage