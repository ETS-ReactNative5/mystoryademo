import React, { Component } from "react";
import { Button, Glyphicon, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class SelectPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.readFile = this.readFile.bind(this);
        this.playAudioFile = this.playAudioFile.bind(this);

        this.state = {
            isLoading: false,
            value: '',
            valueText: '',
            valueBody: '',
            file: '',
            imagePreviewUrl: '',
            key: 1,
            isSelected: ''
        };
    }
    
    renderContent() {
        let { isLoading } = this.state;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="img-responsive pictureShadow" style={{ height: '', width: '600' }} src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Preview here</div>);
        }
        switch (this.state.isSelected) {
            case null:
                return;
            case 'textInput':
                return [
                    <div className='container'>
                        <div className='row' style={{ marginLeft: '-4%', marginTop: '-3%' }}><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <Button onClick={this.handleSelected} value=''><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
                        </div></div>
                    <div className='row' style={{marginLeft: '1%', marginBottom:'1%'}}><div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                            <FormGroup style={{ marginLeft: '-5%', marginTop: '-4%' }} controlId="formBasicText" validationState={this.getValidationStateBody()}>
                                <ControlLabel style={{ marginLeft: '8%' }} >Continue Writing Here:</ControlLabel>
                            <FormControl componentClass="textarea" autofocus='true' rows={15} cols={5} value={this.state.valueBody} placeholder="Enter text" onChange={this.handleChangeBody} />
                            <FormControl.Feedback />
                        </FormGroup>
                    </div></div>
                    </div>
                ];
            case 'imgInput':
                return [
                    <div className='container-fluid'>
                        <div className="imgPreview2 img-responsive" style={{ marginLeft: '1%'}}>{$imagePreview}</div>
                        <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                            <div className='previewComponent' style={{ marginLeft: '10%'}}>
                                <form onSubmit={(e) => this._handleSubmit(e)}>
                                    <input className="fileInput"
                                        type="file"
                                        onChange={(e) => this._handleImageChange(e)} />
                                    <button className="submitButton"
                                        type="submit"
                                        onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                                </form>
                            </div>
                        </div>
                            <div className='row' style={{ marginLeft: '15%' }}><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <Button onClick={this.handleSelected} value=''><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
                            </div></div>
                        </div>
                    </div>
                ];
            case 'audioInput':
                return [
                    <div className='container'><div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <label for="audioFileChooser">Upload an audio file: </label>
                        <input  id="audioFileChooser" type="file" onchange={this.readFile(this.files)}/>
                        </div>
                    </div>
                        <div className='row' style={{ marginLeft: '15%' }}><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <Button onClick={this.handleSelected} value=''><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
                        </div></div>
                    </div>
                ];
            case 'videoInput':
                return [
                    <div className='container'><div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                            <ControlLabel>New Title:</ControlLabel>
                            <FormControl type="text" value={this.state.valueText} placeholder="Enter text" onChange={this.handleChangeText} />
                            <FormControl.Feedback />
                        </FormGroup>
                        </div>
                    </div>
                        <div className='row' style={{ marginLeft: '15%'}}><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <Button onClick={this.handleSelected} value=''><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
                        </div></div>
                    </div>
                ];
            default:
                return [
                    <div className='container'><div className='row' style={{ marginLeft: '17%', marginTop: '5%'}}>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 containerTextHalf' style={{ width: '480px' }}>
                            <img alt="" className="crossImg img-responsive" src={require("../img/cross2.png")} />
                            <div class="top-left-div glyphicon glyphicon-text-size glyphCreate2"/> <Button className='top-left selectInput2' onClick={this.handleSelected} value='textInput'/>
                            <div class="bottom-left-div2 glyphicon glyphicon-volume-up glyphCreate2"/> <Button className='bottom-left selectInput2' onClick={this.handleSelected} value='audioInput'/>
                            <div class="top-right-div glyphicon glyphicon-picture glyphCreate2"/> <Button className='top-right selectInput2' onClick={this.handleSelected} value='imgInput'/>
                            <div class="bottom-right-div2 glyphicon glyphicon-camera glyphCreate2"/> <Button className='bottom-right selectInput2' onClick={this.handleSelected} value='videoInput'/>
                        </div></div></div>
                ];
        }
    }

    handleSelect(key) {
        /* alert(`selected ${key}`); */
        this.setState({ key });
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 3) return 'success';
        else if (length > 1) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    getValidationStateBody() {
        const length = this.state.valueBody.length;
        if (length > 3) return 'success';
        else if (length > 1) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleChangeText(e) {
        this.setState({ valueText: e.target.value });
    }
    handleChangeBody(e) {
        this.setState({ valueBody: e.target.value });
    }
    
    handleSelected(e) {
        this.setState({ isSelected: e.target.value });
        /* this.setState({ isLoading: true });

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({ isLoading: false });
        }, 2000); */
        console.log(this.state.isSelected)
    }
    
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    playAudioFile(file) {
		var context = new window.AudioContext();
			context.decodeAudioData(file, function(buffer) {
				var source = context.createBufferSource();
					source.buffer = buffer;
					source.loop = false;
					source.connect(context.destination);
					source.start(0); 
			});
    }
    readFile(files) {
		var fileReader = new FileReader();
			fileReader.readAsArrayBuffer(files[0]);
			fileReader.onload = function(e) {
				this.playAudioFile(e.target.result);
				console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
			}
	}
    
    render() {
        return (
            <div className='container'><div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>{this.renderContent()}</div></div></div>
        );
    }
}

export default SelectPage;
