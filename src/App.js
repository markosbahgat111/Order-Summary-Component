import logo from "./assets/images/illustration-hero.svg";
import musicLogo from "./assets/images/icon-music.svg";
import "./App.css";

function App() {
	return (
		<div className="md:w-2/4 text-center overflow-hidden rounded-xl bg-white m-auto w-11/12">
			<div>
				<img src={logo} alt="illustration" className="w-full" />
			</div>
			<div className="p-10">
				<h1 className="text-2xl font-bold mb-3">Order Summary</h1>
				<p>
					You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
				</p>
				<div className="flex justify-evenly items-center bg-blue-50 pt-3 pb-3 mt-5 rounded-xl text-left">
					<img src={musicLogo} alt="MusicLogo" />
					<div className="mr-7">
						<h3 className="font-bold text-md">Annual Plan</h3>
						<span className="text-sm">$59.99/Year</span>
					</div>
					<button>
						<a href="http://markosbahgat.com" className="underline">
							Change
						</a>
					</button>
				</div>
				<div className="flex flex-col justify-evenly items-center">
					<button className="p-2 w-11/12 active text-white rounded-xl m-5 font-bold text-sm shadow-xl">
						Proceed To Payment
					</button>
					<button className="font-bold w-11/12 p-2 rounded-xl">Cancel Order</button>
				</div>
			</div>
		</div>
	);
}

export default App;
