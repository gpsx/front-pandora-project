var ChatMessage = React.createClass({
    render() {
       return(
          <p style={{marginBottom: 0}}>{this.props.message}<br/>
          <small>{this.props.timestamp}</small></p>
       );
    }
 });
 
 var ChatMessageHistory = React.createClass({
    render() {      
       var createMessage = function(message, index) {
          var liStyles = {
             backgroundColor: ( index % 2 == 1 ) ? '#ddd' : '#efefef',
             padding: '1rem',
             borderBottom: '1px solid #ddd'
          };
          
          return <li style={liStyles}><ChatMessage message={message.message} timestamp={message.timestamp} /></li>
       };
          
       var ulStyles = {
          listStyle: 'none',
          margin: 0,
          padding: 0
       };
       
       return <ul style={ulStyles}>{this.props.messages.map(createMessage)}</ul>;
    }
 });   
    
 var MESSAGES = [
    { message: 'Hi Josh', timestamp: 'Tuesday' },
    { message: 'How are you?', timestamp: 'Wednesday' }                                    
 ];
                                            
 var ChatWindow = React.createClass({
    getInitialState() {
       return {
          messages: MESSAGES,
          inputText: ''
       };
    },
    handleSubmit(e) {
       e.preventDefault();
       var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Thursday' }]);
       var nextInputText = '';
       this.setState({ messages: nextMessages, inputText: nextInputText });
    },
    onChange(e) {
       this.setState({inputText: e.target.value});
    },
    render() {
       var windowStyles = {
          maxWidth: '40em',
          margin: '1rem auto'
       };
       
       var formStyles = {
          display: 'flex',
       };
       
       var inputStyles = {
          flex: '1 auto'
       };
       
       var btnStyles = {
          backgroundColor: '#00d8ff',
          border: 'none',
          color: '#336699',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 'bold',
          fontSize: '0.8em'
       };
       
       return (
          <div style={windowStyles}>
             <ChatMessageHistory messages={this.state.messages} />
             <form style={formStyles} onSubmit={this.handleSubmit}>
                <input style={inputStyles} type="text" onChange={this.onChange} value={this.state.inputText} />
                <button style={btnStyles}>Send</button>
             </form>
          </div>
       );
    }
 });
 
 ReactDOM.render(
    <ChatWindow />,
    document.getElementById('example')
 );
