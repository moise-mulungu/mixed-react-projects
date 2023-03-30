import React from 'react'

function Character() {
  const [strength, setStrength] = React.useState(6)
  const [dexterity, setDexterity] = React.useState(9)
  const [intelligence, setIntelligence] = React.useState(15)

  function triggerLevelUp() {
    const nextStrength = strength + 1
    const nextDexterity = dexterity + 2
    const nextIntelligence = intelligence + 3

    setStrength(nextStrength)
    setDexterity(nextDexterity)
    setIntelligence(nextIntelligence)

    // DM: todoMM: excellent! can you show the current state in the browser next to the character image, not just in the alert?
    window.alert(`
      Congratulations! Your hero now has the following stats:
      Str: ${nextStrength}
      Dex: ${nextDexterity}
      Int: ${nextIntelligence}
    `)
  }

  return (
    <div className="wrapper">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <button onClick={triggerLevelUp}>Level Up</button>
    </div>
  )
}

export default Character
