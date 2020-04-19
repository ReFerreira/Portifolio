import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  margin: 0 auto;
  
  div.banner {
    height: 260px;
    border-bottom: 1px solid #fff;

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
    width: 45%;
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

width: 90%;

aside {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;
export const Perfil = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 1rem;
  margin-left: 1rem;
  img {
    margin: 10px 30px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  h1 {
    font-size: 2.1rem;
    color: #eee;
  }

  span {
      font-size: 1.4rem;
      color: #eee;
      margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #fff;
  }
  `;
export const List = styled.div`
list-style: none;

li {
  font-size: 1.4rem;
  color: #eee;
  display: flex;
  align-items: center;
  margin: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }

  a {
    color: #eee;
    text-decoration:none;
  }
}
`;
export const Skills = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  strong {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 1.4rem;
    padding-top: 1rem;
    margin-bottom: 1rem;

    svg {
      margin-right: 1rem;
    }

  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      margin: 0.5rem;

      svg {
        width: 3.5rem;
        height: 3.5rem;
        background: #D0D5D9;
        border-radius: 50%;
        flex-shrink: 0;
        color: #191920;
        margin-right: 1rem;


      }
    }
  }
`;
