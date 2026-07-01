import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Layout } from './components/layout-area/layout/layout.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>

  </StrictMode>,
)


// Step 1:
// After downloading the correct CLI's,
// You soround your layout component with <BrowserRouter>

//Step 2:
//You place at the Layout component, usually the sorounded by <main>
// A new speacial component called <Routing>

//Step 3:
//You create a special Routing component without css.
//Inside it you place all your possialbe routes, and choose their Path(what is shown in the upper url),
// And choose the element in which it Uses element meaning Component.

//Step 4:
//You create a navigation component usually in the header menu
//There you use a special tag called, <NavLink> instead of <a>
// And instead of href you use to="/somepath"

// Then you are happy.

