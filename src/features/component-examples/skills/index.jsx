import Item from '../../../component-examples/complex-object/item'
import SkillData from '@/ui/skill-data'
import { skills } from '@/constants/portfolio/content/skills'

export function SkillSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      {/* <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-2xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hello
          </h2>
          <p className="mt-6 text-2xl leading-8 text-gray-900">{contentAboutHeaderText}</p>
        </div>
        <ResumeButton />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {skills?.map(({ languages, frameworks, otherSkills }) => (
            <div className="relative inline-block  right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {languages?.map(({ title, items }) => {
                return (
                  <Item
                    title={title}
                    items={items?.map(({ name, Icon }) => {
                      return <SkillData itemName={name} ItemIcon={Icon} />
                    })}
                  />
                )
              })}
              {frameworks?.map(({ title, items }) => {
                return (
                  <Item
                    title={title}
                    items={items?.map(({ name, Icon }) => {
                      return <SkillData itemName={name} ItemIcon={Icon} />
                    })}
                  />
                )
              })}
              {otherSkills?.map(({ title, items }) => {
                return (
                  <Item
                    title={title}
                    items={items?.map(({ name, Icon }) => {
                      return <SkillData itemName={name} ItemIcon={Icon} />
                    })}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
