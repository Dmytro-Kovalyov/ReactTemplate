import React from "react"
import { useTranslation } from "react-i18next"

function Contact() {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      {t("Contact.Heading")}
    </div>
  )
}

export default Contact