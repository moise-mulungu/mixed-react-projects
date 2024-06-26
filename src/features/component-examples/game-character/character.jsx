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
  }
  console.log({ setStrength })

  return (
    <div className="wrapper">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      Str: {strength}
      <br />
      Dex: {dexterity}
      <br />
      Int: {intelligence}
      <br />
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={triggerLevelUp}
      >
        Level Up
      </button>
    </div>
  )
}

export default Character
