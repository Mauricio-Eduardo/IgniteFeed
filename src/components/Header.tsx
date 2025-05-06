import styles from './Header.module.css'

export function Header() {
    return (
    <header className={styles.header}>
        <img src="../assets/ignite simbol.svg" alt='Logo do Ignite Feed'/>
        <strong>Ignite Feed</strong>
    </header>
    )
} 
