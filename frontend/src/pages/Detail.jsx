import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import CommentList from "../components/comment/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deletePostsById, __getPostById } from "../redux/modules/postsSlice";
import { ButtonBox } from "../components/common/Button";
import { __getComments } from "../redux/modules/commentsSlice";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = useSelector((state) => state.posts.current);
  const commentData = useSelector((state) => state.comments.comments.message);
  console.log(commentData);

  // 게시글 삭제 핸들러

  const dispatchDeletePost = (postId) => {
    let isDelete = window.confirm("삭제하시겠습니까?");
    if (isDelete) {
      dispatch(__deletePostsById(postId));
      alert("삭제가 완료되었습니다. 메인으로 이동합니다.");
      navigate("/");
    }
  };

  //게시글 수정 페이지 이동

  const navigateModify = (id) => {
    let isEdit = window.confirm("수정하시겠습니까?");
    if (isEdit) {
      navigate("/Modify", {
        state: {
          title: postData?.title,
          content: postData?.content,
          postId: id,
        },
      });
    }
  };

  useEffect(() => {
    dispatch(__getPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getComments(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <PostBdx>
        <ContentsBox>
          <Content>
            <StPostNickname>작성자 : {postData?.nickname}</StPostNickname>
            <StPostTitle>{postData?.title}</StPostTitle>
            <StPostContent>{postData?.content}</StPostContent>
          </Content>
          <Content>
            <DetailImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h8iOlGEYyJ4cevBCw0IYr0GthW2zLeVWIw&usqp=CAU" />
            <ButtonLay>
              <Button onClick={() => dispatchDeletePost(id)}>게시글삭제</Button>
              <Button onClick={() => navigateModify(id)}>게시글수정</Button>
            </ButtonLay>
          </Content>
        </ContentsBox>
      </PostBdx>

      <StComment>
        <CommentList commentData={commentData} />
      </StComment>
    </Layout>
  );
};

export default Detail;

const ContentsBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Content = styled.div`
  margin: 0 20px;
`;

const DetailImg = styled.img`
  padding: 30px;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const PostBdx = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 500px;
  margin: 100px auto;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ButtonLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;
  margin: 20px 10px 0 10px;
`;

const Button = styled(ButtonBox)`
  background-color: #eeeeef;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &:first-child {
    padding-right: 5px;
  }
  &:last-child {
    border: none;
  }
`;

const StPostTitle = styled.div`
  width: 400px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 20px auto;
  text-align: center;
  border-radius: 10px;
  background-color: #eeeeef;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const StPostContent = styled.div`
  font-size: 20px;
  width: 500px;
  margin: 20px auto;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 5px auto;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StPostNickname = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin: 10px auto;
`;

const StComment = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 500px;
  margin: 70px auto 0 auto;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 1px solid lightgray;
  overflow: scroll;
`;
