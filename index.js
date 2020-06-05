class App extends React.Component {
  render() {
    return (
      <React.Fragment>
		<Hello 
			to='Jermaine' 
			from='Jackie'
			img="friends.jpeg"
			alt="Friends Pic"
		/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
