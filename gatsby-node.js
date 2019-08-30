const path = require(`path`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/layouts/PageLayout.tsx`)
  return graphql(`
    {
      allPagesJson {
        nodes {
          path
          page {
            body
            language
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allPagesJson.nodes.forEach(({ pages, path }) => {
      return pages.forEach(({ body, language }) => {
        return createPage({
          path: `${language}/${path}`,
          component: pageTemplate,
          context: { body },
        })
      })
    })
  })
}
