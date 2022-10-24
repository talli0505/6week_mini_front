import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostById } from "../redux/modules/postsSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.postData);

  const { title, content, nickname } = postData;

  //console.log("p data: ", postData);
  // useEffect(() => {
  //   dispatch(__getPostById(id));
  // }, [dispatch, id]);

  return (
    <Layout>
      <StPost>
        <p>{title}</p>
        <p>{content}</p>
        <p>{nickname}</p>
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
  height: 400px;
  margin: auto;
`;

const StComment = styled.div`
  border: 1px solid gray;
  width: 1100px;
  height: 400px;
  margin: auto;
`;
