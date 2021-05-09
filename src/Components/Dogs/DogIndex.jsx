import React from 'react'

class FetchImage extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        img: '',
        displayImage: false
    }
}

componentDidMount() {
    console.log("Component Mounted");
    console.log(this.state.img)
    fetch("https://dog.ceo/dog-api/")
    .then(res => res.json())
    .then(data => {
        this.setState({
            img: data.message
        })
    })
    .catch(console.log())
    console.log(this.state.img);
}

handleClick() {
    const {displayImage} = this.state;
    this.setState({displayImage : !displayImage});
  }
    render() {
    return(
        <div>
            <img src={this.state.message} alt="pictures of dogs "/>
            <button onClick={this.handleClick}></button>
            <button onClick={() => window.location.reload(false)}>Click to see more!</button>
        </div>
    )
}
}

export default FetchImage