import React from "react";
import axios from "axios";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
    this.componen = this.componen.bind(this);
  }
  componen() {
    $.ajax({
      url: `/getn`,
      type: "get",
      success: (res) => {
        this.setState({ array: res });
      },
    });
  }
  componentWillMount() {
    this.componen();
  }
  render() {
    var about = [];
    for (var i = 0; i < this.state.array.length; i++) {
      about.push(
        <div key={i}>
          <div className="box">
            <img className="img" src={this.state.array[i].image} />
          <p>{this.state.array[i].body}</p>
        </div>
        </div>
      );
    }
    return (
      <div>
        <h1>News go here</h1>
        {about}
      </div>
    );
  }
}

export default News;
