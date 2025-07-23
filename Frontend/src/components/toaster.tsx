import { Toaster } from "@/components/ui/sonner"
interface children{
    children:string
}
export default function RootLayout({ children }:children) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}