import React, { useState, useContext } from "react";
import axios from "axios";
// ROUTER
import { Link } from "react-router-dom";
// COMPONENT
import { Context } from "../../components/Context/Contex";
import Login from "../../components/Login/Login";
import iconimh from "../../img/icon.png";
// MUI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// OPEN-BLOCK-MUI
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, user } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3004/login/", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      setEmail("");
      setPassword("");
      setOpen(false);
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
    window.location.href = '/admin';
  };

  // OPEN-BLOCK-LOGIN
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // NAV
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // LOGIN-выйти
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.href = '/';
  };

  return (
    <div className="header-nav">
      <AppBar position="static">
        <Container maxWidth="100">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ mr: 25, p: 0, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/" className="font">
                Phoenix Travel
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <div className="text-left my-3 mx-4">
                    <div>
                      <Link to="/" className="py-2">
                        Главная
                      </Link>
                    </div>
                    <div>
                      <Link to="/tour" className="py-2 ">
                        Туры
                      </Link>
                    </div>
                    <div>
                      <Link to="/pages" className="py-2 ">
                        Страны
                      </Link>
                    </div>
                    <div>
                      <Link to="/flights" className=" py-2">
                        Авиабилеты
                      </Link>
                    </div>
                    <div>
                      <Link to="/services" className="py-2">
                        Услуги
                      </Link>
                    </div>
                    <div>
                      <Link to="/contacts" className="py-2">
                        Контакты
                      </Link>
                    </div>
                  </div>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                fontSize: 25,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="/" className="pl-6 font-bold">
                Главная
              </Link>
              <Link to="/tour" className="pl-6 font-bold">
                Туры
              </Link>
              <Link to="/pages" className="pl-6 font-bold">
                Страны
              </Link>
              <Link to="/flights" className="pl-6 font-bold">
                Авиабилеты
              </Link>
              <Link to="/services" className="pl-6 font-bold">
                Услуги
              </Link>
              <Link to="/contacts" className="pl-6 font-bold">
                Контакты
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Открыть профиль">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={iconimh} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <div className="px-1">
                      <div className="mb-3">
                        {user ? <Link to="/admin">{user.username}</Link> : ""}
                      </div>
                      <div>
                        {user ? (
                          <button variant="iutlined" onClick={handleLogout}>
                            Выйти
                          </button>
                        ) : (
                          <Link to="/" onClick={handleClickOpen}>
                            Login
                          </Link>
                        )}
                      </div>
                    </div>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContent>
            <DialogTitle>{"Введите данные"}</DialogTitle>

            <form
              onSubmit={handleLogin}
              className="flex flex-col justify-between"
            >
              <div className="my-2 ">
                <TextField
                  value={email}
                  type={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="post-title"
                  label="Введите email"
                  variant="outlined"
                  className="reg-input"
                  required
                />
              </div>
              <div className="my-2">
                <TextField
                  value={password}
                  type={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="post-title"
                  label="Введите пароль"
                  variant="outlined"
                  className="reg-input"
                  required
                />
              </div>
              <div className="mt-2 text-center">
                <Button type="submit" variant="contained">
                  Войти
                </Button>
              </div>
            </form>
            <Button onClick={handleClose} className="w-full mt-8">
              Disagree
            </Button>
          </DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
