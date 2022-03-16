import React, { useState } from "react";
import axios from "axios";
// ROUTER
import { Link } from "react-router-dom";
// MUI
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import ProfileBook from "../../saveposts/ProfileBook";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// COMPONENTS
import Write from "../../saveposts/Write";
import FlightsPost from "../../saveposts/FlightsPost";

import { useDropzone } from "react-dropzone";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Admin = () => {
  const [value, setValue] = useState("1");

  const [data, setData] = useState([null, null]);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [visaCity, setVisaCity] = useState("");
  const [visaImg, setVisaImg] = useState("");
  // -----------------------------------
  const [pagesA, setPagesA] = useState("");
  const [pagesAA, setPagesAA] = useState("");
  const [pagesE, setPagesE] = useState("");
  const [pagesT, setPagesT] = useState("");
  const [pagesD, setPagesD] = useState("");
  const [pagesI, setPagesI] = useState("");
  const [pagesIi, setPagesIi] = useState("");
  const [pagesIii, setPagesIii] = useState("");
  // ----------------------
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [descr, setDescr] = useState("");
  const [sell, setSell] = useState("");
  const [img, setImg] = useState("");
  const [hotels, setHotels] = useState("");
  const [description, setDescription] = useState("");
  const [dataOne, setDataOne] = useState("");
  const [dataTwo, setDataTwo] = useState("");
  const [duration, setDuration] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/posts", {
      postTitle: title,
      postDescr: descr,
      postSell: sell,
      postImg: img,
      postDuration: duration,
      postCity: city,
      postData: data,
      postCountry: country,
    });
    setTitle("");
    setDescr("");
    setSell("");
    setImg("");
    setDataOne("");
    setDuration("");
    setCountry("");
    setCity("");
    setOpen(true);
  };

  const hadleSubmitPages = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/pages", {
      pagesTitle: pagesT,
      pagesDescr: pagesD,
      pagesEtru: pagesE,
      pageImgA: pagesA,
      pageImgAA: pagesAA,
      pageImgI: pagesI,
      pageImgIi: pagesIi,
      pageImgIii: pagesIii,
    });
    setPagesT("");
    setPagesD("");
    setPagesE("");
    setPagesA("");
    setPagesAA("");
    setPagesI("");
    setPagesIi("");
    setPagesIii("");
    setOpen(true);
  };

  const handleSubmitVisa = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/visa", {
      visaCity: visaCity,
      visaImg: visaImg,
    });
    setVisaCity("");
    setVisaImg("");
    setOpen(true);
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const [drag, setDrag] = useState(true);

  // function dragStartHandle(e) {
  //   e.preventDefault();
  //   setDrag(true);
  // }
  // function dragLeaveHandle(e) {
  //   e.preventDefault();
  //   setDrag(false);
  // }

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createdObjectURL(file),
          })
        )
      );
    },
  });
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div className="admin-item">
      <div {...getRootProps()}>
        <input {...getInputProps} />
        <p>DROP FILES</p>
      </div>
      <div>{images}dasdas</div>

      {/* {drag ? (
        <div
          className="drag"
          onDragStart={(e) => dragStartHandle(e)}
          onDragLeave={(e) => dragLeaveHandle(e)}
          onDragOver={(e) => dragStartHandle(e)}
        >
          Отпусти сюда фото
        </div>
      ) : (
        <div
          onDragStart={(e) => dragStartHandle(e)}
          onDragLeave={(e) => dragLeaveHandle(e)}
          onDragOver={(e) => dragStartHandle(e)}
        >
          Перетащи сюда фото
        </div>
      )} */}

      <Breadcrumbs aria-label="breadcrumb" className="pt-5">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">Админ</p>
      </Breadcrumbs>

      <TabsUnstyled defaultValue={3}>
        <TabsListUnstyled className="mb-4 flex">
          <TabUnstyled className="bnt">Создать тур/пост</TabUnstyled>
          <TabUnstyled className="bnt">Заявка на тур</TabUnstyled>
          <TabUnstyled className="bnt">Сообщение</TabUnstyled>
          <TabUnstyled className="bnt">Заявка на авиабилеты</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Создать пост с туром</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form onSubmit={handleSubmit} className="form1">
                  <div className="tour-items">
                    <TextField
                      value={descr}
                      onChange={(e) => setDescr(e.target.value)}
                      id="create-course-form"
                      label="Введите заголовок поста"
                      variant="outlined"
                      className="w-full"
                      required
                    />
                    <TextField
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                      id="create-course-form"
                      label="Введите url картинки"
                      variant="outlined"
                      className="w-full"
                      required
                    />
                    <div className="flex justify-between">
                      <TextField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="create-course-form"
                        label="Введите город"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        id="create-course-form"
                        label="Введите страну"
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <TextField
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        id="create-course-form"
                        label="Введите длительность тура"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id="create-course-form"
                        label="Введите город вылета"
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <TextField
                        value={dataOne}
                        type={data}
                        onChange={(e) => setDataOne(e.target.value)}
                        id="create-course-form"
                        label="Введите дадут вылета"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={sell}
                        onChange={(e) => setSell(e.target.value)}
                        id="outlined-number"
                        label="Введите цену"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </div>
                    <div className="flex justify-between flex-col">
                      <button
                        type="submit"
                        variant="contained"
                        className="button1"
                      >
                        Создать
                      </button>
                      <Link to="/tour">
                        <p>Посмотреть созданный тур</p>
                      </Link>
                    </div>
                  </div>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Создать пост со страной</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form onSubmit={hadleSubmitPages}>
                  <div className="form2">
                    <div className="form-items">
                      <TextField
                        value={pagesT}
                        onChange={(e) => setPagesT(e.target.value)}
                        id="create-course-form"
                        label="Введите государства"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={pagesA}
                        onChange={(e) => setPagesA(e.target.value)}
                        label="Введите ссылку на государства"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={pagesAA}
                        onChange={(e) => setPagesAA(e.target.value)}
                        id="create-course-form"
                        label="Введите ссылку на флаг"
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="form-items">
                      <TextField
                        value={pagesI}
                        onChange={(e) => setPagesI(e.target.value)}
                        id="create-course-form"
                        label="Введите ссылку на фото"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={pagesIi}
                        onChange={(e) => setPagesIi(e.target.value)}
                        label="Введите ссылку на фото"
                        variant="outlined"
                        required
                      />
                      <TextField
                        value={pagesIii}
                        onChange={(e) => setPagesIii(e.target.value)}
                        id="create-course-form"
                        label="Введите ссылку на фото"
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="form-items2">
                      <TextField
                        value={pagesD}
                        onChange={(e) => setPagesD(e.target.value)}
                        id="outlined-multiline-static"
                        label="Введите описание государства"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        required
                      />
                      <TextField
                        value={pagesE}
                        onChange={(e) => setPagesE(e.target.value)}
                        id="outlined-multiline-static"
                        label="Введите описание туризма"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      variant="contained"
                      className="button1"
                    >
                      Создать
                    </button>
                  </div>
                  <Link to="/pages">
                    <p>Посмотреть созданный пост</p>
                  </Link>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Создать шенген c государством (visa)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form onSubmit={handleSubmitVisa}>
                  <div className="form2">
                    <div className="w-full">
                      <TextField
                        value={visaCity}
                        onChange={(e) => setVisaCity(e.target.value)}
                        id="create-course-form"
                        label="Введите город"
                        variant="outlined"
                        className="texfield-visa"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                        value={visaImg}
                        onChange={(e) => setVisaImg(e.target.value)}
                        id="create-course-form"
                        label="Введите url фото"
                        variant="outlined"
                        className="texfield-visa"
                        required
                      />
                    </div>

                    <button type="submit" className="button3">
                      Зарегистрировать страну
                    </button>
                  </div>
                  <Link to="/visa">
                    <p>Посмотреть созданный шенген</p>
                  </Link>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>
          <p className="form-text">Заявки на тур</p>
          <ProfileBook />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2}>
          <p className="form-text">Сообщение</p>
          <Write />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={3}>
          <p className="form-text">Заявка на авиабилеты</p>
          <FlightsPost />
        </TabPanelUnstyled>
      </TabsUnstyled>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Admin;
