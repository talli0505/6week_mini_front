import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentList = () => {
  const commentData = useSelector((state) => state.comments.comments.message);
  console.log(commentData);

  return (
    <div>
      <AddComment />
      {commentData?.map((comment) => (
        <div>
          <Comment key={comment.commetId} comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
