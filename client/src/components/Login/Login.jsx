import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container flex items-center flex-col gap-[50px]">
      <div className="login-logo mr-[110px]">
        <p className="Logo mt-[50px] text-primary font-fredoka font-bold text-[32px]">
          Logga in
        </p>
        <p className="text-stuckgrey">
          Ny användare?{" "}
          <span className="text-luckyblue underline cursor-pointer">
            <Link to="/register">skapa ett konto</Link>
          </span>
        </p>
      </div>
      <form className=" flex flex-col gap-[30px]">
        <input
          className="w-[327px] h-[64px] rounded-[15px] border border-stuckgrey"
          type="text"
          id="username"
          placeholder="E-post eller användarnamn"
        />
        <input
          className="w-[327px] h-[64px] rounded-[15px] border border-stuckgrey"
          type="text"
          id="password"
          placeholder="Lösenord"
        />
        <p className="text-luckyblue underline cursor-pointer">
          Glömt lösenordet?
        </p>
        <button
          className="rounded-[15px] bg-stuckgrey w-[327px] h-[66px] font-bold text-[18px]"
          type="submit"
        >
          Logga in
        </button>
      </form>
      <div className="btn flex flex-col gap-[15px] items-center">
        <p className="text-stuckgrey font-medium">eller</p>
        <button className="bg-stuckgrey w-[300px] h-[50px] rounded-[30px]">
          Fortsätt med Google
        </button>
        <button className="bg-stuckgrey w-[300px] h-[50px] rounded-[30px] text-[#FFF]">
          Fortsätt med Facebook
        </button>
        <button className="bg-black w-[300px] h-[50px] rounded-[30px] text-[#FFF]">
          Fortsätt med Apple
        </button>
      </div>
    </div>
  );
};

export default Login;
