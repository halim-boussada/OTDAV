import React from "react";
import axios from "axios";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      boli : false
    };
    this.componen = this.componen.bind(this);
    this.open = this.open.bind(this)
  }
  componen() {
    $.ajax({
      url: `/geta`,
      type: "get",
      success: (res) => {
        this.setState({ array: res });
      },
    });
  }

  open(){
     var bol = !this.state.boli 
     this.setState({ boli : bol })
  }
  componentWillMount() {
    this.componen();
  }

  render() {
    var about = [];
    for (var i = 0; i < this.state.array.length; i++) {
      about.push(
        <div key={i} className="about-text">
          <h1>About</h1>
          <p>{this.state.array[i].body}</p>
        </div>
      );
    }
    return (
      <div>
        <div className="about">faa</div>
        <br/>
        <br/>
        
        {about}
        <button className="about-b" onClick={this.open}>updayte</button>
        {this.state.boli ? <Change data={this.state.array[0].body}/> : null }
      </div>
    );
  }
}

class Change extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            about : "" , 
            oldabout : this.props.data
        }
        this.submit = this.submit.bind(this)
        this.handelchange=this.handelchange.bind(this)
    }
    handelchange(e){
         this.setState({
             [e.target.name] : e.target.value
         })
    }
    
submit(){
    axios.post("/inserta", this.state)
    alert('update success')
}

    
   render(){
       return <div>
           <textarea name='about' onChange={this.handelchange}>{this.props.data}</textarea>
           <button type="submit" onClick={this.submit}>confirm the change</button>
       </div>
   }
}



export default About;
