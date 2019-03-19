import React, { PureComponent } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetching } from '../../redux/actions/upcoming';

class Upcoming extends PureComponent {
  static navigationOptions = {
    title: 'UpComing',
  }

  componentDidMount() {
    // this.props.fetchUpcoming();
  }


  render() {
    return (
      <SafeAreaView>
        <Text>Hello</Text>
        <Button title='ok'
          onPress={() => {
            this.props.fetchUpcoming();
          }}
        />
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
