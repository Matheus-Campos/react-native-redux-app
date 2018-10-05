import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as TodoActions from 'store/actions/todos';

import PropTypes from 'prop-types';

import styles from './styles';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <View style={styles.todoContainer} key={todo.id}>
        <Text>{todo.text}</Text>
        <TouchableOpacity onPress={() => removeTodo(todo.id)}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity onPress={() => addTodo('Fazer café novamente')}>
      <Text>Adicionar todo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
