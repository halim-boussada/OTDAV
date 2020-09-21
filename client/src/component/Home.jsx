import React from "react";
import axios from "axios";
import Posts from "./Posts.jsx";
import News from "./News.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boli: false,
    };
    this.create = this.create.bind(this);
  }
  create() {
    var bol = !this.state.boli;
    this.setState({ boli: bol });
  }
  render() {
    return (
      <div>
        <img
          className="home-page"
          src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/119703284_3536315639754173_1908130855588043958_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=HgD73hLc9lUAX_K-AP-&_nc_ht=scontent.ftun10-1.fna&oh=0da8ddb2c3d0c23322297be6d5650935&oe=5F8E6F5A"
          width="1250px"
          height="400px"
        />
        <br />
        {this.state.boli ? (
          <div>
            <InsertPost create={this.create}/> 
          </div>
        ) : (
          <button className="midlle" onClick={this.create}>insert new content</button>
        )}

        <div>
          <Posts /> <News />
        </div>
        <img
          className="home-page"
          src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-9/120048467_3547454775306926_6982685667881827581_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=PX8SizrqaHEAX_l9e1A&_nc_ht=scontent.ftun10-1.fna&oh=7c845458a4452942423a4063ee0da201&oe=5F8E0B0F"
          width="1250px"
          height="300px"
        />
      </div>
    );
  }
}

class InsertPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      title: "",
      author: "",
      imageUrl: "",
      post: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.post);
  }

  submit() {
    axios.post("/insert", this.state);
  }

  render() {
    return (
      <div className="container">
        <form>
          <div>
            <div className="row">
              <div className="col-25">
                <label>title :</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Title"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>author :</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="author"
                  onChange={this.handleChange}
                  placeholder="Author"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>image url :</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="imageUrl"
                  onChange={this.handleChange}
                  placeholder="image url"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>post :</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="post"
                  placeholder="Write something.."
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <button onClick={this.props.create}>cancel</button>
            <button type="submit" onClick={this.submit}>
              confirm
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;

{
  /* <br />

<br />

<br />
<div className="row">
  <div  className="col-25">
<label >title</label>
</div>
<div className="col-75">
<textarea type="text"  name="post" onChange={this.handleChange} style="height:200px"></textarea>
</div>
</div> */
}
