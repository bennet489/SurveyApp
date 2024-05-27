import "./Style/index.css";
import NavBar from "./Components/Organismes/NavBar.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CreateSurvey from "./Components/Pages/CreateSurvey.jsx";
import { Footer } from "./Components/Organismes/Footer";
import { Home } from "./Components/Pages/Home.jsx";
import Response from "./Components/Pages/Response.jsx";
import { Contact } from "./Components/Pages/Contact.jsx";
import ReportPage from "./Components/Pages/ReportPage";
import ProviderContext from "./Context/ProviderContext.jsx";
import { AboutUs } from "./Components/Pages/AboutUs";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProviderContext>
                            <Home />
                        </ProviderContext>
                    }
                ></Route>
                <Route
                    path="/Contact"
                    element={
                        <ProviderContext>
                            <Contact />
                        </ProviderContext>
                    }
                ></Route>
                <Route
                    path="/Response/:id"
                    element={
                        <ProviderContext>
                            <Response />
                        </ProviderContext>
                    }
                ></Route>

                <Route
                    path="/createSurvey"
                    element={
                        <ProviderContext>
                            <CreateSurvey />
                        </ProviderContext>
                    }
                ></Route>
                <Route
                    path="/reportPage/:id"
                    element={
                        <ProviderContext>
                            <ReportPage />
                        </ProviderContext>
                    }
                ></Route>
                <Route path="/ReportPage" element={<ReportPage />}></Route>
                <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
