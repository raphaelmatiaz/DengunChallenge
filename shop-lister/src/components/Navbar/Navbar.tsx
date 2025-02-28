import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <Link href="/browse">
                <h1>Stuff Boutique</h1>
            </Link>
        </nav>
    )
}

export default Navbar