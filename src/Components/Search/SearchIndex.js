import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component() {
  constructor(props) {
  super(props) 
  this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
   handleOnChange = event => {
     this.setState({searchValue: event.target.value});
   }

   handleSearch =() => {

   }
 }

 state = {
   searchValue:''
 }


 
render() {
   return(
     <div>
       <Input placeholder='Search Here'  onChange={event => this.handleOnChange(event)} value={this.state.searchValue}/>
       <button onClick={this.handleSearch}>Search</button>
      {things.filter(things => things.includes(this.state.searchValue)).map(filteredList => (
         <h3>Results:{filteredList}</h3>
      ))}
      
     </div>
     )
 }

} 


// function searchFunction() {
//  }


export default SearchIndex;
