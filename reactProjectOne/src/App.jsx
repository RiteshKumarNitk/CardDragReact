import './App.css'
import Product from './Component/Product'
import Background from './Component/Background'
import ForeGround from './Component/ForeGround'

function App() {

  return (
      <div className='relative w-full h-screen bg-zinc-800'>
          <Background/>
          <ForeGround/>
      </div>
  )
}

export default App
