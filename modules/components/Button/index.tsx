import styles from './Button.module.css';

type ButtonProps = {
    text: string;
};

export default function Button({ text }: ButtonProps) {
    return <button className={styles.button}>{text}</button>;
}
