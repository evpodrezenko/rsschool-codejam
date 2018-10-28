function recursion(tree) {
  function getValues(nodes) {
    const result = [];
    const children = [];
    const values = [];

    nodes.forEach(function (node) {
      for (let key in node) {
        if (key === 'value') {
          values.push(node[key]);
        } else { 
          children.push(node[key]);
        }
      }
    });
    result.push(values);

    if (children.length) {
      const childrenValues = getValues(children);
      childrenValues.forEach((value) => { result.push(value); });
    }

    return result;
  }

  return getValues([tree]);
}
