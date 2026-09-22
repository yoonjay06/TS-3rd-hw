import { useState } from "react";
import styled from "styled-components";
import PostItem from "./components/PostItem";
import Button from "./components/Button";
import type { NewPost, Post } from "./types";

const DUMMY: Post[] = [
  { id: 1, title: "첫 글", content: "반갑습니다", author: "동건" },
  { id: 2, title: "두번째 글", content: "TS 재밌다", author: "선우" },
  { id: 3, title: "삼", content: "멋사야호", author: "근우" },
];

function App() {
  // 과제 1-1: 게시글 목록 상태 — 타입 인자 Post[]를 직접 적어서 Post가 아닌 값은 들어올 수 없게 한다
  const [posts, setPosts] = useState<Post[]>(DUMMY);

  // 과제 2-1: 선택한 게시글 — "아직 선택 안 함(null)" 또는 "게시글 하나(Post)"
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleAddPost = () => {
    // 과제 1-3: trim()한 입력값으로 저장 전 데이터(NewPost)를 먼저 만든다
    const newPost: NewPost = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
    };

    // 하나라도 비어 있으면 추가하지 않고 끝낸다
    if (!newPost.title || !newPost.content || !newPost.author) {
      return;
    }

    // 과제 1-4: NewPost에 id를 더하면 저장된 게시글(Post)이 된다
    const post: Post = { id: Date.now(), ...newPost };

    // 기존 배열을 직접 바꾸지 않고, 뒤에 새 게시글을 붙인 "새 배열"로 교체한다
    setPosts((prevPosts) => [...prevPosts, post]);

    setTitle("");
    setContent("");
    setAuthor("");
  };

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  // 과제 3-3: posts.length에 따라 성공 또는 빈 상태 객체를 만드세요. 변수 타입은 PostListState로 적습니다.

  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>

      <input
        value={title}
        onChange={handleTitleChange}
        placeholder="제목을 입력하세요"
      />
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="내용을 입력하세요"
      />
      <input
        value={author}
        onChange={handleAuthorChange}
        placeholder="작성자를 입력하세요"
      />
      <Button label="추가" onClick={handleAddPost} />

      {/* 과제 3-3: 아래 목록을 PostList로 바꾸고 목록 상태와 onSelect를 넘기세요. 쓰지 않게 된 import와 List는 지웁니다. */}
      <List>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onSelect={handleSelectPost} />
        ))}
      </List>

      {/* 과제 2-3: null인지 먼저 확인해서 타입을 좁힌 뒤에만 게시글 속성에 접근한다 */}
      <Detail>
        <DetailTitle>선택한 게시글</DetailTitle>
        {selectedPost === null ? (
          <Guide>게시글을 선택해주세요.</Guide>
        ) : (
          <InfoList>
            <dt>번호</dt>
            <dd>{selectedPost.id}</dd>
            <dt>제목</dt>
            <dd>{selectedPost.title}</dd>
            <dt>내용</dt>
            <dd>{selectedPost.content}</dd>
            <dt>작성자</dt>
            <dd>{selectedPost.author}</dd>
          </InfoList>
        )}
      </Detail>
    </>
  );
}

const Title = styled.h1`
  color: #2f6feb;
  font-size: 28px;
`;

const List = styled.div`
  margin: 0;
`;

const Detail = styled.section`
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #d6e2fb;
  border-radius: 12px;
  background-color: #eef3ff;
`;

const DetailTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #2f6feb;
`;

const Guide = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666666;
`;

const InfoList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8px 16px;
  margin: 0;
  font-size: 14px;

  dt {
    font-weight: 600;
    color: #333333;
  }

  dd {
    margin: 0;
    color: #666666;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`;

export default App;
