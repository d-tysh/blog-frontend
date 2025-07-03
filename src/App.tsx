import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './hooks';
import { fetchCurrentUser } from './redux/auth/actions';

import { OnlineStatusManager } from './components/OnlineStatusManager';
import { AppRoutes } from './AppRoutes';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <>
      <OnlineStatusManager />
      <AppRoutes />
      <ToastContainer />
    </>
  )
}

export default App