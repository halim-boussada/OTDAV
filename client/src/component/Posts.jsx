import React from "react";
import axios from "axios";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      boli: false,
      one: {},
    };
    this.componen = this.componen.bind(this);
  }
  componen() {
    $.ajax({
      url: `/getp`,
      type: "get",
      success: (res) => {
        this.setState({ array: res });
      },
    });
  }
  componentWillMount() {
    this.componen();
  }

  modif(index) {
    var bol = !this.state.boli;
    this.setState({ boli: bol });
    this.setState({ one: this.state.array[index] });
  }
  delete(index) {
    axios.post("/delete", this.state.array[index].body).then(this.componen());
  }
  render() {
    var postArray = [];
    for (var i = this.state.array.length - 1; i >= 0; i--) {
      postArray.push(
        <div key={i}>
          <div className="box">
            <img className="img" src={this.state.array[i].imageUrl} />
            <div className="text">
              <h3>{this.state.array[i].title}</h3>
              <p>{this.state.array[i].author}</p>
              <p>{this.state.array[i].body}</p>
              <a href="http://otdav.tynass.com/#/home/https:%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fotdav-7612d.appspot.com%2Fo%2FPDFs%252Farabic%252Fpdf1_ar.pdf%3Falt%3Dmedia&token%3D07d0495a-05f2-4b20-93e2-cfaa5aeaeadb/view">read</a>
              <a href="http://otdav.tynass.com/#/home/https:%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fotdav-7612d.appspot.com%2Fo%2FPDFs%252Farabic%252Fpdf1_ar.pdf%3Falt%3Dmedia&token%3D07d0495a-05f2-4b20-93e2-cfaa5aeaeadb/view">lire</a>
              <br />
              <br />
              <button onClick={this.delete.bind(this, i)}>delete</button>
              <button onClick={this.modif.bind(this, i)}>modif</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <h1>NOTRE MAGASINE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptate vero, eveniet minus sapiente quam saepe aliquam. Ratione
            esse neque culpa, consequuntur blanditiis iste iure officiis rem
            molestias id qui?. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Fugiat voluptas error est, alias cupiditate omnis
            in laudantium facere officiis consectetur, ex, quas nemo consequatur
            quisquam rerum delectus neque voluptatum quaerat!. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quae recusandae itaque earum
            esse incidunt labore? Voluptatem ipsa blanditiis incidunt distinctio
            quia? Nobis voluptatum accusantium excepturi provident iusto
            delectus, a omnis!
          </p>
        </div>
        {!this.state.boli ? (
          <div>{postArray}</div>
        ) : (
          <Modif object={this.state.one} />
        )}
      </div>
    );
  }
}

class Modif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: this.props.object,
      auther: "",
      title: "",
      imageUrl: "",
      body: "",
    };
    this.handelchange = this.handelchange.bind(this);
  }

  handelchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log("this is object", this.props.object);
    return (
      <form>
        <div>
          <label>title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => this.handelchange(e.target.value)}
            value={this.props.object.title}
          />
          <br />
          <label>body</label>
          <textarea
            name="body"
            onChange={(e) => this.handelchange(e.target.value)}
          >
            {this.props.object.body}
          </textarea>
          <br />
          <label>imageUrl</label>
          <input
            type="text"
            name="imageUrl"
            onChange={(e) => this.handelchange(e.target.value)}
            value={this.props.object.imageUrl}
          />
          <br />
          <label>author</label>
          <input
            type="text"
            name="author"
            onChange={(e) => this.handelchange(e.target.value)}
            value={this.props.object.author}
          />
        </div>
      </form>
    );
  }
}
export default Posts;
