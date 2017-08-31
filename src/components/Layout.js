import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import actions from '../actions/'



import '../../assets/scss/styles.scss';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


class Layout extends React.Component {

  render() {
    return (
      <div id="container">
          <h1 id='title' >My Todo</h1>
          <TodoInput actions= {this.props.actions}/>
          <TodoList todos ={this.props.todos} actions= {this.props.actions}/>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

function mapDispathToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Layout);