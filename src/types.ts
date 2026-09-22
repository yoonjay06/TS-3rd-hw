export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

// 과제 1-2: 저장 전 입력 데이터 — 저장된 게시글(Post)에서 id만 뺀 타입
export type NewPost = Omit<Post, "id">;

// 과제 3-1: 목록 화면의 상태 — status 값 하나로 어떤 상태인지 구분하는 서로소 유니온
// 상태마다 필요한 값만 가지므로 "로딩 중인데 data가 있는" 식의 조합은 만들 수 없다
export type PostListState =
  | { status: "loading" }
  | { status: "success"; data: Post[] }
  | { status: "error"; message: string }
  | { status: "empty" };
