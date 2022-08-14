import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  max-width: 260px;
  display: flex;
  margin-top: 20px;
  margin-right: 2rem;

  aside.profile {
    background: ${({ theme }) => theme.colors.primary};
    width: 260px;
    align-items: center;
    border-radius: 20px;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin: 10px 30px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #fff;
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



