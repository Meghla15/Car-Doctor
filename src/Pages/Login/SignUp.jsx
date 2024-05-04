import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/login/login.svg'
import UseAuth from '../../Hooks/UseAuth';


const SignUp = () => {
  const {createUser} = UseAuth()
    const handleSignUP = (e) =>{
        e.preventDefault ()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email, password)
         
        createUser (email, password) 
        .then(result =>{
          const user = result.user;
          console.log(user)
          .catch (error =>{
            console.log(error)
          })
        }) 

       
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
        <div className='border p-5 shrink-0 w-full max-w-sm '>
             <p className='font-semibold text-center text-3xl '>Sign Up</p>
          <div className="card shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSignUP} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-orange-500 text-white" type="submit" value='Sign Up' />
              </div>
              <p className='text-center mt-2 text-xs'>Or Sign Up With</p>

              <p>Already Have An Account? <span className='text-orange-600 font-bold'><Link to='/signIn'>Login </Link></span></p>
            </form>
          </div>
        </div>
          <div className="text-center lg:text-right">
            <img src={loginLogo} alt="" />
          </div>
        </div>
      </div>
    );
};

export default SignUp;