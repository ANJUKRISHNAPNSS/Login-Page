import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux"
import { store } from "./components/store";
import LoginPage from "./components";
import Newregistration from "./components/newRegistration";
import mainPage from "./components/mainPage";
import CompanyInfo from "./components/infoPage";

const AppRouter = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/mainPage" component={mainPage} />
                <Route exact path="/info" component={CompanyInfo} />

                {/* <Route exact path="/registrationPage" component={Newregistration} /> */}
                <Route exact path="/createUser" component={Newregistration} />
            </Switch>

        </Router>
    </Provider>
)

export default AppRouter