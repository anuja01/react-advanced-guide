import React from 'react'

/**
 * START Context
 */
const themes = {
  light: {
    textColor: 'black',
    background: 'yellow',
  },
  dark: {
    textColor: 'yellow',
    background: 'black'
  }
}

const ThemeContext = React.createContext(themes.dark)
/**
 * END Context
 */

/**
* START Toggle button
*/
const ThemeToggleButton = (props) => {
  const theme = React.useContext(ThemeContext)
  return (
    <button style={{ backgroundColor: theme.background, color: theme.textColor }} onClick={() => props.changeTheme()}>Change Theme</button>
  )
}
/**
 * END Toggle button
 */

/**
 * START Content of the page effected by the context theme
 */
const ApplyForm = () => {
  const theme = React.useContext(ThemeContext)
  const submitForm = (e) => {
    alert(`Submited Values \n name: ${e.target.name.value} \n age: ${e.target.age.value} \n desc: ${e.target.description.value}`)
    e.preventDefault();
  }
  return (
    <div style={{ backgroundColor: theme.background, color: theme.textColor }}>
      <form onSubmit={submitForm}>
        <label> Name:
        <input type='text' name='name' />
        </label>
        <br />
        <label> Age:
        <input type='number' name='age' />
        </label>
        <br />
        <label> Description:
        <textarea type='text' name='description' />
        </label>
        <br />
        <input style={{ backgroundColor: theme.background, color: theme.textColor }} type='submit' name='submit' value='Submit' />
      </form>
    </div>
  )
}
/**
 * END Content of the theme
 */

/**
 * START Main App
 */
class DynamicContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ApplyForm />
        <ThemeToggleButton
          changeTheme={() =>
            this.setState((state) =>
              ({ theme: state.theme === themes.dark ? themes.light : themes.dark })
            )} />
      </ThemeContext.Provider>
    )
  }
}
DynamicContext.contextType = ThemeContext;
/**
* END Main App
*/

export default DynamicContext;