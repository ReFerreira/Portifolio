import React from "react";

import Bar from "../../components/Bar";

import { Container, Content } from "./styles";
import { useTranslation } from "react-i18next";

const achievements = ["part-1", "part-2", "part-3", "part-4"];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <Container>
      <Bar />
      <Content>
        <img
          src="https://media-exp1.licdn.com/dms/image/C510BAQFxHGWL83TwOQ/company-logo_100_100/0?e=1595462400&v=beta&t=Qc3bkLGnvlOq2w6XDBpstKA9g-OYbRtF8o67MN9E0fY"
          alt="FATEC-BT"
        />
        <div className="details">
          <h3>{t("pages.experience.professional-title")}</h3>
          <strong>Embraer - Full-time</strong>
          <span>{t("pages.experience.period-in-company")}</span>
          <span>Botucatu, Brazil</span>
          <article>
            <p>{t("pages.experience.responsability")}</p>
            <ul>
              {achievements.map((achievement) => (
                <li>{t(`pages.experience.achievements.${achievement}`)}</li>
              ))}
            </ul>
          </article>
        </div>
      </Content>
    </Container>
  );
}
