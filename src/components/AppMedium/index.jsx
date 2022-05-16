import React from "react"
import "./index.scss"

const AppMedium = () => {
  return (
    <>
      <section className="second">
        <h1 className="second__title">Why Chunjun?</h1>
        <div className="second__wrapper">
          <div className="second__wrapper--card">
            <img src={require("../../assets/img/nat-1.png").default} alt="" />
            <h3 className="card__title">轻松上手</h3>
            <p className="card__text" style={{ color: "#00b3f9" }}>
              基于json,sql
              快速构建数据同步任务,你只需要关注数据源的结构信息即可,
              让您节省时间,专注于数据集成的开发。
            </p>
          </div>
          <div className="second__wrapper--card">
            <img src={require("../../assets/img/nat-2.png").default} alt="" />
            <h3 className="card__title">基于 Flink</h3>
            <p className="card__text" style={{ color: "#6349bf" }}>
              构建于flink之上，基于flink 原生的input,output
              相关接口来实现多种数据源之间的数据传输，同时你可以基于 flink
              自己扩展插件。
            </p>
          </div>
          <div className="second__wrapper--card">
            <img src={require("../../assets/img/nat-3.png").default} alt="" />
            <h3 className="card__title">功能丰富</h3>
            <p className="card__text" style={{ color: "#29dde8" }}>
              支持原生FlinkSql所有语法和特性的计算框架，提供多种数据源之间数据传输，断点续传，增量同步，实时采集
              ，脏数据管理，实时数据还原等功能。
            </p>
          </div>
        </div>
      </section>
      <section className="third"></section>
    </>
  )
}

export default AppMedium
