// import { otherSkillsTitle, otherSkills } from '@/constants/portfolio/content/skills'
// import SkillData from '@/ui/empty-starter-component'

// const OtherSkills = () => {
//   return (
//     <div>
//       <h2 className="text-gray-700 group flex items-center px-4 py-2 text-3xl">
//         {otherSkillsTitle}
//       </h2>
//       <ul className="relative inline-block right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//         {otherSkills.map(({ name, Icon }) => (
//           <SkillData key={name} itemName={name} ItemIcon={Icon} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default OtherSkills

import { otherSkillsTitle, otherSkills } from '@/constants/portfolio/content/skills'
import SkillData from '@/features/portfolio/skill-data'

const OtherSkills = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-center text-gray-700 text-2xl font-medium py-2">{otherSkillsTitle}</h2>
      <ul className="flex flex-wrap justify-evenly items-center mt-2">
        {otherSkills.map(({ name, Icon }) => (
          <li key={name} className="m-2 p-2 bg-gray-100 rounded-md shadow">
            <SkillData itemName={name} ItemIcon={Icon} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OtherSkills
