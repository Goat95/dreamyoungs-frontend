import { styled } from "styled-components";

import Form from "../components/Form";

const Info = () => {
  return (
    <Wrapper>
      <Title>타이틀</Title>
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 30px;
`;

export default Info;
