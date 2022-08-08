import React from "react"
import { useTranslation } from "react-i18next"

function Home() {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      {t("Home.Heading")}
    </div>
  )
}

export default Home