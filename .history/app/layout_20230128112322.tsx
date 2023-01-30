import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body className="bg-gray-">
        <Header />
        <div> {children} </div>
        </body>
    </html>
  );
}
