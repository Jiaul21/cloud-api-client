import RouterAll from './router/RouterAll'
import UserProvider, { UserContext } from './context/UserContext'


function App() {

  return (
    <>
      <UserProvider>
        <RouterAll />
      </UserProvider>
    </>
  )
}

export default App
