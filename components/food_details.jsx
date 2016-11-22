import React from 'react'
require('round10').polyfill()

export default class FoodDetails extends React.Component {
  render() {
    var obj
    if (this.props.foodModel) {
      obj = this.props.foodModel.get(this.props.params.uniNumber)
    }
    if (!obj) {
      return <noscript />
    } else {
      return (
        <main>
          <div className="food_container">
            <h1>
              <span className="food__title">
                {obj.name}
                <span className="food__title--en">{obj.enName}</span>
              </span>
            </h1>
            <div className="food__description food__description--head">{obj.nickName}</div>
            <div className="food__description">{obj.contents}</div>
            <div className="nutrition_facts_table">
              <div className="nutrition_facts__header">
                <span className="nutrition_facts__cell nutrition_facts__cell--amount">每100克</span>
                <span className="nutrition_facts__cell nutrition_facts__cell--ratio">營養比例</span>
              </div>
              <div className="nutrition_facts__header">
                <hr className="nutrition_facts__header_separator" />
              </div>
              <ul>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_calories"></span></span>
                    <span className="nutrition_facts_item_name">熱量</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('熱量').amountPer100g, -2)} {obj.nutritionItems.get('熱量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio"></div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_fat_with_border"></span></span>
                    <span className="nutrition_facts_item_name">脂肪</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('粗脂肪').amountPer100g, -2)} {obj.nutritionItems.get('粗脂肪').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio">
                    {Math.round10(obj.nutritionItems.get('粗脂肪').caloriesPer100g / obj.nutritionItems.get('熱量').amountPer100g * 100, -1)}%
                  </div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">飽和脂肪(S)</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('脂肪酸S總量').amountPer100g, -2)} {obj.nutritionItems.get('脂肪酸S總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio"></div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">單元不飽和脂肪(M)</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('脂肪酸M總量').amountPer100g, -2)} {obj.nutritionItems.get('脂肪酸M總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio"></div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">多元不飽和脂肪(P)</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('脂肪酸P總量').amountPer100g, -2)} {obj.nutritionItems.get('脂肪酸P總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio"></div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_carb"></span></span>
                    <span className="nutrition_facts_item_name">碳水化合物</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('總碳水化合物').amountPer100g, -2)} {obj.nutritionItems.get('總碳水化合物').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio">
                    {Math.round10(obj.nutritionItems.get('總碳水化合物').caloriesPer100g / obj.nutritionItems.get('熱量').amountPer100g * 100, -1)}%
                  </div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">膳食纖維</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('膳食纖維').amountPer100g, -2)} {obj.nutritionItems.get('膳食纖維').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio"></div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"></span>
                    <span className="nutrition_facts_subitem_name">糖</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('糖質總量').amountPer100g, -2)} {obj.nutritionItems.get('糖質總量').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio"></div>
                </li>
                <li className="nutrition_facts__row">
                  <div className="nutrition_facts__cell nutrition_facts__cell--amount">
                    <span className="nutrition_facts_item_icon"><span className="nutrition_icon_protein"></span></span>
                    <span className="nutrition_facts_item_name">蛋白質</span>
                    <span className="nutrition_facts_item_number">
                      {Math.round10(obj.nutritionItems.get('粗蛋白').amountPer100g, -2)} {obj.nutritionItems.get('粗蛋白').unit}
                    </span>
                  </div>
                  <div className="nutrition_facts__cell nutrition_facts__cell--ratio">
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
