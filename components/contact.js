import Social from "components/social"
import styles from 'styles/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}>Contact</h3>
            <Social />
            <address>ktc2243030002@edu.kyoto-tech.ac.jp</address>
        </div>
    )
}