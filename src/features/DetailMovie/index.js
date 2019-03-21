import React, { PureComponent } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import NoDataView from '../../component/NoDataView';
import { fetching } from '../../redux/actions/detailmovie';
import Loading from '../../component/Loading';

class DetailMovie extends PureComponent {
  static navigationOptions = {
    title: 'Movie Detail',
  }

  componentDidMount() {
    const { movieId } = this.props.navigation.state.params;
    this.props.fetchMovie(movieId);
  }

  render() {
    if (this.props.movie.isFetching) {
      return <Loading />;
    }

    if (this.props.movie.movie) {
      return this.renderMovie();
    }
    return <NoDataView />;
  }

  renderMovie() {
    return (
      <SafeAreaView>
        <Text>OK</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.detailmovie,
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: movieId => dispatch(fetching(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
