import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

/* eslint-disable react/prop-types */
const MenuListItems = ({ Active, menuList }) => {
  const active = Active ? "active" : "";

  return (
    <MenuListWrapper>
      {menuList.map((item, index) => (
        <MenuListLink key={index} to={item.route}>
          {({ isActive }) => (
            <MenuListItem className={`${active} ${isActive ? "click" : ""}`}>
              {item.menu}
            </MenuListItem>
          )}
        </MenuListLink>
      ))}
    </MenuListWrapper>
  );
};

const MenuListWrapper = styled.ul`
  width: 256px;
  align-items: center;
  justify-content: center;
`;

const MenuListItem = styled.li`
  display: flex;
  width: 100%;
  height: 36px;
  padding: 8px 0px 8px 40px;
  display: none;

  &:hover {
    background: #f0f2f3;
  }

  &.active {
    display: block;
  }

  &.click {
    background: #e0e4e8;
    color: #333;
  }
`;

const MenuListLink = styled(NavLink)`
  display: flex;
  color: #777;
`;

export default MenuListItems;
