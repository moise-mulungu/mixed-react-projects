import Hello from './hello'
import ContactCard from './contact-card'

// DM: highly irritating that often 'module not found' error when the real problem is in the module, syntax or other error ...
// DM: todoDM: investigate the above error - am I correct about 'module not found' - likely best upgrade to NextJS v13 first
// import Heading from '@ui/heading'
// import Divider from '@ui/divider'

/*

DM: moise, just follow this same pattern whenever you have new examples from Joy of React. this will b a place to make sure these components work and to tweat/experiment with them.

DM: TS clears out all the default browser CSS, such as h1. This insures that TS looks the same in all browsers, but you have to write all your own TW even for headers
DM: todoDM: bring over my Header component

*/

export default function ComponentExamples() {
  const data = [
    {name:"Moïse Mulungu", job:"The Man", email:"mm@acme.co"},
    {name:"Duncan McKeever", job:"Inventer of Torturous Exercises", email:"dm@acme.co"}
  ]
  return (
    <div>
      {/* <Heading level="1">Component Examples</Heading> */}
      <h2>Hello</h2>
      <Hello />
      <Hello name="Moïse" className=" bg-slate-100" />
      {/* MM: toDM: as i did not map the data object, can i use {data.name} for name='Moise'? and add className as props to the ComponentExamples? */}

      <h2>ContactCard</h2>
      <ul>
        {data.map((item, index) => (
          <ContactCard 
          key={index}
          name={item.name}
          job={item.job}
          email={item.email}
          />
        ))}
        {/* <ContactCard name="Moïse Mulungu" job="The Man" email="mm@acme.co" />
        <ContactCard
          name="Duncan McKeever"
          job="Inventer of Torturous Exercises"
          email="dm@acme.co"
        />
        I tried to replace the above code with mapping a data object that holds the key-value pairs of Moise and Duncan */}
      </ul>
    </div>
  )
}
