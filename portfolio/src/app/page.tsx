import { redirect } from 'next/navigation';
import { Analytics } from "@vercel/analytics/react"

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
    redirect('/es');
}