export default function Button({ status, children }) {
  const styles = {
    cancel: {
      color: 'red',
      borderColor: 'red',
    },
    confirm: {
      color: 'green',
      borderColor: 'green',
    },
  }[status]
  // keyValueMap: avoids control-flow boilerplate which is hard to read; configured; declarative
  // DM: todoDM: write this somewhere as a technique: naming template: keyValueMap

  console.log({ status, styles })
  return (
    <button
      style={{
        border: '2px solid',
        color: styles?.color,
        borderColor: styles?.borderColor,
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
