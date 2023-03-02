export default function NumberedList({ children, className = '' }) {
  return (
    <ol
      className={`
        ${className} list-decimal list-inside 
        !mt-0 !mb-0 
        children:!pb-0
      `}
    >
      {children}
    </ol>
  )
}
