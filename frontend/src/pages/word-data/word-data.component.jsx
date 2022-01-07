import React from 'react';
import Carousel from '../../components/word-carousel/word-carousel.component';
import Synonyms from '../../components/synonyms/synonyms.component'
import Pronunciation from '../../components/pronunciation/pronunciation.component';
import { ReactComponent as Search } from '../../assets/search.svg';
import './word-data.styles.css';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }
  }

  getMeaning = (word) => {
    this.setState({data: {}})
    fetch(`https://dictionary-backend-node.herokuapp.com/api/${word}`)
    .then((result) => result.json())
    .then((result) => this.setState(
      {data: result}
    ));
  }

  componentDidMount() {
    this.getMeaning(this.props.match.params.word);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params !== prevProps.match.params) {
      this.getMeaning(this.props.match.params.word);
    }
  }

  handleClick = (word) => {
    document.getElementsByTagName("input")[0].focus();
    document.getElementsByTagName("input")[0].value=word;
  }

  render() {
    if(this.state.data.error){
        const {word} = this.props.match.params;
        return(
          <div className='error'>
            <p style={{ textAlign: 'center' }}>No Results Found for <span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => this.handleClick(word)}>"{word}"</span></p>
            <p>Tip: Try using the root form of words, like "run", instead of "ran"</p>
          </div>
        )
    }
    if(this.state.data.senses) {
      const { senses, synonyms, pronunciation } = this.state.data;
      return(
        <div>
          <br />
          <h1 className='word'>{this.state.data.word} {pronunciation?<Pronunciation url={pronunciation} />:''} </h1>
          <br />
          <Carousel senses={senses} />
          <br /><br /><br />
          {synonyms.length>0?<Synonyms synonyms={synonyms} />:''}
          
        </div>
     )
    }
    return(<div><br /><br/><Search /><p className='loading'>Searching...</p></div>)
  }
}

export default Result;