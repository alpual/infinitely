import axios from 'axios';
import * as React from 'react';

export interface IProps {
  API_Key: string;
}

export interface INeoStatus {
	neo_json: string;
	status: number;
};


class NeoClass extends React.Component<IProps, INeoStatus > {
	public API_KEY: string

	constructor (props: any) {
	  super(props);
	  this.API_KEY = this.props.API_Key;
	  this.state= {
	  	neo_json: "no-json-yet",
	  	status: 0
	  }
	}
	
	public render() {
		const query = "https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=" + this.API_KEY;

		// tslint:disable-next-line
		axios.get(query).then(
			response => this.setState( { 
				neo_json: response.request.response, 
				status: response.status	
			})
		);

		return (
		  <div className="hello">
			<div className="greeting">
			  Hello {this.API_KEY}<br/>
			  Query Status: {this.state.status}<br/>
			  Query retured: {this.state.neo_json}
			</div>
		  </div>
		);
	}
}

export default NeoClass;

