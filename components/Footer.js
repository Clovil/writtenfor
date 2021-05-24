import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you\nShanghai Maluoke E-Commerce Co., Ltd.</p>
        </div>
      </footer>
    </>
  )
}
