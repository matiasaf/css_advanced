import styles from './gallery.module.scss';

function Gallery() {
    return (
        <div className={styles.gallery}>
            <figure className={styles.item__1}>
                <img
                    src="img/gal-1.jpeg"
                    alt="Gallery Image 1"
                    className={styles.img}
                />
            </figure>

            <figure className={styles.item__2}>
                <img
                    src="img/gal-2.jpeg"
                    alt="Gallery Image 2"
                    className={styles.img}
                />
            </figure>

            <figure className={styles.item__3}>
                <img
                    src="img/gal-3.jpeg"
                    alt="Gallery Image 3"
                    className={styles.img}
                />
            </figure>

            <figure className={styles.item__4}>
                <img
                    src="img/gal-4.jpeg"
                    alt="Gallery Image 4"
                    className={styles.img}
                />
            </figure>

            <figure className={styles.item__5}>
                <img
                    src="img/gal-5.jpeg"
                    alt="Gallery Image 5"
                    className={styles.img}
                />
            </figure>
            
            <figure className={styles.item__6}>
                <img
                    src="img/gal-6.jpeg"
                    alt="Gallery Image 6"
                    className={styles.img}
                />
            </figure>
        </div>
    );
}

export default Gallery;
