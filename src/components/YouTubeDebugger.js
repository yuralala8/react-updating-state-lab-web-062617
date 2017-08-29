import React from 'react'


class YouTubeDebugger extends React.Component {
	constructor(){
		super();

		this.state = {
			
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {
					resolution: '1080p'
				}
			}
		}
	}

	updateBitrate = () => {
		this.setState({
			settings: {
				...this.state.settings,
			bitrate: 12
			}
		})
	}

	updateResolution = () => {
		this.setState({
			settings:{
				...this.state.settings,
				video: {
					...this.state.settings.video,
					resolution: '720p'
				}
			}

		})
	}

	render() {
		return(
		<div>
		<p>Bitrate:{this.state.settings.bitrate}</p>
		<p>Resolution:{this.state.settings.video.resolution}</p>
		<button className="bitrate" onClick={this.updateBitrate}>Update bitrate</button>
		<button className="resolution" onClick={this.updateResolution}>Update Resolution</button>
		</div>
		)
	}

}
	
export default YouTubeDebugger