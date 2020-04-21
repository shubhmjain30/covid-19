import React, { Component } from "react";
import { NavB, Footer, Precaution, Containr, MythBusters } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Router basename="/">
          <NavB />
          <div className={styles.section}>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Containr
                    {...props}
                    data={data}
                    handleCountryChange={this.handleCountryChange}
                    country={country}
                  />
                )}
              />
              <Route exact path="/precaution" component={Precaution} />
              <Route exact path="/mythbusters" component={MythBusters} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
