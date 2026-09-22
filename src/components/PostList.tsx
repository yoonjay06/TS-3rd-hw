// src/components/PostList.tsx
import styled from "styled-components";
import PostItem from "./PostItem";
import type { Post, PostListState } from "../types";

// 과제 3-2: 목록 상태와 선택 함수를 Props로 받는다
interface PostListProps {
  state: PostListState;
  onSelect: (post: Post) => void;
}

function PostList({ state, onSelect }: PostListProps) {
  // status를 먼저 확인해서 로딩·실패·빈 화면을 반환한다 (early return)
  if (state.status === "loading") {
    return (
      <StatusMessage role="status">게시글을 불러오는 중입니다...</StatusMessage>
    );
  }

  if (state.status === "error") {
    // 여기서 state는 error 상태로 좁혀졌기 때문에 message에 접근할 수 있다
    return (
      <ErrorMessage role="alert">불러오기 실패: {state.message}</ErrorMessage>
    );
  }

  if (state.status === "empty") {
    return <StatusMessage>아직 작성된 게시글이 없습니다.</StatusMessage>;
  }

  // 위에서 나머지 상태를 모두 반환했으므로 여기의 state는 success — data에 접근할 수 있다
  return (
    <List>
      {state.data.map((post) => (
        <PostItem key={post.id} post={post} onSelect={onSelect} />
      ))}
    </List>
  );
}

const List = styled.div`
  margin: 0;
`;

const StatusMessage = styled.p`
  margin: 0 0 12px 0;
  padding: 24px 16px;
  border: 1px dashed #d0d7e2;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 14px;
  color: #666666;
  text-align: center;
`;

const ErrorMessage = styled(StatusMessage)`
  border: 1px solid #f5c2c0;
  background-color: #fff5f5;
  color: #d1242f;
`;

export default PostList;
