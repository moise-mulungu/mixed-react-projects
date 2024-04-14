import styles from './side-note.module.css'

function SideNote({ type, title, children }) {
  const className = `${styles.wrapper} ${styles[type]}`
  return (
    <aside className={className}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  )
}

export default SideNote
