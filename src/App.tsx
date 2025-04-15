import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './hooks';
import { fetchCurrentUser } from './redux/auth/actions';

import { Layout } from './components/Layout';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { UserInfoPage } from './pages/UserInfoPage';
import { AddUserPage } from './pages/AddUserPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const OneNewsPage = lazy(() => import('./pages/OneNewsPage'));
const AddNewsPage = lazy(() => import('./pages/AddNewsPage'));
const UpdateNewsPage = lazy(() => import('./pages/UpdateNewsPage'));
const AllUsersPage = lazy(() => import('./pages/AllUsersPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route 
            path='/login' 
            element={ <RestrictedRoute redirectTo='/' component={<LoginPage />} /> } 
          />
          <Route path='/register' 
            element={ <RestrictedRoute redirectTo='/' component={<RegisterPage />} />} 
          />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/add-news' 
            element={<PrivateRoute redirectTo='/login' component={<AddNewsPage />} />} 
          />
          <Route path='/news/:newsUrl' element={<OneNewsPage />} />
          <Route path='/news/update/:newsId' element={
            <PrivateRoute redirectTo='/login' component={<UpdateNewsPage />} />
          } />
          <Route path='/users' element={
            <PrivateRoute redirectTo='/' component={<AllUsersPage />} />
          } />
          <Route path='/users/:userId' element={
            <PrivateRoute redirectTo='/' component={<UserInfoPage />} />
          } />
          <Route path='/users/add' element={
            <PrivateRoute redirectTo='/' component={<AddUserPage />} />
          } />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App