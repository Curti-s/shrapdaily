import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';

import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/twitter.svg';


const PostPageTemplate = ({ page }) => {
  const authorImage = page.authorImage;
  const featuredImage = page.featuredImage;

  return (
    <div className="container mx-auto h-full">
      <div className="w-full sm:px-48">
        <p className="text-2xl md:text-5xl text-left font-serif font-semibold-100 capitalize tracking-wide">{page.frontmatter.title}</p>
        <p className="text-base text-left text-gray-600 font-bold tracking-wide">{page.frontmatter.description}</p>
        <div className="flex items-center">
          {!!authorImage && !!authorImage.childImageSharp && 
            <Img
              fluid={authorImage.childImageSharp.fluid}
              alt={authorImage.childImageSharp.fluid.originalName}
              className="w-20 h-20 rounded-full mr-6 border-4 border-teal-500" />
          }
          <div className="text-sm">
            <p className="text-gray-900 font-bold leading-none">{page.frontmatter.author.name}</p>
            <div className="flex">
              <a href={page.frontmatter.socials.instagram.link} target="_blank" rel="noopener noreferrer"><Instagram className="h-6 w-6 pr-2" /></a>
              <a href={page.frontmatter.socials.twitter.link} target="_blank" rel="noopener noreferrer"><Twitter className="h-6 w-6" /></a>
            </div>
            <p className="text-gray-600 font-bold">{page.frontmatter.date} . {page.timeToRead} min read</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {!!featuredImage && !!featuredImage.childImageSharp && 
          <Img 
            fluid={featuredImage.childImageSharp.fluid} 
            alt={featuredImage.childImageSharp.fluid.originalName} />
        }
        <ReactMarkdown className="text-base font-sans leading-relaxed pt-2" source={page.html} escapeHtml={false} />
      </div>

      <div className="p-4 flex flex-row-reverse items-center">
        <a href={page.frontmatter.socials.instagram.link} target="_blank" rel="noopener noreferrer"  className="pr-4" ><Instagram className="h-6 w-6 pr-2" /></a>
        <a href={page.frontmatter.socials.twitter.link} target="_blank" rel="noopener noreferrer" className="pr-4"><Twitter className="h-6 w-6" /></a>
        <p className="pr-4 text-gray-900 font-bold-400 italic leading-none">{page.frontmatter.author.name}</p>
      </div>
    </div>
  );
};

PostPageTemplate.propTypes = {
  page: PropTypes.object.isRequired
};

export default PostPageTemplate;
