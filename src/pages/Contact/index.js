import React from 'react'
import './Contact.scss'

// function Contact(){
//     return (
//         <section id='contact' className='contact-section'> 
//         <div className="contact-container">
//             <div className='title'>
//                 <p>Contact</p> 
//             </div>           
//             <div className='divider'></div>
//             <a className='btn btn-contact' href='mailto:timoosterlee1@live.nl'> Neem contact op</a>
            
//         </div>           
//         </section>
//     )
// }

const Card = props => (
    <div className="card">
        {props.children}
    </div>
  );
  
  const Form = props => (
    <form className="form" 
          OnSubmit={props.OnSubmit}
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
        status: "",
      }
    }
    
    handleFocus(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = true;
      this.setState({ [name]: state },()=>{console.log(state)});
    }
    
    handleBlur(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = false;
      this.setState({ [name]: state },()=>{console.log(state)});
    }
    
    handleChange(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.value = e.target.value;
      this.setState({ [name]: state },()=>{console.log(state)});
    }

    handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
    
    render() {
      const {naam, email, bericht, status} = this.state;
      return (
          <>        
        <section id='contact' className='contact-section'> 
         <div className="contact-container">
             <div className='title'>
                 <p>Contact</p> 
             </div>           
             <div className='divider'></div>
             {/* <a className='btn btn-contact' href='mailto:timoosterlee1@live.nl'> Neem contact op</a> */}
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
              {status === "SUCCESS" ? <p>Dank u!</p> : <Button onSubmit={this.handleSubmit.bind(this)}>Verzenden</Button>}
              {status === "ERROR" && <p>Ooops! Er is iets mis gegaan.</p>}              
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
