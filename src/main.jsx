import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Produtos from "./routes/Produtos.jsx";
import Erro404 from "./routes/Erro404.jsx";
import ExcluirProdutos from "./routes/ExcluirProdutos.jsx";
import EditarProdutos from "./routes/EditarProdutos.jsx";
import AdicionarProdutos from "./routes/AdicionarProdutos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
      { path: "/excluir/produtos/:id", element: <ExcluirProdutos /> },
      { path: "/adicionar/produtos", element: <AdicionarProdutos /> },
    ],
  },
]);
//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);