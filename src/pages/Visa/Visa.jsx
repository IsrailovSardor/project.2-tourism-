import React from "react";
import VisaPost from "../../saveposts/VisaPost";
// ROUTER
import { Link } from "react-router-dom";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";

const Visa = () => {
  return (
    <div className="visa-item">
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
        <p className="text-xl decoration">Оформление виз</p>
      </Breadcrumbs>
      <div>
        <div>
          <p className="servecis-p">Оформление виз</p>
          <p className="visa-text">
            Виза (лат. visus — посещать, навещать или франц. visa — просмотреть,
            увидеть) — разрешительный документ, дающий право человеку на
            пересечение тех или иных границ. Как правило под визой понимается
            фактическое разрешение иностранцу на въезд на территорию другого
            государства. Однако существуют также «выездные» визы, дающие право
            на выезд из страны.
          </p>
        </div>
        <div>
          <TabsUnstyled defaultValue={4}>
            <TabsListUnstyled className="mb-4 flex">
              <TabUnstyled className="bnt">Оформление виз</TabUnstyled>
              <TabUnstyled className="bnt">Для граждан Кыргызстана</TabUnstyled>
              <TabUnstyled className="bnt">Для въезда в Кыргызстан</TabUnstyled>
            </TabsListUnstyled>
            <TabPanelUnstyled value={0}>
              <div className="kg-container">
                <p>Шенген</p>
                <p>Информация</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <div className="visapost1">
                  <VisaPost />
                </div>
                <div className="visapost2">
                  <div>
                    <p>Список документов, необходимый для получения визы:</p>
                    <div className="flex justify-between">
                      <div className="visapost-item-text">
                        <li>Загран. паспорт</li>
                        <li>Копии предыдущих Шенген виз, если имеются. </li>
                        <li>Две фотографии. Размер: 3,5 х 4,5</li>
                        <li>Мед. страховка</li>
                        <li>Справка c банка</li>
                      </div>
                      <div className="visapost-item-text">
                        <li>Подтверждение бронирования гостиницы</li>
                        <li>Бронь авиабилета в оба конца.</li>
                        <li>Подробная программа поездки</li>
                        <li>Справка с место работы</li>
                      </div>
                    </div>
                    <div className="visapost-item-text">
                      <li>
                        Подтверждение семейного положения - свидетельства о
                        браке, разводе, смерти, о рождении детей
                      </li>
                      <li>
                        Копии документов на недвижимое имущество в Кыргызстане.
                      </li>
                      <li>Для школьников / студентов Справка с места учебы</li>
                      <li>Для пенсионеров Пенсионное удостоверение.</li>
                    </div>
                    <div>
                      <p>Внимание:</p>
                      <li>
                        Личное присутствие заявителя при подаче документов
                        обязательно
                      </li>
                      <li>
                        Сроки рассмотрения документов: от 5-10 рабочих дней с
                        момента подачи документов в Посольство.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanelUnstyled>
            <TabPanelUnstyled value={1}>
              <div className="kg-container">
                <p>Для граждан Кыргызстана</p>
              </div>
              <div className="kg-block">
                <div className="kg-block-info">
                  <p>
                    1) В рамках Соглашения о безвизовом передвижении граждан
                    государств-участниц Содружества Независимых Государств по
                    территории его участников, подписанное 9 октября 1992 года в
                    городе Бишкек:
                  </p>
                  <li>
                    Азербайджан (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР);{" "}
                  </li>
                  <li>
                    Армения (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР);
                  </li>
                  <li>
                    Грузия (заграничный паспорт гражданина КР, дипломатический и
                    служебный паспорт КР);
                  </li>
                  <li>
                    Молдова (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР).
                  </li>
                </div>
                <div className="kg-block-info">
                  <p>
                    2) В рамках Соглашения между Правительством Республики
                    Беларусь, Правительством Республики Казахстан,
                    Правительством Кыргызской Республики, Правительством
                    Российской Федерации, Правительством Республики Таджикистан
                    о взаимных безвизовых поездках граждан, подписанного 30
                    ноября 2000 года в городе Минск,
                  </p>
                  <li>
                    Беларусь (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР);{" "}
                  </li>
                  <li>
                    Казахстан (ID-card, заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР, свидетельство о
                    рождении+вкладыш к свидетельству о рождении
                    несовершеннолетнего ребёнка);
                  </li>
                  <li>
                    Российская Федерация (ID-card, заграничный паспорт
                    гражданина КР, дипломатический и служебный паспорт КР,
                    свидетельство о рождении+вкладыш к свидетельству о рождении
                    несовершеннолетнего ребёнка);
                  </li>
                  <li>
                    Таджикистан (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР).
                  </li>
                </div>
                <div className="kg-block-info">
                  <p>
                    3) В рамках ранее заключенных (по применяемому в
                    международном праве принципу «молчаливого согласия» о
                    продолжении применения международных обязательств до стадии
                    заключения и вступления новых международных договоров)
                    соглашений между бывшим СССР и нижеуказанными иностранными
                    государствами:
                  </p>
                  <li>
                    Вьетнам (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР — Соглашение между Правительством
                    СССР и Правительством Социалистической Республики Вьетнам об
                    условиях взаимных поездок граждан от 15 июля 1981 года);
                  </li>
                  <li>
                    Корейская Народная Демократическая Республика (заграничный
                    паспорт гражданина, дипломатический и служебный паспорт КР —
                    Соглашение между Правительством СССР и Правительством КНДР
                    об условиях взаимных поездок граждан от 22 января 1986
                    года);
                  </li>
                  <li>
                    Республика Куба (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР — Соглашение между
                    Правительством СССР и Правительством Республики Куба об
                    условиях взаимных поездок граждан от 10 января 1985 года);
                  </li>
                  <li>
                    Лаосская Народно-Демократическая Республика (заграничный
                    паспорт гражданина КР, дипломатический и служебный паспорт
                    КР — Соглашение между Правительством СССР и Правительством
                    Лаосской Народно-Демократической Республики о безвизовом
                    режиме для граждан обоих государств, совершающих служебные
                    поездки по дипломатическим или служебным паспортам от 20
                    декабря 1984 года).
                  </li>
                </div>
                <div className="kg-block-info">
                  <p>
                    4) В рамках Соглашений между Кыргызской Республикой и
                    нижеследующими иностранными государствами:
                  </p>
                  <li>
                    Малайзия (безвизовый режим до 90 дней) (заграничный паспорт
                    гражданина КР, дипломатический и служебный паспорт КР —
                    Соглашение между Правительством Кыргызской Республики и
                    Правительством Малайзии о частичной отмене визового режима,
                    подписанное 20 июля 1995 года в г.Куала-Лумпур);
                  </li>
                  <li>
                    Турция (безвизовый режим 90 дней в течении 180 дней )
                    (заграничный паспорт гражданина КР, дипломатический и
                    служебный паспорт КР — Соглашение между Правительством
                    Кыргызской Республики и Правительством Турецкой Республики о
                    взаимных поездках граждан, подписанное 5 сентября 2006 года
                    в г.Анкара);
                  </li>
                  <li>
                    Украина (безвизовый режим до 90 дней) (заграничный паспорт
                    гражданина КР, дипломатический и служебный паспорт КР —
                    Соглашение между Правительством Кыргызской Республики и
                    Кабинетом Министров Украины о взаимных поездках граждан,
                    подписанное 25 февраля 2004 года в г. Киев);
                  </li>
                  <li>
                    Узбекистан (безвизовый режим до 60 дней) (заграничный
                    паспорт гражданина КР, дипломатический и служебный паспорт
                    КР — Соглашение между Правительством Кыргызской Республики и
                    Правительством Республики Узбекистан о взаимных поездках
                    граждан, подписанное 3 сентября 2006 года в г. Ташкент);
                  </li>
                  <li>
                    Монголия (безвизовый режим до 90 дней) (заграничный паспорт
                    гражданина КР, дипломатический и служебный паспорт КР —
                    Соглашение между Правительством Кыргызской Республики и
                    Правительством Монголии об условиях взаимных поездок
                    граждан, подписанное 4 декабря 1999 года в городе Бишкек );
                  </li>
                  <li>
                    Филиппины (безвизовый режим до 30 дней) (заграничный паспорт
                    гражданина КР, дипломатический и служебный паспорт КР —
                    Правительство Филиппин своим решением от 04 апреля 2012 года
                    установило безвизовый для граждан КР владельцев заграничного
                    паспорта гражданина КР, дипломатического и служебного
                    паспорта КР);
                  </li>
                  <li>
                    Индонезия (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР) -решением
                    правительства Индонезии с 10 марта 2016 года вступил в силу
                    закон о введении безвизового режима для граждан Кыргызстана
                    сроком до 30 дней;
                  </li>
                  <li>
                    Антигуа и Барбуда (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР) – одностороннее
                    решение введен безвизовый режим для граждан Кыргызстана
                    сроком до 90 дней;
                  </li>
                  <li>
                    Барбадос (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР) –одностороннее решение введен
                    безвизовый режим для граждан Кыргызстана сроком до 28 дней;
                  </li>
                  <li>
                    Гренада (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР) –одностороннее решение введен
                    безвизовый режим для граждан Кыргызстана сроком до 90 дней;
                  </li>
                  <li>
                    Доминикана (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР) – одностороннее
                    решение введен безвизовый режим для граждан Кыргызстана
                    сроком до 21 дня. При въезде необходимо иметь: паспорт
                    сроком действия не менее 6 месяцев и подписью владельца,
                    подтверждение бронирования гостиницы, подтверждение
                    платежеспособности (выписки с банковских счетов, квитанции о
                    зарплате и т.д., или гарантийное письмо от лица или
                    организации, оплачивающих тур), билеты туда и обратно;
                  </li>
                  <li>
                    Доминиканская Республика (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР) – одностороннее
                    решение введен безвизовый режим для граждан Кыргызстана
                    сроком до 30 дней;
                  </li>
                  <li>
                    Гаити (заграничный паспорт гражданина КР, дипломатический и
                    служебный паспорт КР) –одностороннее решение введен
                    безвизовый режим для граждан Кыргызстана сроком до 90 дней;
                  </li>
                  <li>
                    Тринидад и Тобаго (заграничный паспорт гражданина КР,
                    дипломатический и служебный паспорт КР) – одностороннее
                    решение введен безвизовый режим для граждан Кыргызстана
                    срокомдо 90 дней;
                  </li>
                  <li>
                    Эквадор (заграничный паспорт гражданина КР, дипломатический
                    и служебный паспорт КР) –одностороннее решение введен
                    безвизовый режим для граждан Кыргызстана сроком до 90 дней.
                  </li>
                </div>
              </div>
            </TabPanelUnstyled>
            <TabPanelUnstyled value={2}>
              <div className="kg-container">
                <p>Для въезда в Кыргызстан</p>
              </div>
              <div className="kg-block">
                <p>
                  Перечень стран в отношении граждан которых, владельцев всех
                  категорий паспортов действует безвизовый режим в КР
                </p>
                <div className="kg-block-info">
                  <p>
                    1. (в рамках Соглашения стран участниц ЕврАзЭС от 2000г.)
                  </p>
                  <li>Беларусь </li>
                  <li>Казахстан</li>
                  <li>Российская</li>
                  <li>Федерация</li>
                  <li>Таджикистан</li>
                </div>
                <div className="kg-block-info">
                  <p>
                    2. (в рамках двусторонних Соглашений между бывшим СССР и
                    этими странами)
                  </p>
                  <li>Вьетнам </li>
                  <li>КНДР</li>
                  <li>Куба</li>
                </div>
                <div className="kg-block-info">
                  <p>
                    3. (в рамках двусторонних Соглашений между КР и этими
                    странами)
                  </p>
                  <li>Малайзия (до 30 дней) </li>
                  <li>Турция (до 30 дней)</li>
                  <li>Украина (до 90 дней)</li>
                  <li>Узбекистан (до 60 дней)</li>
                  <li>Монголия (до 90 дней)</li>
                </div>
                <div className="kg-block-info">
                  <p>
                    4. (в рамках Соглашения стран СНГ от 1992 года «О безвизовом
                    передвижении граждан стран-участниц СНГ на территории стран
                    СНГ»)
                  </p>
                  <li>Азербайджан</li>
                  <li>Армения</li>
                  <li>Грузия</li>
                  <li>Молдова</li>
                </div>
                <div className="kg-block-info">
                  <p>
                    5. В соответствии с Постановлениями Правительства КР №735 от
                    31.12.1999 г. и №262 от 04.06.2001г. для граждан Японии
                    действует безвизовый режим въезда в Кыргызскую Республику в
                    одностороннем порядке на неограниченный срок.
                  </p>
                </div>
              </div>
              <div className="kg-block">
                <p>
                  Перечень стран, в отношении граждан которых — владельцев
                  дипломатических и служебных паспортов, действует взаимный
                  безвизовый режим въезда в КР сроком до одного месяца на
                  основании двусторонних Соглашений
                </p>
                <div className="kg-block-info">
                  <li>Венгрия </li>
                  <li>КНР</li>
                  <li>Туркменистан</li>
                  <li>Республика Узбекистан</li>
                  <li>Исламская Республика Иран</li>
                  <li>Исламская Республика Пакистан</li>
                </div>
              </div>
              <div className="kg-block">
                <p>
                  Перечень стран, в отношении граждан которых — владельцев
                  дипломатических паспортов действует безвизовый режим въезда в
                  КР (в соответствии с Постановлением Правительства КР № 735 от
                  31.12.1999 г.)
                </p>
                <div className="kg-block-info">
                  <li>США с 01.10.2000 г. </li>
                  <li>Дания — с 01.12.2000 г.</li>
                  <li>Испания с 01.12.2000 г.</li>
                  <li>Италия с 01.12.2000 г.</li>
                  <li>Франция с 01.12.2000 г.</li>
                  <li>ФРГ с 01.12.2000 г.</li>
                </div>
                <div className="kg-block-info">
                  <p>
                    (в соответствии с Постановлением Правительства КР № 262 от
                    04.06.2001 г.)
                  </p>
                  <li>Австрия с 01.07.2001г.</li>
                  <li>Бельгия с 01.07.2001г.</li>
                  <li>Швеция с 01.09.2001г.</li>
                  <li>Финляндия с 01.09.2001г.</li>
                  <li>Норвегия с 01.09.2001г.</li>
                  <li>Исландия с 01.09.2001г.</li>
                  <li>Канада с 01.08.2001г.</li>
                  <li>Швейцария с 01.08.2001г.</li>
                  <li>Великобритания с 01.08.2001 г.</li>
                  <li>Португалия с 01.07.2001г.</li>
                  <li>Нидерланды с 01.07.2001г.</li>
                  <li>Люксембург с 01.07.2001г.</li>
                  <li>Греция с 01.07.2001г.</li>
                </div>
              </div>
            </TabPanelUnstyled>
          </TabsUnstyled>
        </div>
      </div>
    </div>
  );
};

export default Visa;
