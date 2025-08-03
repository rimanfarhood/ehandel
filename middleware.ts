// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const isMaintenance = process.env.MAINTENANCE_MODE === 'true'
  const isMaintenancePage = req.nextUrl.pathname.startsWith('/maintenance')

  if (isMaintenance && !isMaintenancePage && !req.nextUrl.pathname.startsWith('/api')) {
    const url = req.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico|maintenance|api).*)'],
}