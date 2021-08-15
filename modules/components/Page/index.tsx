import { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import Header from '../../global/Header';
import Navigation from '../../global/Navigation';
import styles from './Page.module.css';

type PageProps = {
    title: string | null;
    children: JSX.Element;
};

export default function Page({ children, title = null }: PageProps) {
    // useEffect(() => {
    //     if (!user.valid) {
    //         router.push('/login');
    //     }
    // })

    return (
        <>
            <div className={styles.containerHeader}>
                <Header />
            </div>
            <div className={styles.containerPage}>
                <div className={styles.containerNavigation}>
                    <Navigation />
                </div>
                <div className={styles.containerContent}>
                    {title ? (
                        <div className={styles.containerTitle}>
                            <h1 className={styles.title}>{title}</h1>
                        </div>
                    ) : null}
                    <div className={styles.containerChildren}>{children}</div>
                </div>
            </div>
        </>
    );
}
