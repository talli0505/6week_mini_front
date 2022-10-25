import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostById } from "../redux/modules/postsSlice";
import { __getComments } from "../redux/modules/commentsSlice";

const Detail = () => {
  const { id } = useParams();
  //console.log(id);
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.data);
  //console.log(postData);
  const { title, content, nickname } = postData;

  //console.log("p data: ", postData);

  useEffect(() => {
    dispatch(__getPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getComments(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <StPost>
        <StWrap>
          <StPostTitle>{title}</StPostTitle>
          <StPostNickname>{nickname}</StPostNickname>
        </StWrap>
        <StPostContent>{content}</StPostContent>
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
