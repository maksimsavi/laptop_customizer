import React from 'react';


class Total extends React.Component {
     render(){
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        const USCurrencyFormat = this.props.USCurrencyFormat;
        return(
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
            </div>
        </div>
         )
     }
    }
export default Total