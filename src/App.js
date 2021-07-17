import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Data from "./containers/Data";
import Performance from "./containers/Performance";
import { Profiler, useState } from "react";

function App() {
  const [performanceData, setPerformanceData] = useState(null);
  const handleOnRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      )
    if (!performanceData)
      setPerformanceData({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      });
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/data">
          <Profiler id="data-page" onRender={handleOnRender}>
            <Data />
          </Profiler>
        </Route>
        <Route path="/performance">
          <Performance data={performanceData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
