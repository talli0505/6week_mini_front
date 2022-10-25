import React, { useRef } from "react";
import LoginLayout from "../components/common/LoginLayout";
import { useDispatch } from "react-redux";
import { __postSignup } from "../redux/modules/signUpSlice";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Layout from "../components/common/Layout";

const SignUp = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();
  const confirmRef = useRef();

  const onSignUpHandler = () => {
    const signUpBody = {
      email: emailRef.current.value,
      nickname: nicknameRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmRef.current.value,
    };
    dispatch(__postSignup(JSON.stringify(signUpBody)));
  };

  if (valid) {
  } else {
  }
  //   if (isSameUser)
  //   return res
  //     .status(400)
  //     .send({ errorMessage: "이미 가입된 이메일 또는 닉네임 입니다" });
  // if (nickname.search(must_nickname) === -1)
  //   return res.status(400).send({
  //     errorMessage: "닉네임은 `최소 3자 이상, 특수 문자를 포함하면 안됩니다`",
  //   });
  // if (password.search(strongPasswordRegex) === -1)
  //   return res.status(400).send({
  //     errorMessage:
  //       "비밀번호는 최소 4글자 이상, 알파벳 대소문자(a~z, A~Z), 숫자(0~9), 특수문자`를 포함해야 합니다",
  //   });
  // if (password !== confirmPassword)
  //   return res
  //     .status(400)
  //     .send({ errorMessage: "비밀번호가 일치하지 않습니다" });

  // const createUserData = await this.userService.createAccount(
  //   email,
  //   nickname,
  //   password
  // );
  // res.json({ data: createUserData });
  // };

  return (
    <Layout>
      {" "}
      <LoginLayout>
        <img
          src="http://mijnheim.com/design/mijnheim/smartskin/ham_ic_join.png"
          className="w-40 h-40"
        />
        <div className="mt-8 space-y-6 w-80">
          <div className="-space-y-px rounded-md shadow-sm ">
            <div>
              <label className="sr-only">닉네임</label>
              <input
                ref={nicknameRef}
                type="text"
                required
                className="my-2 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="닉네임을 입력해주세요"
              />
            </div>
            <div>
              <label className="sr-only">이메일을 입력해 주세요</label>
              <input
                ref={emailRef}
                type="email"
                required
                className="my-2 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="이메일을 입력해 주세요"
              />
            </div>
            <div>
              <label className="sr-only">비밀번호를 입력해 주세요</label>
              <input
                ref={passwordRef}
                type="password"
                required
                className="my-2 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>
            <div>
              <label className="sr-only">비밀번호 재입력</label>
              <input
                ref={confirmRef}
                type="password"
                required
                className="my-2 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="비밀번호 재입력"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-gray-300 w-4hover:text-gray-500"
              >
                메인페이지로 돌아가기
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                onSignUpHandler();
              }}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                  aria-hidden="true"
                />
              </span>
              회원 가입
            </button>
          </div>
        </div>
      </LoginLayout>
    </Layout>
  );
};

export default SignUp;
