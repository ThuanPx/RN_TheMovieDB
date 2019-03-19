import React, { PureComponent } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { fetching } from '../../redux/actions/movedb';

class Upcoming extends PureComponent {
  static navigationOptions = {
    title: 'UpComing',
  }

  componentDidMount() {
    this.props.fetchUpcoming();
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hello</Text>
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

// export default Upcoming;
