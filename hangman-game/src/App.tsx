import React, { useState, useEffect, useCallback } from "react";
import words from "./store/words.json";
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import './index.css'

function App() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const [guessWord, setGuessWord] = useState(randomWord);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);

  const incorrectLetters = currentGuess.filter(
    (letter) => !guessWord.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = guessWord
    .split("")
    .every((letter) => currentGuess.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (currentGuess.includes(letter) || isLoser || isWinner) return;

      setCurrentGuess((currentLetters: string[]) => [
        ...currentLetters,
        letter,
      ]);
    },
    [currentGuess, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [currentGuess]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setCurrentGuess([]);
      setGuessWord(randomWord);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="flex pl-16 flex-col gap-[2rem] mt-0 mx-5 items-center justify-center p-32">
      <div className="text-center">
        {isWinner && <div className="font-extrabold text-[green]">"Winner! - Refresh to try again"</div>}
        {isLoser && <div className="font-extrabold text-[red]">"Nice Try - Refresh to try again"</div>}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={currentGuess}
        wordToGuess={guessWord}
      />
      <div className="self-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={currentGuess.filter(letter =>
            guessWord.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
