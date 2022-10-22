import React from "react";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";
import Comment from "./Comment";

const CommentList = () => {
  const { data } = useSelector((state) => state.comments.comments);
  return (
    <div>
      <AddComment />
      <div>
        {data.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
