import React, { PureComponent } from 'react';
import { Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetching } from '../../redux/actions/upcoming';
import FlatListMovies from '../../component/FlatListMovies';


class Upcoming extends PureComponent {
  static navigationOptions = {
    title: 'UpComing',
  }


  componentDidMount() {
    this.props.fetchUpcoming();
  }


  render() {
    console.log(this.props.upcoming);
    if (this.props.upcoming.isFetching) {
      return this.renderLoading();
    }

    return this.renderMovies();
  }

  renderMovies() {
    return (
      <SafeAreaView>
        <FlatListMovies movies={this.props.upcoming.movies} />
      </SafeAreaView>
    );
  }

  renderLoading() {
    return (
      <SafeAreaView>
        <ActivityIndicator animating={true}
          color="#F44336"
          style={{ height: 80, marginTop: 10 }}
          size="large" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  upcoming: state.upcoming,
});

const mapDispatchToProps = dispatch => ({
  fetchUpcoming: () => dispatch(fetching()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
