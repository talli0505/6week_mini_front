import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __deletePostsById,
  __getPostById,
  __patchPostsById,
} from "../redux/modules/postsSlice";
import { __postPosts } from "../redux/modules/postsSlice";
import Button from "../components/common/Button";
const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.data);

  // 게시글 삭제 핸들러

  const dispatchDeletePost = (postId) => {
    dispatch(__deletePostsById(postId));
    // navigate("/");
  };

  //게시글 수정 페이지 이동

  const navigateModify = (id) => {
    navigate("/Modify", {
      state: {
        title: postData?.title,
        content: postData?.content,
        postId: id,
      },
    });
  };

  useEffect(() => {
    dispatch(__getPostById(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <StPost>
        <PostBdx>
          <StPostTitle>{postData?.title}</StPostTitle>
          <StPostContent>{postData?.content}</StPostContent>
          <StPostNickname>{postData?.nickname}</StPostNickname>
        </PostBdx>
        <ButtonBox>
          <Button onClick={() => dispatchDeletePost(id)}>게시글 삭제</Button>
          <Button onClick={() => navigateModify(id)}>게시글 수정</Button>
        </ButtonBox>
      </StPost>

      <StComment>
        <CommentList />
      </StComment>
    </Layout>
  );
};

export default Detail;

const StPost = styled.div`
  border: 1px solid gray;
  width: 1100px;
  height: 500px;
  margin: auto;

  display: flex;
  justify-content: center;
`;

const PostBdx = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StPostTitle = styled.div`
  font-size: 50px;
`;

const StPostContent = styled.div`
  font-size: 20px;
`;

const StPostNickname = styled.div`
  font-size: 20px;
`;

const StComment = styled.div`
  border: 1px solid gray;
  width: 1100px;
  height: 200px;
  margin: auto;
`;
