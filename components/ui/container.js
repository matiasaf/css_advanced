import styles from './container.module.scss';

function Container(props) {
    return <main className={styles.container}>{props.children}</main>;
}

export default Container;
