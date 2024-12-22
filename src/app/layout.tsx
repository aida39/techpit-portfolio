
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <title>React ポートフォリオサイト</title>
      <body
      >
        {children}
      </body>
    </html>
  );
}
