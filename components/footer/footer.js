import styles from './footer.module.scss';

function Footer() {
    return <footer className={styles.footer}>
      <ul className={styles.nav}>
        <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Find your dream home</a></li>
        <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Request proposal</a></li>
        <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Download home planner</a></li>
        <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Contact us</a></li>
        <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Submit your property</a></li>
        <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Come work with us!</a></li>
      </ul>
      <p className={styles.copyright}>
        &copy;Copyright by Matias Fernandez. If you imitate the design I'm going to make you suffer and kill you in the end.
      </p>
    </footer>;
}

export default Footer;
