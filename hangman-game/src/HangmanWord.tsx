type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
  }
  
  export function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
  }: HangmanWordProps) {
    return (
      <div
        className="flex gap-[0.25em] font-bold uppercase text-[4rem] font-mono"
      >
        {wordToGuess.split("").map((letter, index) => (
          <span className= "border-b-[solid] border-b-black border-b-[0.1em]" 
           key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    )
  }