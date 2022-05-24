/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
const React = require("react")
const { default: AppHeader } = require("./src/components/AppHeader")

const Layout = require("./src/components/documentsMenu/menu").default
const SpaceLayout = require("./src/components/space/spaceLayout").default

// You can delete this file if you're not using it
import("./src/assets/sass/index.scss")
exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  console.log(element, "@@@!")

  return (
    <>
      {element.key.includes("documents") ? (
        <>
          <AppHeader></AppHeader>
          <Layout {...props}>{element}</Layout>
        </>
      ) : (
        <SpaceLayout {...props}>{element}</SpaceLayout>
      )}
    </>
  )
}
