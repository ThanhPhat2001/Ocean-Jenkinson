import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { publicRoutes } from "./data/routesList";
import { ShoppingContextProvider } from "./contexts/ShoppingContext";
import NoPage from "./Pages/NoPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingContextProvider>
        <BrowserRouter basename="/Ocean-Jenkinson">
          <Routes>
            {publicRoutes.map((route) => {
              const Page = route.element;
              //Layout mặc định
              const Layout = route.layout ? route.layout : DefaultLayout;
              if (route.nested && route.nested.length > 0) {
                return (
                  <Route key={route.id} path={route.path} element={<Layout />}>
                    <Route index element={<Page />} />
                    {route.nested.map((child) => {
                      const ChildPage = child.element;
                      return (
                        <Route
                          key={child.id}
                          path={child.path}
                          element={<Page />}
                        >
                          <Route index element={<ChildPage />} />
                        </Route>
                      );
                    })}
                  </Route>
                );
              } else {
                return (
                  <Route key={route.id} path={route.path} element={<Layout />}>
                    <Route index element={<Page />} />
                  </Route>
                );
              }
            })}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ShoppingContextProvider>
    </QueryClientProvider>
  );
};

export default App;
