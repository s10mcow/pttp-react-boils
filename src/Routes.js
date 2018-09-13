import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router';

type Props = {
  location: { pathname: string, search: string, hash: string, key: string },
  history: { push: Function },
};

class Routes extends React.PureComponent<Props, null> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Route path="/" component={Home} />       
          <Redirect to={} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);
