import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border-radius: 0.5rem;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
    }

    span {
      position: absolute;
      top: 1.7rem;
      right: 9.8rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 999px;
      text-align: center;
      padding: 0.1rem;
      font-size: 0.8rem;
      color: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const LocationInput = styled.div`
  width: 9rem;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 0.5rem;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  input {
    width: 80%;
    height: 1.125rem;
    font-size: 0.845rem;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
    ::placeholder {
      color: ${(props) => props.theme.purple};
    }
  }
`
