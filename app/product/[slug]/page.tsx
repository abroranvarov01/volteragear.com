"use client"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart, Zap, Shield, Clock } from "lucide-react"

const products = [
	{
		name: "Victorinox Chrono-Gauge",
		price: "$495",
		category: "Timepieces",
		image: "https://m.media-amazon.com/images/I/81Y0qX4e+yL._AC_SX679_.jpg",
		slug: "victorinox-chrono-gauge",
		amazonLink: "https://www.amazon.ca/Victorinox-Swiss-Chronograph-Stainless-Steel/dp/B0F4CGJPNV?&linkCode=ll1&tag=volteragear-20&linkId=d7fd0e68b70e00867b51703844cbd817&language=en_CA&ref_=as_li_ss_tl",
		description:
			"A precision-engineered chronograph timepiece forged in the fires of Victorian innovation, blending Swiss mechanical mastery with brass-accented durability. This remarkable watch channels the spirit of industrial revolution horology while incorporating modern chronometric functions, allowing you to measure time with the accuracy of a steam-powered cogwheel assembly.",
		features: [
			"Swiss-made quartz movement with chronograph functions",
			"Stainless steel case with brass-like finish",
			"Water-resistant up to 100 meters",
			"Luminous hands for low-light visibility",
			"Tachymeter scale for speed calculations",
		],
		specs: {
			caseDiameter: "43mm",
			movement: "Swiss Quartz",
			waterResistance: "100m / 330ft",
			weight: "180g",
		},
	},
	{
		name: "Cardo Aether-Comm",
		price: "$299",
		category: "Communication",
		image: "https://m.media-amazon.com/images/I/51+7QKzkgSL._AC_SX679_.jpg",
		slug: "cardo-aether-comm",
		amazonLink: "https://www.amazon.ca/Cardo-Systems-Motorcycle-Bluetooth-Communication/dp/B09MQ8HT1G&linkCode=ll1&tag=volteragear-20&linkId=baa5df4b14579ce6b8f02fcd8bef8fab&language=en_CA&ref_=as_li_ss_tl",
		description:
			"An ethereal communication helmet device inspired by Tesla's wireless experiments, encased in rugged brass-like housing. This extraordinary communicator bridges riders across vast distances using quantum-like Bluetooth mesh networks, turning every journey into a symphony of voices carried on invisible aether waves.",
		features: [
			"Bluetooth 5.2 with mesh intercom technology",
			"Noise-canceling microphone system",
			"FM radio integration",
			"Waterproof and dust-resistant design",
			"Up to 13 hours battery life",
		],
		specs: {
			connectivity: "Bluetooth, Mesh",
			battery: "13 hours talk time",
			dimensions: "10cm x 5cm x 3cm",
			weight: "150g",
		},
	},
	{
		name: "Articulated Voltaic Gauntlets",
		price: "$89",
		category: "Wearables",
		image: "https://m.media-amazon.com/images/I/61JmFARdp+L._AC_SX679_.jpg",
		slug: "articulated-voltaic-gauntlets",
		amazonLink: "https://www.amazon.ca/Medieval-Articulated-Gauntlets-Brass-Accents/dp/B06XRTWX9J?&linkCode=ll1&tag=volteragear-20&linkId=d38c0496d1ea48b78088d0f2fce8c3e0&language=en_CA&ref_=as_li_ss_tl",
		description:
			"Medieval-inspired articulated hand armor enhanced with brass accents and electromagnetic reinforcements. These magnificent gauntlets evoke the chivalric age while providing modern protective capabilities, their jointed plates moving with the fluidity of steam-driven pistons to shield your hands in temporal battles.",
		features: [
			"Full finger articulation for dexterity",
			"Brass accent overlays for enhanced style",
			"Adjustable leather straps",
			"Rust-resistant steel construction",
			"Historical reenactment ready",
		],
		specs: {
			material: "Steel with brass accents",
			sizes: "One size fits most",
			dimensions: "30cm x 15cm x 10cm",
			weight: "1.2kg per pair",
		},
	},
	{
		name: "Samsung Gear Chrono-Sport",
		price: "$229.99",
		category: "Timepieces",
		image: "https://m.media-amazon.com/images/I/61Die3FiMLL._AC_SX679_.jpg",
		slug: "samsung-gear-chrono-sport",
		amazonLink: "https://www.amazon.ca/Samsung-Sport-Smartwatch-Bluetooth-SM-R600NZBAXAR/dp/B075X4RQHZ?&linkCode=ll1&tag=volteragear-20&linkId=a0270ec58d091f6b95953b1db7a2d5a3&language=en_CA&ref_=as_li_ss_tl",
		description:
			"A water-resistant smart chronometer blending Victorian gear mechanisms with digital aether displays. This remarkable wrist device tracks your vital energies through all-day fitness monitoring, while its rotating bezel summons notifications from the ethereal network, all housed in a swim-ready brass-inspired casing.",
		features: [
			"Swim-ready with 50m water resistance",
			"All-day fitness tracking and coaching",
			"Samsung Pay NFC compatibility",
			"Bluetooth and Wi-Fi connectivity",
			"1.2-inch round display",
		],
		specs: {
			screenSize: "1.2 inches",
			battery: "300mAh",
			dimensions: "42mm x 42mm x 11mm",
			weight: "50g",
		},
	},
	{
		name: "Rechargeable Lumina Torch",
		price: "$29.99",
		category: "Lighting",
		image: "https://m.media-amazon.com/images/I/61IAQUkoftL._AC_SX679_.jpg",
		slug: "rechargeable-lumina-torch",
		amazonLink: "https://www.amazon.ca/Rechargeable-Waterproof-Flashlight-Hurricane-Emergency/dp/B08L65L7PW&linkCode=ll1&tag=volteragear-20&linkId=6dc0f9f3ceb234b1c83784f786ea3c2b&language=en_CA&ref_=as_li_ss_tl",
		description:
			"A waterproof hand-held illuminator powered by rechargeable voltaic cells, evoking the glow of gas lamps in storm-tossed adventures. This powerful lantern pierces the darkness with multiple modes, its brass-like body standing resilient against hurricanes and temporal tempests alike.",
		features: [
			"High-lumen LED output with zoom function",
			"Rechargeable via USB",
			"Waterproof IPX7 rating",
			"Multiple lighting modes including SOS",
			"Emergency power bank function",
		],
		specs: {
			brightness: "2000 lumens",
			battery: "5000mAh rechargeable",
			dimensions: "15cm x 4cm x 4cm",
			weight: "250g",
		},
	},
	{
		name: "ArmArmour Temporal Compass",
		price: "$28.49",
		category: "Navigation",
		image: "https://m.media-amazon.com/images/I/81Kb82bTy1L._AC_SX679_.jpg",
		slug: "armarmour-temporal-compass",
		amazonLink: "https://www.amazon.ca/Sun-Company-ArmArmour-Shielded-Thermometer/dp/B06XCJSBRG?&linkCode=ll1&tag=volteragear-20&linkId=14a407b933d1b453abf8756714a9b8a2&language=en_CA&ref_=as_li_ss_tl",
		description:
			"A wrist-mounted directional finder with thermometer, shielded in rugged brass-like armor. This ingenious device guides your path through misty moors while monitoring atmospheric pressures, its luminous dial glowing like captured moonlight in the dead of night.",
		features: [
			"Liquid-filled luminous compass",
			"Accurate dial thermometer to -30°F",
			"Hinged protective cover",
			"Adjustable tactical strap",
			"Brass hardware for durability",
		],
		specs: {
			compassSize: "20mm",
			strapWidth: "22mm",
			dimensions: "8cm x 5cm x 2cm",
			weight: "50g",
		},
	},
	{
		name: "Omega Constellation Chronometre",
		price: "$4,550.00",
		category: "Timepieces",
		image: "https://m.media-amazon.com/images/I/611Hm3EBxaL._AC_SY695_.jpg",
		slug: "omega-constellation-chronometre",
		amazonLink: "https://www.amazon.ca/Omega-Constellation-Chronometer-Automatic-131-10-29-20-02-001/dp/B083WNKD6T?&linkCode=ll1&tag=volteragear-20&linkId=d5d444dc0e055ae62f0b5f15206f4096&language=en_CA&ref_=as_li_ss_tl",
		description:
			"An automatic master chronometer evoking celestial mechanisms in polished steel and brass tones. This exquisite ladies' timepiece tracks the stars' eternal dance with co-axial precision, its silver dial a window to the cosmos, powered by the inexorable march of temporal gears.",
		features: [
			"Co-Axial Master Chronometer movement",
			"Automatic winding system",
			"50m water resistance",
			"Push-button deployment clasp",
			"29mm case for elegant fit",
		],
		specs: {
			caseDiameter: "29mm",
			movement: "Automatic",
			waterResistance: "50m / 165ft",
			weight: "120g",
		},
	},
	{
		name: "BCA Avalanche Beacon",
		price: "$349.95",
		category: "Navigation",
		image: "https://m.media-amazon.com/images/I/61UOMYVgvWL._AC_SX679_.jpg",
		slug: "bca-avalanche-beacon",
		amazonLink: "https://www.amazon.ca/BCA-Tracker-3/dp/B00OM1H5Z6?&linkCode=ll1&tag=volteragear-20&linkId=eb26a5d6e09222a6cb4f4ebb317407ab&language=en_CA&ref_=as_li_ss_tl",
		description:
			"A digital transceiver for locating buried companions in snowy temporal avalanches, housed in durable brass-reinforced casing. This vital device sends and receives signals through the aether, guiding rescuers with unerring accuracy through whiteout conditions and frozen timelines.",
		features: [
			"Triple antenna digital transceiver",
			"Multiple burial indicator",
			"Auto-revert to transmit mode",
			"Big picture mode for overview",
			"Ergonomic harness system",
		],
		specs: {
			frequency: "457 kHz",
			battery: "3 AAA batteries",
			dimensions: "11.5cm x 7.1cm x 2.6cm",
			weight: "215g",
		},
	},
	{
		name: "VR Night Vision Spectacles",
		price: "$269.99",
		category: "Wearables",
		image: "https://m.media-amazon.com/images/I/61ddH2Fur0L._AC_SX679_.jpg",
		slug: "vr-night-vision-spectacles",
		amazonLink: "https://www.amazon.ca/GOWWPUN-Night-Vision-Goggles-Built/dp/B0DRYFYHW1?&linkCode=ll1&tag=volteragear-20&linkId=f6f6e6d2bf07fbd76b34dcc4e89429ed&language=en_CA&ref_=as_li_ss_tl",
		description:
			"Head-mounted binocular viewers piercing the veil of night with infrared illumination and 3D virtual displays. These remarkable goggles reveal hidden realms in complete darkness, their giant screen projecting 4K visions like ethereal phantoms from Victorian spirit photography.",
		features: [
			"7-level infrared adjustment",
			"4K video and 24MP photo capture",
			"6x digital zoom",
			"Built-in rechargeable battery",
			"Includes 32GB TF card",
		],
		specs: {
			fieldOfView: "10 degrees",
			range: "2000+ feet in darkness",
			dimensions: "20cm x 15cm x 10cm",
			weight: "450g",
		},
	},
]

export default function ProductPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === params.slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.vol === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"vol=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-12">
				{/* Back button */}
				<Link href="/">
					<Button
						variant="outline"
						className="mb-8 border-brass text-brass hover:bg-brass hover:text-background bg-transparent"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Home
					</Button>
				</Link>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Product Image */}
					<div className="relative">
						<div className="aspect-square border-4 border-brass rounded-sm overflow-hidden relative group">
							{/* Corner decorations */}
							<div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-neon-teal z-10" />
							<div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-neon-teal z-10" />
							<div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-neon-teal z-10" />
							<div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-neon-teal z-10" />

							<Image
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>

						{/* Decorative glow effect */}
						<div className="absolute -inset-4 bg-gradient-to-r from-brass/20 via-neon-teal/20 to-brass/20 blur-2xl -z-10 opacity-60" />
					</div>

					{/* Product Details */}
					<div className="space-y-6">
						<div>
							<span className="text-neon-teal text-sm font-medium uppercase tracking-wider">{product.category}</span>
							<h1 className="font-serif text-5xl font-bold text-brass mt-2 mb-4">{product.name}</h1>
						</div>

						<p className="text-brass/80 text-lg leading-relaxed">{product.description}</p>

						<a href={product.amazonLink} data-auto className="block">
							<Button
								size="lg"
								className="w-full bg-brass hover:bg-neon-teal text-background font-bold text-lg py-6 border-2 border-dark-copper"
							>
								<ShoppingCart className="w-5 h-5 mr-2" />
								Buy on Amazon
							</Button>
						</a>

						{/* Features */}
						<div>
							<h3 className="font-serif text-2xl font-bold text-brass mb-4">Features</h3>
							<ul className="space-y-3">
								{product.features.map((feature, i) => (
									<li key={i} className="flex items-start gap-3">
										<Zap className="w-5 h-5 text-neon-teal mt-1 flex-shrink-0" />
										<span className="text-brass/70">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Specifications */}
						<div>
							<h3 className="font-serif text-2xl font-bold text-brass mb-4">Specifications</h3>
							<ul className="space-y-3">
								{Object.entries(product.specs).map(([key, value], i) => (
									<li key={i} className="flex items-start gap-3">
										<Shield className="w-5 h-5 text-neon-teal mt-1 flex-shrink-0" />
										<span className="text-brass/70">{`${key}: ${value}`}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Trust badges */}
						<div className="flex items-center gap-4">
							<Shield className="w-6 h-6 text-neon-teal" />
							<Clock className="w-6 h-6 text-neon-teal" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
