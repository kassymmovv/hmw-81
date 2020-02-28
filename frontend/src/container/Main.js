import React, {Component} from 'react';
import {getUrl, postUrl} from "../store/actions";
import {connect} from 'react-redux';

class Main extends Component {
    state = {
      originalUrl:''
    };
    inputHandler = event => {
      this.setState({originalUrl:event.target.value})
    };
    render() {
        console.log(this.props.url);
        return (
            <div>
                <input type="text" onChange={this.inputHandler}/>
                <button onClick={() =>{this.props.postUrl(this.state)}}>get shorten url</button>
                {this.props.url && <a href={'http://localhost:8000/short/' + this.props.url.shortUrl}>{this.props.url.shortUrl}</a>}
                <p>{this.props.error}</p>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    url:state.url,
    error:state.error
});

const mapDispatchToProps = dispatch => ({
   postUrl:url => dispatch(postUrl(url)),
});
export default connect(mapStateToProps,mapDispatchToProps) (Main);