import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { App } from "./app";

ReactDOM.render(
	<Provider>
		<React.Fragment>
			<App />
		</React.Fragment>
	</Provider>,
	document.getElementById("chillideck-app")
);
