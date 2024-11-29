import React from 'react'
import Counter from './Counter'
import UserProfile from './UserProfile'
import CounterWithPreviousState from './CounterWithPreviousState'
import RandomNumber from './RandomNumber'

function UseStateDemo() {
  return (
    <>
          <div className="container mt-4">
      <h1>Understanding State in React</h1>
      <hr />
      <section>
        <h2>1. Basic Counter</h2>
        <Counter />
      </section>
      <hr />
      <section>
        <h2>2. User Profile with Multiple States</h2>
        <UserProfile />
      </section>
      <hr />
      <section>
        <h2>3. Counter with Previous State</h2>
        <CounterWithPreviousState />
      </section>
      <hr />
      <section>
        <h2>4. Random Number Generator</h2>
        <RandomNumber />
      </section>
    </div>
    </>
  )
}

export default UseStateDemo