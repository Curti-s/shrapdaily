import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Seo from '../components/SEO';

const InterviewsPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const { frontmatter: { seo: { browserTitle, description, pathname } } } = page;
  const { allMarkdownRemark: { edges: posts } } = data;

  return (
    <Layout>
      <Seo title={browserTitle} description={description} pathname={pathname} />
      <h2>{page.frontmatter.title} </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
        {posts && posts.map((post, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
            <Link to={post.node.fields.slug}>
              {!!post.node.featuredImage && !!post.node.frontmatter.childImageSharp && 
                <Img className="w-full h-48"
                  fluid={post.node.featuredImage.childImageSharp.fluid}
                  alt={post.node.featuredImage.childImageSharp.fluid.originalName} />
              }
              <div className="px-6 py-4 h-32">
                <div className="font-bold text-xl mb-2">{post.node.frontmatter.title}</div>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{post.node.frontmatter.author.name}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{post.node.frontmatter.date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

InterviewsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const interviewsPageQuery = graphql`
  query InterviewsPage($id: String!) {
    markdownRemark(id:{ eq:$id }) {
      frontmatter {
        formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
        description
        title
        seo {
          browserTitle
          description
          pathname
        }
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC},filter: { frontmatter:{ templateKey:{ eq:"interviews" } } }) {
    edges {
      node {
        fields { slug }
        frontmatter {
          date(formatString: "dddd Do, MMM YYYY")
          title
          author { name }
          description
          featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } }  }
        }
      }
    }
  }
  }
`;

export default InterviewsPage;
