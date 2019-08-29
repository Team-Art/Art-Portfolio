import React from 'react';
import axios from 'axios';
import ModalEdit from "./Modal";
import EditIcon from "./EditIcon.svg";

//************************************************************************************************ */
const editIcon={
  zIndex: "2",
  position: "absolute",
  marginLeft: "1013px",
  marginTop: "70px",
  cursor:"pointer",
}

 const singlePostPic={
  display: "inherit",
  margin: "0 auto",
  width: "900px",
  height: "540px"
 }

 const singlepost={
  fontFamily: "Roboto sans-serif",
 }

 const likesStyle={
  marginLeft: "270px",
 }

 const description={
  marginLeft: "270px",
  marginTop: "20px",
  fontSize: "18px",
  width: "100%",
 }

 const name={
  fontSize: "36px",
  width: "19%",
 }
//************************************************************************************************ */


class PostList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        item: {},
        likes: 0,
        liked: false,
        
      }
    }
    
    componentDidMount() {
      axios
      .get(`https://artportfoliobw.herokuapp.com/${this.props.match.params.photoId}`)
      .then(res => {
        console.log(res)
        this.setState({ 
          item: res.data
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
          <div className="post-container">
            <header>
                {/* <img src={item.avatar} alt={`${item.fname} ${item.lname}`}  /> */}
                <p style={name}>{item.fname} {item.lname}</p>
            </header>
          <div>
          <p style={likesStyle}>
                <i className={`fas fa-heart ${this.state.liked ? `liked` : null}`} 
                onClick={this.toggleLikes}>
             </i></p>  
          </div> 
               <ModalEdit/>
             <img style={singlePostPic} src={item.src} alt={item.description}  />
            <p style={description}>{item.description}</p>
          </div>
        </div>
      </div>
    )
  } 
}


export default PostList;