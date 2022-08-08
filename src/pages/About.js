import React from "react"
import { useTranslation } from "react-i18next"

function About() {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      {t("About.Heading")}
    </div>
  )
}

export default About
