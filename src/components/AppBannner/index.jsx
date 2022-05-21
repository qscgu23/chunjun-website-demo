import React from "react"
import "./index.scss"
import AppHeader from "../AppHeader"
import { Github } from "@icon-park/react"
const AppBanner = () => {
  return (
    <div className="bg">
      <AppHeader />
      <section className="container">
        <div className="container__wrapper">
          <h1 className="container__wrapper--title">
            <span className="container__wrapper--subtitle">ChunJun 纯钧</span>
            <br />
            一款基于<span id="flink">Flink</span>
            之上提供稳定，高效，易用的批流一体的数据集成工具，可实现多种异构数据源高效的数据同步。
          </h1>
          <div className="container__wrapper--buttons">
            <button className="btn btn__blue btn__large">quick start</button>
            <button className="btn btn__white btn__large">
              <div
                style={{ display: "flex", alignItems: "center", padding: 0 }}
              >
                <Github theme="outline" size="15" fill="#333" />
                github
              </div>
            </button>
          </div>
        </div>
        <img
          src={require("../../assets/img/bg-remove.png").default}
          className="container__banner"
          alt="Banner"
        />
      </section>
    </div>
  )
}

export default AppBanner
