export default function ListItem({ children, className }) {
  // note: I prefer bullets to start at the left margin, but when they follow a
  //       paragraph, it looks better if they start indented.
  //       Indentation is needed, anyway, so that child lists of an LI are indented
  //       !pl-5 in the top-level LIs to remove indentation
  return (
    <li
      className={`
        ${className}
        ${
          /* 
          not !important and also set in typography/prose so that
          it can be overridden in both places for the top level LIs 
          only by using !important
          */ ''
        }
        pl-5 
        !mt-0 !mb-0
        children:!pb-0
        children:!my-0
        last:!mb-0
        first:!mt-0
        marker:!mr-1
      `}
    >
      {children}
    </li>
  )
}

// howtotailwind: The JIT engine adds support for styling pseudo-elements like ::before, ::after, ::first-letter, ::first-line, ::marker, and ::selection: before:bg-blue-500
