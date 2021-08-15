import Page from '../../components/Page';
import styles from './Board.module.css';

const boardTitle = 'Test Board 1';

export default function PageDashboard() {
    return (
        <Page title={boardTitle}>
            <p>
                This is where a dynamic board will render after the data comes
                in from context against its id or slug based route.
            </p>
        </Page>
    );
}
