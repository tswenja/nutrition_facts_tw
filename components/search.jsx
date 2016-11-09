var React = require('react')
var Router = require('react-router')
var Link = require('react-router').Link
require('round10').polyfill()
var jsonQuery = require('json-query')

class FoodSearch extends React.Component {
  render() {
    var results = []
    if (this.props.foodModel) {
      var keyword = this.props.location.query.keyword
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
            this.context.router.push(`${this.context.router.routes[0].path}?keyword=${keywordNode.value}`)
            keywordNode.blur()
          }}>
            搜尋：
            <input type="text" name="keyword" className="nude_input_text" defaultValue={this.props.location.query.keyword} />
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
          {results.map((result)=> {
            return (
              <li key={result.uniNumber}>
                <div className="result">
                  <Link to={`${this.context.router.routes[0].path}/foods/${result.uniNumber}`} className="nude_link result_link">
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
              </li>
            )
          })}

        </ul>

      </main>
    )
  }
}
FoodSearch.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = FoodSearch
