import React from 'react'
import { FoodDB } from '../data_model'

export default class DatasourceTW extends React.Component {
  constructor() {
    super()
    this.state = { ready: false }
  }
  componentDidMount() {
    FoodDB.init((model)=> {
      this.foodModel = model
      this.setState({ready: true})
    });
  }
  render() {
    var contents = (
      (this.state.ready) ?
      React.cloneElement(this.props.children, {foodModel: this.foodModel}) :
      <div className="placeholder_loading"></div>
    )
    return (
      <div>
        <div className="main_container">
          <div className="main_container__margin">
            {contents}
          </div>
        </div>

        <div className="data_source">
          資料來源：<a href="http://data.gov.tw/node/gov/resource/2749" target="_blank" className="data_source_link">政府資料開放平台</a>
        </div>
      </div>
    )
  }
}
