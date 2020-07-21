import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(query);

  return (
    <div className="pt-2">
      {!!data.file && !!data.file.childImageSharp && 
        <Img className="w-full h-32 md:h-64" fluid={data.file.childImageSharp.fluid} /> 
      }
    </div>
  );
};

const query = graphql`
query MyQuery {
  file(relativePath: {eq: "header_image.jpg"}) {
    childImageSharp { fluid { ...GatsbyImageSharpFluid } }
  }
}`;
