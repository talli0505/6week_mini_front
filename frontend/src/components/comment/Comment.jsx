import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  __delComment,
  __editComment,
  __addComment,
  editMode,
  clearComment,
} from "../../redux/modules/commentsSlice";
const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editCo, setEditCo] = useState("");

  //수정버튼을 누르면 isEdit:true,
  const onEditBtn = () => {
    setIsEdit(true);
    dispatch(editMode(ture));
  };

  //삭제버튼
  const onDeleteBtn = () => {
    const delBtn = window.confirm("삭제하시겠어요?");
    if (delBtn) {
      dispatch(__delComment(comment.id));
    } else {
      return;
    }
  };

  //취소버튼
  const onCancleBtn = () => {
    setIsEdit(false);
    dispatch(clearComment());
    dispatch(editMode(false));
  };

  //저장버튼을 누르면 isEdit:false,
  const onSaveBtn = () => {
    dispatch(__addComment({
      id: comment.id,
      content: 

    }));
    setIsEdit(false);
    dispatch();
  };

  useEffect(() => {
    setEditCo();
  });

  return (
    <div>
     
    </div>
  );
};

export default Comment;


