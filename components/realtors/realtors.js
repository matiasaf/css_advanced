import styles from './realtors.module.scss';
import Realtor from './realtor/realtor';

function Realtors() {
    return (
        <div className={styles.realtors}>
            <h3 className="heading-3">Top 3 Realtors</h3>
            <div className={styles.list}>
                <Realtor
                    imgSrc="img/realtor-1.jpeg"
                    name="Erich Feinman"
                    sold="245"
                />
                <Realtor
                    imgSrc="img/realtor-2.jpeg"
                    name="Kim Brown"
                    sold="212"
                />
                <Realtor
                    imgSrc="img/realtor-3.jpeg"
                    name="Toby Ramsey"
                    sold="198"
                />
            </div>
        </div>
    );
}

export default Realtors;
