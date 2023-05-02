import {Route, Routes} from "react-router-dom";
import {Quiz} from "../../pages/Quiz";
import {Home} from "../../pages/Home";
import {AppPaths} from "../Router.helpers";
import {About} from "../../pages/About";
import {Login} from "../../pages/Login";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={AppPaths.HOME} element={<Home/>}/>
            <Route path={AppPaths.QUIZ} element={<Quiz/>}/>
            <Route path={AppPaths.ABOUT} element={<About/>}/>
            <Route path={AppPaths.LOGIN} element={<Login/>}/>
        </Routes>
    );
}