import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, Link, graphql } from 'gatsby';

export default ({ children }) => {
  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  );

  const showYear = new Date().getFullYear();

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            authorSite
          }
        }
      }
    `
  );

  const FooterCont = styled.div`
    background-color: #000;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 8rem;

    footer {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1rem;
        margin: 0.75rem 0;

        @media (min-width: 768px) {
          margin-top: 0;
        }
      }

      hr {
        margin: 0.75rem 0;
      }

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .nav-cont {
        padding: 0;
        margin: 0 0 1rem 0;
        font-family: "Playfair Display";
        font-weight: 300;

        @media (min-width: 768px) {
          margin-bottom: 0;
          align-self: flex-end;
        }

        li {
          display: inline;
          padding-right: 0.5rem;
          color: #fff;

          &::after {
            content: "/";
            display: inline-block;
            padding-left: 0.5rem;
          }

          a {
            font-weight: 300;
            text-decoration: none;
            color: #fff;
            transition: var(--transMed);
          }

          &:hover {
            a {
              color: var(--primaryColor);
            }
          }
        }
      }
    }
  `;

  return (
    <FooterCont>
      <footer>
        <ul className="nav-cont">
          <li>&copy; {showYear}</li>
          <li>
            <a
              href={data.site.siteMetadata.authorSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.site.siteMetadata.author}
            </a>
          </li>
          <ListLink to="/about-page/">About</ListLink>
        </ul>
      </footer>
    </FooterCont>
  );
};
