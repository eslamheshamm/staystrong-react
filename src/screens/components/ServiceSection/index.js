import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const TabPanel = ({ children, value, index, ...other }) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};
const useStyles = makeStyles((theme) => ({
	taps: {
		backgroundColor: "blue",
	},
	button: {
		background: "white",
		display: "block",
		color: "#c53030",
		fontSize: "1rem",
		fontWeight: "bold",
		// borderBottom: "5px solid red",
	},
}));

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export const ServiceSection = () => {
	const [value, setValue] = React.useState(0);
	const classes = useStyles();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const Item = ({ title, text }) => {
		return (
			<div className="my-4">
				<h2 className="text-4xl font-semibold my-3">{title}</h2>
				<p className="text-gray-500 ">{text}</p>
			</div>
		);
	};
	const Button = ({ text, href }) => {
		return (
			<button className="font-semibold bg-red-800 text-white py-16 px-15 ">
				<a href={href}>{text}</a>
			</button>
		);
	};
	return (
		<section>
			<div className="text-center my-20">
				<span className="text-red-700 tracking-wider text-2xl">Sevices</span>
				<h2 className="text-4xl font-semibold my-3">
					A dour quadrant secret formula
				</h2>
				<p className="text-gray-500">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
					suscipit fugiat in nihil. Reprehenderit, distinctio in dolore cum esse
					itaque!
				</p>
			</div>
			<div className="w-11/12 sm:w-10/12 m-auto">
				<div>
					<AppBar position="static">
						<Tabs
							value={value}
							onChange={handleChange}
							className="text-red-700 bg-white font-bold"
							variant="fullWidth"
							aria-label="full width tabs example"
						>
							<Tab
								label="Item One"
								{...a11yProps(0)}
								className={classes.button}
							/>
							<Tab label="Item Two" {...a11yProps(1)} />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
						<div className="grid grid-cols-3 gap-12 my-24">
							<div className="col-start-1 col-end-2">
								<ul>
									<li className="flex flex-col ">
										<Item
											title="Indiviual"
											text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur id inventore blanditiis iste nemo optio soluta perferendis culpa ipsum laborum ullam veniam accusantium ipsa, magnam, odio cupiditate nisi expedita!"
										/>
										<Item
											title="Leader ship"
											text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur id inventore blanditiis iste nemo optio soluta perferendis culpa ipsum laborum ullam veniam accusantium ipsa, magnam, odio cupiditate nisi expedita!"
										/>
										<Item
											title="Team"
											text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur id inventore blanditiis iste nemo optio soluta perferendis culpa ipsum laborum ullam veniam accusantium ipsa, magnam, odio cupiditate nisi expedita!"
										/>
										<Item
											title="System"
											text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur id inventore blanditiis iste nemo optio soluta perferendis culpa ipsum laborum ullam veniam accusantium ipsa, magnam, odio cupiditate nisi expedita!"
										/>
									</li>
								</ul>
							</div>
							<div className="col-start-2 col-end-4">
								<img
									src="https://cdn.onlinewebfonts.com/svg/img_462266.png"
									alt="analysis"
									class="py-8 w-24 "
								/>
								<h2 className="text-4xl font-semibold my-8">Indiviual</h2>
								<p className="text-gray-500 my-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
									doloremque sed consequatur ad rerum quod error maiores
									dignissimos id aspernatur quam explicabo dolores repellendus,
									soluta excepturi culpa aut vel provident est iure ab veritatis
									molestiae! Rerum provident maiores tempora sapiente!
								</p>
								<p className="text-gray-500 my-4">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Iusto voluptatibus laboriosam, temporibus corrupti, culpa
									aspernatur ducimus excepturi libero accusamus dignissimos id
									tenetur quis quam quaerat impedit dicta, adipisci minima amet
									repellat beatae tempore! Odit, dolorum. Itaque magnam et
									aperiam autem.
								</p>
								<div className="grid grid-cols-5 gap-4  mt-16">
									<Button href="/" text="Pay" className="mr-4" />
									<Button href="/" text="Engagment" className="mr-4" />
									<Button href="/" text="Assessment" className="mr-4" />
									<Button href="/" text="Pay" className="mr-4" />
								</div>
								<a href="/" className=" my-8 text-red-800 tracking-wide block">
									View Programs
								</a>
							</div>
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<span className="text-5xl">hi</span>
					</TabPanel>
				</div>
			</div>
		</section>
	);
};
