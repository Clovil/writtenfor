import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you{"\n"}
          Shanghai Maluoke E-Commerce Co., Ltd.
      </footer>
    </>
  )
}

export default Footer