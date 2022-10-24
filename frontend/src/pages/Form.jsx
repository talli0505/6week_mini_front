import React, { useRef } from "react";
//import Layout from "../components/common/Layout";
import { __postPosts } from "../redux/modules/postsSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();
  const onClickHandler = () => {
    const detailBody = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    dispatch(__postPosts(JSON.stringify(detailBody)));
  };

  return (
    <div>
      <input type="text" ref={titleRef} />
      <input type="text" ref={contentRef} />{" "}
      <button
        onClick={() => {
          onClickHandler();
        }}
      >
        포스트 확인하러 가자
      </button>
    </div>
  );
};

export default Form;
