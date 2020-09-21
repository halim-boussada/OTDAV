import React from "react";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      user: "",
      number: 0,
      adress: "",
      message: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    axios.post("/insertm", this.state);
  }
  render() {
    return (
      <div>
        <form>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container">
          <div className="row">
          <div className="col-25">
          <label>name</label>
          </div>
          <div className="col-75">
          <input name="user" type="text" onChange={this.handleChange}></input>
          </div>
          </div>
          <br />
          <div className="row">
          <div className="col-25">
          <label>phone number</label>
          </div>
          <div className="col-75">
          <input
            name="number"
            type="text"
            value ="+216"
            onChange={this.handleChange}
          ></input>
          </div>
          </div>
          <br />
          <div className="row">
          <div className="col-25">
          <label>adress</label>
          </div>
          <div className="col-75">
          <input name="adress" type="text" onChange={this.handleChange}></input>
          </div>
          </div>
          <br />
          <div className="row">
          <div className="col-25">
          <label>message</label>
          </div>
          <div className="col-75">
          <textarea
            name="message"
            type="text"
            onChange={this.handleChange}
          ></textarea>
          </div>
          </div>
          <br />
          <button className="send" type="submit" onClick={this.submit}>
            send
          </button>
          </div>
        </form>
        <Messages />
      </div>
    );
  }
}

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      boli: false,
    };
    this.componen = this.componen.bind(this);
  }
  componen() {
    $.ajax({
      url: `/getm`,
      type: "get",
      success: (res) => {
        this.setState({ array: res });
      },
    });
  }
  componentWillMount() {
    this.componen();
  }
  fullMessage(index) {
    var bol = !this.state.boli;
    this.setState({ boli: bol });
  }
  render() {
    var messagelist = [];
    for (var i = this.state.array.length - 1; i >= 0; i--) {
      messagelist.push(
        <li key={i} onClick={this.fullMessage.bind(this, i)}>
          {this.state.array[i].user}
          {this.state.boli ? <div><p>{this.state.array[i].number}</p>
          <p>{this.state.array[i].adress}</p>
          <p>{this.state.array[i].message}</p>
          </div> : null}
        </li>
      );
    }
    return (
      <div>
        <h1>here is the messages</h1>
        <ul>
            {messagelist}
        </ul>
      </div>
    );
  }
}

export default Contact;
