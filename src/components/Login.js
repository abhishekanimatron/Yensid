import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="services" />
          <SignUp>GET THE YENSID BUNDLE</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad
            nulla hic dolorum doloremque tenetur totam voluptatibus nostrum
            vitae eveniet corrupti voluptatem ratione, in nemo magnam quae
            impedit, praesentium eius!
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="content channels" />
        </CTA>
        <BackImage />
      </Content>
    </Container>
  );
};

// Styled components with html tags
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 30px;
  height: 100%;
`;

const BackImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

export default Login;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 60rem;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 60%;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: 900;
  color: #e8e8e8;
  background-color: #0055f5;
  margin-bottom: 12px;
  width: 70%;
  letter-spacing: 2px;
  font-size: 1.1rem;
  padding: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.2rem;

  &:hover {
    background-color: #006ff5;
    cursor: pointer;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 0 0 1.5rem;
  max-width: 85%;
  line-height: 1.5;
  letter-spacing: 2px;
`;

const CTALogoTwo = styled.img`
  max-width: 40rem;
  margin-top: 1rem;
  max-width: 70%;
`;
