export default function Divider({
  children,
  divideClass = 'divide-y', // divide-y-2|4|8
  className = '', // example: children:py-3
}) {
  return <div className={`${className} ${divideClass} divide-gray-200 `}>{children}</div>
}

// DM: todoDM: install the dark plugin: dark:divide-gray-700
