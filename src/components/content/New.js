import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewAdded } from "../../features/movie/movieSlice";

const New = (props) => {
  const movies = useSelector(selectNewAdded);
  return (
    <Container>
      <h3>Newly Added</h3>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
export default New;

const Container = styled.div`
  padding: 0 0 2rem;
`;
const Content = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(250, 250, 250, 0.1);
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) all 0.25s;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    z-index: 1;
    top: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8) rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
    }
  }
`;
