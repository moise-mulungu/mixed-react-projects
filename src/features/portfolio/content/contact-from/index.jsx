import { contactFormText } from '@/constants/portfolio/contact-form'

const ContactForm = ({ mySubmitForm }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
    // DM: events perform side effects, they do not return values. this is where you'd do whatever is needed to generate the email message. Search "react send email" to find out how.
    return mySubmitForm(
      event.currentTarget.elements.name.value,
      event.currentTarget.elements.email.value,
      event.currentTarget.elements.message.value
    )
    // MM: ???DM: when trying to submit this form, am getting the following error: "TypeError: mySubmitForm is not a function". How can I fix this?
    // DM: find out what is mySubmitForm. console.log it. questions to ask: where is it defined? It is passed as a prop, so follow it back to where the <ContactForm component is used.
    // DM: question to ask: what do you want to happen when user clicks the submit button?
    //(done) DM: todoMM: wrap up this issue described just above. by "wrap up" I mean let's not leave it hanging. solve the issue, or ask a question, mark it done, etc.
    // DMa; todoMM: check all "MM: ???DM" to see see if they are resolved. i left this as i was waiting for your suggestion on how to fix this issue, but since that day you have never told me what to do to fix this issue. the last time you told me we should discuss about it on the last Monday, but it's two weeks now.
  }
  return (
    <div className="use tw utility classes here">
      <h2 className="text-2xl font-bold text-gray-900">{contactFormText}</h2>
      <form
        onSubmit={onSubmitHandler}
        name="submit"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="flex flex-col w-full max-w-lg mx-auto space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-900">
            Enter Text Here
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
