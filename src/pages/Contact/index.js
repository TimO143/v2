import React from 'react'
import './Contact.scss'

const Card = props => (
    <div className="card">
        {props.children}
    </div>
  );
  
  const Form = props => (
    <form className="form" 
          onSubmit={props.OnSubmit}
          action="https://formspree.io/f/mrgoazqv" 
          method="POST">
        {props.children}
    </form>
  );
  
  const TextInput = props => (
    <div
      className="text-input">
      <label
        className={(props.focus || props.value !== '') ? 'label-focus' : ''}
        htmlFor={props.name}>{props.label}</label>
      <input
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur} 
        required/>
    </div>
  );
  
  const TextArea = props => (
    <div
      className="text-area">
      <label
        className={(props.focus || props.value !== '') ? 'label-focus' : ''}
        htmlFor={props.name}>{props.label}</label>
      <textarea
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur} 
        required/>
    </div>
  );
  
  const Button = props => (
    <button className="btn button" type="submit">
        {props.children}
    </button>
  );
  
  /** Root Component */
  class Contact extends React.Component {
    constructor() {
      super();    
      this.state = {
        naam: {
          name: 'naam',
          label: 'Naam',
          value: '',
          focus: false,
        },
        email: {
          name: 'email',
          label: 'Email',
          value: '',
          focus: false,
        },
        bericht: {
          name: 'bericht',
          label: 'Bericht',
          value: '',
          focus: false,
        },
        // isSubmitting en isError als je axios wilt gaan gebruiken
      }
    }
    
    handleFocus(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = true;
      this.setState({ [name]: state });  // ,()=>{console.log(state)}
    }
    
    handleBlur(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = false;
      this.setState({ [name]: state });
    }
    
    handleChange(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.value = e.target.value;
      this.setState({ [name]: state });
    }

    handleSubmit(e) {
      e.preventDefault();
    }
    
    render() {
      const {naam, email, bericht} = this.state;
      return (
          <>        
        <section id='contact' className='contact-section'> 
         <div className="contact-container">
             <div className='title'>
                 <p>Contact</p> 
             </div>           
             <div className='divider'></div>
            <div className="container">
          <Card>
            <h1>Stuur een bericht!</h1>
            <Form>
              <TextInput
                {...naam}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />              
              <TextInput
                {...email}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <TextArea
                {...bericht}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <Button onSubmit={this.handleSubmit.bind(this)}>Verzenden</Button>
            </Form>
          </Card>
            </div>
         </div>           
         </section>
        </>
      );
    }
  }

export default Contact
