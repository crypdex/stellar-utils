function convert(nodes, object = {}) {
  // /* eslint-disable no-debugger */
  // debugger
  nodes.forEach((node, index) => {
    // console.log(node.type, node)
    if (typeof node.nodes === 'undefined') {
      object[node.type] = node.value
      return object
    } else {
      // Its an array
      if (node.value && node.value.match(/\[(undefined)\]/i)) {
        node.nodes.forEach((n, i) => {
          object[n.type] = n.nodes.map(node => convert([node]))
        })
        return object
      }

      if (node.value && node.value.match(/\[(\d+)\]/i)) {
        object[node.type] = node.nodes.map(node => convert(node.nodes))
        return object
      }

      if (node.type.match(/\[(\d+)\]/i)) {
        node.nodes.forEach((n, i) => {
          object[node.nodes[i].type] = node.nodes[i].nodes.map(node => convert(node.nodes))
        })
      } else {
        object[node.type] = {}
        return convert(node.nodes, object[node.type])
      }
    }
  })
  return object
}

module.exports = convert
