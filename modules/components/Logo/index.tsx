import Link from 'next/link';
import styles from './Logo.module.css';

export default function Logo(props) {
    return (
        <>
            <Link href='/'>
                <a className={styles.link}>Retrone</a>
            </Link>
        </>
    );
}
