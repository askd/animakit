import React            from 'react';
import styles           from './ExpanderField.css';
import AnimakitExpander from 'animakit-expander';

export class ExpanderField extends React.Component {
  static propTypes = {
    handleChangeExpanded: React.PropTypes.func
  };

  state = {
    expanded: {
      error: false,
      other: false
    }
  };

  listeners = {
    onKeyUp:  this.onKeyUp.bind(this),
    onChange: this.onChange.bind(this)
  };

  toggleExpanded(name, value) {
    if (this.state.expanded[name] === value) return;

    const expanded = {
      ...this.state.expanded
    };
    expanded[name] = value;

    this.setState({ expanded });
    this.props.handleChangeExpanded(expanded);
  }

  validate(value) {
    const regexp = new RegExp(
      '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+' +
      '@[a-zA-Z0-9]' +
      '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
      '(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      'i'
    );
    const valid = regexp.test(value);
    this.toggleExpanded('error', !valid);
  }

  onKeyUp(event) {
    const value = event.target.value;
    if (this.validateTimeout) clearTimeout(this.validateTimeout);
    this.validateTimeout = setTimeout(() => { this.validate(value); }, 1000);
  }

  onChange(event) {
    this.toggleExpanded('other', event.target.value === 'Yes');
  }

  render() {
    return (
      <div className = { styles.root }>
        <div className = { styles.field }>
          <input
            name = "email"
            type = "email"
            placeholder = "Your e-mail"
            className = { styles.input }
            onKeyUp = { this.listeners.onKeyUp }
          />
          <AnimakitExpander expanded = { this.state.expanded.error }>
          { this.state.expanded.error &&
            <div className = { styles.error }>
              Sorry, but this does not look like an&nbsp;e-mail address to me
            </div>
          }
          </AnimakitExpander>
        </div>
        <div className = { styles.field }>
          <span className = { styles.text }>
            Anything else?
          </span>
          <label className = { styles.radio }>
            <input
              name = "else"
              type = "radio"
              value = "No"
              checked = { !this.state.expanded.other }
              onChange = { this.listeners.onChange }
            />
            <span>No</span>
          </label>
          <label className = { styles.radio }>
            <input
              name = "else"
              type = "radio"
              value = "Yes"
              checked = { this.state.expanded.other }
              onChange = { this.listeners.onChange }
            />
            <span>Yes</span>
          </label>
          <AnimakitExpander
            expanded = { this.state.expanded.other }
            align = "bottom"
          >
            <textarea
              name = "message"
              placeholder = "Your message"
              className = { styles.inputTextarea }
            />
          </AnimakitExpander>
        </div>
      </div>
    );
  }
}
