import React from 'react';
import Header from '../../global/Header';
import Navigation from '../../global/Navigation';
import styles from './Page.module.css';

type PageProps = {
    title: string;
    children: JSX.Element;
};

export default function Page({ children, title }: PageProps) {
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
                    <div className={styles.containerTitle}>{title}</div>
                    <div className={styles.containerChildren}>{children}</div>
                </div>
            </div>
        </>
    );
}
