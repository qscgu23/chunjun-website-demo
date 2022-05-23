import * as React from "react"
// import AppHeader from "../components/AppHeader"
import AppBanner from "../components/AppBannner"
import AppMedium from "../components/AppMedium"
import AppFooter from "../components/AppFooter"
import Seo from "../components/seo"
import AppShowcase from "../components/AppShowcase"

const IndexPage = () => (
  <>
    <Seo title="纯钧" />
    {/* <AppHeader /> */}
    <AppBanner />
    <AppMedium />
    <AppShowcase />
    <AppFooter />
  </>
)

export default IndexPage
