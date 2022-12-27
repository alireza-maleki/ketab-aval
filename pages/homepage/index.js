import React, { Fragment } from "react";

import Header from "../../components/header/Header";
import Header2 from "../../components/header/Header2";
import CustomizedAccordions from "../../components/acordian/CustomizedAccordions";
import GetData from "../../components/getdata/GetData";
import Footer from "../../components/footer/Footer";
import DynamicHeader from "../../components/dynamicheader/DynamicHeader";
import Tabligh from "../../components/tabligh/Tabligh";
import Filter from "../../components/filter/Filter";

const HomePage = () => {

    return (
        <>
            <Header />
            <Header2 />
            <DynamicHeader />
            <CustomizedAccordions />
            <GetData />
            <Tabligh />
            <Footer />
        </>
    )

}

export default HomePage;