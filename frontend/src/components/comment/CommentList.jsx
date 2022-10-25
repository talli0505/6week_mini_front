import React, { useRef, useState } from "react";
import AddComment from "./AddComment";
import { useDispatch, useSelector } from "react-redux";
import { __delComment, __editComment } from "../../redux/modules/commentsSlice";
import styled from "styled-components";
import { BsXCircleFill, BsEraserFill } from "react-icons/bs";

const CommentList = () => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comments.comments.message);
  //console.log(commentData);

  const [mode, setMode] = useState("read");
  const current_content = useRef();

  return (
    <div>
      <AddComment />
      {commentData?.map((comment) => (
        <div>
          <StWrap key={comment.commetId}>
            <StNick>{comment.commentId} </StNick>
            <StComment>{comment.comment} </StComment>

            <StEditBtn>
              <BsEraserFill
                size="25"
                onClick={() => {
                  dispatch(__editComment(comment.commentId));
                  console.log(comment.commentId);
                }}
              />
            </StEditBtn>
            <StDelBtn>
              <BsXCircleFill
                size="22"
                onClick={() => {
                  dispatch(__delComment(comment.commentId));
                  console.log(comment.commentId);
                }}
              />
            </StDelBtn>
          </StWrap>
        </div>
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
const StEditBtn = styled.div`
  display: flex;
  margin: 9px 5px 0 0;
`;
const StDelBtn = styled.div`
  display: flex;
  margin: 12px 20px 0 10px;
`;
export default CommentList;
