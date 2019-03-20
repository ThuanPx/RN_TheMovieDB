import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View, Image, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { BASE_URL_IMAGE } from '../utils/constants';
import { BLACK_PEARL, AMBER, BACKGROUND } from '../utils/color';


class FlatListMovies extends Component {
  _onPress = (id) => {
    this.props.onPressItem(id);
  }

  render() {
    return (
      <FlatList
        data={this.props.movies}
        renderItem={({ item }) => this.renderItemMovie(item)}
        keyExtractor={item => item.id.toString()}
      />
    );
  }

  renderItemMovie(it) {
    return (
      <TouchableOpacity onPress={this._onPress(it.id)}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          height: 200,
          alignItems: 'center',
          paddingEnd: 20,
          paddingStart: 20,
          backgroundColor: BACKGROUND,
        }}>
          <View style={{ width: '35 %', height: '80 %' }}>
            <Image source={{ uri: `${BASE_URL_IMAGE}${it.poster}` }} style={{ flex: 1 }} />

            <View style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              backgroundColor: AMBER,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{}}>
                {it.vote}</Text>
            </View>

          </View>

          <View style={{
            backgroundColor: BLACK_PEARL,
            height: '60%',
            width: '65%',

          }}>
            <Text style={{
              width: '100%',
              fontSize: 18,
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 15,
            }}>{it.title}</Text>

          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

FlatListMovies.propTypes = {
  movies: PropTypes.array,
  onPressItem: PropTypes.func.isRequired,
};

export default FlatListMovies;
