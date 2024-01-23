import { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

function Signup() {
    
   const[name, setName] = useState()
   const[email, setEmail] = useState()
   const[password, setPassword] = useState()

   const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('', {name, email, password})
    .then(result => console.log(result))
    .catch(err=> console.log())

   }
    return(
        <div className=''>
<div className=''>
  <h2>register</h2>
  <form onSubmit={handleSubmit}>
    <div className='mb-3'>
        <label htmlFor='email'>
            <strong>name</strong>
        </label>
     <input type='text' placeholder='entrer name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setName(e.target.value)}/>
    </div>
    
    <div className='mb-3'>
        <label htmlFor='email'>
            <strong>email</strong>
        </label>
     <input type='text' placeholder='entrer email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className='mb-3'>
        <label htmlFor='email'>
            <strong>password</strong>
        </label>
     <input type='text' placeholder='entrer password' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
    </div>
     <button type='submit' className='btn btn-successw-100 rounded'> registrer</button>
  </form>
    <p>already have account</p>
    <link to=" /login" className=''>login</link>
</div>
        </div>
        
    );
}

export default Signup;



















  

