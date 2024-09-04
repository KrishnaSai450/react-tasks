import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomeScreen from "./Screens/HomeScreen"

import CustomNavBar from "./navBar"
import AboutScreen from "./Screens/aboutScreen"
import SettingScreen from "./Screens/settingsScreen"


const NavigationStack =()=>{

    return(
        <>
           {/* <CustomNavBar/> */}
            

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/setting" element={<SettingScreen/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavigationStack