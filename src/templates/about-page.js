import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../components/layout';
import Seo from '../components/SEO';

const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const { frontmatter: { seo: { browserTitle, description, pathname } } } = page;

  return (
    <Layout>
      <Seo title={browserTitle} description={description} pathname={pathname} />
      <h2>{page.frontmatter.title} </h2>
      <ReactMarkdown className="text-base font-sans leading-relaxed pt-2" source={page.frontmatter.content} escapeHtml={false} />    
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
        content
      }
    }
  }
`;

export default AboutPage;
