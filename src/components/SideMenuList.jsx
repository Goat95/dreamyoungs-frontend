import { styled } from "styled-components";
import { useState } from "react";

import MenuUnfoldImage from "../assets/icons/gnb_unfold_inactive.svg";
import MenufoldImage from "../assets/icons/gnb_fold_active.svg";
import MenuListItems from "./MenuListItems";

/* eslint-disable react/prop-types */
const SideMenuList = ({ menuList }) => {
  const [isActive, setIsActive] = useState(false);

  const active = isActive ? "active" : "";

  const handleGnbClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Wrapper>
      <MenuTitleWrapper className={active}>
        <MenuTitle>
          <h3 className="title">대메뉴</h3>
          <button
            onClick={handleGnbClick}
            style={{
              cursor: "pointer",
              background: "inherit",
              border: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <img
              src={isActive ? MenufoldImage : MenuUnfoldImage}
              alt="MenuUnfoldImage"
            />
          </button>
        </MenuTitle>
      </MenuTitleWrapper>
      <MenuListItems menuList={menuList} Active={isActive} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
`;

const MenuTitleWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: #f0f2f3;
  }

  &.active {
    background: #e0e4e8;
    color: #333;
  }

  &.title {
    color: #333;
    font-weight: 500;
  }
`;

const MenuTitle = styled.div`
  display: flex;
  gap: 151px;
`;

export default SideMenuList;
