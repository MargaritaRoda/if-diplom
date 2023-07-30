import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage';

import { RegistrationPage } from '../pages/RegistrationPage';
import { AuthorizationPage } from '../pages/AuthorizationPage';
import { AllBooksPage } from '../pages/AllBooksPage';
import { BookPage } from '../pages/BookPage';
import { UserOrdersPage } from '../pages/UserOrdersPage';
import { SettingsPage } from '../pages/SettingsPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />}>
        <Route path="/login" element={<AuthorizationPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/books" element={<AllBooksPage />} />
        <Route path="/orders" element={<UserOrdersPage />} />
        <Route path="/books/:id" element={<BookPage />} />

        <Route path="/settings" element={<SettingsPage />} />
        <Route path="" element={<IndexPage />} />
      </Route>
    </>,
  ),
);
