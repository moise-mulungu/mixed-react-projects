import { classNames } from '@/ui/utils'

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
// MM: ???DM: is the children prop fine here?
/* 
yes. this is almost right, but best leave the 
{({ active }) => (
in the calling component, because that is what headlessui Menu.Item component expects as children
I'm going to code it, and you can learn from the changes, so please observe carefully what I did and ask questions here in "MM: ???DM:" if you don't understand why
*/
