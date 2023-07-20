import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";

import SideMenu from "./components/SideMenu.jsx";

import InitialPage from "./pages/InitialPage.jsx";
import Info from "./pages/Info";
import Info2 from "./pages/Info2";
import Info3 from "./pages/Info3";
import Info4 from "./pages/Info4";

const App = () => {
  return (
    <Container>
      <SideMenu />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info2" element={<Info2 />} />
        <Route path="/info3" element={<Info3 />} />
        <Route path="/info4" element={<Info4 />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default App;
