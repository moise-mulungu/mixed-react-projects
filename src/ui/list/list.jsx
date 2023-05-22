export default function List({ children, className = '' }) {
  return (
    <ul
      className={`
        ${className} list-disc list-inside 
        !mt-0 !mb-0 ${/* remove ! if not needed, maybe from my repo to override something */}
        children:!pb-0
      `}
    >
      {children}
    </ul>
  )
}
// howtocss: manually style a list tag in a tailwind repo: style="list-style-type: disc; list-style-position: inside;"
