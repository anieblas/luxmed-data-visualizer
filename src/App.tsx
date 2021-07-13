import React, { useState } from 'react'
import './App.css'
import { useFetchBreedsQuery } from './features/history/history-api-slice';


function App() {

  const { data = [] } = useFetchBreedsQuery(5);

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <table>
            <thead>
              <tr>
                <th>Type of consultation</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.visitId}>
                  <td>{breed.title}</td>
                  <td>
                    {breed.eventType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </header>
    </div>
  )
}

export default App
