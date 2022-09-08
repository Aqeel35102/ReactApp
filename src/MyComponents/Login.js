import React,{useState,useEffect} from 'react'

export default function Login() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            alert("Please enter email and password");
            return;
        }else{
            console.log('email',email,'password',password)

            setEmail('');
            setPassword('');

        }

    }
  return (
    <div className='my-3 card p-3 justify-content-center container col-md-6'>
      <form onSubmit={onSubmit}>
    <div className="form-group">
        <label htmlFor="inputEmail">Email : </label>
        <input required type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="inputEmail" placeholder="Email" />
    </div>
    <div className="form-group">
        <label htmlFor="inputPassword">Password : </label>
        <input required type="password" className="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)} id="inputPassword" placeholder="Password" />
    </div>
    
    <button type="submit" className="btn btn-primary">Sign in</button>
</form>
    </div>
  )
}
