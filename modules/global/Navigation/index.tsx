import Link from 'next/link';
import Button from '../../components/Button';
import styles from './Navigation.module.css';
import { APP_MANIFEST } from '../../../manifest';

type NavigationItem = {
    url: string;
    text: string;
};

const navigationItems: NavigationItem[] = [
    {
        url: '/',
        text: 'Dashboard',
    },
    {
        url: '/board/1',
        text: 'Most Recent Board',
    },
    {
        url: '/reports',
        text: 'Reports',
    },
    {
        url: '/settings',
        text: 'Settings',
    },
    {
        url: '/settings/profile',
        text: 'Profile',
    },
];

export default function Navigation(props) {
    const getNavigationItems = (items: []) => {
        return items.map((item: NavigationItem, index: number) => (
            <div className={styles.containerLink} key={index}>
                <Link href={item.url}>
                    <a className={styles.navigationLink}>{item.text}</a>
                </Link>
            </div>
        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerNavigation}>
                <div>
                    <Link href='/boards/create'>
                        <Button text='Create New Board' />
                    </Link>
                </div>
                <hr className={styles.hr} />
                <div>{getNavigationItems(navigationItems)}</div>
            </div>
            <div className={styles.containerFooter}>
                <div className={styles.copyright}>
                    {APP_MANIFEST.prettyAppName} © {new Date().getFullYear()}
                </div>
                <div className={styles.releaseNotes}>
                    {`${APP_MANIFEST.lastRelease.toUpperCase()} - ${
                        APP_MANIFEST.version
                    }`}
                </div>
            </div>
        </div>
    );
}
