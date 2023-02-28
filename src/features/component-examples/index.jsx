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
  // DM: good! I'm going to move this down below, because this is going to be a big component with lots of JSX for different examples. best to keep similar things together
  // const data = [
  //   {name:"Moïse Mulungu", job:"The Man", email:"mm@acme.co"},
  //   {name:"Duncan McKeever", job:"Inventer of Torturous Exercises", email:"dm@acme.co"}
  // ]
  return (
    <div>
      {/* <Heading level="1">Component Examples</Heading> */}
      <h2>Hello</h2>
      <Hello />
      <Hello name="Moïse" className=" bg-slate-100" />
      {/* MM: ???DM: as i did not map the data object, can i use {data.name} for name='Moise'? and add className as props to the ComponentExamples? 
      DM: you did map it. you can destructure name, job, email from item, though, try that:
      ].map(({name, job, email}, index) => (
      */}

      <h2>ContactCard</h2>
      <ul>
        {[
          { name: 'Moïse Mulungu', job: 'The Man', email: 'mm@acme.co' },
          { name: 'Duncan McKeever', job: 'Inventer of Torturous Exercises', email: 'dm@acme.co' },
        ].map((item, index) => (
          {/* 
              DM: todoMM: btw, never use index as a 'key' prop, despite what reactjs says: https://reactjs.org/docs/lists-and-keys.html#keys (read this section). you can always use the uuid package if you have no unique value for the key, but in this case email serves as a perfect unique value, guaranteed unique in the whole world! good learning point - this "index for react key" issue is often an interview question. You'll notice that it is esLinted now that you have isLint extension.        
          
           */}
          <ContactCard key={index} name={item.name} job={item.job} email={item.email} />
        ))}
      </ul>
    </div>
  )
}
