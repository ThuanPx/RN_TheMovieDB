import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View, Image, Text, FlatList,
} from 'react-native';
import { BASE_URL_IMAGE } from '../utils/constants';


class FlatListMovies extends Component {
  render() {
    return (
            <FlatList
                data={this.props.movies}
                renderItem={({ item }) => this.renderItemMovie(item)}
            />
    );
  }

  renderItemMovie(it) {
    return (
            <View style={{
              flex: 1, flexDirection: 'row', width: '100%', height: 250, alignItems: 'center',
            }}>
                <Image source={{ uri: `${BASE_URL_IMAGE}${it.poster}` }} style={{ width: '35 %', height: '80 %' }} />
                <View style={{ backgroundColor: '#000', height: '60%', width: '65%' }}>
                    <Text style={{
                      width: '100%',
                      fontSize: 18,
                      color: '#fff',
                      textAlign: 'center',
                    }}>{it.title}</Text>
                </View>
            </View>
    );
  }
}

FlatListMovies.propTypes = {
  movies: PropTypes.array,
};

export default FlatListMovies;
