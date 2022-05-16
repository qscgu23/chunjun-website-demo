import React, { useState } from "react"
import AppDrawer from "../AppDrawer"
import { Link } from "gatsby"
import { ActionIcon, Burger, Menu } from "@mantine/core"
import { Github, Moon, Translate } from "@icon-park/react"
import "./index.scss"

const AppHeader = () => {
  const options = [
    {
      label: "简体中文",
      key: "zh_Hans",
    },
    {
      label: "English",
      key: "en",
    },
  ]
  const [opened, setOpened] = useState(false)
  const title = opened ? "Close navigation" : "Open navigation"

  const links = [
    {
      name: "Get Started",
      path: "/",
    },
    {
      name: "Documents",
      path: "/documents",
    },
    {
      name: "Blog",
      path: "/blogs",
    },
    {
      name: "Download",
      path: "/download",
    },
    {
      name: "Roadmap",
      path: "/roadmap",
    },
  ]

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__wrapper--link logo">
          <img
            src={require("../../assets/img/logo-light.svg").default}
            width={50}
            alt="logo"
          />
          纯钧<span>ChunJun</span>
        </Link>
        <div className="another__wrapper">
          {links.map(link => (
            <Link to={link.path} className="header__wrapper--link">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="function__wrapper">
          <ActionIcon
            variant="transparent"
            className="function__wrapper--item"
            onClick={() =>
              window.open("https://github.com/DTStack/chunjun", "_blank")
            }
          >
            <Github className="icon" theme="outline" size="32" fill="#fff" />
          </ActionIcon>
          <Menu
            className="function__wrapper--item"
            control={<Translate theme="outline" size="24" fill="#fff" />}
            trigger="hover"
          >
            <Menu.Label>Language</Menu.Label>
            {options.map(option => {
              return <Menu.Item key={option.key}>{option.label}</Menu.Item>
            })}
          </Menu>
          <ActionIcon variant="transparent" className="function__wrapper--item">
            <Moon theme="outline" size="24" fill="#ffda79" />
          </ActionIcon>
          <Burger
            opened={opened}
            className="function__wrapper--item burger"
            onClick={() => setOpened(o => !o)}
            title={title}
            color={"var(--white-color)"}
          />
        </div>
      </div>
      <AppDrawer
        opened={opened}
        handleClose={() => setOpened(false)}
        title={
          <div className="drawer__header">
            <img
              src={require("../../assets/img/logo-light.svg").default}
              width={50}
              alt="logo"
              style={{ margin: 0 }}
            />
            纯钧
          </div>
        }
        padding="xl"
        size="xl"
        className="header__drawer"
      >
        <div className="drawer__wrapper">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="drawer__wrapper--link"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </AppDrawer>
    </header>
  )
}

export default AppHeader
