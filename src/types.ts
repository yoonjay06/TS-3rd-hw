export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

// 과제 1-2: 저장 전 입력 데이터 — 저장된 게시글(Post)에서 id만 뺀 타입
export type NewPost = Omit<Post, "id">;

// 과제 3-1: status로 구분하는 PostListState를 서로소 유니온으로 만드세요.
