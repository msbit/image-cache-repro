import { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import { DocumentDirectoryPath, unlink, writeFile } from 'react-native-fs';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      uri: `file://${DocumentDirectoryPath}/image.jpg`,
    };
  }

  async componentDidMount() {
    //  create file
    await writeFile(this.state.uri, data, 'base64');
    //  show it
    await stateApplied(this, { show: true });
    //  wait for a bit
    await elapsed(500);

    //  remove the file
    await unlink(this.state.uri);
    //  hide it
    await stateApplied(this, { show: false });
    //  wait for a bit
    await elapsed(500);

    //  show the file
    await stateApplied(this, { show: true });
  }

  render() {
    const { show, uri } = this.state;
    return show ?
      <Image
        source={{ uri }}
        style={styles.image}
      />
      : undefined;
  }
};

const data = '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';

const styles = StyleSheet.create({
  image: {
    borderColor: 'red',
    borderWidth: 2,
    height: 128,
    width: 128,
  },
});

function elapsed(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function stateApplied(component, updater) {
  return new Promise(r => component.setState(updater, r));
}
