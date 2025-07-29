import {useState, useCallback} from 'react'
import {put} from '../../server'
import * as D from '../../data'
import {Button} from '../../theme/daisyui'
import {useAuth} from '../../contexts'

export default function PutTest() {
  const {jwt, loggedUser} = useAuth()
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  
  const putTest = useCallback(() => {
    if (loggedUser === undefined) {
      put('/test/1234', D.makeRandomCard())
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setErrorMessage(error.message))
    } else {
      put('/test/1234', D.makeRandomCard(), jwt)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setErrorMessage(error.message))
    }
  }, [jwt, loggedUser])

  return (
    <div className="mt-4 mb-4">
      <div className="flex justify-center mb-4">
        <Button onClick={putTest} className="btn-primary">
          PUT ID 1234
        </Button>
      </div>
      <div className="mt-4 text-center">
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}
