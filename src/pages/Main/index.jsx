/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useTranslation } from "react-i18next";

import Bar from "../../components/Bar";
import { FaFileDownload } from "react-icons/fa";

import { Container, Content, Header, About } from "./styles";
import facebook from "../../assets/images/facebook.jpg";
import profile from "../../assets/CV/Profile.pdf";
export default function Main() {
  const { t } = useTranslation();
  return (
    <Container>
      <Bar />

      <Content>
        <Header>
          <aside>
            <h1>Reinaldo Ferreira</h1>
            <strong>Full-Stack Developer</strong>
            <p>{t("pages.main.part-1")}</p>
            <p>{t("pages.main.part-2")}</p>
            <button type="button">
              <div>
                <FaFileDownload />
                <a href={profile} target="_blank">
                  {t("pages.main.resume")}
                </a>
              </div>
            </button>
          </aside>
        </Header>

        <About>
          <aside>
            <img src={facebook} alt="Facebook" />
          </aside>
          <div className="about">
            <p>{t("pages.main.about.part-1")}</p>

            <p>{t("pages.main.about.part-2")}</p>

            <p>{t("pages.main.about.part-3")}</p>
          </div>
        </About>
      </Content>
    </Container>
  );
}
