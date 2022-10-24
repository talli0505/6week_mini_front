import React, { useEffect } from "react";
import AddComment from "./AddComment";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { __getComments } from "../../redux/modules/commentsSlice";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const param = useParams();

  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comments.comments);
  //console.log(commentData);

  useEffect(() => {
    dispatch(__getComments(param.id));
  }, [dispatch]);

  return (
    <div>
      <AddComment />
      {commentData?.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
