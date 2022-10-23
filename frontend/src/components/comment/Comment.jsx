import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  __delComment,
  __editComment,
  editMode,
  clearComment,
} from "../../redux/modules/commentsSlice";

// Is edit = false
// 수정하기, 삭제하기 버튼

// Is edit = true
// 취소하기, 저장하기 버튼

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editCo, setEditCo] = useState("");

  //수정버튼을 누르면 isEdit:true,
  const onEditBtn = () => {
    setIsEdit(true);
    //dispatch()
    dispatch(editMode(true));
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
    dispatch(__editComment({}));
    setIsEdit(false);
    dispatch(editMode(false));
  };

  useEffect(() => {
    setEditCo();
  });

  return <div>{comment}</div>;
};

export default Comment;
