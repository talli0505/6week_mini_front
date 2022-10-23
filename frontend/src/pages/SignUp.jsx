import React from "react";
import styled from "styled-components";
import LoginLayout from "../components/common/LoginLayout";
//import { LockClosedIcon } from "@heroicons/react/20/solid";

const SignUp = () => {
  return (
    <LoginLayout>
      <img
        src="http://mijnheim.com/design/mijnheim/smartskin/ham_ic_join.png"
        className="w-40 h-40"
      />
      <form className="mt-8 space-y-6 w-80" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              이메일을 입력해 주세요
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="이메일을 입력해 주세요"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              비밀번호를 입력해 주세요
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="비밀번호를 입력해 주세요"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="/"
              className="font-medium text-violet-300 w-4hover:text-violet-500"
            >
              메인페이지로 돌아가기
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-300 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* <LockClosedIcon
                className="h-5 w-5 text-violet-500 group-hover:text-violet-400"
                aria-hidden="true"
              /> */}
            </span>
            회원 가입
          </button>
        </div>
      </form>
    </LoginLayout>
    // <LoginLayout>
    //   <LoginHeader>회원가입</LoginHeader>
    //   <form>
    //     <p>
    //       아이디 : <input type="text" placeholder="아이디를 입력해 주세요." />
    //     </p>
    //     <p>
    //       비밀번호 :
    //       <input type="password" placeholder="비밀번호를 입력해 주세요" />
    //     </p>
    //     <button
    //       type="submit"
    //       onClick={(e) => {
    //         e.preventDefault();
    //       }}
    //     >
    //       뒤로가기 (로그인페이지로)
    //     </button>
    //   </form>
    // </LoginLayout>
  );
};

const LoginHeader = styled.div`
  font-size: 40px;
  font-weight: 600;

  width: 600px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SignUp;
