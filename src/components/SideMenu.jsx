import { styled } from "styled-components";
import SideMenuList from "./SideMenuList";

const menuList1 = [
  {
    menu: "소메뉴1",
    route: "/info",
  },
  {
    menu: "소메뉴2",
    route: "/info2",
  },
];

const menuList2 = [
  {
    menu: "소메뉴3",
    route: "/info3",
  },
  {
    menu: "소메뉴4",
    route: "/info4",
  },
];

const SideMenu = () => {
  return (
    <Wrapper>
      <SideMenuList menuList={menuList1} />
      <SideMenuList menuList={menuList2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 256px;
  height: 2100px;
  background: #f6f7f8;
`;

export default SideMenu;
