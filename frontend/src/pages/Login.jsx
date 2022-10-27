import React, { useRef } from "react";
import LoginLayout from "../components/common/LoginLayout";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postLogin } from "../redux/modules/LoginSlice";
import Layout from "../components/common/Layout";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const globalUserInfo = useSelector((state) => state.login.userinfo);

  const emailRef = useRef();
  const passwordRef = useRef();

  const onLoginHandler = () => {
    if (window.confirm("로그인 하시겠습니까?")) {
      const loginBody = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(__postLogin(JSON.stringify(loginBody)));
    }
    navigate("/");
  };

  return (
    <Layout>
      <LoginLayout>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3596/3596085.png"
          className="w-40 h-40"
        />
        <div className="mt-8 space-y-6 w-80">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                ref={emailRef}
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="이메일을 입력해 주세요"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a
                href="/signup"
                className="font-medium text-gray-300 w-4 hover:text-violet-500"
              >
                아직 회원이 아니신가요?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => {
                onLoginHandler();
                navigate("/");
              }}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                  aria-hidden="true"
                />
              </span>
              로그인
            </button>
          </div>
        </div>
      </LoginLayout>
    </Layout>
  );
};

export default Login;
