import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUsersRooms } from '../actions/usersRoom';

class RoomsContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    //usersRooms: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchUsersRooms: PropTypes.func.isRequired
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    const { fetchUsersRooms } = this.props;

    this.setState({ loading: true });

    return fetchUsersRooms(data)
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  render = () => {
    const { Layout, usersRooms, match } = this.props;
    const { loading, error } = this.state;
    if (match) {
      console.log(match, " MPPPP");
    }
    const id = (match && match.params && match.params.id) ? match.params.id : null;
    return (
      <Layout
        roomId={id}
        error={error}
        loading={loading}
        usersRooms={usersRooms}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  usersRooms: state.usersRooms.usersRooms || {},
});

const mapDispatchToProps = {
  fetchUsersRooms: getUsersRooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);
