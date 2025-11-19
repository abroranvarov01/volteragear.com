import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	"victorinox-chrono-gauge",
	"cardo-aether-comm",
	"articulated-voltaic-gauntlets",
	"samsung-gear-chrono-sport",
	"rechargeable-lumina-torch",
	"armarmour-temporal-compass",
	"omega-constellation-chronometre",
	"bca-avalanche-beacon",
	"vr-night-vision-spectacles"
]



export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://chargenomad.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/product/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('vol', 'true', { path: '/', maxAge: 60 })

		return res
	}

}

export const config = {
	matcher: ['/gear'],
}