import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center pt-16">
      <div className="w-full max-w-sm bg-white rounded border p-6 shadow-sm relative pt-16">
        <div className="w-full flex justify-center items-center absolute -top-12 left-0">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex justify-center items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="beer"
              className="h-14 pl-2 text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
              ></path>
            </svg>
          </div>
        </div>
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
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded shadow text-white border border-blue-600 hover:border-blue-700">
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
