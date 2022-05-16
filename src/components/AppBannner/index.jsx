import React from "react"
import "./index.scss"
const AppBanner = () => {
  return (
    <section className="container">
      <div className="container__wrapper">
        <h1 className="container__wrapper--title">
          <span className="container__wrapper--subtitle">ChunJun 纯钧</span>
          <br />
          一个基于<span id="flink">Flink</span>的批流统一的数据同步工具
        </h1>
        <div className="container__wrapper--buttons">
          <button className="btn btn__blue btn__large">quick start</button>
          <button className="btn btn__white btn__large">github</button>
        </div>
      </div>
      <img
        src={require("../../assets/img/banner-2.png").default}
        className="container__banner"
        alt="Banner"
      />
    </section>
  )
}

export default AppBanner
