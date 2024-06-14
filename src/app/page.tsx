"use client"

import style from "@/style/openBetaEnd.module.css";
import i18n from "@/lib/language";
import { Trans } from "react-i18next";
export default function Home() {
  const { t } = i18n;
  const openDiscord = () => {
    window.open("https://discord.com/invite/U6gtFVf6g4");
  }
  return (
    <main className="w-screen h-screen flex justify-center">
      <div className={style.container}>
        <header className={style.header}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.8C0 2.14903 2.14903 0 4.8 0H25.2C27.851 0 30 2.14903 30 4.8V25.2C30 27.851 27.851 30 25.2 30H4.8C2.14903 30 0 27.851 0 25.2V4.8Z" fill="#3333FF" />
          </svg>
          <p className={style.title}>{t("OB_END_TITLE")}</p>
          <p className={style.date}>May 31 2024</p>
        </header>
        <div className={style.content}>
          <p className={style.content_sub}>{t("OB_END_01")}</p>
          <p className={style.content_main}>{t("OB_END_02")}</p>
          <p className={style.content_sub}>
            <Trans
              i18nKey="OB_END_03"
              components={{ b: <span className="font-pretend_sb" /> }}
            />
          </p>
          <p className={style.content_main}>{t("OB_END_04")}</p>
          <p className={style.content_sub}>{t("OB_END_05")}</p>
          <div className={style.content_depth_1}>
            <p className={style.content_main_s}>{t("OB_END_06")}</p>
            <p className={style.content_sub}>{t("OB_END_07")}</p>
            <p className={style.content_main_s}>{t("OB_END_08")}</p>
            <p className={style.content_sub}>{t("OB_END_09")}</p>
            <p className={style.content_main_s}>{t("OB_END_10")}</p>
            <p className={style.content_sub}>{t("OB_END_11")}</p>
          </div>
          <p className={style.content_sub}>{t("OB_END_12")}</p>
          <button onClick={openDiscord} className={style.discord_button}>ZEAT Discord Server</button>
        </div>
      </div>
    </main>
  );
}
