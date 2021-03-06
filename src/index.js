import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './store';
import WelcomeViewContainer from './containers/WelcomeViewContainer';
import AppContainer from './containers/AppContainer';
import TakeQuizContainer from './containers/TakeQuizContainer';
import CreateQuiz from './components/CreateQuiz';
import QuizResultsContainer from './containers/QuizResultsContainer';
import './index.scss';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <section>
        <Switch>
          <Route
            path="/room/:id"
            render={(props) => {
              if (!props.location.state.user) {
                return <TakeQuizContainer />;
              }
              return <QuizResultsContainer />;
            }}
          />
          <Route path="/login" component={WelcomeViewContainer} />
          <Route path="/signup" component={WelcomeViewContainer} />
          <Route path="/" component={AppContainer} />
          <Route path="/quiz" component={CreateQuiz} />
        </Switch>
      </section>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
