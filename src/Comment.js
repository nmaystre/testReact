import React, {Component} from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);

  }
  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    // const body = isOpen ? <section>{article.text}</section> : null;

    return (
      <div>
        <h4>{article.comments.user}</h4>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'hide' : 'show'}
        </button>
        <p>{article.comments.text}</p>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;
    return <section>{article.text}</section>

  }

  toggleOpen(ev) {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}