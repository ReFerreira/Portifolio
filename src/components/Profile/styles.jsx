import styled from "styled-components";

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin: 0.8rem 1.8rem;
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    border: 0.2rem solid #fff;
  }

  h1 {
    font-size: 2.1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
`;
