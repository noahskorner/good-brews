import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center pt-6 px-4">
      <div className="w-full max-w-md bg-white rounded border p-6 shadow-sm relative">
        <div className="w-full space-y-6">
          <h1 className="text-2xl font-semibold">Login</h1>
          <div className="w-full">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="text"
              className="w-full rounded p-2 border bg-gray-50"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded p-2 border bg-gray-50"
            />
          </div>
          <button className="w-full btn-primary py-2 shadow ">
            Login
          </button>
          <Link to="/register" className="text-sm hover:underline block">Need an account?</Link>
        </div>
      </div>
      <div className="w-full max-w-sm flex justify-between my-2 p-2">
        <p className="text-gray-600 hover:underline text-sm cursor-pointer">
          Terms & Conditions
        </p>
        <p className="text-gray-600 hover:underline text-sm cursor-pointer">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
