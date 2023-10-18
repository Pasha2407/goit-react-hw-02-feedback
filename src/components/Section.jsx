import React, { Component } from 'react';
import css from './section.module.css';

class Section extends Component {
  render() {
    const { title } = this.props;
    const { children } = this.props;
    return (
      <div className={css.main}>
        {title}
        {children}
      </div>
    );
  }
}

export default Section;
