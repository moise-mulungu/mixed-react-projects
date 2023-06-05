export default function SkillData({ itemName, ItemIcon }) {
  return (
    <li key={itemName}>
      <a
        href="#"
        className="bg-gray-100 text-gray-700 group flex items-center px-4
                py-2 text-sm"
      >
        {ItemIcon ? (
          <ItemIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
        ) : null}
        {/* DM: Moise, ESLint is controlling the formatting now, instead of just Prettier. So, on this next line you previously had
        {itemName ? itemName : null}
        paste that below and see the linting error
        save the file to see how ESLint formats the correction for you automatically
         */}
        {itemName || null}
      </a>
    </li>
  )
}
