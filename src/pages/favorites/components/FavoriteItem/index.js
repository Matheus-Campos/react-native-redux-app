import React from 'react';

import { Image, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const FavoriteItem = ({ favorite: { name, owner, description } }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description} numberOfLines={2}>{description}</Text>
    </View>
  </View>
);

FavoriteItem.propTypes = {
  favorite: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({ avatar_url: PropTypes.string }),
    description: PropTypes.string,
  }).isRequired,
};

export default FavoriteItem;
