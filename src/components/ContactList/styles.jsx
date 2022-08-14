import styled from "styled-components";

export const List = styled.ul`
  margin: 20px;
  list-style: none;

  li {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    margin: 10px 5px;
    

    svg {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    a {
      color: ${({ theme }) => theme.colors.text.primary};
      text-decoration: none;
    }
  }
`;

export const Text = styled.span`
margin-left: 1rem;
  color: ${({ theme }) => theme.colors.secundary};
`;
