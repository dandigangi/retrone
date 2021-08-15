import Header from '../global/Header';

export default function Page(props) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>{props.chilren}</div>
        </div>
    );
}
