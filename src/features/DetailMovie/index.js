import React, { PureComponent } from 'react';
import {
  Text, SafeAreaView, Image, View, ScrollView, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-elements';
import NoDataView from '../../component/NoDataView';
import { fetching } from '../../redux/actions/detailmovie';
import Loading from '../../component/Loading';
import { BASE_URL_IMAGE } from '../../utils/constants';
import { BACKGROUND } from '../../utils/color';

class DetailMovie extends PureComponent {
  static navigationOptions = {
    title: 'Movie Detail',
  }

  componentDidMount() {
    const { movieId } = this.props.navigation.state.params;
    this.props.fetchMovie(movieId);
  }

  render() {
    if (this.props.movieStore.isFetching) {
      return <Loading />;
    }

    if (this.props.movieStore.movie) {
      return this.renderMovie();
    }
    return <NoDataView />;
  }

  renderMovie() {
    return (
      <View style={{ flex: 1, backgroundColor: BACKGROUND }}>

        <ScrollView style={{ flex: 1, backgroundColor: BACKGROUND }}>

          <View style={{
            height: 200,
            position: 'absolute',
            resizeMode: 'stretch',
            width: '100%',
          }} >
            <Image
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'stretch',
              }}
              source={{ uri: `${BASE_URL_IMAGE}${this.props.movieStore.movie.backdrop}` }} />
          </View>

          <View style={{
            marginTop: 150,
          }}>

            <View style={{
              marginStart: 20,
              height: 200,
              flexDirection: 'row',
            }}>

              <View style={{
                width: 140,
                height: 200,
              }}>
                <Image
                  style={{
                    flex: 1,
                    resizeMode: 'stretch',
                  }}
                  source={{ uri: `${BASE_URL_IMAGE}${this.props.movieStore.movie.poster}` }}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 50, textAlign: 'center',
                }}
                >
                  {this.props.movieStore.movie.title}
                </Text>

              </View>

            </View>


            <Text style={{
              fontSize: 17, color: '#fff', marginTop: 10, marginStart: 10, marginEnd: 10,
            }}>
              {this.props.movieStore.movie.overview}
            </Text>


          </View>
        </ScrollView>
      </View >
    );
  }
}

const mapStateToProps = state => ({
  movieStore: state.detailmovie,
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: movieId => dispatch(fetching(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
