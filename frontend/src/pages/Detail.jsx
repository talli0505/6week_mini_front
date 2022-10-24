import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostById } from "../redux/modules/postsSlice";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.data);
  console.log(postData);
  const { title, content, nickname } = postData;

  console.log("p data: ", postData);

  useEffect(() => {
    dispatch(__getPostById(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <StPost>
        <div>{title}</div>
        <div>{content}</div>
        <div>{nickname}</div>
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
