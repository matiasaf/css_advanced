import styles from './story-content.module.scss';
import Button from '../shared/button/button';

function StoryContent() {
    return (
        <div className={styles.storyContent}>
            <h3 className="heading-3 mb-sm">Happy Customers</h3>
            <h2 className="heading-2 heading-2--dark mb-md">
                &ldquo;The best decision of our lives&rdquo;
            </h2>
            <p className={`${styles.text} mb-lg`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem
                consequatur harum volupta!
            </p>
            <Button>Find your own home</Button>
        </div>
    );
}

export default StoryContent;
