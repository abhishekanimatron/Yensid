import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Recommend from "./Recommend";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommend />
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
