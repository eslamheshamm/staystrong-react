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
	indicator: {
		color: "blue",
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
			<div className="w-1/2">
				<h2 className="text-4xl font-semibold my-3">Indiviual</h2>
				<p className="text-gray-500 ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi
					laborum quos at ex iure veniam sed ipsum corporis eius?
				</p>
			</div>
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
			<div className="w-11/12 sm:w-8/12 m-auto">
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
						<div>
							<div>
								<ul>
									<li className="flex flex-col ">
										<Item />
										<Item />
										<Item />
										<Item />
									</li>
								</ul>
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
