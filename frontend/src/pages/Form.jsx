import React, { useRef } from "react";
import { __postPosts } from "../redux/modules/postsSlice";
import { useDispatch } from "react-redux";
import Layout from "../components/common/Layout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentRef = useRef();
  const onClickHandler = () => {
    const detailBody = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    dispatch(__postPosts(JSON.stringify(detailBody)));
  };

  return (
    <Layout>
      <FormBox>
        <div>오류명 : </div>
        <TitleInput type="text" ref={titleRef} />
        <div>오류 내용 : </div>
        <ContentsInput type="text" ref={contentRef} />{" "}
        <Button
          onClick={() => {
            onClickHandler();
            navigate("/");
          }}
        >
          포스트 확인하러 가자
        </Button>
      </FormBox>
    </Layout>

  );
};

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 800px;
  width: 100%;
  height: 900px;

  margin: 0 auto;
  padding-top: 100px;

  background-color: aliceblue;
`;

const ContentsInput = styled.input`
  width: 500px;
  height: 100px;

  border: 1px solid lightgray;
`;

const TitleInput = styled.input`
  width: 500px;
  height: 50px;

  border: 1px solid lightgray;
`;
export default Form;
