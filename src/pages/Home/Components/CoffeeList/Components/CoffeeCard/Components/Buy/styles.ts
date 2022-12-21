import styled from 'styled-components'

export const BuyContainer = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0 1.5rem 0 0.5rem;
  }
`
// export const Counter = styled.div`
//   width: 4.5rem;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${(props) => props.theme['base-button']};
//   color: ${(props) => props.theme.purple};
//   margin-right: 0.5rem;
//   border-radius: 8px;
//   transition: background-color 0.5s ease-in-out;

//   p {
//     font-family: 'Roboto', sans-serif;
//     font-size: 1.2rem;
//     color: ${(props) => props.theme['base-subtitle']};
//     font-weight: 100;
//     padding: 0;
//     margin: 0 0.5rem;
//     text-align: center;
//   }

//   div {
//     :hover {
//       color: ${(props) => props.theme['base-title']};
//     }
//   }
// `
