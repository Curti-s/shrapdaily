import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../components/layout';
import PostPageTemplate from './post-page-template';

const MusicReviewsPostPage = () => {
  const pageData = useStaticQuery(graphql`
  query {
      markdownRemark(frontmatter: { templateKey:{ eq:"music-reviews" }}) {
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
          }
         }
        featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } }  }
        authorImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } }  }
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

export default MusicReviewsPostPage;
