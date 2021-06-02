import styles from './button.module.scss';

function Button(props) {
    return <button className={`${styles.btn} ${props.className}`}>{props.children}</button>;
}

export default Button;
