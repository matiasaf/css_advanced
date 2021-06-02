import styles from './home-card.module.scss';
import Button from '../../shared/button/button';

function HomeCard({ src, name, location, rooms, area, price }) {
    return (
        <div className={styles.container}>
            <img src={src} alt={name} className={styles.img} />
            <svg className={styles.like}>
                <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className={styles.name}>{name}</h5>
            <div className={styles.location}>
                <svg>
                    <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
                </svg>
                <p>{location}</p>
            </div>
            <div className={styles.rooms}>
                <svg>
                    <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
                </svg>
                <p>{rooms} rooms</p>
            </div>
            <div className={styles.area}>
                <svg>
                    <use xlinkHref="img/sprite.svg#icon-expand"></use>
                </svg>
                <p>
                    {area}
                    m <sup>2</sup>
                </p>
            </div>
            <div className={styles.price}>
                <svg>
                    <use xlinkHref="img/sprite.svg#icon-key"></use>
                </svg>
                <p>{price}</p>
            </div>

            <Button className={styles.home__btn}>Contact Realtor</Button>
        </div>
    );
}

export default HomeCard;
