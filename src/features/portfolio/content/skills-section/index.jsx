// import { contentAboutHeaderText } from '@/constants/portfolio/content/skills'
// import ResumeButton from './resume-button'
// import Languages from './languages'
// import Frameworks from './frameworks'
// import OtherSkills from './other-skills'

// export default function SkillsSection(props) {
//   const { _ = {} } = props
//   return (
//     <section>
//       <div>
//         <h2 className="mt-3 text-center sm:mt-5 ml-4 text-2xl font-medium text-gray-500 hover:text-gray-700">
//           {contentAboutHeaderText}
//         </h2>
//       </div>
//       <ResumeButton buttonText = "Get my Resume"/>
//       <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
//         <Languages />
//         <Frameworks />
//         <OtherSkills />
//       </div>
//     </section>
//   )
// }
import { contentAboutHeaderText } from '@/constants/portfolio/content/skills'
import ResumeButton from './resume-button'
import Languages from './languages'
import Frameworks from './frameworks'
import OtherSkills from './other-skills'

export default function SkillsSection(props) {
  const { _ = {} } = props

  return (
    <section className="bg-gray-100 py-10 sm:py-20 px-4 sm:px-10">
      <div>
        <h2 className="mt-3 text-center sm:mt-5 ml-4 text-2xl font-semibold text-indigo-600 hover:text-gray-700">
          {contentAboutHeaderText}
        </h2>
      </div>
      <div className="mt-4 sm:mt-8 mb-8 sm:mb-16 text-center">
        <ResumeButton buttonText="Get my Resume" />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-3 xl:gap-x-8">
        <div className="rounded-lg shadow-md bg-white p-8">
          <Languages />
        </div>
        <div className="rounded-lg shadow-md bg-white p-8">
          <Frameworks />
        </div>
        <div className="rounded-lg shadow-md bg-white p-8">
          <OtherSkills />
        </div>
      </div>
    </section>
  )
}
