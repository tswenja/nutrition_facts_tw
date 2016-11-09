React = require('react')
require('round10').polyfill()

module.exports = class FoodDetails extends React.Component {
  render() {
    var obj
    if (this.props.foodModel) {
      obj = this.props.foodModel.get(this.props.params.uniNumber)
    }
    if (!obj) {
      return <div>Not Found</div>
    } else {
      return (
        <main>
          <div className="food_container">
            <h1>
              <span className="food_title">
                {obj.name}
                <span className="food_title_en">{obj.enName}</span>
              </span>
            </h1>
            <div className="food_description food_description_head">{obj.nickName}</div>
            <div className="food_description">{obj.contents}</div>
            <div className="nutrition_facts_table">
              <div className="nutrition_facts_header">
                <span className="nutrition_facts_cell_amount">每100克</span>
                <span className="nutrition_facts_cell_ratio">營養比例</span>
              </div>
              <div className="nutrition_facts_header">
                <hr className="nutrition_facts_header_separator" />
              </div>
              <ul>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_calories"></span></span>
                    <span className="nutrition_facts_item_name">熱量</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('熱量').amountPer100g, -2)} {obj.nutritionItems.get('熱量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio"></div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_fat_with_border"></span></span>
                    <span className="nutrition_facts_item_name">脂肪</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('粗脂肪').amountPer100g, -2)} {obj.nutritionItems.get('粗脂肪').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio">
                    {Math.round10(obj.nutritionItems.get('粗脂肪').caloriesPer100g / obj.nutritionItems.get('熱量').amountPer100g * 100, -1)}%
                  </div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">飽和脂肪(S)</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('脂肪酸S總量').amountPer100g, -2)} {obj.nutritionItems.get('脂肪酸S總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio"></div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">單元不飽和脂肪(M)</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('脂肪酸M總量').amountPer100g, -2)} {obj.nutritionItems.get('脂肪酸M總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio"></div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">多元不飽和脂肪(P)</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('脂肪酸P總量').amountPer100g, -2)} {obj.nutritionItems.get('脂肪酸P總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio"></div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_carb"></span></span>
                    <span className="nutrition_facts_item_name">碳水化合物</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('總碳水化合物').amountPer100g, -2)} {obj.nutritionItems.get('總碳水化合物').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio">
                    {Math.round10(obj.nutritionItems.get('總碳水化合物').caloriesPer100g / obj.nutritionItems.get('熱量').amountPer100g * 100, -1)}%
                  </div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">膳食纖維</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('膳食纖維').amountPer100g, -2)} {obj.nutritionItems.get('膳食纖維').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio"></div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">糖</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('糖質總量').amountPer100g, -2)} {obj.nutritionItems.get('糖質總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio"></div>
                </li>
                <li className="nutrition_facts_row">
                  <div className="nutrition_facts_cell_amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_protein"></span></span>
                    <span className="nutrition_facts_item_name">蛋白質</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('粗蛋白').amountPer100g, -2)} {obj.nutritionItems.get('粗蛋白').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts_cell_ratio">
                    {Math.round10(obj.nutritionItems.get('粗蛋白').caloriesPer100g / obj.nutritionItems.get('熱量').amountPer100g * 100, -1)}%
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      )
    }
  }
}
