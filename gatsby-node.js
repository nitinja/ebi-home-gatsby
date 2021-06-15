const fetch = require('node-fetch');

const NODE_TYPE = 'News';

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions;
    const response = await fetch('https://www.ebi.ac.uk/about/news/feed.json');
    const json = await response.json();
    const { nodes = [] } = json;
    nodes.forEach(({ node }, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${index}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    });
  });
};