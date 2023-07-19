import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage';

import { LoginPage } from '../pages/LoginPage';
import { AuthorizationPage } from '../pages/AuthorizationPage';
import { AllBooksPage } from '../pages/AllBooksPage';
import { BookPage } from '../pages/BookPage';
import { MainUserPage } from '../pages/MainUserPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="/allBooksPage" element={<AllBooksPage />} />
        <Route path="/MainUserPage" element={<MainUserPage />} />
        <Route path="books/:id" element={<BookPage />} />
        <Route path="signin" element={<AuthorizationPage />} />
        <Route path="" element={<IndexPage />} />
      </Route>
    </>,
  ),
);
