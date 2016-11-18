import React from 'react'

export default class SearchSorting extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
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
    )
  }
}
