import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

class Card extends React.Component {

  render() {

    let { card, counter, getAnswer } = this.props
    let answer = card[counter].answer.map((item,index) => {
      return (
        <option key={index}>{item}</option>
      )
    })
    return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Choose Your Best Answer</label>
        <select onChange={getAnswer} class="form-control" id="exampleFormControlSelect1">
          {answer}
        </select>
      </div>
    </form>
    );
  }
}

export default Card;