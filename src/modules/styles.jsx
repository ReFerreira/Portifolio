import styled from 'styled-components';

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
