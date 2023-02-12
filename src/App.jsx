import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import Careers from './pages/careers/Careers'
import Career from './pages/careers/Career'
import NotFound from './pages/NotFound'

// Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

// Loaders
import CareersLoader from './loaders/CareersLoader'
import CareerLoader from './loaders/CareerLoader'

// Actions
import ContactAction from './actions/ContactAction'

// Errors 
import CareersError from './pages/careers/CareersError'
import CareerError from './pages/careers/CareerError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* / */}
      <Route index element={<Home />} />
      {/* /about */}
      <Route path="about" element={<About />} />
      {/* /help */}
      <Route path="help" element={<HelpLayout />}>
        {/* /help/faq */}
        <Route path="faq" element={<Faq />} />
        {/* /help/contact */}
        <Route 
          path="contact" 
          element={<Contact />} 
          action={ContactAction}
        />
      </Route>
      {/* /careers */}
      <Route 
        path="careers" 
        element={<CareersLayout />}
      >
        {/* /careers */}
        <Route 
          index 
          element={<Careers />} 
          loader={CareersLoader} 
          errorELement={<CareersError />}
        />
        {/* /careers/:id */}
        <Route 
          path=":id" 
          element={<Career />} 
          loader={CareerLoader} 
          errorElement={<CareerError />}
        />
      </Route>
      {/* /* */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
