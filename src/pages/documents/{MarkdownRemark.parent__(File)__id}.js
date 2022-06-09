import * as React from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import "./index.scss"
import "./md.css"
import { buildMenu, getFileArr } from "../../util"
import { State } from "../../components/documentsMenu/menu"

const BlogPost = props => {
  // const menuData = buildMenu(ldata.allFile.edges.map(item => item.node))

  const menuData = buildMenu(props.data.allFile.edges.map(item => item.node))
  const fileList = getFileArr(menuData.children)
  const html = props.data.markdownRemark.html
  const data = props.data.markdownRemark
  const title = data.parent.name
  const modifiedTime = data.parent.modifiedTime

  // const state = props.location.state
  let location = window.location.pathname.split("/").pop()
  let fileIndex = fileList.map(item => item.data.id).indexOf(location)

  const [preName, setPre] = React.useState("（无）")
  const [nextName, setNext] = React.useState("（无）")

  React.useEffect(() => {
    if (fileIndex > 0) {
      setPre(fileList[fileIndex - 1].name)
    }
    if (fileIndex != fileList.length - 1) {
      setNext(fileList[fileIndex + 1].name)
    }
  }, [])

  function goPre() {
    if (fileIndex === 0) return

    let target = fileList[fileIndex - 1]
    navigate(`/documents/${target.data.id}`, {
      state: {
        fileIndex: fileIndex - 1,
        fileList: fileList,
      },
    })
  }
  function goNext() {
    if (fileIndex + 1 == fileList.length) return
    let target = fileList[fileIndex + 1]
    navigate(`/documents/${target.data.id}`, {
      state: {
        fileIndex: fileIndex + 1,
        fileList: fileList,
      },
    })
  }

  return (
    <>
      <div className="markdown-body">
        <h1 className="md__title"> {title} </h1>
        <h3 className="md__tag">
          最后修改于 : {new Date(modifiedTime).toLocaleDateString()}{" "}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="btn-group">
        <button
          className="go-btn pre-btn border border-gray-200 text-base shadow-sm hover:shadow"
          onClick={goPre}
        >
          <p className="top-text">上一篇</p>
          <p className="bo-text text-xl"> {preName} </p>
        </button>
        <button
          className="go-btn next-btn border border-gray-200 text-base shadow-sm hover:shadow"
          onClick={goNext}
        >
          <p className="top-text">下一篇</p>
          <p className="bo-text text-2xl"> {nextName} </p>
        </button>
      </div>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      parent {
        ... on File {
          id
          name
          modifiedTime
          ino
        }
      }
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "docs" }
        extension: { eq: "md" }
        ctime: {}
      }
    ) {
      edges {
        node {
          id
          name
          parent {
            id
            ... on Directory {
              id
              name
            }
          }
          relativePath
          ctime
          modifiedTime
        }
      }
    }
  }
`

export default BlogPost
