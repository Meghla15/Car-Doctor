import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/login/login.svg'
const handleSignIn = e =>{
    e.preventDefault()
}

const SignIn = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
        <div className='border p-5 shrink-0 w-full max-w-sm '>
             <p className='font-semibold text-center text-3xl '>Login</p>
          <div className="card shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSignIn} className="card-body">
            
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
                <input className="btn bg-orange-500 text-white" type="submit" value='Sign In' />
              </div>
              <p className='text-center mt-2 text-xs'>Or Sign Up With</p>

              <p className='text-center'>Have an Account? <span className='text-orange-600 font-bold'><Link to='/signUp'>Sign Up</Link></span></p>
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

export default SignIn;