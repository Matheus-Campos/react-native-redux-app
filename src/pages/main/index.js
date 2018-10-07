import React, { Component } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from 'store/ducks/favorites';

import PropTypes from 'prop-types';

import { colors } from 'styles';

import styles from './styles';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    repoNameInput: '',
  };

  addRepository = () => {
    const { addFavoriteRequest } = this.props;
    const { repoNameInput } = this.state;

    if (!repoNameInput.length) return;

    addFavoriteRequest(repoNameInput);
  }

  navigatoToFavorites = () => {
    const { navigation } = this.props;

    navigation.navigate('Favorites');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />

        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos.
          </Text>

          <View style={styles.form}>

            {!!this.props.favorites.errorOnAdd
              && <Text style={styles.error}>{this.props.favorites.errorOnAdd}</Text>}

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={this.state.repoNameInput}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
              disabled={this.props.favorites.loading}
            >
              { this.props.favorites.loading
                ? <ActivityIndicator size="small" color={styles.loading.color} />
                : (
                  <Text style={styles.buttonText}>
                    Adicionar aos favoritos
                  </Text>
                ) }
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigatoToFavorites}>
            <Text style={styles.footerLink}>
              Meus favoritos ({this.props.favorites.data.length})
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
