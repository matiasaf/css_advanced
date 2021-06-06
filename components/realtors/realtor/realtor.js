import styles from './realtor.module.scss';

function Realtor({ imgSrc, name, sold }) {
    return (
        <>
            <img
                src={imgSrc}
                alt={`${name} image`}
                className={styles.img}
            />
            <div className={styles.details}>
                <h4 className="heading-4 heading-4--light">{name}</h4>
                <p className={styles.sold}>{sold} houses sold</p>
            </div>
        </>
    );
}

export default Realtor;
