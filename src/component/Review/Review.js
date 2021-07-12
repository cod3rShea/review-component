import React, { useState } from "react";
import people from "../../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const ReviewDate = () => {
		people.map((person) => {
			console.log("test", person);
		});
		return <h2>test</h2>;
	};

	return <ReviewDate />;
};

export default Review;
