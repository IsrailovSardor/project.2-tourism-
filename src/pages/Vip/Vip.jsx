import React from "react";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
// ROUTER
import { Link } from "react-router-dom";

const Vip = () => {
  return (
    <div className="vip-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to="/services"
          className="text-xl"
        >
          Услуги
        </Link>
        <p className="text-xl decoration">VIP залы</p>
      </Breadcrumbs>
      <p className="servecis-p">VIP залы</p>
      <div className="kg-block">
        <p>
          Бизнес-зал Международного Аэропорта создает для пассажиров максимально
          комфортные условия ожидания рейса.
        </p>
        <p>Перечень услуг Бизнес Зала:</p>
        <div className="kg-block-info">
          <li>Предоставление информации о выполнении рейсов в аэропорту</li>
          <li>
            Зал ожидания с повышенным уровнем комфорта и удобной мягкой мебелью
          </li>
          <li>Комфортабельные туалетные комнаты</li>
          <li>Душевая комната с необходимыми принадлежностями</li>
          <li>Услуги бара и сувенирного магазинов (за отдельную оплату)</li>
          <li>Просмотртелевизионныхпрограммкабельноготелевидения</li>
          <li>Предоставление услуг городской телефонной связи</li>
          <li>
            Предоставление иллюстрированных журналов на русском и англ.языках
          </li>
          <li>Полностью оснащенная рабочая зона (ПК, сканер, принтер и тп)</li>
          <li>Камера хранения</li>
          <li>Молельная комната</li>
          <li>Бесплатный Wi-Fi интернет</li>
          <li>«Шведский стол» с ассортиментом закусок и напитков</li>
          <li>Комната матери и ребенка</li>
          <p>
            Бронирование Бизнес-зала на вылет возможно только на конкретную
            дату.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vip;
