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
  }
`
export const LocationInput = styled.div`
  width: 9rem;
  height: 2.3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  input {
    width: 6.3rem;
    height: 1.125rem;
    font-size: 0.8rem;
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
