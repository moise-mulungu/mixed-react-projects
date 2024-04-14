import styles from './avatar.module.css'

function Avatar({ src, alt }) {
  return (
    <button className={styles.avatar}>
      <img className={styles.child_avatar} src={src} alt={alt} />
    </button>
  )
}

export default Avatar
