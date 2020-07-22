import React, { Component } from 'react';

class APICall extends Component {

      constructor() {
        super();
        this.state= {
          bbdata: [],
        };
      }

      componentDidMount() {
        fetch('https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0502000))?apiKey=qBuX6XunHKJ9uqKLf8R5U9CS&format=json')
        .then(results => {
          return results.json();
        }).then(data => {
            let bbdata = data.products.map((laptop, i) => {
              let name = laptop.name.substring(0, 90) + '...';
                return(
                    <div key={i} className="lapContainer">
                      <div>
                      <a href={laptop.url}><img src={laptop.image} alt={laptop.name} className="lapImgs" /></a>
                      </div>
                      <p>{name}</p>
                      <span className="span1 strikethrough">${laptop.regularPrice}</span><span className="span2">${laptop.salePrice}</span>
                    </div>
                )
            })
            this.setState({bbdata: bbdata});
        })
    }



        render() {
            return (
              <div>{this.state.bbdata}</div>
              
            );
          }
        }

export default APICall;