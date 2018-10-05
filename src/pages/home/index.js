import React from 'react';

import TodoList from 'components/TodoList';

const Home = () => <TodoList />;

Home.navigationOptions = {
  title: 'TodoList',
};

export default Home;
