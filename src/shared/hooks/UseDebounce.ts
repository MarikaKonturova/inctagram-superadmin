import { useEffect, useState } from 'react'

export const UseDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>('')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debounceValue
}
