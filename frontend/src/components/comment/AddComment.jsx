import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __postComment } from "../../redux/modules/commentsSlice";

const AddComment = () => {
  const dispatch = useDispatch();
  const param = useParams();
  console.log(param.id);

  const commentRef = useRef();

  const Handler = () => {
    // e.preventDefault();
    // if (commentRef.trim() === "") {
    //   return alert("입력해주세요.");
    // }
    dispatch(
      __postComment({ comment: commentRef.current.value, postId: param.id })
    );

    //console.log(JSON.stringify(commentBody));
  };

  return (
    <div>
      {/* <form onSubmit={onSubmitHandler} className="flex flex-row  gap-2">
        <input
          className=" w-80 h-10 border rounded"
          name="username"
          value={comment.username}
          type="text"
          placeholder="이름(5자 이내)"
          maxLength={5}
          onChange={onChangeHandler}
        /> */}
      <p> username을 가져올거야 </p>
      <input
        className="h-10 border rounded"
        name="content"
        ref={commentRef}
        type="text"
        placeholder="댓글을 추가하세요. (100자 이내)"
        maxLength={100}
      />
      <button className="border rounded" onClick={Handler}>
        추가하기
      </button>
      {/* </form> */}
    </div>
  );
};

export default AddComment;
