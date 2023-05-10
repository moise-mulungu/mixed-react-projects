export default function SkillData({ itemName, ItemIcon }) {
  return (
    <li key={itemName}>
      <a
        href="#"
        className="bg-gray-100 text-gray-700 group flex items-center px-4
                py-2 text-sm"
      >
        {ItemIcon ? (
          <ItemIcon
            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ) : null}
        {itemName ? itemName : null}
      </a>
    </li>
  )
}
