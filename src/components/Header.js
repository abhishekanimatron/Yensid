import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
// authentication and provider form firebase
import { useDispatch, useSelector } from "react-redux";
// dispatch items to store, retrieve items to store
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice.js";
import { useEffect } from "react";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // runs only when username is changed
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        //if user exists
        setUser(user);
        history.push("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  // get user details and dispatch to store
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg" alt="disney" />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
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
          <SignOut>
            <UserImg src={userPhoto} alt={username} />
            <DropDown>
              <span onClick={handleAuth}>Logout</span>
            </DropDown>
          </SignOut>
        </>
      )}
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

const UserImg = styled.img`
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 0.5s;
    }
  }
`;
