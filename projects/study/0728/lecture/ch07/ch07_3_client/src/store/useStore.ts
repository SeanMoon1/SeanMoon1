import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import logger from 'redux-logger'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware()
      if (useLogger) {
        middleware.push(logger)
      }
      return middleware
    }
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
