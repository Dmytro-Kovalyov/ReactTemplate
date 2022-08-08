import i18next from "i18next"
import React from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import SelectLanguage from "./SelectLanguage/SelectLanguage"

function Navbar() {
  const { t, i18n } = useTranslation("common");

  return (
    <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">{t("Navbar.Home")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("Navbar.About")}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t("Navbar.Contact")}</NavLink>
          </li>
          <li>
            <SelectLanguage />
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
