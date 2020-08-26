import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/SEO';
import Hero from '../components/Hero';
import FeaturedPostsList from '../components/featured-posts-lists';

export default ({ data }) => {
  const { exclusivePremiersPosts: { edges: ePosts } } = data;
  const { exclusivePremiersPageContent } = data;
  const { interviewsPosts: { edges: iPosts } } = data;
  const { interviewsPageContent } = data;
  const { musicReviewsPosts: { edges: mPosts } } = data;
  const { musicReviewsPageContent } = data;

  return (
    <Layout>
      <Seo />
      <Hero />
      <div className="flex">
        <h2>{exclusivePremiersPageContent.frontmatter.title}</h2>
      </div>
      {ePosts.length ? ePosts.map(({ node }, index) => (
        <FeaturedPostsList node={node} index={index} />
      )) : <p className="text-xl font-medium text-right tracking-wider">Stay put. Content coming soon...</p>}

      <div className="flex">
        <h2>{interviewsPageContent.frontmatter.title}</h2>
      </div>
      {iPosts ? iPosts.map(({ node }, index) => (
        <FeaturedPostsList node={node} index={index} />
      )) : <p className="text-xl font-medium text-right tracking-wider">Stay put. Content coming soon...</p>}

      <div className="flex">
        <h2>{musicReviewsPageContent.frontmatter.title}</h2>
      </div>
      {mPosts ? mPosts.map(({ node }, index) => (
        <FeaturedPostsList node={node} index={index} />
      )) : <p className="text-xl font-medium text-right tracking-wider">Stay put. Content coming soon...</p>}
    </Layout>
  );
};

export const query = graphql`
  query {
    exclusivePremiersPosts:allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
      filter: { frontmatter:{ templateKey:{ eq:"exclusive-premiers" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } }  }
          }
          fields { slug }
          excerpt
        }
      }
    }
    exclusivePremiersPageContent:markdownRemark(frontmatter:{ templateKey:{ eq:"exclusive-premiers-page" } }) {
      frontmatter { title }
    }

    interviewsPosts:allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
      filter: { frontmatter:{ templateKey:{ eq:"interviews" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } }  }
          }
          fields { slug }
          excerpt
        }
      }
    }
    interviewsPageContent:markdownRemark(frontmatter:{ templateKey:{ eq:"interviews-page" } }) {
      frontmatter { title }
    }

    musicReviewsPosts:allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
      filter: { frontmatter:{ templateKey:{ eq:"music-reviews" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } }  }
          }
          fields { slug }
          excerpt
        }
      }
    }
    musicReviewsPageContent:markdownRemark(frontmatter:{ templateKey:{ eq:"music-reviews-page" } }) {
      frontmatter { title }
    }
  }
`;
