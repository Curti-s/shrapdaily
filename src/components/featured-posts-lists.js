import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const FeaturedPostsList = ({ node, index }) => {
  const featuredImage = node.frontmatter.featuredImage;

  return (
    <Link to={node.fields.slug}>
      <div className="flex justify-around md:justify-start flex-row-reverse mb-1 w-full" key={index}>
        <div className="h-16 md:h-32 w-16 md:w-1/4 flex flex-shrink-1 justify-end rounded-t lg:rounded-t-none lg:rounded-lg overflow-hidden">
          {!!featuredImage && !!featuredImage.childImageSharp &&
            <Img
              className="h-16 md:h-32 w-16 md:w-2/4 mx-2 mt-4"
              fluid={featuredImage.childImageSharp.fluid}
              alt={featuredImage.childImageSharp.fluid.originalName} />
          }
        </div>
        <div className="h-32 md:h-48 w-2/4 flex-grow md:flex-grow-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-tight">
          <div className="flex items-left">
            <div className="text-sm">
              <p className="text-gray-600 font-semibold flex items-center">
                Featured
                <svg className="fill-current text-black-700 w-3 h-3 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </p>
              <h5 className="flex-auto text-xs text-black-900 leading-none md:text-xl overflow-hidden">{node.frontmatter.title}</h5>
              <p className="text-gray-600 font-semibold">{node.frontmatter.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

FeaturedPostsList.propTypes = {
  node: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default FeaturedPostsList;
