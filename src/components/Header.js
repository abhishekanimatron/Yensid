import styled from "styled-components";
import { auth, provider } from "../firebase";
const Header = (props) => {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg" alt="disney" />
      </Logo>

      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="Search" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="Watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="Originals" />
          <span>ORIGINALS</span>
        </a>
        <a href="/home">
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};
export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8rem;
  background-color: black;
  display: flex;
  letter-spacing: 2rem;
  align-items: center;
  padding: 0 3rem;
  justify-content: space-between;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 10rem;
  cursor: pointer;
`;

const NavMenu = styled.div`
  height: 8rem;
  background-color: black;
  display: flex;
  letter-spacing: 2rem;
  align-items: center;
  padding: 0 3rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 0.6rem;
    text-decoration: none;

    img {
      height: 30px;
    }
    span {
      font-size: 1rem;
      padding: 2px 0;
      letter-spacing: 0.2rem;
      color: #eee;
      white-space: nowrap;
      position: relative;
      margin-left: 0.5rem;
      font-weight: bold;

      &:before {
        background-color: #eee;
        border-radius: 0 0 4px 4px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -12px;
        height: 2px;
        width: auto;
        content: "";
        opacity: 0;
        visibility: hidden;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  margin-left: 20rem;
  letter-spacing: 1rem;
  font-size: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid #fafafa;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
    color: black;
    border-color: transparent;
  }
`;
