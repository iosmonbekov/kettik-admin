export const SignIn = () => {
    return <div className="container sm p-5">
        <form>
            <div className="form-outline mb-4">
                <label className="form-label" >Email address</label>
                <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" >Password</label>
                <input type="password" id="form2Example2" className="form-control" />
            </div>

            <div className="row mb-4">
                <div className="col">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>


            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
        </form>
    </div>
}

