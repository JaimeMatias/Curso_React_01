import React from 'react'
import AppRouter from './routers/AppRouter'
import AppTheme from './theme/AppTheme'
import { Provider } from 'react-redux'
import { store } from './store/store'
const JournalAPP = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>

    </Provider>

  )
}

export default JournalAPP
