import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";

const Home = () => {
  useEffect(() => {
    dispatch(__getPosts());
  }, []);
  const dispatch = useDispatch();

  const globalPosts = useSelector((state) => state.posts.data);

  return (
    <Layout>
      <PostBoxWrap>
        {globalPosts?.map((item) => {
          return (
            <Link key={item.postId} to={`/detail/${item.postId}`}>
              <PostBox>
                <PostBoxImg src="https://images.velog.io/images/jjunyjjuny/post/da903d71-44fc-4f6f-92bb-b1b2d0092020/error_img.png" />
                <ContentItem>
                  <HomeNickName>작성자 : {item.nickname} 님</HomeNickName>
                  <HomeTitle>{item.title}</HomeTitle>
                  <HomeContent>{item.content}</HomeContent>
                </ContentItem>
              </PostBox>
            </Link>
          );
        })}
      </PostBoxWrap>
    </Layout>
  );
};

const PostBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto 0 auto;
`;

const PostBox = styled.div`
  width: 500px;
  height: 600px;
  cursor: pointer;
  margin: 20px;
  padding: 20px;
  font-size: 2rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostBoxImg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  border-radius: 20px;
`;

const ContentItem = styled.div`
  margin: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const HomeNickName = styled.div`
  font-size: small;
  text-align: start;
`;
const HomeTitle = styled.div`
  font-size: 1.5rem;
  text-align: start;
`;
const HomeContent = styled.div`
  font-size: 1rem;
  text-align: start;
`;
export default Home;
