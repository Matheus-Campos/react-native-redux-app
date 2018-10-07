import React, { Component } from 'react';

import { FlatList, Text, View } from 'react-native';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import FavoriteItem from './components/FavoriteItem';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })).isRequired,
  };

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  )

  render() {
    const { favorites } = this.props;

    return (
      <View style={styles.container}>
        { !favorites.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado.</Text>
          : this.renderList() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.data,
});

export default connect(mapStateToProps)(Favorites);
