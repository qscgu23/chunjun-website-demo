import React from "react"
import "./index.scss"
import AppHeader from "../AppHeader"
const AppBanner = () => {
  return (
    <div className="bg">
      <AppHeader />
      <section className="container">
        <div className="container__wrapper">
          <h1 className="container__wrapper--title">
            <span className="container__wrapper--subtitle">ChunJun 纯钧</span>
            <br />
            一款基于Flink之上提供稳定，高效，易用的批流一体的数据集成工具，可实现多种异构数据源高效的数据同步。
          </h1>
          <div className="container__wrapper--buttons">
            <button className="btn btn__blue btn__large">github</button>
            <button className="btn btn__white btn__large">联系我们</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppBanner
