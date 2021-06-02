import styles from './homes.module.scss';
import HomeCard from './home-card/home-card';

function Homes() {
    return (
        <div className={styles.homes}>
            <HomeCard
                src="img/house-1.jpeg"
                name="Beautiful Familiy House"
                location="USA"
                rooms="5"
                area="325"
                price="$1.200.000"
            />

            <HomeCard
                src="img/house-2.jpeg"
                name="Modern Glass Villa"
                location="Canada"
                rooms="6"
                area="450"
                price="$2.750.000"
            />
            <HomeCard
                src="img/house-3.jpeg"
                name="Cozy Country House"
                location="UK"
                rooms="4"
                area="250"
                price="$850.000"
            />
            <HomeCard
                src="img/house-4.jpeg"
                name="Large Rustical Villa"
                location="Portugal"
                rooms="6"
                area="480"
                price="$1.950.000"
            />
            <HomeCard
                src="img/house-5.jpeg"
                name="Majestic Palace House"
                location="Germany"
                rooms="18"
                area="4230"
                price="$9.500.000"
            />
            <HomeCard
                src="img/house-6.jpeg"
                name="Modern Familiy Apartment"
                location="Italy"
                rooms="3"
                area="180"
                price="$600.000"
            />
        </div>
    );
}

export default Homes;
