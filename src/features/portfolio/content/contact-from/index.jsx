import { contactFormText } from '@/constants/portfolio/contact-form'

const ContactForm = ({ mySubmitForm }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
    /* DM: lets start over on this one. I'll leave a few notes, and we'll return to this later when you focus on this section of your portfolio.
           Sorry that I didn't follow up when I said I would. You can also remind me. At work, I can't tell my boss, "you never followed up" because he'd get mad and say, "well, remind me!" because, in the end, it is my responsibility to get the project done.
    */
    // DM: future plan: search "react send email" to find out how to send a gmail from a react component.

    // DM: events perform side effects, they do not return values. this is where you'd do whatever is needed to generate the email message. We'll use the referenced values later, though.
    //   event.currentTarget.elements.name.value,
    //   event.currentTarget.elements.email.value,
    //   event.currentTarget.elements.message.value
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
