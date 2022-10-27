import React, { useRef } from "react";
import { __postPosts } from "../redux/modules/postsSlice";
import { useDispatch } from "react-redux";
import Layout from "../components/common/Layout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonBox } from "../components/common/Button";
import LoginLayout from "../components/common/LoginLayout";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const onClickHandler = () => {
    if (titleRef.current.value.length < 10) {
      alert("제목을 10자 이상 입력해주세요");
    } else if (contentRef.current.value.length < 10) {
      alert("본문을 10자 이상 입력해주세요");
    } else if (window.confirm("글을 등록하시겠습니까?")) {
      const detailBody = {
        title: titleRef.current.value,
        content: contentRef.current.value,
      };
      dispatch(__postPosts(JSON.stringify(detailBody)));
      alert("등록이 완료되었습니다 메인페이지로 이동합니다.");
      navigate("/");
    }
  };

  return (
    <Layout>
      <LoginLayout>
        <input type="file" ref={fileRef} />
        <Label>오류명</Label>
        <TitleInput type="text" ref={titleRef} />
        <Label>오류 내용</Label>
        <ContentsInput type="texArea" ref={contentRef} />{" "}
        <FormButton
          onClick={() => {
            onClickHandler();
          }}
        >
          글 등록
        </FormButton>
      </LoginLayout>
    </Layout>
  );
};

const ContentsInput = styled.input`
  width: 500px;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const TitleInput = styled.input`
  width: 500px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const Label = styled.div`
  width: 500px;
  text-align: start;
  margin-bottom: 10px;
  font-weight: 600;
`;

const FormButton = styled(ButtonBox)`
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;
export default Form;
