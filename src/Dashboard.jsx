import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Forms from './Forms';


const API = 'http://127.0.0.1:8000/articles/';      // GET request
// const DEFAULT_QUERY = 'redux';
 
class Dashboard extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.data }));
  }
 
  deleteItem(id){
    if(window.confirm('Are You Sure?')){
      fetch(API + id,{
        method: 'DELETE',
        header: {'Accept':'application/json',
            'Content-Type':'application/json'
          }
      })
    }
  }

  render() {
    const { hits } = this.state;
    const baseUrl = 'http://127.0.0.1:8000';
    return (
      <div>
     
        {hits.map(hit =>  
        <>        
        <div>

            <h5>
            {hit.title} 
            </h5>
        
        <h2>{hit.desc}</h2>
        <p>{hit.time}</p>
        <img src={(`${baseUrl}${hit.image}`)} alt="img"/>       {/* Display image with baseurl */}
        
        {/* <img src={hit.avatar} alt=""/> */}
        <br/>
        <br/><hr/>

        <Button type="submit" variant="outline-danger" onClick={() => this.deleteItem(hit.id)}>Delete</Button>

        </div>
        </>
        )}
        <Forms/>
        </div>
     
    );
  }
}

export default Dashboard;



// <h2>This is Dashboard.jsx</h2>
// <div className="container mt-5 p-5">
// <Forms/>

// </div>