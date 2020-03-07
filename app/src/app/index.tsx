import * as React from "react";
// Adding ignore for this import - it's not unresolved.
// eslint-disable-next-line import/no-unresolved
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard";

// Disabling eslint for the next line - throws a @types/react error, which is incorrect.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const App: any = hot(() => (
	<React.Fragment>
		<Router>
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</Router>
	</React.Fragment>
));
