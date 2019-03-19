import React, { PureComponent } from 'react';
import { Text, SafeAreaView } from 'react-native';

class Upcoming extends PureComponent {
  static navigationOptions = {
    title: 'UpComing',
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    );
  }
}

export default Upcoming;
