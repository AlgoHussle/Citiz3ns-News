import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />


      <body>
        <Heade />
        <div>{children}</div>
        </body>
    </html>
  )
}
