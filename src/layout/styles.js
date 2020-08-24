import styled from 'styled-components'

// Default Layout Styles
export const UsersContainer = styled.div`
  min-height: 10rem;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  padding: 3.5rem 1rem;
`

// Footer Styles
export const FooterBox = styled.div`
  width: 100%;
  height: 3rem;
  padding: 10px;
  text-align: center;
  background: #f1f1f1;
  border-top: 1px solid #ccc;
  color: #999;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
`
// End of Footer Styles

// Header Styles

export const HeaderBox = styled.div`
  width: 100%;
  height: 3rem;
  background: #f1f1f1;
  border-bottom: 1px solid #ccc;
  color: #333;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  h1 {
    line-height: 3rem;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.logout {
      left: 10px;
    }
    &.add {
      right: 10px;
    }
  }
`
// End of Header Styles
