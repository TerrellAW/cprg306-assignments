import "./globals.css";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Assignments for the Web Dev 2 course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
