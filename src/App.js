import React from 'react';
import './App.css';
const DATA = require('./DATA');


class App extends React.Component {

  state = {
    searchValue : null,
    value: null,
    results: false,
    counter: 0,
    error : false
  }

handleSearch = (e)=> {
  e.preventDefault();
  let counter = 0
  let sortedDATA = DATA.sort((a,b) => {
    return a-b;
  });
  console.log(sortedDATA);

for(let i =0; i< sortedDATA.length; i++){
  console.log('tick')
  counter++;
    if(sortedDATA[i] == parseInt(this.state.searchValue)){
      return this.setState({counter: counter, results: true, value: DATA[i]});
    }
  } 
  return this.setState({error: true, counter: counter});
}

  render(){
  return (
    <>
    <div className="App">
    <h3>Input Here: </h3>
    <input type='numeric' className='numInput' onChange={e => this.setState({searchValue: e.target.value})}/>
    <button className='submit' type='submit' onClick={this.handleSearch}>Search</button>

    </div>
    {this.state.results && (
    <div className='AppResults'>
      <h3 className='resultsCounter'>{'It took ' + this.state.counter + ' tries' }</h3>
      <h3 className='resultsCounter'>{this.state.value}</h3>
    </div>
    )}
     {this.state.error && (
       <React.Fragment>
      <h3 className='resultValue'>{`Value ${this.state.value} not found`}</h3>
      <h3 className='resultValue'>{`It took ${this.state.counter} passes to find out.`}</h3>
      </React.Fragment>
      )}
    </>
  );
  
}
}

export default App;
