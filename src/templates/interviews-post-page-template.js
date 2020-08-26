import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import PostPageTemplate from './post-page-template';

const InterviewsPostPage = () => {
  const pageData = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter:{ templateKey:{ eq:"interviews" }}) {
      frontmatter {
        title
        description
        date(formatString: "dddd, Do MMM YYYY")
        socials {
          instagram { link }
          twitter { link }
        }
        author {
          name
          image { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } } }
        }
        featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } } }
       }
      html
      timeToRead
      fields {
        slug
      }
    }
  }`);
  const { markdownRemark: page } = pageData;

  return (
    <Layout>
      <PostPageTemplate page={page} />
    </Layout>
  );
};

export default InterviewsPostPage;
