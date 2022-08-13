import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

import { ToggleContainer } from "./styles";

const ToggleTheme = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <ToggleContainer>
      <BsSun size={25} />
      <Switch
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={toggleTheme}
        checked={title === "dark"}
        onColor={colors.secundary}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
      />
      <BsMoon size={25} />
    </ToggleContainer>
  );
};

export default ToggleTheme;
