import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostById } from "../redux/modules/postsSlice";
import { __postPosts } from "../redux/modules/postsSlice";

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

  return (
    <Layout>
      <StPost>
        <StPostTitle>{title}</StPostTitle>
        <StPostContent>{content}</StPostContent>
        <StPostNickname>{nickname}</StPostNickname>
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
  height: 300px;
  margin: auto;
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
  height: 500px;
  margin: auto;
`;
