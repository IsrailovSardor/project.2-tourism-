import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
// COMPONEN
import { Context } from "../../components/Context/Contex";
import Post from "../../saveposts/Post";
// ROUTER
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// MUI
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { red } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PublicIcon from '@mui/icons-material/Public';

// JSON-запрос
const fetchData = (id) => {
  return axios
    .get(`http://localhost:3004/posts/${id}`)
    .then((response) => response.data);
};
// ALERT-MUI
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RedPost = (props) => {
  // USER
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const { user, dispatch } = useContext(Context);
  // MODE
  const [changeMode, setChangeMode] = useState(false);
  // ALERT-MUI
  const [openOne, setOpenOne] = React.useState(false);
  const handleClickAlert = () => {
    setOpenOne(true);
  };
  // OPEN-BLOCK-MUI
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // POST-OPEN-BLOCK
  const [last, setLast] = useState("");
  const [first, setFirst] = useState("");
  const [tel, setTel] = useState("");
  // POST-ITEM-BLOCK
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [descr, setDescr] = useState("");
  const [sell, setSell] = useState("");
  const [dataOne, setDataOne] = useState("");
  const [duration, setDuration] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("")
  // JSON-EFFECT
  useEffect(() => {
    fetchData(id).then((data) => setPosts(data));
  });
  // POST-HANDLE-DELETE
  const handleDeletePost = () => {
    axios.delete(`http://localhost:3004/posts/${id}`);
    window.location.assign(`/`);
  };
  // POST-HANDLE-CHANGE
  const handleChangePost = () => {
    setChangeMode(true);
    setTitle(posts.postTitle);
    setDescr(posts.postDescr);
    setSell(posts.postSell);
    setDataOne(posts.postDataOne);
    setDuration(posts.postDuration);
    setCity(posts.postCity);
    setImg(posts.postImg)
    setCountry(posts.postCountry)
  };
  // POST-HANDLE-SAVE
  const handleUpdatePost = async () => {
    await axios.put(`http://localhost:3004/posts/${id}`, {
      postTitle: title,
      postDescr: descr,
      postSell: sell,
      postDataOne: dataOne,
      postDuration: duration,
      postCity: city,
      postImg: img,
      postCountry : country,
    });
    setTitle("");
    setDescr("");
    setSell("");
    setDataOne("");
    setDuration("");
    setCity("");
    setImg("")
    setCountry ("")
    setChangeMode(false);
  };
  // BOOK-HANDLE-POST
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/book", {
      bookLast: last,
      bookFirst: first,
      bookTel: tel,
    });
    handleClose();
    handleClickAlert();
    setChangeMode(false);
  };

  return (
    <div className="redpost-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link to="/" underline="hover" color="inherit" className="text-xl">
          Phoenix Travel
        </Link>
        <Link to="/tour" underline="hover" color="inherit" className="text-xl">
          Туры
        </Link>
        <p className="text-xl decoration">{posts.postDescr}</p>
      </Breadcrumbs>
      <div className="redpost-container1">
        <div className="redpost-text">
          <div className="redpost-text-block">
            <div>
              {changeMode ? (
                <TextField
                  value={descr}
                  onChange={(e) => setDescr(e.target.value)}
                  id="create-course-form"
                  label="Введите описание поста"
                  variant="outlined"
                  className="textfield-redpost3"
                />
              ) : (
                <p className="redpost-text-posts">{posts.postDescr}</p>
              )}
            </div>
            <div>
              
            {changeMode ? (
              <div>
                 <PublicIcon
                    sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
                  />
                <TextField
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  id="create-course-form"
                  label="Введите название поста"
                  variant="outlined"
                  className="textfield-redpost2"
                  required
                />
              </div>
                
              ) : (
                <p className="redpost-text-posts2">
                  <PublicIcon
                    sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
                  />
                  Страна : {posts.postCountry}
                </p>
              )}
              {changeMode ? (
                <div>
                   <BeachAccessIcon
                    sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
                  />
                  <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="create-course-form"
                  label="Введите название поста"
                  variant="outlined"
                  className="textfield-redpost2"
                  required
                />
                </div>
                
              ) : (
                <p className="redpost-text-posts2">
                  <BeachAccessIcon
                    sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
                  />
                  Город : {posts.postTitle}
                </p>
              )}

            </div>
          </div>
          <div className="redpost-text-block2">
            <div>
              {changeMode ? (
                <div>
                <DateRangeIcon
                sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
              />
                <TextField
                  value={dataOne}
                  onChange={(e) => setDataOne(e.target.value)}
                  id="create-course-form"
                  label="Введите дадут"
                  variant="outlined"
                  className="textfield-redpost2"
                />
                </div>
              ) : (
                
                <p className="redpost-text-posts2">
                  <DateRangeIcon
                    sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
                  />
                  Дата : {posts.postDataOne}
                </p>
              )}
            </div>
            <div>

              {changeMode ? (
                <div><DateRangeIcon
                sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
              /><TextField
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  id="outlined-number"
                  label="Введите длительность"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="textfield-redpost2"
                /></div>
                
              ) : (
                <p className="redpost-text-posts2">
                <DateRangeIcon
                  sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1  }}
                />
                Длительность : {posts.postDuration} дней
              </p>
               
              )}
            </div>
            <div>
              {changeMode ? (
                <div> 
                  <SellOutlinedIcon
                  sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1 }}
                /><TextField
                  value={sell}
                  onChange={(e) => setSell(e.target.value)}
                  id="outlined-number"
                  label="Введите цену"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="textfield-redpost2"
                /></div>
               
              ) : (
                <p className="redpost-text-posts2">
               <SellOutlinedIcon
                  sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1 }}
                />
                Цена : {posts.postSell}$
              </p>
                
              )}
            </div>
            <div>
              {changeMode ? (
                <div><AirplaneTicketOutlinedIcon
                  sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1 }}
                />
                  <TextField
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  id="create-course-form"
                  label="Введите город"
                  variant="outlined"
                  className="textfield-redpost2"
                />
                </div>
                
              ) : (
                <p className="redpost-text-posts2">
              <AirplaneTicketOutlinedIcon
                  sx={{ color: lightBlue[600], fontSize: 25, marginRight: 1 }}
                />
                Город вылета : {posts.postCity}
              </p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              variant="outlined"
              onClick={handleClickOpen}
              className="button2"
            >
              Оставить заявку
            </button>
            <div>
              {changeMode ? (
                <button onClick={handleDeletePost}>
                  <Tooltip title="Удалить">
                    <IconButton>
                      <DeleteForeverIcon
                        sx={{ fontSize: 30, marginRight: 1 }}
                      />
                    </IconButton>
                  </Tooltip>
                </button>
              ) : (
                ""
              )}
              {changeMode ? (
                <button onClick={handleUpdatePost}>
                  <Tooltip title="Сохранить">
                    <IconButton>
                      <DataSaverOnIcon sx={{ fontSize: 30, marginRight: 1 }} />
                    </IconButton>
                  </Tooltip>
                </button>
              ) : (
                ""
              )}
              {user ? (
                <button onClick={handleChangePost}>
                  <Tooltip title="Редактировать">
                    <IconButton>
                      <EditIcon sx={{ fontSize: 30, marginRight: 1 }} />
                    </IconButton>
                  </Tooltip>
                </button>
              ) : (
                ""
              )}
            </div>
            <Tooltip title="Стоимость указана на человека при двухместном размещении">
              <IconButton>
                <ErrorOutlineIcon sx={{ color: red[600], fontSize: 30 }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="redpost-text2">
        {changeMode ? (
          <img src={posts.postImg} alt="" />
              ) : (
                <img src={posts.postImg} alt="" />
              )}
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="diolog"
        >
          <form onSubmit={handleUpdateBook} className="text-center">
            <DialogTitle id="alert-dialog-title" className="text-center">
              <p className="text-2xl font-bold">{posts.postDescr}</p>
              <p className="mt-2 text-xl">
                {posts.postTitle} / {posts.postDataOne}
              </p>
            </DialogTitle>
            <DialogContent id="alert-diolog-item">
              <TextField
                value={last}
                onChange={(e) => setLast(e.target.value)}
                id="filled-basic"
                label="Введите Имя"
                variant="filled"
                className="textfield-redpost"
                required
              />
            </DialogContent>
            <DialogContent id="alert-diolog-item">
              <TextField
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                id="filled-basic"
                label="Введите Фамилию"
                variant="filled"
                className="textfield-redpost"
                required
              />
            </DialogContent>
            <DialogContent id="alert-diolog-item">
              <TextField
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                id="outlined-number"
                  label="Введите ваш номер"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="textfield-redpost"
              />
            </DialogContent>
            <DialogContent id="alert-diolog-item">
              <Button onClick={handleClose}>Закрыть</Button>
              <Button type="submit">Отправить</Button>
            </DialogContent>
          </form>
        </Dialog>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={openOne} autoHideDuration={3000}>
            <Alert severity="success" sx={{ width: "100%" }}>
              Заявка успешно отправлена
            </Alert>
          </Snackbar>
        </Stack>
      </div>
      <div>
        <p className="redpost-text-posts4">Похожие туры</p>
        <Post />
      </div>
    </div>
  );
};
export default RedPost;
