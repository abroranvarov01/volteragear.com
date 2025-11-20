import type React from "react"
import type { Metadata } from "next"
import { Cinzel_Decorative, Exo_2 } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const cinzelDecorative = Cinzel_Decorative({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
	variable: "--font-serif",
})

const exo2 = Exo_2({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
	title: "VOLTERA ⚙️ GEAR - Where Steam Meets Silicon",
	description:
		"A time-travel laboratory where Victorian era meets 2200s future. Premium power devices and charging technology.",
	generator: "v0.app",
	icons: {
		icon: "/favicon.svg",
	},
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${exo2.variable} ${cinzelDecorative.variable} font-sans antialiased`}>
				<Header />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	)
}
