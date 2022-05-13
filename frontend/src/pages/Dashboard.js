import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, user]);

  return (
    <>
      <section>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
    </>
  );
}

export default Dashboard;
