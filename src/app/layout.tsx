"use client";

import { usePathname } from "next/navigation";

import { checkIsRoutes } from "functions/appRoutesConfig";
import { RouteGranted } from "functions/userValidation";
import { globalStyles } from "styles/globalStyles";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  globalStyles();

  const nameRouter = usePathname();
  const isCheckedRoute = checkIsRoutes(nameRouter!);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Aplicação para desenvolvimento de testes dentro do ecossistema da web 3.0"
          name="description"
        />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <title>Web 3.0</title>
      </head>
      <body>
        {isCheckedRoute && children}
        {!isCheckedRoute && <RouteGranted>{children}</RouteGranted>}
      </body>
    </html>
  );
}
