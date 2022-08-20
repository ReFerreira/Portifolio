import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  div.banner {
    height: 260px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secundary};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 90%;
    }
  }

  div.profile-resposive {
    display: none;
  }

  div.details {
    width: 100%;
  }

  @media (max-width: 768px) {
    div.banner {
      display: none;
    }
    div.profile-resposive {
      display: flex;
    }
  }
`;
export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  aside {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;
