import React, { Component } from "react";

import TechItem from "../ItemTech";

export default class ListTech extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "React", "React Native"]
  };

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  handleAddTech = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleRemoveTech = tech => {
    const techs = this.state.techs.filter(item => item !== tech);
    this.setState({
      techs: [...techs]
    });
  };

  render() {
    return (
      <form onSubmit={this.handleAddTech}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Adicionar</button>
        <ul>
          {this.state.techs.map(item => (
            <TechItem
              key={item}
              onDelete={() => this.handleRemoveTech(item)}
              tech={item}
            />
          ))}
        </ul>
      </form>
    );
  }
}
