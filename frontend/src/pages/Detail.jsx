import React, { useEffect } from "react";
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
  max-width: 1000px;
  width: 100%;
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

  margin: 70px auto 0 auto;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border: 1px solid lightgray;
`;

const StPostTitle = styled.div`
  font-size: 40px;
`;

const StPostContent = styled.div`
  font-size: 20px;
  margin: 5px auto 5px 20px;
`;

const StPostNickname = styled.div`
  font-size: 20px;
`;

const StComment = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 500px;

  margin: 70px auto 0 auto;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border: 1px solid lightgray;
  overflow: scroll;
`;

const StWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px auto 20px;
`;
