function Avatar({ src, alt }) {
  return (
    // DM: todoMM - the CSS classes (avatar-btn, avatar) are not here. Find those CSS classes in JoR and implement them as described here: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css Your .module.css files should be in this directory. also, don't use "-" in the CSS class names, use camelCase. Do the same for 'avatar-set' class in ./index.jsx
    <button className="avatar-btn">
      <img className="avatar" src={src} alt={alt} />
    </button>
  )
}

export default Avatar
