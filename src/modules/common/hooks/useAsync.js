import { useState, useCallback, useEffect } from "react"

const useAsync = (asyncFuntion, immediate = false) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const run = useCallback(
    async (...data) => {
      setLoading(true)
      setError(null)
      try {
        const responseData = await asyncFuntion(...data)
        setResult(responseData)
        setLoading(false)
      } catch (error) {
        setError(error || "Something went wrong!")
        setLoading(false)
      }
    },
    [asyncFuntion]
  )
  useEffect(() => {
    immediate && run()
  }, [])
  return {
    run,
    loading,
    error,
    result,
  }
}

export default useAsync
