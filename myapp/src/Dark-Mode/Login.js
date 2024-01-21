import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="form animate__animated animate__bounceIn">
        <h1>Welcome Back</h1>
        <input
          type="mail"
          placeholder="E-mail"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="password"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <p>
          Don't have an Account?<Link style={{ color: "blue" }}>Sign up</Link>
        </p>
        <button className="btn ">Login &#128512;</button>
      </div>

      {/* <div
        className="animate__animated animate__bounceIn"
        style={{ height: "500px", width: "100%", backgroundColor: "black" }}
      >
        {" "}
        This is Animate page{" "}
      </div> */}
    </>
  );
}
export default Login;
