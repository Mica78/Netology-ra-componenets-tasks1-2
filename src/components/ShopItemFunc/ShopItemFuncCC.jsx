import { Component } from 'react'

export default class ShopItemFuncCC extends Component {
  constructor(props) {
    super(props)
    this.brand = props.info.brand
    this.title = props.info.title
    this.description = props.info.description
    this.descriptionFull = props.info.descriptionFull
    this.currency = props.info.currency
    this.price = props.info.price
  }
  render() {
    return (
      <div className="main-content cc">
      <h2>{this.brand}</h2>
      <h1>{this.title}</h1>
      <h3>{this.description}</h3>
      <div className="description">
        {this.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{this.currency}{this.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }
}
