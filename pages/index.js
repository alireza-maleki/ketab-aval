import { Accordion } from "@mui/material";
import react, { Fragment } from "react";
import Header from "../components/header/Header";
import Header2 from "../components/header/Header2";
import SearchFilter from "../components/search/SearchFilter";
import CustomizedAccordions from "../components/acordian/CustomizedAccordions";

import { Provider } from "react-redux";
import store from "../components/redux/store";
import HomePage from "./homepage";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";


const Home = () => {

  return (
    <Provider store={store}>
      <HomePage />
      <ScrollToTop />
    </Provider>
  )

}


export default Home;