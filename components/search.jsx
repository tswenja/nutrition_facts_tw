import React from 'react'
import { Link } from 'react-router'
import jsonQuery from 'json-query'
require('round10').polyfill()

export default class Search extends React.Component {
  render() {
    var results = null
    if (this.props.foodModel && this.props.params.keyword) {
      var keyword = this.props.params.keyword
      results = jsonQuery(
        `foods[**][*:contains(${keyword})]`,
        {
          data: {foods: this.props.foodModel.all()},
          locals:{contains: function(input,keyword) { if ((input.name + input.nickName + input.enName).toLowerCase().indexOf(keyword.toLowerCase()) >= 0) return input }}
        }
      ).value
    }
    return (
      <main>

        <div className="search_bar">
          <form id="searchForm" onSubmit={(event)=> {
            event.preventDefault()
            var keywordNode = event.target.keyword
            this.context.router.push(`${this.context.router.routes[0].path}/search/${keywordNode.value}`)
            keywordNode.blur()
          }}>
            搜尋：
            <input type="text" name="keyword" className="nude_input_text" defaultValue={this.props.params.keyword} />
          </form>
        </div>

        <div className="sort_pannel">
          排序：
          <span className="sort_item sort_item_first">
            <span className="sort_inspector">
              <svg width="20px" height="14px" className="svg_calories_red">
                <polygon id="sort_inspector" points="9.5,0 10.5,0 19,13 18,14 2,14 1,13 "></polygon>
              </svg>
              <span className="sort_inspector_priority"><font className="sort_inspector_priority_text_adjust">1</font></span>
            </span>
            熱量
          </span>
          <span className="sort_item_separator">:</span>

          <span className="sort_item">
            <span className="sort_inspector">
              <svg width="20px" height="14px" className="svg_protein_yellow">
                <polygon id="sort_inspector" points="9.5,0 10.5,0 19,13 18,14 2,14 1,13 "></polygon>
              </svg>
              <span className="sort_inspector_priority"><font className="sort_inspector_priority_text_adjust">2</font></span>
            </span>
            蛋白質
          </span>
          <span className="sort_item_separator">:</span>

          <span className="sort_item">
            <span className="sort_inspector">
              <span className="sort_inspector_square background_fat_white"></span>
            </span>
            脂肪
          </span>
          <span className="sort_item_separator">:</span>

          <span className="sort_item">
            <span className="sort_inspector">
              <span className="sort_inspector_square background_carb_black"></span>
            </span>
            碳水化合物
          </span>
          <span className="sort_item_separator">:</span>

          <span className="sort_item">
            <span className="sort_inspector">
              <span className="sort_inspector_square background_fiber_green"></span>
            </span>
            膳食纖維
          </span>

        </div>

        <ul>
          {(results == null) ?
            [] : (
              (results.length == 0) ?
                <li style={{padding:'40px', textAlign:'center'}}>{`很抱歉，這裡沒有「${this.props.params.keyword}」的資料`}</li> :
                results.map((result)=> { return <li key={result.uniNumber}><Result result={result} rootPath={this.context.router.routes[0].path}/></li> })
            )
          }
        </ul>

      </main>
    )
  }
}
Search.contextTypes = {
  router: React.PropTypes.object.isRequired
}

class Result extends React.Component {
  render() {
    var result = this.props.result
    var rootPath = this.props.rootPath
    return (
      <div className="result">
        <Link to={`${rootPath}/foods/${result.uniNumber}`} className="nude_link result_link">
          <div className="result_title">
            {result.name}
            <span className="result_title_note">100g</span>
          </div>

          <div>
            <span className="result_item">
              <span className="result_item_indicator">
                <span className="nutrition_icon_calories"></span>
              </span>
              {Math.round10(result.nutritionItems.get('熱量').amountPer100g, -1)}
            </span>
            <span className="result_item_separator">:</span>
            <span className="result_item">
              <span className="result_item_indicator">
                <span className="nutrition_icon_protein"></span>
              </span>
              {Math.round10(result.nutritionItems.get('粗蛋白').amountPer100g, -1)}
            </span>
            <span className="result_item_separator">:</span>
            <span className="result_item">
              <span className="result_item_indicator">
                <span className="nutrition_icon_fat"></span>
              </span>
              {Math.round10(result.nutritionItems.get('粗脂肪').amountPer100g, -1)}
            </span>
            <span className="result_item_separator">:</span>
            <span className="result_item">
              <span className="result_item_indicator">
                <span className="nutrition_icon_carb"></span>
              </span>
              {Math.round10(result.nutritionItems.get('總碳水化合物').amountPer100g, -1)}
            </span>
            <span className="result_item_separator">:</span>
            <span className="result_item">
              <span className="result_item_indicator">
                <span className="nutrition_icon_fiber"></span>
              </span>
              {Math.round10(result.nutritionItems.get('膳食纖維').amountPer100g, -1)}
            </span>
          </div>
        </Link>
      </div>
    )
  }
}
