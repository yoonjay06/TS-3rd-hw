// src/components/Button.tsx
import styled from "styled-components";

interface ButtonProps {
  label: string; // 버튼에 표시할 문구
  onClick?: () => void; // ? → 없어도 되는 선택적 prop
}

function Button({ label, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #2f6feb;
  color: white;
`;

export default Button;
