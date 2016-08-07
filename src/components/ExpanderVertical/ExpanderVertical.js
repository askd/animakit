import AnimakitExpander from 'animakit-expander';

import React            from 'react';

import styles           from './ExpanderVertical.css';

export default class ExpanderVertical extends React.Component {
  static propTypes = {
    handleChangeExpanded: React.PropTypes.func,
  };

  state = {
    expanded: false,
  };

  onClick() {
    this.toggleExpanded();
  }

  listeners = {
    onClick: this.onClick.bind(this),
  };

  toggleExpanded() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
    this.props.handleChangeExpanded(expanded);
  }

  render() {
    return (
      <div className = { styles.root }>
        <header
          className = { styles.header }
          onClick = { this.listeners.onClick }
        >
          <span className = { styles.title }>Contact Us</span>
        </header>

        <main className = { styles.content }>
          <AnimakitExpander
            expanded = { this.state.expanded }
            align = "right"
            horizontal
          >
            <div className = { styles.form }>
              <input
                className   = { styles.input }
                type        = "text"
                placeholder = "Your name"
              />
              <input
                className   = { styles.input }
                type        = "email"
                placeholder = "E-mail"
              />
              <textarea
                className   = { styles.inputTextarea }
                placeholder = "Message"
              />
              <button className = { styles.button }>Send message</button>
            </div>
          </AnimakitExpander>
        </main>
      </div>
    );
  }
}
