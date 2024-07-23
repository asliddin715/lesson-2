import { useContext, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function login() {
    setError(null);
    setLoading();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
        throw new Error(error);
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="cont">
      <div className="todo">
        <img src="r.png" alt="loading" />
      </div>

      <div className="sign">

        <div className="form-cont">
          <h2 className="text">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles["form-control"]}>

              <input
                type='text'
                value={userName}
                id='userName'
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className={styles["form-control"]}>

              <input
                type='password'
                value={password}
                id='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className={styles.error}>Error: {error.message}</p>}
            <div>
              <button className="btn-log" type='submit' disabled={loading}>
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
          <div className="line-cont">
            <img src="li.svg" alt="loading" />
            <h3>or</h3>
            <img src="li.svg" alt="loading" />
          </div>
          <div className="icon-cont">
            <div className="google">
              <img src="google.svg" alt="laoding" />
              <h4>Google</h4>
            </div>
            <div className="google">
              <img src="face.svg" alt="laoding" />
              <h4>Facebook</h4>
            </div>
          </div>
            <div className="par">
              <p>Don't have an account? Sign Up</p>
            </div>
        </div>
      </div>
    </div>
  );
}
