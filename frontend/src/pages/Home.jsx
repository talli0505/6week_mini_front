import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const globalPosts = useSelector((state) => state.posts.data);
  console.log("전역변수", globalPosts);

  return (
    <Layout>
      <PostBoxWrap>
        {globalPosts?.map((item) => {
          return (
            <Link key={item.postId} to={`/detail/${item.postId}`}>
              <PostBox>
                <PostBoxImg src="https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=780&h=30000" />
                <p>{item.nickname}</p>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </PostBox>
            </Link>
          );
        })}
        {/* <Link>
          <PostBox>
            <PostBoxImg src="https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=780&h=30000" />
            <p>안녕하세요</p>
          </PostBox>
        </Link>
        <Link>
          <PostBox>
            <PostBoxImg src="https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=780&h=30000" />
            <p>안녕하세요</p>
          </PostBox>
        </Link>
        <Link>
          <PostBox>
            <PostBoxImg src="https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=780&h=30000" />
            <p>안녕하세요</p>
          </PostBox>
        </Link>
        <Link>
          <PostBox>
            <PostBoxImg src="https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=780&h=30000" />
            <p>안녕하세요</p>
          </PostBox>
        </Link> */}
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
