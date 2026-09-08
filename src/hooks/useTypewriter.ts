import { useEffect, useState } from 'react'

const TYPING_MS = 90
const DELETING_MS = 45
const PAUSE_MS = 1600

type TypingState = {
  index: number
  length: number
  deleting: boolean
}

const initialState: TypingState = { index: 0, length: 0, deleting: false }

function nextState(state: TypingState, phraseLength: number): TypingState {
  if (!state.deleting) {
    return state.length === phraseLength
      ? { ...state, deleting: true }
      : { ...state, length: state.length + 1 }
  }

  return state.length === 0
    ? { index: state.index + 1, length: 0, deleting: false }
    : { ...state, length: state.length - 1 }
}

/** Cycles through phrases with a type/delete effect, like a shell prompt. */
export function useTypewriter(phrases: readonly string[]) {
  const [state, setState] = useState(initialState)
  const phrase = phrases[state.index % phrases.length]

  useEffect(() => {
    const waiting = !state.deleting && state.length === phrase.length
    const delay = waiting ? PAUSE_MS : state.deleting ? DELETING_MS : TYPING_MS
    const timeout = setTimeout(() => setState((current) => nextState(current, phrase.length)), delay)

    return () => clearTimeout(timeout)
  }, [phrase, state])

  return phrase.slice(0, state.length)
}
