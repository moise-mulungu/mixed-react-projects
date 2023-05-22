export default function Divider({
  children,
  divideClass = 'divide-y-2', // divide-y-2|4|8
  className = '', // example: children:py-3
}) {
  return <div className={`h-1 bg-slate-500 my-4`}>{children}</div>
  // DM: todoDM: divide-y not working, this may require a plugin, check VoT, check TW first
  // return <div className={`${className} ${divideClass}  divide-gray-200 `}>{children}</div>
}

// DM: todoDM: install the dark plugin: dark:divide-gray-700
