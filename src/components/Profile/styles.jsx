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

export const List = styled.ul`
  margin: 20px;
  list-style: none;

  li {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    margin: 5px;

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

export const Skills = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 1.6rem;
    padding-top: 10px;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      margin: 0 5px 10px 0;

      svg {
        width: 35px;
        height: 35px;
        background: ${({ theme }) => theme.colors.secundary};
        border-radius: 50%;
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.text.secundary};
        margin-right: 10px;
      }
    }
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.secundary};
`;
