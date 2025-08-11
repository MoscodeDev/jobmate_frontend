import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Learn from "./pages/Learn";
import Forum from "./pages/Forum";
import Overview from "./pages/Overview";
import Bookmark from "./pages/Bookmark";
import { useGetUserQuery } from "./app/api/apiSlice";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const { data, isLoading, isError, refetch } = useGetUserQuery();

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                isLoading={isLoading}
                isError={isError}
                refetch={refetch}
              />
            }
          >
            <Route path="" element={<Overview />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route
              path="/profile"
              element={<Profile user={data} refetch={refetch} />}
            />
            <Route path="/learn" element={<Learn />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Route>
          <Route
            path="/login"
            element={
              <Login
                user={data}
                loadingUser={isLoading}
                userError={isError}
                refetch={refetch}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register data={data} loadingUser={isLoading} refetch={refetch} />
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </>
  );
}

export default App;
