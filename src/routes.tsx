import * as React from 'react'
import { IndexRoute, Route, Router, Link, Redirect, browserHistory } from 'react-router'
import { createHashHistory } from 'history'
import Entry from './page/entry'
import Joke from './page/joke'
require('./base_style.less')

const notFount = (name) => () => {
    return <h1>404:( {name}</h1>
}

const router = (
    <Router history={createHashHistory()}>
        <Route path="/">
            <IndexRoute component={Entry} />
            <Route path="joke" component={Joke}/>
            <Route path="news" component={notFount('news')}/>
            <Route path="animal" component={notFount('animal')}/>
            <Route path="gallery" component={notFount('gallery')}/>
            <Route path="*" component={notFount}/>
        </Route>
    </Router>
)

export default router