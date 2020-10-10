import React from 'react';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import { PATH } from 'config/config';

const Nav = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <img className="mx-auto mt-8" src={logo} alt="logo" />
      <ul className="grid grid-cols-6 divide-x divide-gray-400">
        <li className="flex justify-center">
          <Link to={PATH.ABOUT}>關於我們</Link>
        </li>
        <li className="flex justify-center">
          <Link to={PATH.PRODUCT}>產品介紹</Link>
        </li>
        <li className="flex justify-center">
          <Link to={PATH.PROCESS}>製成簡介</Link>
        </li>
        <li className="flex justify-center">
          <Link to={PATH.QUESTION}>常見問題</Link>
        </li>
        <li className="flex justify-center">
          <Link to={PATH.CONTACT}>聯絡我們</Link>
        </li>
        <li className="flex justify-center">
          <Link to={PATH.TRAFFIC}>交通資訊</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
