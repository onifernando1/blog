import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, setState } from "react";
import LogInForm from "../components/LogInForm";
import { useNavigate } from "react-router-dom";
import User from "./User";

function Profile(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/login`)
      .then((response) => {
        console.log("CURRENT USER response:", response);
        setCurrentUser(response.data.user);
        console.log(`CURRENT USER IS ${currentUser}`);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    axios
      .delete("http://localhost:9000/users/logout")
      .then((response) => {
        console.log("Logout response:", response);
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <User />
        </div>
      ) : (
        <div>
          <div className="user-stuff">
            <div className="login">
              <Link to="/login">Login</Link>
            </div>
            <div className="signup">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : currentUser ? (
              <>
                <div>Logged in as: {currentUser._id}</div>
                <div>
                  <button onClick={logout}>Log out </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <LogInForm />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
