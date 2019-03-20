import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

class Loading extends Component {
  render() {
    return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator animating={true}
                    color="#F44336"
                    style={{ height: 80, marginTop: 10 }}
                    size="large" />
            </View>
    );
  }
}

export default Loading;
