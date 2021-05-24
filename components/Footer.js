import styles from './Footer.module.css'

function NewLineText(props) {
  const Text = props.text;
                                       
  return text.split('\n').map(str => <p>{str}</p>);
}

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          <NewLineText text={'Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you \n Shanghai Maluoke E-Commerce Co., Ltd.'}/>
      </footer>
    </>
  )
}
