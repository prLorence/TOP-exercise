import axios from "axios";

export default async function getBtcPrice() {
	try {
		const res = await axios.get(
			"https://api.cryptonator.com/api/ticker/btc-usd"
		);
		const btcPrice = Math.floor(res.data.ticker.price);
		const usd = res.data.ticker.target;
		createParagraph(usd, btcPrice);
	} catch (e) {
		console.log("Something went wrong", e);
	}
}

function createParagraph(currency, price) {
	const container = document.querySelector(".container");

	const currPara = document.createElement("p");
	currPara.textContent = currency;

	const pricePara = document.createElement("p");
	pricePara.textContent = price;

	container.appendChild(currPara);
	container.appendChild(pricePara);

	return container;
}
