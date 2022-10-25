import React, { useEffect } from "react";
import AddComment from "./AddComment";
import { useDispatch, useSelector } from "react-redux";
import { __delComment, __getComments } from "../../redux/modules/commentsSlice";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentList = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comments.comments.message);
  console.log(commentData);

  useEffect(() => {
    dispatch(__getComments(param.id));
  }, [dispatch, param.id]);

  return (
    <div>
      <AddComment />
      {commentData?.map((comment) => (
        <StWrap key={comment.commetId}>
          <StNick>{comment.commentId} </StNick>
          <StComment>{comment.comment} </StComment>
          <StBtn
            onClick={() => {
              dispatch(__delComment(comment.commentId));
              console.log(comment.commentId);
            }}
          >
            삭제
          </StBtn>
        </StWrap>
      ))}
    </div>
  );
};

const StWrap = styled.div`
  display: flex;
  height: 60px;
  margin-top: 5px;
`;
const StNick = styled.div`
  border: none;
  width: 100px;
  height: 70px;
  text-align: center;
  border-radius: 20px;
  line-height: 70px;
  //border: 1px solid gray;
`;
const StComment = styled.div`
  width: 800px;
  height: 70px;
  border-radius: 20px;
  line-height: 70px;
  //border: 1px solid gray;
`;
const StBtn = styled.button`
  width: 100px;
  height: 70px;
  border-radius: 20px;
  border: 1px solid gray;
`;
export default CommentList;
