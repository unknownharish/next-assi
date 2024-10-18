// app/layout.js
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
         
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
