import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCofirm: "",
  });

  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p style={{ margin: "15px" }}>
          Hi there, please login and start Setting your 🎯
        </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>{" "}
          <div className="from-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
