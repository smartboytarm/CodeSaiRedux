import React from 'react';
import './App.css';
import BaiTapLayout from './Components/BaiTapLayout';
import DataBiding from './DataBinding/DataBiding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './Components/State/StateDemo';
import VehicleStyle from './Components/State/StateExercise/VehicleStyle';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';
import BaiTapRenderFilm from './Components/RenderWithMap/BaiTapRenderFilm';
import Header from './Components/Prop/Header';
import DanhSachPhim from './Components/Prop/DanhSachPhim';

// dung data phim
import DataFilm from './Data/DataFilms.json';
import BaiTapQuanLyXeRedux from './Components/BaiTapQuanLyXeRedux/BaiTapQuanLyXeRedux';
import BaiTapThuKinhRedux from './Components/BaiTapThuKinhRedux/BaiTapThuKinhRedux';

function App() {
    return ( 
        <div className = "App" >
            {/* <HandleEvent></HandleEvent> */}
        {/* <DataBiding /> */}
        {/* <BaiTapLayout /> */}
        {/* <StateDemo /> */}
        {/* <VehicleStyle /> */}
        {/* <RenderWithMap></RenderWithMap> */}
        {/* <BaiTapRenderFilm></BaiTapRenderFilm> */}
        Text input: <input type="text"/>
        {/* <Header logo="./botanical.svg" title="cyberSoft"></Header> */}
        {/* <DanhSachPhim mangFilm={DataFilm}></DanhSachPhim> */}
        {/* <BaiTapQuanLyXeRedux></BaiTapQuanLyXeRedux> */}
        <BaiTapThuKinhRedux></BaiTapThuKinhRedux>
        
        </div>
    );
}

export default App;