import { useLocation } from 'react-router';
import SideBar from './components/Layout/sideBar';

function App() {
  const location = useLocation();
  return (
    <>
      <SideBar />
    </>
  )
}

export default App
