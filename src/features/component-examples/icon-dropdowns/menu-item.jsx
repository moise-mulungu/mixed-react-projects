import { classNames } from '@/ui/utils'
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'
const MenuItem = ({ active, label }) => (
  <a
    href="#"
    className={classNames(
      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      'group flex items-center px-4 py-2 text-sm'
    )}
  >
    <DocumentDuplicateIcon
      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
      aria-hidden="true"
    />
    {label}
  </a>
)

export default MenuItem
