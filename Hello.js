class Hello extends React.Component {
    
  render() {
      console.log(this.props)
    return (
      <React.Fragment>
        <h1>Hi {this.props.to} from {this.props.from}</h1>
        <img src={this.props.img} alt={this.props.alt}/>
      </React.Fragment>
    );
  }
}
