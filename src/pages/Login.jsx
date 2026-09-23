import { useState } from "react"

const Login = () => {
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (event)=>{
    const {name, value} = event.target
    setForm(prevForm=>({
      ...prevForm,
      [name]: value

    }))
  }

  const validate = ()=>{
    const newErrors ={}
    if(!form.email.trim()){
      newErrors.email = "Email is required"
    }else if(!form.email.includes("@")){
      newErrors.email ="Email is incorrect"
    }

    if(!form.password.trim()){
      newErrors.password ="Password is required"

    }else if(!form.password.length <6){
      newErrors.password ="Password must contain at least 6 characters"
    }

    return newErrors;
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length > 0){
      setSubmitted(false)
      return
    }
    console.log("Login Submitted",form);
    setSubmitted(true)
  }

  const handleReset = ()=>{
    setForm({
      email:"",
      password:""
    })
    setErrors({})
    setSubmitted(false)
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={form.email}
          />

          {errors.mail && <p className="error">{errors.email}</p>}
        </div>

<div>
          <label htmlFor="password">
            Password
          </label>
          <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={form.password}
          />

          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <button type="submit">
            Login
          </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
        </div>
        
      </form>
      {submitted && <p className="success">Login Submitted Successfully</p>}
    </div>
  )
}

export default Login