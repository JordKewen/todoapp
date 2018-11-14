import React from 'react';

class App extends React.Component {
    state = {
      list: [],
      item:''
    }
    handleSubmit = event => {
      // don't forget to prevent the form default behavior
  
      event.preventDefault();
      let {list,item} = this.state;
      // list [], item 'banana'
      list.push({text:item,strike:'none',opacity:1});
      // list ['banana'], item bananna
      this.setState({list:list,item:''})
      // item ''
      
    }

    handleChange = event => {
      this.setState({item:event.target.value})
    }

    handleDelete = (i)=>{
      // get the list from the state (this.state.list) and assign it to a variable.
      // splice off the element at the index 
      // set the state of list to be equal to the variable list.
      let {list} = this.state;
      list.splice(i,1);
      this.setState({list:list});
    }

    handleStrike = index => {
        let {list} = this.state
        if(list[index].strike === 'none'){
        list[index].strike = 'line-through'
        list[index].opacity = .5
         } else {
            list[index].strike = 'none' 
            list[index].opacity = 1
          }
        this.setState({list:list})
    }


    render(){
          return (
          <div className='app'>
            <form onSubmit={this.handleSubmit}>
              <button >Submit</button>
              <input 
                value = {this.state.item} 
                onChange={this.handleChange} 
              />
            </form>
            <ul className='unorderedlist'>
                {this.state.list.map((item,i) => {
                  debugger
                  return <li 
                      style={{textDecoration:item.strike,opacity: item.opacity}} 
                      key={i}>
                      <i 
                        className="fa fa-trash"
                        onClick={()=>this.handleDelete(i)} style={{color:'red'}}/>
                      <span onClick={()=>this.handleStrike(i)} >{item.text}</span>
                  </li>
                  })}
              </ul>
            <h1>{this.state.item}</h1>
          </div>
        )
  }
}

export default App;
