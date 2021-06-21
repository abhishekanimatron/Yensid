import styled from "styled-components";
import ImageSlider from "./content/ImageSlider";
import New from "./content/New";
import Recommend from "./content/Recommend";
import Trending from "./content/Trending";
import Viewers from "./content/Viewers";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUsername } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  let recommends = [];
  let newAdded = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newAdded = [...newAdded, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newAdded: newAdded,
          trending: trending,
        })
      );
    });
  }, [username]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommend />
      <New />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
