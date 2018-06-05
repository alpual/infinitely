import axios from 'axios';
import * as React from 'react';

/*export interface IProps {
}*/

export interface INeoStatus {
	neo_json: string;
	status: number;
};


class NeoClass extends React.Component<{}, INeoStatus > {

	constructor (props: any) {
	  super(props);
	  this.state= {
	  	neo_json: "no-json-yet",
	  	status: 0
	  }
	}
	
	public render() {
		const query = "http://infinitely.space/neo-data/today.json";

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
			  Query Status: {this.state.status}<br/>
			  Query retured: {this.state.neo_json}
			</div>
		  </div>
		);
	}
}

export default NeoClass;

