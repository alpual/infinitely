import axios from 'axios';
import * as React from 'react';

export interface IProps {
  API_Key: string;
}


class NeoClass extends React.Component<IProps, object> {
	public API_KEY: string

	constructor (props: any) {
	  super(props);
	  this.API_KEY = this.props.API_Key;
	}
	
	public render() {
		const query = "https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true" +
			"&api_key=UmwJQ1PsgKzUDRfptPJH1T9CbveNXUj4rH39sjEI&api_key=" + this.API_KEY;
		let NeoQuery = "";
		// tslint:disable-next-line
		axios.get(query).then(response => console.log(NeoQuery = response.request.response));

		return (
		  <div className="hello">
			<div className="greeting">
			  Hello {this.API_KEY}<br/>
			  Query retured: {NeoQuery.toString()}
			</div>
		  </div>
		);
	}
}

export default NeoClass;

