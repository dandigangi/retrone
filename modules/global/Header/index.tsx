import Breadcrumbs from '../Breadcrumbs';
import Avatar from '../Avatar';
import styles from './Header.module.css';

export default function Header(props) {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <Breadcrumbs />
            </div>
            <div className={styles.containerRight}>
                <div className={styles.containerAvatar}>
                    <Avatar />
                </div>
                <div className={styles.containerSettings}>Settings</div>
            </div>
        </div>
    );
}
