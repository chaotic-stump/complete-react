import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my Add Expense Component.
  </div>
);

const EditExpensePage = () => (
  <div>
    This is my Edit Expense Page.
  </div>
);

const HelpPage = () => (
  <div>
    This is my Help Page.
  </div>
);

const NotFoundPage = () => (
  <div>
    404'd! - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Dashboard
    </NavLink> | <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink> | <NavLink activeClassName="is-active"  to="/edit">
      Edit Expense
    </NavLink> | <NavLink activeClassName="is-active" to="/help">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
    <Header />

    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
