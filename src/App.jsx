import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import PageLoader from './components/PageLoader'


function App() {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
      setIsLoading(false);
  }, 6000);

  

  return (
    <>
    {isLoading ? (
				<div>
					<PageLoader />
				</div>
			) : (
				<div>
					 <Home />
				</div>
			)}
    
    
    </>
  )
}

export default App;