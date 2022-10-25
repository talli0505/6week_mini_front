import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __postComment } from "../../redux/modules/commentsSlice";
import { BsPlusSquare } from "react-icons/bs";
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
      <StNick> username </StNick>
      <StInput
        className="h-10 border rounded"
        name="content"
        ref={commentRef}
        type="text"
        placeholder="댓글을 추가하세요. (100자 이내)"
        maxLength={100}
      />

      <StBtn>
        <BsPlusSquare size="30" onClick={Handler} />
      </StBtn>
    </StWrap>
  );
};

const StWrap = styled.div`
  display: flex;
  height: 80px;
  margin-top: 10px;
`;
const StNick = styled.div`
  border: none;
  width: 100px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  border-radius: 20px;
`;
const StInput = styled.input`
  width: 800px;
  height: 70px;
  border-radius: 20px;
`;
const StBtn = styled.div`
  margin: 15px 0 0 23px;
`;
export default AddComment;
