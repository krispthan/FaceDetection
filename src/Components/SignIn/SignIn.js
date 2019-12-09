import React from "react";
const SignIn = ({onRouteChange}) => {
    return (
        <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw shadow-5 center">
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f5 fw6 ph0 mh0 white">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy white f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
            type="submit"
             value="Sign in"
             onClick={()=> onRouteChange("home")}
             />
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=> onRouteChange("register")} href="#0" className="f6 link dim black db white pointer">Register</p>
           
          </div>
        </form>
      </main>
      </article>
    )
}
export default SignIn;