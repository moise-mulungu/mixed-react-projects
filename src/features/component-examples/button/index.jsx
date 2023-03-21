function Button({ status, children }) {
  let themeColor

  if (status === 'cancel') {
    themeColor = 'red'
  } else if (status === 'confirm') {
    themeColor = 'green'
  } else {
    throw new Error('Unrecognized value')
  }

  return (
    <button
      style={{
        border: '2px solid',
        color: themeColor,
        borderColor: themeColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  )
}

export default Button