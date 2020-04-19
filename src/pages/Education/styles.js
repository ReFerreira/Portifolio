import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: 1rem;
  background: #000000;
 
`;

export const Content = styled.div`
  max-width: 100%;
  background: #191919;
  border-radius: 4px;
  margin-top: 10px;

  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      div.conteudo {
      margin: 10px 10px;
      display: flex;
      align-items: center;

        img {
          max-width: 35%;
        }

        div.details {
          margin-left: 5px;
          display: grid;
          strong {
            font-size: 1.4rem;
            color: #e6e6e6
          }

          span {
            font-size: 1.2rem;
          }
        }
      }

      span {
        margin-right: 5px;
      }
    }
  }
`;