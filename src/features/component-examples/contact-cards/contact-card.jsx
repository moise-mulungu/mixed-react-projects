export default function ContactCard({ name, job, email }) {
  // as noted, TW removes all built-in styles. don't worry about styling this for now, we'll make a component for this sort of thing in src/ui and add the TW utility classes there
  return (
    <li className="">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  )
}
