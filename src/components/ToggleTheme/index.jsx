import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

import { ToggleContainer } from "./styles";

const ToggleTheme = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <ToggleContainer>
      <BsSun size={"2rem"} />
      <Switch
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={toggleTheme}
        checked={title === "dark"}
        onColor={colors.secundary}
        height={10}
        width={40}
        handleDiameter={15}
        offColor={colors.secundary}
      />
      <BsMoon size={'2rem'} />
    </ToggleContainer>
  );
};

export default ToggleTheme;
