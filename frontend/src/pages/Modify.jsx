import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import LoginLayout from "../components/common/LoginLayout";
import styled from "styled-components";
import { ButtonBox } from "../components/common/Button";
import { __putPostsById } from "../redux/modules/postsSlice";
import { useDispatch } from "react-redux";

const Modify = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();

  const modiTitle = location.state.title;
  const modiContent = location.state.content;
  const postId = location.state.postId;

  const dispatchPatchPostById = (postId) => {
    const patchContentBody = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    dispatch(__putPostsById({ ...patchContentBody, postId: postId }));
    // navigate("/");
  };
  return (
    <Layout>
      <LoginLayout>
        <Label>오류명</Label>
        <TitleInput type="text" defaultValue={modiTitle} ref={titleRef} />
        <Label>오류 내용</Label>
        <ContentsInput
          type="texArea"
          defaultValue={modiContent}
          ref={contentRef}
        />
        <FormButton
          onClick={() => {
            dispatchPatchPostById(postId);
          }}
        >
          글 수정
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

export default Modify;
