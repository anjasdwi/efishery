import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import ModalLoader from 'components/modal/loader'
import Header from 'components/Header'

const HomePage = lazy(() => import('pages/home'))
const CreatePricePage = lazy(() => import('pages/create'))

const AppRouter = () => (
  <>
    <Suspense fallback={<ModalLoader isOpen fullScreen={false} />}>
      <Router>
        <ToastContainer />
        <Header />
        <div className="container">
          <div className="app">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/create">
                <CreatePricePage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  </>
)

export default AppRouter
