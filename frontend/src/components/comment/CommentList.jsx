import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentList = ({ nickname }) => {
  const commentData = useSelector((state) => state.comments.comments.message);
  console.log(commentData);

  return (
    <div>
      <AddComment />
      {commentData?.map((comment) => {
        return (
          <div key={comment.commentId}>
            <Comment comment={comment} nickname={nickname} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
