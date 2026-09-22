// src/components/PostItem.tsx
import styled from "styled-components";
import Button from "./Button";
import type { Post } from "../types";

interface PostItemProps {
  post: Post; // 아까 만든 Post 타입을 그대로!
  onSelect: (post: Post) => void; // 과제 2-2: 선택된 게시글을 부모(App)에게 알려 주는 함수
}
function PostItem({ post, onSelect }: PostItemProps) {
  return (
    <Card>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <Author>by {post.author}</Author>
      {/* 과제 2-2: 버튼을 누르면 이 카드의 post를 onSelect로 넘긴다 */}
      <Button label="선택" onClick={() => onSelect(post)} />
    </Card>
  );
}

const Card = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333333;
`;

const Content = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666666;
`;

const Author = styled.small`
  font-size: 12px;
  color: #999999;
`;

export default PostItem;
