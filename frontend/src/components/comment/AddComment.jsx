import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __postComment } from "../../redux/modules/commentsSlice";
import { BsPersonFill, BsFillCursorFill } from "react-icons/bs";
import styled from "styled-components";

const AddComment = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const commentRef = useRef();

  const Handler = (e) => {
    e.preventDefault();
    if (commentRef.current.value === "") {
      return alert("댓글을 입력해주세요!");
    } else {
      dispatch(
        __postComment({ comment: commentRef.current.value, id: param.id })
      );
    }
    commentRef.current.value = "";
  };

  return (
    <StWrap>
      <StNick>
        <BsPersonFill size="38" />
      </StNick>
      <StInput
        className="h-10 border rounded"
        name="content"
        ref={commentRef}
        type="text"
        placeholder="댓글을 추가하세요. (100자 이내)"
        maxLength={100}
      />

      <StBtn>
        <BsFillCursorFill size="30" onClick={Handler} />
      </StBtn>
    </StWrap>
  );
};

const StWrap = styled.div`
  display: flex;
  height: 70px;
  max-width: 975px;
  margin: 10px 18px 0 18px;
  border-radius: 18px;
  background-color: #eeeeef;
`;
const StNick = styled.div`
  display: flex;
  margin: 18px 40px 0 40px;
`;
const StInput = styled.input`
  width: 750px;
  height: 55px;
  border-radius: 20px;
  margin: 7px 0 0 10px;
  word-break: break-all;
`;
const StBtn = styled.div`
  margin: 22px 20px 0 32px;
  cursor: pointer;
`;
export default AddComment;
