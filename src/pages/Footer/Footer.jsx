import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <div className="footer-item-block">
          <div className="footer-title-text">
            <p>О нас</p>
          </div>
          <div className="footer-descr-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              velit nostrum tempore quia molestiae voluptates, praesentium
              obcaecati totam? Perspiciatis non ipsam aliquam velit quos a est
              veniam voluptate ex optio.
            </p>
          </div>
        </div>
        <div className="footer-item-block">
          <div className="footer-title-text">
            <p>О компании</p>
          </div>
          <div className="footer-descr-text">
            <p>
              {/* <Link to="/reviews">Отзывы</Link> */}
            </p>
            <p>
              <Link to="/contacts">Вакансии</Link>
            </p>
            <p>
              <Link to="/contacts">Контакы</Link>
            </p>
            <p>
              <Link to="/faq">Частые вопросы</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-item2">
        <p>| Phoenix Travel | Все права защищены |</p>
      </div>
    </div>
  );
};

export default Footer;
