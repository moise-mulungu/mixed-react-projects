import { Html } from '@react-email/html'
// https://react.email/docs/integrations/nodemailer

export default function FormattedContactEmail(props) {
  // const { location, telephone, email, firstName, lastName, message } = props

  return (
    <Html lang="en">
      <div>{JSON.stringify(props, null, 2)}</div>
    </Html>
  )
}
