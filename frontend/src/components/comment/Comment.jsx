import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { __delComment, __editComment } from "../../redux/modules/commentsSlice";
import {
  BsXCircleFill,
  BsCheckCircleFill,
  BsPencilSquare,
} from "react-icons/bs";
import styled from "styled-components";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("read");
  const edit_content = useRef();

  return (
    <div>
      {mode === "read" ? (
        <StWrap>
          <StNick>{comment.nickname} </StNick>
          <StComment>{comment.comment} </StComment>
          <StEditBtn>
            <BsPencilSquare
              size="23"
              onClick={() => {
                setMode("modify");
              }}
            />
          </StEditBtn>
          <StDelBtn>
            <BsXCircleFill
              size="22"
              onClick={() => {
                dispatch(__delComment(comment.commentId));
                window.confirm("삭제되었습니다.");
              }}
            />
          </StDelBtn>
        </StWrap>
      ) : (
        <StWrap>
          <StNick>{comment.nickname} </StNick>
          <UpdataComment
            type="text"
            defaultValue={comment.comment}
            ref={edit_content}
            autoFocus
          />
          <StUpBtn>
            <BsCheckCircleFill
              size="22"
              onClick={() => {
                dispatch(
                  __editComment({
                    commentId: comment.commentId,
                    comment: edit_content.current.value,
                  })
                );
                window.confirm("댓글이 수정되었습니다.");
                window.location.reload();
                setMode("read");
              }}
            />
          </StUpBtn>
          <StDelBtn>
            <BsXCircleFill
              size="22"
              onClick={() => {
                window.confirm("취소되었습니다.");
                setMode("read");
              }}
            />
          </StDelBtn>
        </StWrap>
      )}
    </div>
  );
};
const StWrap = styled.div`
  display: flex;
  height: 60px;
  margin-top: 5px;
  border-bottom: 1px solid lightgray;
`;
const StNick = styled.div`
  border: none;
  width: 120px;
  height: 70px;
  text-align: center;
  border-radius: 20px;
  line-height: 70px;
  margin: 0 0 0 17px;
  word-break: break-all;
`;
const StComment = styled.div`
  width: 800px;
  min-height: 70px;
  border-radius: 20px;
  line-height: 70px;
  margin: 0 0 0 25px;
  word-break: break-all;
`;
const StEditBtn = styled.div`
  display: flex;
  margin: 19px 5px 0 0;
  cursor: pointer;
`;
const StDelBtn = styled.div`
  display: flex;
  margin: 20px 20px 0 10px;
  cursor: pointer;
`;
const StUpBtn = styled.div`
  display: flex;
  margin: 20px 5px 0 0;
  cursor: pointer;
`;
const UpdataComment = styled.textarea`
  &:focus {
    outline: 0;
  }
  border: none;
  border-bottom: 3px solid #198754;
  margin: 1em 1em 1em 1em;
  width: 90%;
  resize: none;
  height: 1.5em;
  overflow: hidden;
`;
export default Comment;
