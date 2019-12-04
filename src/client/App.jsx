import React from 'react';
import { hot } from 'react-hot-loader';
import classnames from 'classnames';
import styles from './style.scss';
const cx = classnames.bind(styles)

import Gamepage from './components/gamepage/gamepage';
import Result from './components/result/result';

// ========================================================================
// Component starts here
// ========================================================================
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked:false,
      isHidden: false,
      hideGamePage: false,
      hideResultBtn: true,
      buttonCounter: 0,
      
      card: [
          {
            question: 'What is your favourite natural element?',
            answer: ['Fire', 'Water', 'Wood', 'Air'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'I feel at peace with myself most of the time.',
            answer: ['Very Accurate', 'Fairly Accurate', 'Somewhat Inaccurate', 'Very Inaccurate'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'I find it easy to approach others.',
            answer: ['Oh Yes!', 'Depends on my mood', 'Challenging', 'Leave me alone'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'I frequently do things without a specific schedule or plan.',
            answer: ['Yolo', 'Most of the time', 'Sometimes', 'No plan, no future'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'The more I can be of help to others, the happier I am.',
            answer: ['I love it!', 'Humans cannot survive alone', 'Leave me, hooman', 'Me, myself and I'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'I spent loads of time observing before I act.',
            answer: ['Still observing', 'Yeah, most of the time', 'Really? Is there a need!?', 'Where got time man?!'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'I am always looking for new things to experience.',
            answer: ['Fly me to the moon!', 'Within my means', 'Prefer not to unless being force', 'Home alone 5'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'How would you rather spend your free time?',
            answer: ['Sleep for eternity', 'Spend time with loved ones', 'Be alone and do my thang', 'Exploring new options'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'I require lots of time alone to recharge.',
            answer: ['Recharging in progress..', '30mins a day keeps me recharged all day', 'Weekends are my recharge window', 'Recharge!? I am the Energizer'],
            message: "",
            selectedAnswer: "",
          },
          {
            question: 'You rarely worry if you made a good impression on someone you met.',
            answer: ['Hit me baby one time!', 'Omg! Is my hair on point?!', 'It depends..', 'Nah, It is not as important as my game!'],
            message: "",
            selectedAnswer: "",
          },
        ],
      score: Array(10).fill(1),
      totalScore: 0,
      counter: 0,
      userAnswer: "",
      first: false,
      last: false
    };

  }

  showAns(){
    let totalScore = this.state.score.reduce((a,c) => a+c)
    this.setState({isHidden: !this.state.isHidden, totalScore: totalScore});
  }

  prevQns(){
    this.setState({clicked: false});
    if (this.state.counter > 0){
        this.setState({counter: this.state.counter - 1})
    };
    if (this.state.userAnswer !== ""){
        this.setState({userAnswer: ""});
    };
  };

  nextQns(){
    this.setState({clicked: false});
    if (this.state.counter < (this.state.card.length - 1) ){
        this.setState({counter: this.state.counter + 1})
    };
    if (this.state.userAnswer !== ""){
        this.setState({userAnswer: ""});
    };

    if(this.state.counter >= 8){
      this.setState({ hideResultBtn: false })
    } 
  };

  getAnswer(e) {
    console.log(e.target.value)
    let value = e.target.value;
    this.state.card[this.state.counter].selectedAnswer = value
    this.setState({card: this.state.card})

    this.checkPoints(value)
    console.log(this.state)
    // what is the current question
    // get the answer that the user selected
    // save answer in current question . selectedAnswer
  }

  hideAnimal() {
    window.location.reload()
  }
  checkPoints(answer) {
    let {card, counter} = this.state;
    let questionScore = card[counter].answer.indexOf(answer)+1
    let score = [...this.state.score]
    score[counter] = questionScore
    this.setState({score: score})
  }

// ========================================================================
// Render Page starts here
// ========================================================================
  render() {

    // calling cx sets all the styles on the element in the display variable
    const showBtn = cx(
      styles.results, // styles that never change
      { // dynamic styles
        [styles.hide]: this.state.hideResultBtn // make the key the style name, and the value the dynamic boolean
      }
    )

    const hideRefresh = cx(
      styles.refresh,
      {
        [styles.hide]: this.state.isHidden
      } 
    )

    const hideMain = cx(
      styles.main,
      {
        [styles.hide]: this.state.isHidden
      } 
    )

    const hideOverview = cx(
      styles.overview,
      {
        [styles.hide]: this.state.isHidden
      } 
    )
    
    const hideContent = cx(
      styles.overview,
      {
        [styles.hide]: this.state.isHidden
      } 
    )

    const display = cx(
      styles.myclass, 
      { 
        [styles.clicked]: this.state.clicked 
      }
    )

    const rightBtn = cx(
      styles.button, 
      { 
        [styles.disappear]: this.state.last 
      }
    )

    const leftBtn = cx(
      styles.button, 
      { 
        [styles.disappear]: this.state.first 
      }
    )

    
    let card;
    let title;
    if (this.state.clicked){
        card = this.state.card[this.state.counter].answer
        title = "Answer " + (this.state.counter + 1) + ":"
    } else {
        card = this.state.card[this.state.counter].question
        title = "Question " + (this.state.counter + 1) + ":"
    }

    if (this.state.counter === 0 && this.state.first == false ){
        this.setState({first: true})
    } else if (this.state.counter > 0 && this.state.first == true ){
        this.setState({first: false})
    }

    if (this.state.counter === (this.state.card.length - 1) && this.state.last == false ){
        this.setState({last: true})
    } else if (this.state.counter < (this.state.card.length - 1) && this.state.last == true ){
        this.setState({last: false})
    }

    return (
      <div>
        <div className={hideOverview}>
          <button type="button" className={styles.stats} data-toggle="modal" data-target="#exampleModalCenter">Overview</button>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Current Progession</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body text-left">
                    <p><b>Total Questions:</b></p>
                    <p>{this.state.card.length}</p>
                    <p><b>Your Answers:</b></p>
                    <p>{this.state.score}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={hideRefresh}>
            <button className={styles.restart} onClick={()=>{window.location.reload()}}><i className='bx bx-repost bx-md align-bottom' ></i></button>
        </div>
        <div className={hideMain}>
            <button className={leftBtn} onClick={()=>{this.prevQns()}}><i className='bx bx-chevron-left bx-lg'></i></button>
            <div className={display}>
              {/* added the results toggle page */}
              {this.state.isHidden === true ? <Result hideanimal={() => this.hideAnimal()} getAnswer={(e)=>{this.getAnswer(e)}} card={this.state.card} counter={this.state.counter} totalScore={this.state.totalScore} />
                : "" }
              <div className={hideContent}>
                <h4>{title}</h4>
                <h3>{card}</h3>
                <p>{this.state.card[this.state.counter].message}</p>
                {/* added the gamepage toggle page */}
                <Gamepage getAnswer={(e)=>{this.getAnswer(e)}} card={this.state.card} counter={this.state.counter}/>
                <br/>
                <button className={showBtn} onClick={()=>{this.showAns()}}>Show Result <i className='bx align-text-bottom' ></i></button>
              </div>
            </div>
            <button className={rightBtn} onClick={()=>{this.nextQns()}}><i className='bx bx-chevron-right bx-lg'></i></button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);