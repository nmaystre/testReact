// import React from 'react'
//
// export default function Article(props) {
//   const {article} = props;
//   return (
//     <div>
//       <h3>{article.title}</h3>
//       <section>{article.text}</section>
//     </div>
//   )
// }

import React, {Component} from 'react'

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };

    this.toggleOpen = this.toggleOpen.bind(this);

  }
  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    // const body = isOpen ? <section>{article.text}</section> : null;

    return (
      <div>
         <h3>{article.title}</h3>
         <button onClick = {this.toggleOpen}>
           {isOpen ? 'close' : 'open'}
         </button>
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