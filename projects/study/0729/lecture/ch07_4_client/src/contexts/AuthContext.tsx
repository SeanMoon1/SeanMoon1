import type {FC, PropsWithChildren} from 'react'
import {createContext, useContext, useState, useCallback, useEffect} from 'react'
import * as U from '../utils'
import {post} from '../server'

export type LoggedUser = {email: string; password: string}

type Callback = () => void

type AuthProviderProps = {}

type ContextType = {
  jwt?: string
  loggedUser?: LoggedUser
  signup: (email: string, password: string, callback?: Callback) => void
  login: (email: string, password: string, callback?: Callback) => void
  logout: (callback?: Callback) => void
}

const AuthContext = createContext<ContextType>({} as ContextType)

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({children}) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | undefined>(undefined)
  const [jwt, setJwt] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const signup = useCallback((email: string, password: string, callback?: Callback) => {
    const user = {email, password}

    post('/auth/signup', user)
    .then(res => res.json())
    .then((result: {ok: boolean; body?: string; errorMessage?: string}) => {
      const {ok, body, errorMessage} = result
      if (ok) {
        U.writeStringP('jwt', body ?? '').finally(() => {
          setJwt(body ?? '')
          setLoggedUser(notUsed => user)
          U.writeObjectP('user', user).finally(() => callback && callback())
        })
      } else setErrorMessage(errorMessage ?? '')
    })
    .catch((e: Error) => setErrorMessage(e.message))
  }, [])

  const login = useCallback((email: string, password: string, callback?: Callback) => {
    const user = {email, password}
    
    post('/auth/login', user)
    .then(res => res.json())
    .then((result: {ok: boolean; body?: string; errorMessage?: string}) => {
      if (result.ok) {
        // 새로운 JWT 토큰을 저장
        const newJwt = result.body ?? ''
        U.writeStringP('jwt', newJwt).finally(() => {
          setJwt(newJwt)
          setLoggedUser(notUsed => ({email, password}))
          U.writeObjectP('user', user).finally(() => callback && callback())
        })
      } else {
        setErrorMessage(result.errorMessage ?? '')
      }
    })
    .catch((e: Error) => setErrorMessage(e.message ?? ''))
  }, [])
  
  const logout = useCallback((callback?: Callback) => {
    setJwt(notUsed => '')
    setLoggedUser(undefined)
    callback && callback()
  }, [])

  useEffect(() => {
    const deleteToken = false //localStorage의 jwt값을 초기화할 때 사용
    if (deleteToken) {
      U.writeStringP('jwt', '')
      .then(() => {})
      .catch(() => {})
    } else {
      U.readStringP('jwt')
    .then(jwt => setJwt(jwt ?? ''))
    .catch(() => {
      /* 오류 무시 */
    })
  }
  }, [])

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage)
      setErrorMessage(notUsed => '')
    }
  }, [errorMessage])

  const value = {
    jwt,
    errorMessage,

    loggedUser,
    signup,
    login,
    logout
  }
  return <AuthContext.Provider value={value} children={children} />
}

export const useAuth = () => {
  return useContext(AuthContext)
}
