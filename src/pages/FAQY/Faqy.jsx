import * as React from "react";
// MUI
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// ROUTER
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `3px solid black`,
  boxShadow: "5px 5px 15px black",
  marginBottom: "20px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "20px" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: 0,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    borderBottom: "2px solid black",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "2px solid rgba(0, 0, 0, .125)",
}));

const Faqy = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="faq-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">Частые вопросы</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>Частые вопросы</p>
        <div className="tour-item-text2">
          <p>Подпишись на наши соц.сети</p>
          <div className="tour-link">
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <FacebookIcon
                sx={{ color: indigo[700], fontSize: 40, marginRight: 2 }}  className="a-link1"
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <InstagramIcon
                sx={{ color: deepOrange[600], fontSize: 40, marginRight: 2 }} className="a-link2"
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <TwitterIcon
                sx={{ color: lightBlue["A700"], fontSize: 40, marginRight: 2 }} className="a-link3"
              /> 
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <WhatsAppIcon sx={{ color: green[500], fontSize: 40 }} className="a-link4"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Как приобрести тур?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Тур можно приобрести двумя способами: Перевод на расчетный счет
              компании или оплата наличными в офисе. Вы выбираете тот способ,
              который удобнее Вам. Но учтите, что цены в сфере туризма крайне
              динамичные и могут меняться несколько раз в час, при этом не важно
              в какую сторону. Поэтому рекомендуем Вам оплачивать тур сразу
              после того, как поняли, что он Вам подходит.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              Какие документы нужны для бронирования тура?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Для туриста, который будет заключать договор с нами, потребуется
              действующий заграничный паспорт и ID паспорт. Каждый турпакет
              оформляется только на паспортные данные человека, который будет
              совершать данную поездку. Для оформления тура нужно иметь при себе
              оригинал, копию или фото паспорта. Если тур оформляется удаленно
              скан-копию/фото (в хорошем качестве) главной страницы паспорта
              достаточно отправить по почте или на WhatsApp.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Как и когда я получу документы?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Договор о предоставлении услуг Вы подписываете до факта оплаты за
              тур, а готовые документы (ваучер и авиабилеты) можете получить
              после полной оплаты в офисе, либо онлайн на почту. Документы
              выдаются за 3 дня до вылета, а у некоторых туроператоров за 1 день
              до вылета. Эти сроки не действуют на Горящие туры, в их случае Вы
              можете получить документы уже через несколько часов после
              бронирования.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Могу ли я купить тур для третьего лица?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Да, Вы можете приобрести тур для знакомых или родных. При этом
              важно при бронировании указывать данные именно тех туристов,
              которые будут путешествовать. Приобретая таким образом тур,
              обязательно укажите телефон и электронную почту туристов, для
              которых покупаете путевку, чтоб мы могли оперативно извещать их о
              дополнительных условиях и изменениях.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>
              Нужен ли паспорт на ребенка при выезде из страны?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Любому человеку для поездки за границу нужен загранпаспорт. Детям,
              не достигших 18 лет, для поездки за границу также нужен
              загранпаспорт. Если ребенок едет с одним из родителей, должно быть
              нотариально заверенное разрешение на поездку от второго родителя.
              Если ребенок едет без родителей, например, с бабушкой, то такое
              разрешение должно быть от обоих родителей. При разных фамилиях
              родителя и ребенка рекомендуется взять свидетельство о рождении.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Нужен ли первоначальный взнос?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Да, для приобретения тура необходимо внести предоплату в размере
              30-50% от общей стоимости.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>
              Какие документы потребуются для поездки за границу?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Основные документы для выезда за границу это: загранпаспорт, виза
              и страховка. Отправляясь в дорогу с ребенком, необходим
              загранпаспорт для него, нотариально заверенное разрешение на выезд
              от родителей, свидетельство о рождении.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography>За сколько дней можно забронировать тур?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              В безвизовые страны, при наличии мест в гостинице и на самолет, от
              2 дней до вылета. В страны с визовым режимом крайний срок подачи
              документов за 14 дней до начала поездки. Рекомендуется планировать
              отдых заранее, особенно в страны с визовым режимом, т.к. часто
              оказывается, что на планируемые даты заканчиваются авиабилеты или
              желанный отель, находится в "STOP".
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqy;
