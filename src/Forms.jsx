// import React,{Component} from 'react'
// import { Button, Form } from 'react-bootstrap'
// import axios from 'axios'
                                                //  For Posting Texts, these comment code is perfect!!
// class Forms extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
            
//              title: '',
//              desc: '',
//              image: '',
//         }
//     }

//     changeHandler = (e) => {
//         this.setState({[e.target.name]: e.target.value})
//     }
//     // handleImageChange = (e) => {
//     //     this.setState({                  for image uploading ... we can use multiple change handler in a single form!
//     //       image: e.target.files[0]
//     //     })
//     //   };

//     submitHandler = e => {
//         e.preventDefault()
//         console.log(this.state)
//         axios.post('http://127.0.0.1:8000/articles/',this.state)
//             .then(response => {
//                 console.log(response)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
//     render(){

//     const {title,desc,image} = this.state
//     return (
//         <div>
//             <Form onSubmit={this.submitHandler}>
               
//                 <Form.Group controlId="formGroupEmail">
//                     <Form.Label>Enter Title</Form.Label>
//                     <Form.Control type="text" name="title" required placeholder="Enter Title" value={title} onChange={this.changeHandler}/>
//                 </Form.Group>
//                 <Form.Group controlId="formGroupPassword">
//                     <Form.Label>Enter Description</Form.Label>
//                     <Form.Control type="text" name="desc" required placeholder="Enter Description" value={desc} onChange={this.changeHandler}/>
//                 </Form.Group>
                
//                 <input type="file"
//                    name="image"
//                    accept="image/png, image/jpeg" value={image} onChange={this.handleImageChange} />

//                 <Button type="submit" variant="outline-info float-right">Submit</Button>
//             </Form>
              
//         </div>
//     )
//     }
// }
// export default Forms


import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'


class Forms extends Component {

  state = {
    title: '',
    desc: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('desc', this.state.desc);
    let url = 'http://localhost:8000/articles/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' name="title" id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Description' name="desc" id='desc' value={this.state.desc} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg" name="image"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Forms;