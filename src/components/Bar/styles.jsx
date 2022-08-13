import styled from "styled-components";

export const Nav = styled.div`
  background: ${({theme}) => theme.colors.primary};
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 1rem 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
