import React from 'react'
import Main from './layout/Main'
import ItemContextProvider from './store/itemContent'

const App = () => {
  return (
    <>
      <ItemContextProvider>
          <Main/>
       </ItemContextProvider>
    </>
  )
}

export default App