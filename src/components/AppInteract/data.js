import icon from "./icon.png"
export const getData = ({ width, height }) => {
  let nodes = getNodes({ width, height })
  let edges = getEdges(nodes)
  return {
    nodes: nodes,
    edges: edges,
  }
}

function getEdges(nodes) {
  let res = []
  let centerNode = nodes.find(node => node.center)
  nodes.forEach(node => {
    if (!node.center) {
      res.push({
        head: node.key,
        tail: centerNode.key,
      })
    }
  })
  return res
}

function getNodes({ width, height }) {
  const nodes = [
    {
      key: "a",
      img: icon,
      width: 50,
      height: 50,
      x: 166,
      y: 135,
    },
    {
      key: "b",
      img: icon,
      width: 50,
      height: 50,
      x: 64,
      y: 164,
      size: "big",
    },
    {
      key: "c",
      img: icon,
      width: 50,
      height: 50,
      x: 201,
      y: 32,
      size: "big",
    },
    {
      key: "d",
      img: icon,
      width: 50,
      height: 50,
      x: 87,
      y: 340,
    },
    {
      key: "e",
      img: icon,
      width: 50,
      height: 50,
      x: 52,
      y: 451,
      size: "big",
    },
    {
      key: "f",
      img: icon,
      width: 100,
      height: 100,
      x: 377,
      y: 274,
      center: true,
    },
    {
      key: "g",
      img: icon,
      width: 50,
      height: 50,
      x: 658,
      y: 155,
    },
    {
      key: "h",
      img: icon,
      width: 50,
      height: 50,
      x: 603,
      y: 52,
    },
    {
      key: "i",
      img: icon,
      width: 50,
      height: 50,
      x: 191,
      y: 453,
    },
    {
      key: "j",
      img: icon,
      width: 50,
      height: 50,
      x: 701,
      y: 245,
      size: "big",
    },
    {
      key: "2",
      img: icon,
      width: 50,
      height: 50,
      x: 606,
      y: 335,
      size: "big",
    },
    {
      key: "22",
      img: icon,
      width: 50,
      height: 50,
      x: 539,
      y: 435,
    },
    {
      key: "222",
      img: icon,
      width: 50,
      height: 50,
      x: 688,
      y: 98,
      size: "big",
    },
    {
      key: "333",
      img: icon,
      width: 50,
      height: 50,
      x: 665,
      y: 399,
    },
  ].map(node => {
    if (node.size == "big") {
      node.width = 100
      node.height = 100
    }
    return {
      ...node,
      x: (node.x / 835) * width,
      y: (node.y / 696) * height,
    }
  })

  return nodes
}
