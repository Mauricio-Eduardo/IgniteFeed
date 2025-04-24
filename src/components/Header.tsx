import styles from './Header.module.css'
import igniteLogo from '../assets/ignite simbol.svg'

export function Header() {
    return (
    <header className={styles.header}>
        <img src={igniteLogo} alt='Logo do Ignite Feed'/>
        <strong>Ignite Feed</strong>
    </header>
    )
} 