import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./Register.scss";

const Register = () => {

  const { postUser, users } = useContext(UserContext);

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");

      setBtnDisabled(true);
    } else {
      setMessage(null);

      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(data)
    clearState();
  };

  return (
    <div className="regForm">
      <form onSubmit={handleSubmit}>

        <div className="campos">

          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              placeholder="name"
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div>

            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div>

            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={handleInputChange}
              name="password"
            />
          </div>
        </div>
        <div id="but">
          <button type="submit" disabled={btnDisabled}>
            Sig In
          </button>
        </div>
      </form>
      {message}
    </div>
  );
};

export default Register;