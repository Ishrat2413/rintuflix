import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

function App() {

  return (
    <>
      <div className='md:px-10 sm:px-5 items-center gap-3 text-xl my-3' >
        <Navbar />
      <AllRoutes />
      </div>
    </>
  )
}

export default App
