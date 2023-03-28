import styles from './Avatar.module.css'

function Avatar({ src, alt }) {
  return (
    // DM: todoMM - the CSS classes (avatar-btn, avatar) are not here. Find those CSS classes in JoR and implement them as described here: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css Your .module.css files should be in this directory. also, don't use "-" in the CSS class names, use camelCase. Do the same for 'avatar-set' class in ./index.jsx
    // I can't find the CSS classes in JoR. I'm not sure if they are in the repo or not. I'm going to leave this as is for now. Can you please check this out?
    // DM: do you see all the styling that you expect in the page?

    <button className={styles.avatar}>
      <img className={styles.child_avatar} src={src} alt={alt} />
    </button>
  )
}

export default Avatar
