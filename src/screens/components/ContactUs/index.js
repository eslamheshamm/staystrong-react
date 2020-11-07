import React from "react";

export const ContactUs = () => {
	return (
		<div>
			<div className="text-center tracking-wider py-32 mx-auto bg-gray-300 my-24">
				<p className="uppercase text-red-800 text-2xl tracking-wider ">
					Contact us
				</p>
				<h2 className="sm:text-5xl text-3xl font-medium my-4">
					Do you have any queries?
				</h2>
				<p className="text-gray-500">
					Feel free to discuss about how this quadrant can work for you
				</p>
				<div className="flex items-center justify-center mt-16">
					<a
						className="tracking-wider px-12 py-6 font-bold bg-red-800 text-white"
						href="/"
					>
						Get in touch
					</a>
				</div>
			</div>
		</div>
	);
};
