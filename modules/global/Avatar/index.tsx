import styles from './Avatar.module.css';

export default function Header(props) {
    return (
        <div className={styles.containerImage}>
            <img src='https://picsum.photos/100/100' />
        </div>
    );
}
