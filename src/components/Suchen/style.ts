import styled from "styled-components";

export const Content = styled.div`
   min-height: 37rem;
   position: relative;

  .search-bar {
    display: flex;
    align-items: flex-end;

    input {
      width: 100%;
      background-color:rgba(0, 0, 0, 0);
      border-bottom: 0.1rem solid #f7f7f7;
      margin-top: 6.1rem;
      margin-right: 10rem;

      font-size: 1.8rem;
      line-height: 5rem;

      &::placeholder {
        color: #81A09A;
      }
    }

    .icon-box {
      margin-left: 6rem;
      padding: 4rem;
      background-color: #585858;
      margin-right: -8rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .cities-suggestions {
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    margin-left: -1.5rem;


    span {
      padding: 2rem;
      font-size: 1.8rem;
      color: #81A09A;
      cursor: pointer;

      &:hover {
          filter: brightness(2);
          background-color: rgba(10, 10, 10, 0.1);
      }
    }
  }

  .error-container {
    font-size: 1.8rem;
    display: block;
    text-align: center;
    margin: 10rem -5rem;
    width: 100%;
    color: #81A09A;
  }

  //// Media Queries
  @media(max-width: 500px){
  .search-bar {
    input {
      margin-right: 0rem;
    }

    .icon-box {
      display: none;
    }
  }
}
`;