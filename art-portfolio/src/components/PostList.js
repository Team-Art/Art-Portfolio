import React from 'react';
import axios from 'axios';
import Modal from "./Modal";
// import EditIcon from "./EditIcon.svg";

//************************************************************************************************ */


 const singlePostPic={
  width: "100%"
 }

 const singlepost={
  fontFamily: "Roboto sans-serif",
 }

 

 const description={
  margin: "20px 0 20px 13%",
  fontSize: "18px",
  width: "87%",
 }

 const name={
  fontSize: "36px",
  width: "19%",
  textAlign: "center"
 }

 const container={
  display: "relative",
  margin: "0 auto",
  width: "80%"
 }
//************************************************************************************************ */


class PostList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        item: {},
        
        
      }
    }
    
    componentDidMount() {
      axios
.get(`https://artportfoliobw.herokuapp.com/${this.props.match.params.photoId}`)
      .then(res => {
        console.log("then",res)
        this.setState({ 
          item: res.data,
          fname: res.data.fname
        })
      })
      .catch( err => {
        console.log(err)
      })
    }

    
      render(){
      console.log("item", this.state.item)
      console.log("props: ", this.props)
      
      
      const item = this.state.item;

    return (

      <div >
        <div className="single-post-container">
          <div style={singlepost} className="post-container">
            <header>
                <p style={name}>{item.fname} {item.lname}</p>
            </header>
              <div style={container}>
               <Modal as={item}/>
             <img style={singlePostPic} src={item.src} alt={item.description}  />
              </div>
            <p style={description}>{item.description}</p>
          </div>
        </div>
      </div>
    )
  } 
}


export default PostList;