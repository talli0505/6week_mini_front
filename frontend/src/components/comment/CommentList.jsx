import React from "react";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";
import Comment from "./Comment";

const MOCK_DATA = ["안녕1", "안녕2", "안녕3"];
const CommentList = () => {
  // const { data } = useSelector((state) => state.comments.comments);
  return (
    <div>
      <AddComment />
      <div>
        {MOCK_DATA.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
