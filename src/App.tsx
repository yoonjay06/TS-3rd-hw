import { useState } from "react";
import styled from "styled-components";
import PostItem from "./components/PostItem";
import Button from "./components/Button";
import type { Post } from "./types";

const DUMMY: Post[] = [
  { id: 1, title: "첫 글", content: "반갑습니다", author: "동건" },
  { id: 2, title: "두번째 글", content: "TS 재밌다", author: "선우" },
  { id: 3, title: "삼", content: "멋사야호", author: "근우" },
];

function App() {
  // 과제 1-1: DUMMY를 초기값으로 하는 게시글 상태를 만드세요. 타입 인자 Post[]를 직접 적습니다.

  // 과제 2-1: 선택한 게시글 상태를 Post | null 타입, 초기값 null로 만드세요.

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
    // 과제 1-3: trim()한 입력값으로 NewPost 객체를 만들고, 하나라도 비어 있으면 추가하지 않습니다.
    // 과제 1-4: NewPost에 id: Date.now()를 더해 기존 배열 뒤에 새 배열로 추가하고 입력창을 비웁니다.
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

      {/* 과제 1-1: DUMMY 대신 게시글 상태로 렌더링하세요. */}
      {/* 과제 2-2: PostItem에 onSelect를 넘기세요. */}
      {/* 과제 3-3: 아래 목록을 PostList로 바꾸고 목록 상태와 onSelect를 넘기세요. 쓰지 않게 된 import와 List는 지웁니다. */}
      <List>
        {DUMMY.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </List>

      {/* 과제 2-3: 선택 전에는 "게시글을 선택해주세요.", 선택 후에는 번호·제목·내용·작성자를 보여 주세요. */}
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

export default App;
