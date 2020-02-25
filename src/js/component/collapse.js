import React from "react";

export function Collapse() {
	return (
		<>
			<p>
				Details and Price
				<a
					className="bg-light"
					data-toggle="collapse"
					href="#collapseExample"
					// role="button"
					aria-expanded="false"
					aria-controls="collapseExample">
					+
				</a>
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample">
					Button with data-target
				</button>
			</p>
			<div className="collapse" id="collapseExample">
				<div className="card card-body">
					Anim pariatur cliche reprehenderit, enim eiusmod high life
					accusamus terry richardson ad squid. Nihil anim keffiyeh
					helvetica, craft beer labore wes anderson cred nesciunt
					sapiente ea proident.
				</div>
			</div>
		</>
	);
}
