import EachItem from '@/ui/starter-component'
const skills = [
  {
    framework: [
      { title: 'framework' },
      {
        items: [
          'Ruby on Rails',
          'React',
          'Redux',
          'CSS',
          'Capybara',
          'RSpec',
          'Selenium',
          'PostgreSQL',
        ],
      },
    ],
  },
  { language: [{ title: 'Languages' }, { items: ['JavaScript', 'CSS'] }] },
  { otherSkill: [{ title: 'Other Skills' }, { items: ['React', 'Redux', 'CSS', 'RSpec'] }] },
]

// DM: todoMM: one function per file
// This is just a test to see if I can get the data to render from an array of objects
export default function ComplexObject() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              I am Moise
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Your text goes here ...</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-3.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ framework, language, otherSkill }) => (
              <div className="flex flex-col bg-gray-400/5 p-8">
                {/* <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd> */}
                {/* 
                  make the first one look good
                  extract repeated code to a separate function (Component)
                  */}
                {framework?.map(({ title, items }) => {
                  return (
                    // <div>
                    //   <dt className="mb-2 text-2xl font-semibold leading-6 text-gray-600">
                    //     {title}
                    //   </dt>
                    //   <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
                    //     {items?.map((item) => {
                    //       return <div>{item}</div>
                    //     })}
                    //   </dd>
                    // </div>
                    <EachItem title={title} items={items} />
                  )
                })}
                {language?.map(({ title, items }) => {
                  return (
                    // <div>
                    //   <dt className="text-2xl font-semibold leading-6 text-gray-600">{title}</dt>
                    //   <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
                    //     {items?.map((item) => {
                    //       return <div>{item}</div>
                    //     })}
                    //   </dd>
                    // </div>
                    <EachItem title={title} items={items} />
                  )
                })}
                {otherSkill?.map(({ title, items }) => {
                  return (
                    // <div>
                    //   <dt className="text-2xl font-semibold leading-6 text-gray-600">{title}</dt>
                    //   <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
                    //     {items?.map((item) => {
                    //       return <div>{item}</div>
                    //     })}
                    //   </dd>
                    // </div>
                    <EachItem title={title} items={items} />
                  )
                })}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
