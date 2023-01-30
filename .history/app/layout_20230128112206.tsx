import "../styles/globals.css";
imp
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />


      <body>
        <Header />
        <div> {children} </div>
        </body>
    </html>
  );
}
