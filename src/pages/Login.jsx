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
  return (
    <div>Login</div>
  )
}

export default Login