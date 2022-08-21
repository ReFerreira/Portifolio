import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Nav } from "./styles";

export default function Bar() {
  const { t } = useTranslation();
  return (
    <Nav>
      <Link to="/">{t("menu.about")}</Link>
      <Link to="/projects">{t("menu.projects")}</Link>
      <Link to="/education">{t("menu.education")}</Link>
      <Link to="/experience">{t("menu.experience")}</Link>
    </Nav>
  );
}
