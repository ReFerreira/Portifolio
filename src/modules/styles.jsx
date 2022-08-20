import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  max-width: 260px;
  display: flex;
  margin-right: 2rem;
  height: 100%;

  

  aside.profile {
    background: ${({ theme }) => theme.colors.primary};
    width: 260px;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const PrefenciesContainer = styled.div``;
