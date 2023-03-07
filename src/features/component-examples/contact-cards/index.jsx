import ContactCard from './contact-card'

export default function ContactCards() {
  return (
    <>
      <h2>ContactCard</h2>
      <ul>
        {[
          { name: 'Moïse Mulungu', job: 'The Man', email: 'mm@acme.co' },
          { name: 'Duncan McKeever', job: 'Inventer of Torturous Exercises', email: 'dm@acme.co' },
        ].map((item, index) => {
          /* 
              DM: todoMM: btw, never use index as a 'key' prop, despite what reactjs says: https://reactjs.org/docs/lists-and-keys.html#keys (read this section). you can always use the uuid package if you have no unique value for the key, but in this case email serves as a perfect unique value, guaranteed unique in the whole world! good learning point - this "index for react key" issue is often an interview question. You'll notice that it is esLinted now that you have isLint extension.        
          
           */

          return <ContactCard key={index} name={item.name} job={item.job} email={item.email} />
        })}
      </ul>
    </>
  )
}
