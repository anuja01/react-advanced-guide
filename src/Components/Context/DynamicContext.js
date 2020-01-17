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
const ApplyForm = (props) => {
  const theme = React.useContext(ThemeContext)

  return (
    <div style={{ backgroundColor: theme.background, color: theme.textColor }}>
      <form onSubmit={props.submitForm}>
        <label> Name:
        <input type='text' name='name' />
        </label>
        <label style={{ color: 'red' }}>{props.errors.name}</label>
        <br />
        <label> Age:
        <input type='number' name='age' />
        </label>
        <label style={{ color: 'red' }}>{props.errors.age}</label>
        <br />
        <label> Description:
        <textarea type='text' name='description' />
        </label>
        <label style={{ color: 'red' }}>{props.errors.desc}</label>
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
      errors: {}
    }
  }
  render() {
    const submitForm = (e) => {
      let errors = []
      !e.target.name.value && (errors['name'] = 'Please enter user name');
      !e.target.age.value && (errors['age'] = 'Please enter age');
      !e.target.description.value && (errors['desc'] = 'Please enter description');
      this.setState({ errors: errors })
      console.log(errors)
      console.log(errors == [] )
      !errors.length && alert(`Submited Values \n name: ${e.target.name.value} \n age: ${e.target.age.value} \n desc: ${e.target.description.value}`)
      e.preventDefault();
    }
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ApplyForm submitForm={submitForm} errors={this.state.errors} />
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