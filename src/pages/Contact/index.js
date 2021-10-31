import React from 'react'
import './Contact.scss'
import axios from "axios";

const Card = props => (
    <div className="card">
        {props.children}
    </div>
  );

  const TextInput = props => (
    <div
      className="text-input">
      <label
        className={(props.focus || props.value !== '') ? 'label-focus' : ''}
        htmlFor={props.name}>{props.label}</label>
      <input
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        type={props.InputType}
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
        type={props.InputType}
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
    constructor(props) {
      super(props);    
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
        submitting: false,
        status: null
      }
    }
    
    handleFocus(e) {
      const name = e.target.name;
      const state = Object.assign({}, this.state[name]);
      state.focus = true;
      this.setState({ [name]: state }); 
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

    handleServerResponse(ok,msg,form){
      this.setState({ submitting: false ,status:(ok, msg)});
      // if(ok){
      //   form.reset();
      // }
    }

    handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      this.setState({ submitting: true})
      axios({
        method: "post",
        url: "https://formspree.io/f/mrgoazqv",
        data: new FormData(form)
      })
        .then(r => {
          this.handleServerResponse(true, "Thanks!", form);          
        })
        .catch(r => {
          this.handleServerResponse(false, r.response.data.error, form);
        });
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
            {!this.state.status &&(
              <>
            <h1>Stuur een bericht!</h1>
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <TextInput
                {...naam}
                InputType='text'
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />              
              <TextInput
                {...email}
                InputType='email'
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <TextArea
                {...bericht}
                InputType='text'
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)} />
              <Button type='submit'>Verzenden</Button>              
            </form>
            </>
            )}
            {this.state.status && (
              <p>
                Bedankt!, Dit is voornamelijk een test form om te kijken of ik het kon maken.
                Maar ik zal waarschijnlijk uw bericht niet zien want ik moet betalen voor de inbox functionaliteit.             
                Stuur een mail naar <a HREF="mailto:timoosterlee1@live.nl">timoosterlee1@live.nl</a>.
              </p>
              )}
          </Card>
            </div>
         </div>           
         </section>
        </>
      );
    }
  }

export default Contact
