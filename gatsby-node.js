const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = async ({ node, getNode, actions, cache, store, createNodeId }) => {
  const { createNodeField, createNode } = actions;
  
  // convert any absolute paths in markdown frontmatter data into relative paths if matching file is found
  fmImagesToRelative(node);

  // create slugs for markdown pages
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const slug = createFilePath({ node, getNode });
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              templateKey
            }
            fields {
              slug
              }
          }
        }
      }
    }
  `);
    // Auto generate pages

  if (pageResult.errors) {
    console.error(pageResult.errors); // this error needs to be more descriptive
  }

  // create about page
  const aboutPage = pageResult.data.allMarkdownRemark.edges.filter(edge => Boolean(edge.node.fields.slug.match(/^\/about-page\//)));

  aboutPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/about-page.js'),
      context: { id: edge.node.id }
    });
  });

  // create exclusive-premiers page
  const exclusivePremiersPage = pageResult.data.allMarkdownRemark.edges.filter(edge => {
    return Boolean(edge.node.fields.slug.match(/^\/exclusive-premiers\//));
  });

  exclusivePremiersPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/exclusive-premiers-page.js'),
      context: { id: edge.node.id }
    });
  });

  // create exclusive-premier post page
  const exclusivePremierPostPage = pageResult.data.allMarkdownRemark.edges.filter(edge => Boolean(edge.node.frontmatter.templateKey.match(/^exclusive-premiers$/)));

  exclusivePremierPostPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/exclusive-premiers-post-page-template.js'),
      context: { slug: edge.node.fields.slug }
    });
  });

  // create interviews page
  const interviewsPage = pageResult.data.allMarkdownRemark.edges.filter(edge => Boolean(edge.node.fields.slug.match(/^\/interviews\//)));

  interviewsPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/interviews-page.js'),
      context: { id: edge.node.id }
    });
  });

  // create interviews post page
  const interviewsPostPage = pageResult.data.allMarkdownRemark.edges.filter(edge => Boolean(edge.node.frontmatter.templateKey.match(/^interviews$/)));

  interviewsPostPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/interviews-post-page-template.js'),
      context: { slug: edge.node.fields.slug }
    });
  });

  // create music-reviews page
  const musicReviewsPage = pageResult.data.allMarkdownRemark.edges.filter(edge => Boolean(edge.node.fields.slug.match(/^\/music-reviews\/$/)));

  musicReviewsPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/music-reviews-page.js'),
      context: { id: edge.node.id }
    });
  });

  // create music-reviews post page
  const musicReviewsPostPage = pageResult.data.allMarkdownRemark.edges.filter(edge => Boolean(edge.node.frontmatter.templateKey.match(/^music-reviews$/)));

  musicReviewsPostPage.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve('src/templates/music-reviews-post-page-template.js'),
      context: { slug: edge.node.fields.slug }
    });
  });
};
