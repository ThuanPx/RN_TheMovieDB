import React, { PureComponent } from 'react';
import { Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetching } from '../../redux/actions/upcoming';
import FlatListMovies from '../../component/FlatListMovies';
import Loading from '../../component/Loading';
import NoDataView from '../../component/NoDataView';
import { BACKGROUND } from '../../utils/color';

class Upcoming extends PureComponent {
  static navigationOptions = {
    title: 'UpComing',
  }

  componentDidMount() {
    this.props.fetchUpcoming();
  }

  _onPressItem = (id) => {
    console.log('id ', id);
  }

  render() {
    console.log(this.props.upcoming);
    if (this.props.upcoming.isFetching) {
      return <Loading />;
    }

    if (this.props.upcoming.movies && this.props.upcoming.movies.length > 0) {
      return <FlatListMovies
        onPressItem={this._onPressItem}
        movies={this.props.upcoming.movies}
      />;
    }

    return <NoDataView />;
  }

  renderMovies() {
    return (
      <SafeAreaView style={{ backgroundColor: BACKGROUND }}>
        <FlatListMovies movies={this.props.upcoming.movies} />
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
