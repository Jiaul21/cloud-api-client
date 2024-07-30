import RouterAll from './RouterAll'
import UserProvider, { UserContext } from './context/UserContext'


function App() {

  return (
    <>
    <h1>hello</h1>
      <UserProvider>
        <h2>hi</h2>
        <RouterAll />
      </UserProvider>
    </>
  )
}

export default App
