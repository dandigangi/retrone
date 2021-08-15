import { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import Page from '../../components/Page';
import Button from '../../components/Button';
import Link from 'next/link';
import styles from './Reports.module.css';

export default function PageLogin() {
    // useEffect(() => {
    //     if (user.valid) {
    //         router.push('/');
    //     }
    // })

    return (
        <Page title='Login'>
            <p>Get yourself in here plz.</p>
            <form>
                <div>
                    <label>Username</label>
                    <br />
                    <input type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input type='text' />
                </div>
                <Link href='/ops/login' passHref>
                    <Button text='Login' />
                </Link>
                <br />
                <Link href='/ops/login-link'>
                    <a>Send Login Link</a>
                </Link>
            </form>
        </Page>
    );
}
