import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  function handleChange(e) {

    const value = e.target.value;

    setUser({
      ...user,
      [e.target.name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    const userData = {
      userName: user.userName,
      email: user.email,
      password: user.password
    }

    console.log(userData)

    axios({
      method: "post",
      url: "http://localhost:8000/login",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: userData
    })
      .then((res) => {
        console.log(res)
        navigate("/")
      })
      .catch((err) => { console.log(err) })
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor=""> UserName : </label>
        <input type="text" name="userName" onChange={handleChange} />

        <label htmlFor=""> Email : </label>
        <input type="email" name="email" onChange={handleChange} />

        <label htmlFor="">Password : </label>
        <input type="password" name="password" onChange={handleChange} />

        <button type="submit"> Login </button>
      </form>
    </>
  )
}

export default Login