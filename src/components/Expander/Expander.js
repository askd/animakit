import React                 from 'react';
import SyntaxHighlighter     from 'react-syntax-highlighter';

import ExpanderStyles        from './Expander.css';
import CodeStyles            from 'components/Code/Code.css';

import { ExpanderSimple }    from 'components/ExpanderSimple/ExpanderSimple';
import { ExpanderField }     from 'components/ExpanderField/ExpanderField';
import { ExpanderVertical }  from 'components/ExpanderVertical/ExpanderVertical';
import { ExpanderAccordion } from 'components/ExpanderAccordion/ExpanderAccordion';

export class Expander extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };

  state = {
    expanded: {
      simple: false,
      field:  {
        error: false,
        other: false
      },
      vertical:  false,
      accordion: {
        mars:    false,
        earth:   false,
        venus:   false,
        mercury: false
      }
    },
    expandedChanged: null
  };

  listeners = {
    changeExpanded: {
      simple:    this.changeExpanded.bind(this, 'simple'),
      field:     this.changeExpanded.bind(this, 'field'),
      vertical:  this.changeExpanded.bind(this, 'vertical'),
      accordion: this.changeExpanded.bind(this, 'accordion')
    }
  };

  changeExpanded(name, value) {
    const expanded = { ...this.state.expanded };
    const expandedChanged = [];
    if (name === 'field' || name === 'accordion') {
      Object.keys(value).forEach(key => {
        if (expanded[name][key] !== value[key]) expandedChanged.push(`${ name }.${ key }`);
        expanded[name][key] = value[key];
      }, this);
    } else {
      expanded[name] = value;
      expandedChanged.push(name);
    }

    this.setState({ expanded, expandedChanged });

    setTimeout(() => {
      this.setState({ expandedChanged: null });
    }, 500);
  }

  render() {
    const expandedChanged = this.state.expandedChanged || [];

    return (
      <div className = { ExpanderStyles.root }>
        <div className = { ExpanderStyles.intro }>
          <p>Dreaming about easy way to expand and collapse content of your components?
          Feel free to use AnimakitExpander ;)</p>
        </div>
        <ul className = { ExpanderStyles.list }>
          <li
            key = "simple"
            className = { ExpanderStyles.item }
          >
            <div className = { ExpanderStyles.itemContent }>
              <div className = { ExpanderStyles.itemComponent }>
                <ExpanderSimple handleChangeExpanded = { this.listeners.changeExpanded.simple } />
              </div>
              <div className = { ExpanderStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`<header onClick={toggle}>
  Hickory Dickory Dock
</header>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = {
                      expandedChanged.indexOf('simple') !== -1 ? CodeStyles.blockHLA : CodeStyles.blockHL
                    }
                  >
                    { `<AnimakitExpander expanded={${ this.state.expanded.simple }}>` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`  <article>
    ...
  </article>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '</AnimakitExpander>' }
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </li>

          <li
            key = "field"
            className = { ExpanderStyles.item }
          >
            <div className = { ExpanderStyles.itemContent }>
              <div className = { ExpanderStyles.itemComponent }>
                <ExpanderField handleChangeExpanded = { this.listeners.changeExpanded.field } />
              </div>
              <div className = { ExpanderStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`<div className="field">
  <input onKeyUp={validate} />`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = {
                      expandedChanged.indexOf('field.error') !== -1 ? CodeStyles.blockHLA : CodeStyles.blockHL
                    }
                  >
                    { `  <AnimakitExpander expanded={${ this.state.expanded.field.error }}>` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      { '    <div>Sorry, ... </div>' }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '  </AnimakitExpander>' }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`</div>
<div className="field">
  <input type="radio" onChange={ toggle }/> No
  <input type="radio" onChange={ toggle }/> Yes
`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = {
                      expandedChanged.indexOf('field.other') !== -1 ? CodeStyles.blockHLA : CodeStyles.blockHL
                    }
                  >
                    { `  <AnimakitExpander expanded={${ this.state.expanded.field.other }} align="bottom">` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      { '    <textarea ... />' }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '  </AnimakitExpander>' }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      { '</div>' }
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </li>

          <li
            key = "vertical"
            className = { ExpanderStyles.item }
          >
            <div className = { ExpanderStyles.itemContent }>
              <div className = { ExpanderStyles.itemComponent }>
                <ExpanderVertical handleChangeExpanded = { this.listeners.changeExpanded.vertical } />
              </div>
              <div className = { ExpanderStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`<header onClick={toggle}>
  Contact Us
</header>
<main>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = {
                      expandedChanged.indexOf('vertical') !== -1 ? CodeStyles.blockHLA : CodeStyles.blockHL
                    }
                  >
                    {
`  <AnimakitExpander
    expanded={${ this.state.expanded.vertical }}
    horizontal
    align="right"
  >`
                    }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`    <form>
    ...
    </form>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '  </AnimakitExpander>' }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      { '</main>' }
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </li>

          <li
            key = "accordion"
            className = { ExpanderStyles.item }
          >
            <div className = { ExpanderStyles.itemContent }>
              <div className = { ExpanderStyles.itemComponent }>
                <ExpanderAccordion handleChangeExpanded = { this.listeners.changeExpanded.accordion } />
              </div>
              <div className = { ExpanderStyles.itemCode }>
                <div className = { CodeStyles.root }>
                { Object.keys(this.state.expanded.accordion).map(item => {
                  return (
                  <div key = { item }>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`<header onClick={toggle}>
  ${ item.charAt(0).toUpperCase() + item.slice(1) }
</header>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = {
                      expandedChanged.indexOf(`accordion.${ item }`) !== -1 ? CodeStyles.blockHLA : CodeStyles.blockHL
                    }
                  >
                    { `<AnimakitExpander expanded={${ this.state.expanded.accordion[item] }}>` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      { '  <image ... />' }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '</AnimakitExpander>' }
                  </SyntaxHighlighter>
                </div>
                );
                })}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
