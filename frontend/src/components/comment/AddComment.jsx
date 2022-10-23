import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentsSlice";

const AddComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //console.log(id);

  const [comment, setComment] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (comment.comment.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__addComment());
    setComment("");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-row  gap-2">
        {/* <input
          className=" w-80 h-10 border rounded"
          name="username"
          value={comment.username}
          type="text"
          placeholder="이름(5자 이내)"
          maxLength={5}
          onChange={onChangeHandler}
        /> */}
        <p> 고은비 </p>
        <input
          className="h-10 border rounded"
          name="content"
          value={comment.content}
          type="text"
          placeholder="댓글을 추가하세요. (100자 이내)"
          maxLength={100}
          onChange={onChangeHandler}
        />
        <button className="border rounded">추가하기</button>
      </form>
    </div>
  );
};

export default AddComment;
