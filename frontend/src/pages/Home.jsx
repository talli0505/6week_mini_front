import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const globalPosts = useSelector((state) => state.posts.data);

  //console.log("전역변수", globalPosts);

  return (
    <Layout>
      <PostBoxWrap>
        {globalPosts?.map((item) => {
          return (
            <Link key={item.postId} to={`/detail/${item.postId}`}>
              <PostBox>
                <PostBoxImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h8iOlGEYyJ4cevBCw0IYr0GthW2zLeVWIw&usqp=CAU" />
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
  width: 400px;
  height: 600px;

  cursor: pointer;
  border-radius: 10px;

  margin: 20px;
  padding: 50px;

  font-size: 2rem;
  text-align: center;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.7);
`;

const PostBoxImg = styled.img`
  width: 100%;
  height: 100%;

  border: 1px solid gray;
  border-radius: 5px;
`;

const ContentItem = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const HomeNickName = styled.div`
  font-size: small;
`;
const HomeTitle = styled.div`
  font-size: 1.5rem;
`;
const HomeContent = styled.div`
  font-size: 1rem;
`;
export default Home;
