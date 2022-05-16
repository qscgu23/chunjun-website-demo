import * as React from "react"
import AppHeader from "../components/AppHeader"
import AppBanner from "../components/AppBannner"
import AppMedium from "../components/AppMedium"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="纯钧" />
    <AppHeader />
    <AppBanner />
    <AppMedium />
  </>
)

export default IndexPage
