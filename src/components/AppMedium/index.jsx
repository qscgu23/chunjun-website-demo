import React from "react"
import "./index.scss"

const AppMedium = () => {
  return (
    <>
      <section className="second">
        <h1 className="section__title second__title">Why Chunjun?</h1>
        <div className="second__wrapper">
          <div className="second__wrapper--card">
            <img
              className="second__wrapper--img"
              src={require("../../assets/img/nat-1.png").default}
              alt=""
            />
            <h3 className="card__title">轻松上手</h3>
            <p className="card__text" style={{ color: "#00b3f9" }}>
              基于json,sql
              快速构建数据同步任务,你只需要关注数据源的结构信息即可,
              让您节省时间,专注于数据集成的开发。
            </p>
          </div>
          <div className="second__wrapper--card">
            <img
              className="second__wrapper--img"
              src={require("../../assets/img/nat-2.png").default}
              alt=""
            />
            <h3 className="card__title">基于 Flink</h3>
            <p className="card__text" style={{ color: "#6349bf" }}>
              构建于flink之上，基于flink 原生的input,output
              相关接口来实现多种数据源之间的数据传输，同时你可以基于 flink
              自己扩展插件。
            </p>
          </div>
          <div className="second__wrapper--card">
            <img
              className="second__wrapper--img"
              src={require("../../assets/img/nat-3.png").default}
              alt=""
            />
            <h3 className="card__title">功能丰富</h3>
            <p className="card__text" style={{ color: "#29dde8" }}>
              支持原生FlinkSql所有语法和特性的计算框架，提供多种数据源之间数据传输，断点续传，增量同步，实时采集
              ，脏数据管理，实时数据还原等功能。
            </p>
          </div>
        </div>
      </section>
      <section className="third">
        <h1 className="section__title third__title">what is Chunjun?</h1>
        <div className="third__wrapper">
          <div className="third__wrapper--card left">
            <div className="third__wrapper--img">
              <img
                src={require("../../assets/img/start-nobg.png").default}
                alt=""
              />
            </div>
            <div className="third__wrapper--description">
              <h4>纯钧的诞生与由来</h4>
              <p>
                原名Flinkx,其由袋鼠云于2017年初步研发完成，于2022年更名为ChunJun。是一款基于Flink之上提供稳定，高效，易用的批流一体的数据集成工具，可实现多种异构数据源高效的数据同步。
              </p>
            </div>
          </div>
          <div className="third__wrapper--card right">
            <div className="third__wrapper--description">
              <h4>我们开源啦！</h4>
              <p>
                2018年4月，秉承着开源共享理念的数栈技术团队在github上开源了FlinkX，历经4年多的发展，FlinkX从当初的一个小项目，成长为拥有2900+star，1300+fork的开源项目。
              </p>
            </div>
            <div className="third__wrapper--img">
              <img
                src={require("../../assets/img/opensource-nobg.png").default}
                alt=""
              />
            </div>
          </div>
          <div className="third__wrapper--card left">
            <div className="third__wrapper--img">
              <img src={require("../../assets/img/less.png").default} alt="" />
            </div>
            <div className="third__wrapper--description">
              <h4>纯钧的核心功能</h4>
              <ul>
                <li>
                  1. 兼容<strong>Flink Sql语法</strong>，支持分布式运行
                </li>
                <li>
                  2. 支持多种异构数据源，可实现
                  <strong>MySQL、Oracle、SQLServer、Hive、Hbase</strong>
                  等20多种数据源的双向采集
                </li>
                <li>
                  3. 支持<strong>基于cdc</strong>的实时数据采集和数据实时还原
                </li>
                <li>
                  4. <strong>高扩展性，强灵活性</strong>
                  ，新扩展的数据源可与现有数据源可即时互通
                </li>
                <li>
                  5. 支持<strong>增量同步，断点续传，脏数据管理</strong>
                  ，并提供多种指标监控
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth">
        <h1 className="section__title fourth__title">join us, join Chunjun</h1>
        <div className="fourth__committer">
          <a href="https://github.com/DTStack/chunjun/graphs/contributors">
            <img src="https://contrib.rocks/image?repo=DTStack/chunjun" />
          </a>
        </div>
        <div className="fourth__button">
          <button className="btn btn__large btn__blue">join now !</button>
        </div>
      </section>
    </>
  )
}

export default AppMedium
