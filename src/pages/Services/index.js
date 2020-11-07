import React from "react";
import { Header } from "../../screens/components/Header";
import { ServiceSection } from "../../screens/components/ServiceSection";
import { ContactUs } from "../../screens/components/ContactUs";
import { Footer } from "../../screens/components/Footer";

export const Services = () => {
	return (
		<main>
			<Header />
			<ServiceSection />
			<ContactUs />
			<Footer />
		</main>
	);
};
