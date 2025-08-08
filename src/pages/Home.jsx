import React from 'react'
import { apiSlice, useGetUserQuery, useLoginMutation, useLogoutMutation } from '../app/api/apiSlice'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import  {useDispatch} from 'react-redux'
import Nav from '../component/Nav';
import { Outlet } from 'react-router-dom';
import LoadingSpinner from '../component/LoadingSpinner';
import Footer from '../component/Footer';

const Home = ({data, isLoading, isError, refetch}) => {

  const dispatch = useDispatch()
  const [logout, {isLoading: logoutLoading, isError: logoutError}] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoading && isError){
      navigate('/login')};
  },[isError, navigate])

  const handleLogout = async() =>{
    try {
      const logoutUser = await logout().unwrap();
      dispatch(apiSlice.util.resetApiState())
      navigate('/login')
      toast.success("Logout successiful.")
    } catch (error) {
      toast.error("Logout failed, try again later.")
    }
  }
  

  if(isLoading)return <LoadingSpinner />
  return (
    <div>
      <Nav handleLogout={handleLogout}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home