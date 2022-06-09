import * as React from "react"
import { graphql } from "gatsby"

const BlogPost = props => {
  console.log(props.data, "mk")

  return (
    <>
      {/* <div className="markdown-body">
        <h1 className="md__title"> {title} </h1>
        <h3 className="md__tag">
          最后修改于 : {new Date(modifiedTime).toLocaleDateString()}{" "}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div> */}
    </>
  )
}

// export const query = graphql`
//   query ($id: String) {
//     allF1Json(id: { eq: $id }) {
//       edges {
//         node {
//           parent {
//             internal {
//               content
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default BlogPost
