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
          return <ContactCard key={index} name={item.name} job={item.job} email={item.email} />
        })}
      </ul>
    </>
  )
}
