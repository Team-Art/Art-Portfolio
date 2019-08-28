import React from 'react';
import axios from 'axios';
import ModalEdit from "./Modal";
import EditIcon from "./EditIcon.svg";


const editIcon={
  zIndex: "2",
  position: "absolute",
  marginLeft: "170px",
  cursor:"pointer",
}




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

    toggleLikes = () => {
      if(!this.state.liked){
          this.setState(prevState => ({
              likes: prevState.likes + 1, 
              liked: !prevState.liked
          }))} else if (this.state.liked) {
              this.setState(prevState => ({ 
                  likes: prevState.likes - 1,
                  liked: !prevState.liked
              }))
          }
      };

      

      

    render(){
      console.log("item", this.state.item)
      console.log("props: ", this.props)
      
      
      const item = this.state.item;
    return (

      <div className="single-post-page">
        <div className="single-post-container">
          <div className="post-container">
            <header>
                {/* <img src={item.avatar} alt={`${item.fname} ${item.lname}`}  /> */}
                <p>{item.fname} {item.lname}</p>
            </header>
          <div>
          <p >
                <i className={`fas fa-heart ${this.state.liked ? `liked` : null}`} 
                onClick={this.toggleLikes}>
            </i> {item.likes + this.state.likes}</p>
          </div>
               

           <img  src={EditIcon} style={editIcon}  className="EditIcon" alt="Edit Icon"/>
      {EditOnclick ? (<ModalEdit/>) : console.log('test')}
     

               {/* <ModalEdit/> */}
              <img onClick={()=> {handleClick()}} src={EditIcon} style={editIcon} className="EditIcon" alt="Edit Icon"/>
            <img src={item.src} alt={item.description}  />
            <p >{item.description}</p>
          </div>
        </div>
      </div>
    )
  } 
}

let EditOnclick= false;

function handleClick(){
  EditOnclick?  EditOnclick= false: EditOnclick= true; 
  // setTimeout(()=>{
  //   EditOnclick=false;
  //   console.log(EditOnclick)
    
  // }, 1000)
 console.log('HandleClick', EditOnclick);

}  

export default PostList;