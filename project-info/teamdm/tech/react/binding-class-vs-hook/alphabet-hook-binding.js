const A = 65 // ASCII character code

// function component

function AlphabetHookBinding() {
    const [justClicked, setJustClicked] = React.useState(null);
    const letters = Array.from({length: 26}, (_, i) => String.fromCharCode(A + i));
    return (
      <div>
        Just clicked: {justClicked}
        <ul>
          {letters.map(letter =>
            <li key={letter} onClick={() => setJustClicked(letter)}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
}

export default AlphabetHookBinding
