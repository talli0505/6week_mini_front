import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

const CommentList = ({ commentData }) => {
  return (
    <div>
      <AddComment />
      {commentData?.map((comment) => {
        return (
          <div key={comment.commentId}>
            <Comment comment={comment} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
