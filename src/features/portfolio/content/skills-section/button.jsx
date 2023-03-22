const Button = () => {
  const handleClick = () => {
    // e.preventDefault() , may i call preventDefault here while i just called window.open ?
    // the handleClick has to send me to the resume page
    const myResume =
      'https://docs.google.com/document/d/14Jk9jCBOfWHd7OEEpFVq7Jjxd08DBk1JVyXch1i_MqM/edit'
    window.open(myResume, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Get my Resume
    </button>
  )
}

export default Button
