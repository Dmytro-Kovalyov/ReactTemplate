import React from 'react'
import { useTranslation } from "react-i18next"
import Select from 'react-select'
import uk_flag from "./icons/ua.png"
import en_flag from "./icons/gb.png"

export default function SelectLanguage() {
  const { t, i18n } = useTranslation("common");
  const options = [
    { value: "uk", label: <img class="flag-image" src={uk_flag} alt="Українська" />},
    { value: "en", label: <img class="flag-image" src={en_flag} alt="English" />}
  ]

  function onChangeLanguage(e) {
    i18n.changeLanguage(e.value)
  }
  
  return (
    <Select defaultValue={options[0]} onChange={onChangeLanguage} className="select-language" options={options} />
  )
}
