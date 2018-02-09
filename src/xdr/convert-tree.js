// I know, I know, this file is a mess.
// The output from the extrapolation function is a little tricky to walk.
// This function is only really useful for processing the output of extrapolateFromXdr()

/**
 *
 * @param {*} nodes
 * @param {*} object - This object is mutated.
 */
function convert(nodes, object = {}) {
  // /* eslint-disable no-debugger */
  // debugger
  nodes.forEach((node, index) => {
    // Nothing to loop over, just the value. Base case?
    if (typeof node.nodes === 'undefined') {
      object[node.type] = node.value
      return //object
    }

    // The node is a member of an array - that .value is something like '[0]'
    if (node.value && node.value.match(/Array\[(\d+)\]/i)) {
      object[node.type] = node.nodes.map(node => convert(node.nodes))
      return //object
    }

    // Its a member of an array, then flatten out the keys
    if (node.type.match(/\[(\d+)\]/i)) {
      node.nodes.forEach((n, i) => {
        object[node.nodes[i].type] = node.nodes[i].nodes.map(node => convert(node.nodes))
      })
    } else {
      object[node.type] = {}
      return convert(node.nodes, object[node.type])
    }
  })

  return object
}

module.exports = convert
