import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.posts.postsData);

  const handleRouteToDetailPage = (id) => {
    return navigate(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <Layout>
      <PostBoxWrap>
        {data?.map((item) => {
          return (
            <PostBox
              key={item.postId}
              onClick={() => handleRouteToDetailPage(item.postId)}
            >
              {/* img경로 서버에 요청하기 */}
              <PostBoxImg src="https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=780&h=30000" />
              <p>{item.nickname}</p>
              <p>{item.content}</p>
            </PostBox>
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
  height: 200px;

  cursor: pointer;
  border-radius: 10px;

  margin: 20px;
  padding: 50px;

  font-size: 2rem;
  text-align: center;
  text-decoration: none;

  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.7);
`;

const PostBoxImg = styled.img`
  width: 70%;
  height: 70%;
`;
export default Home;
