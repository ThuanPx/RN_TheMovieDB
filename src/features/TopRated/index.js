import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { fetching } from '../../redux/actions/toprated';
import FlatListMovies from '../../component/FlatListMovies';
import NoDataView from '../../component/NoDataView';
import Loading from '../../component/Loading';

class TopRated extends PureComponent {
  static navigationOptions = {
    title: 'TopRated',
  }

  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    console.log('toprate', this.props.toprated);
    if (this.props.toprated.isFeching) {
      return <Loading />;
    }
    if (this.props.toprated.movies && this.props.toprated.movies.length > 0) {
      return <FlatListMovies movies={this.props.toprated.movies} />;
    }

    return <NoDataView />;
  }
}

const mapStateToProps = state => ({
  toprated: state.toprated,
});

const mapDispatchToProps = dispatch => ({
  fetchTopRated: () => dispatch(fetching()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
