import styles from './story-pictures.module.scss';
function StoryPictures() {
    return (
        <div className={styles.storyPictures}>
            <img
                src="img/story-1.jpeg"
                alt="Couple with new house"
                className={styles.img1}
            />
            <img
                src="img/story-2.jpeg"
                alt="New house"
                className={styles.img2}
            />
        </div>
    );
}

export default StoryPictures;
