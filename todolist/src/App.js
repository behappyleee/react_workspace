
import todoListTemplate from './components/todoListTemplate';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route expactPath ="/todoListTemplate" component={todoListTemplate}>
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
