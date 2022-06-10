import './App.css';
import Input from './components/Input';
import { useMediaQuery } from '@mui/material';


function App() {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <>
    
      <div className='rowC'>
        {!matches && <Input />}
        {matches && 
          <>
          <Input/>
      <Input />
          </>
        }
    
      </div>
      
      
    </>

  )
}

export default App;
