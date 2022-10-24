import React from "react";
import AddComment from "./AddComment";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentList = () => {
  const data = useSelector((state) => state.comments.comments);
  const { comment } = data;
  console.log(comment);
  return (
    <div>
      <AddComment />
      <div>
        {/* {MOCK_DATA.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))} */}
      </div>
    </div>
  );
};

export default CommentList;
