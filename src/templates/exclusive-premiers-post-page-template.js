import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import PostPageTemplate from './post-page-template';

const ExclusivePremierPostPage = () => {
  const pageData = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter:{ templateKey:{ eq:"exclusive-premiers" }}) {
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
      featuredImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } } }
      authorImage { childImageSharp { fluid { originalName ...GatsbyImageSharpFluid } } }
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

export default ExclusivePremierPostPage;
