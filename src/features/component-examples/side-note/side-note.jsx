import styles from './side-note.module.css'
/* 

great job on this component
'code spell checker' extension is underlining Sidenote because the 'n' is not capitalized
'code spell checker' understands camelCase, and it will spell check 'side' and 'note' separately
but, if you don't use camelCase, then 'code spell checker' checks 'Sidenote' as one word, but it's not a word
I know that probably in the JoR example the 'n' was not capitalized (which is sloppy, btw), but I want to show you an example of how 'code spell checker' helps you adhere to good coding standards
DM: todoMM: capitalize the 'n' everywhere Sidenote is used. Capitalizing 'Note' also correlates correctly with the '-' in your filename, side-note.jsx
*/
function Sidenote({ title, children }) {
  return (
    <aside className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  )
}

export default Sidenote
