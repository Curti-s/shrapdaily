import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import '../scss/main.scss';

export default ({ children }) => {
  const [menuStatus, menuChange] = useState(false);

  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  );

  const HeaderCont = styled.div`
    @media (max-width: 767px) {
      .nav-cont {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        right: 0;
        background-color: #111;
        z-index: 2;
        transform: translateX(100%);
        transition: var(--transMed);

        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }

      .menu-open {
        position: relative;
        z-index: 2;

        .nav-cont {
          transform: translateX(0%);
        }
      }

      .header-cont {
        button {
          z-index: 3;
          font-size: 1.15rem;
        }
      }
    }

    .header-cont {
      z-index: 3;
      position: fixed;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      grid-template-columns: 200px auto;
      grid-gap: 1rem;
      padding: 1rem 2rem;
      background-color: #000;

      .logo-cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 3;

        a {
          display: inline-block;
          line-height: 2.5rem;
          color: #fff;
          text-decoration: none;
          transition: var(--transMed);
          position: relative;

          &:hover {
            color: var(--primaryColor);
          }
        }
        
        .logo-text-1 {
          font-family: "Lato";
          font-size: 32px;
          font-weight: bold;
        }

        .logo-text-2 {
          font-family: "Chewy", cursive;
          font-size: 32px;
          color: var(--primaryColor);
        }
        
        h2 {
          margin: 0;
          font-size: 1.5rem;

          @media (min-width: 768px) {
            font-size: 1.75rem;
          }
        }
      }
      .btn { color: #fff; }

      .nav-link > a { 
        color: #fff;

        &:hover {
          color: var(--primaryColor);
        }
      }

      @media (min-width: 768px) {
        button {
          display: none;
        }
      }
      .nav-cont {
        ul {
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;

          li {
            padding-left: 2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.15rem;
            font-family: "Playfair Display";
            font-weight: 300;
          }
        }

        @media (min-width: 768px) {
          ul {
            align-items: center;
            li {
              padding-left: 2rem;
              justify-content: flex-end;
            }
          }
        }
      }
    }
  `;

  return (
    <HeaderCont>
      <div className={`${menuStatus ? 'menu-open' : 'menu-closed'}`}>
        <header className="header-cont">
          <div className="logo-cont">
            <Link to="/">
              <span className="logo-text-1">Shrap</span> <span className="logo-text-2">Daily</span>
            </Link>
          </div>
          <button className="btn" onClick={() => menuChange(!menuStatus)}>
            Menu
          </button>
          <nav className="nav-cont">
            <ul>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about-page">About</ListLink>
              <ListLink to="/exclusive-premiers">Exclusive Premiers</ListLink>
              <ListLink to="/interviews/">Interviews</ListLink>
              <ListLink to="/music-reviews/">Music Reviews</ListLink>
            </ul>
          </nav>
        </header>
      </div>
    </HeaderCont>
  );
};
