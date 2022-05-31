import * as React from "react"
// import AppHeader from "../components/AppHeader"
import AppBanner from "../components/AppBannner"
import AppCards from "../components/AppCards"
import AppFooter from "../components/AppFooter"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="纯钧" />
    <AppBanner />
    <AppCards />
    <AppFooter />
  </>
)

export default IndexPage
