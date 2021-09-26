import React, {FC, useEffect, useState} from "react"
import useAsyncEffect from "use-async-effect/types"

export const RandomWord: FC = () => {
  const [word, setWord] = useState<string | undefined>()
  const [loadData, setLoadData] = useState<boolean>(true)
  
  useAsyncEffect(async isMounted => {
    if(!loadData) {
      return
    }
    setLoadData(false)
    const response = await fetch(process.env.REACT_APP_API_URL as string)
    const data = await response.json()

    if(isMounted()) {
      setWord(data.word)
    }
  }, [loadData])

  return (
    <>
      <div>{word}</div>
      <button onClick={() => setLoadData(true)}>Random word</button>
    </>
  )
}