import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deletePostsById, __getPostById } from "../redux/modules/postsSlice";
import { ButtonBox } from "../components/common/Button";
import { __getComments } from "../redux/modules/commentsSlice";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.data);

  const { nickname } = useSelector((state) => state.comments.comments);
  console.log(nickname);
  // 게시글 삭제 핸들러

  const dispatchDeletePost = (postId) => {
    let isDelete = window.confirm("삭제하시겠습니까?");
    if (isDelete) {
      dispatch(__deletePostsById(postId));

      navigate("/");
    }
  };

  //게시글 수정 페이지 이동

  const navigateModify = (id) => {
    let isEdit = window.confirm("수정하시겠습니까?");
    if (isEdit) {
      navigate("/Modify", {
        state: {
          title: postData?.title,
          content: postData?.content,
          postId: id,
        },
      });
    }
  };

  useEffect(() => {
    dispatch(__getPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getComments(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <PostBdx>
        <StPostNickname>작성자 : {postData?.nickname}</StPostNickname>
        <StPostTitle>제목 : {postData?.title}</StPostTitle>
        <StPostContent>{postData?.content}</StPostContent>

        <ButtonLay>
          <Button onClick={() => dispatchDeletePost(id)}>게시글 삭제</Button>
          <Button onClick={() => navigateModify(id)}>게시글 수정</Button>
        </ButtonLay>
      </PostBdx>

      <StComment>
        <CommentList nickname={nickname} />
      </StComment>
    </Layout>
  );
};

export default Detail;

const PostBdx = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 500px;

  margin: 100px auto;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border: 1px solid lightgray;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;
`;

const ButtonLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;

  margin: 0 auto;
`;

const Button = styled(ButtonBox)`
  &:first-child {
    padding-right: 5px;
  }
  &:last-child {
    border: none;
  }
`;

const StPostTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 30px auto 10px auto;
  text-align: center;
`;

const StPostContent = styled.div`
  font-size: 20px;
  margin: 5px auto;
  height: 300px;

  text-align: center;

  display: flex;
  align-items: center;
`;

const StPostNickname = styled.div`
  font-size: 15px;
  text-align: center;
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
