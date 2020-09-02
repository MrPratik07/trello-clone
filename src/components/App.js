import React,{ Component } from 'react';
import { connect } from "react-redux";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton"; //for performing actions on button click
import { DragDropContext, Droppable } from "react-beautiful-dnd"; // for drag and drop for cards and lists
import { sort } from "../actions"; // for sorting the list after drag and drop
import styled from "styled-components";
import "./App.css"

const ListContainer = styled.div `
  display : flex;
  flex-direction : row;


`;


class App extends Component {

  onDragEnd = (result) => {
    //reordering logic
    const {destination , source, draggableId, type} = result;

    if(!destination) {
        return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
        )
      );
    };

  render (){
    const {lists} = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
       <h1>Trello Clone Application</h1>
       <Droppable droppableId = "all-lists" direction = "horizontal" type = "list">
       
       { provided  =>  (
        
        <ListContainer { ...provided.droppableProps} ref= { provided.innerRef}>
        {lists.map((list ,index) => (
         <TrelloList listID = {list.id} key={list.id} title = {list.title} cards = {list.cards} index= {index} />
           ))}
        <TrelloActionButton list/>
        </ListContainer>

       )}
       </Droppable>
       
       </div>
       </DragDropContext>
    );
  }

}



const mapStateToProps = state =>({
  lists: state.lists

});
  

export default connect(mapStateToProps)(App) ;
