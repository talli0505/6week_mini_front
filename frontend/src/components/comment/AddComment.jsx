import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __postComment } from "../../redux/modules/commentsSlice";

const AddComment = () => {
  const dispatch = useDispatch();
  const param = useParams();
  //console.log(param.id);

  const commentRef = useRef();

  const Handler = () => {
    dispatch(
      __postComment({ comment: commentRef.current.value, id: param.id })
    );
  };

  return (
    <div>
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
    </div>
  );
};

export default AddComment;
