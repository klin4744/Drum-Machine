class Panel extends React.Component{
  state={
    keys: [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}],
    currentName: ""
  };
processClick = (e) => {
    const current = e.target.firstElementChild.id;
    document.getElementById(current).play();
    this.setState({
    currentName: current,
    });
    e.preventDefault();
  };
handleKeyPress = e => {
  const key = e.keyCode;
  this.state.keys.map( (keyP,index) => {
    if(keyP.keyCode === key){
      document.getElementById(index).click();
    }
  })
}
componentDidMount(){
  document.body.addEventListener('keyup', this.handleKeyPress);
  document.body.addEventListener('keydown', this.handleKeyPress);
}

  render(){
    return(
      <div id="drum-machine" style={{"border" : "solid 2px grey"}} className="container bg-light m-5 p-2 mx-auto">
      <h1 className="display-4 text-center d-block mb-3">
        Sound Board
      </h1>
        <div className="row">
          <div className="col-md-6">
      <div className="row m-2">
        {this.state.keys.map( (button,index) => {
         return(
         <div className="col-md-4 d-inline p-1">
            <Button processClick={this.processClick} namel={this.state.keys[index].keyTrigger} audio={this.state.keys[index].url} audioId={this.state.keys[index].keyTrigger} id={index} />
           </div>
         )
        })}
           
          </div>
      </div>
          <div className="col-md-6">
            <TextDisplay currentName={this.state.currentName} />
          </div>
        </div>
      </div>
    )
  }
}
class Button extends Panel{
  render(){
    return(
      <div>
        <button id={this.props.id} onClick={this.props.processClick} className="btn-block rounded btn btn-primary drum-pad"><audio className="clip" id={this.props.audioId} src={this.props.audio} type="audio/mpeg"></audio>{this.props.namel}</button>
      </div>
    )
  }
}

class TextDisplay extends Panel{
  render(){
    return(
      <div className="text-center">
        <p class="lead">Key Name</p>
         <p id="display" className="text-center"> {this.props.currentName} </p>
      </div>
    )
  }
}

ReactDOM.render(<Panel />, document.querySelector("#body"))