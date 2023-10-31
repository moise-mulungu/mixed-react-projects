// import { frameworks, frameworkTitle } from '@/constants/portfolio/content/skills'
// import SkillData from '@/ui/empty-starter-component'

// const Frameworks = () => {
//   return (
//     <section>
//       <h2 className="text-gray-700 group flex items-center px-4 py-2 text-3xl">{frameworkTitle}</h2>
//       <ul className="relative inline-block right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//         {frameworks.map(({ name, Icon }) => (
//           <SkillData key={name} itemName={name} ItemIcon={Icon} />
//         ))}
//       </ul>
//     </section>
//   )
// }

// export default Frameworks

import { frameworks, frameworkTitle } from '@/constants/portfolio/content/skills'
//(done) DM: todoMM: since the only place this is imported into is the portfolio, skill-data.js should be moved to a good place in the portfolio folder
import SkillData from '@/features/portfolio/skill-data'

const Frameworks = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-center text-gray-700 text-2xl font-medium py-2">{frameworkTitle}</h2>
      <ul className="flex flex-wrap justify-evenly items-center mt-2">
        {frameworks.map(({ name, Icon }) => (
          <li key={name} className="m-2 p-2 bg-gray-100 rounded-md shadow">
            <SkillData itemName={name} ItemIcon={Icon} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Frameworks
