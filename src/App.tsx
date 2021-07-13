import React, { useState } from 'react'
import './App.css'
import { useFetchConsultationsQuery } from './features/history/history-api-slice';


function App() {

  const { data = [] } = useFetchConsultationsQuery(5);

   return (
    <div className="App">
      <header className="App-header">

        <div>
          <table>
            <thead>
              <tr>
                <th>Type of Examination</th>
                <th>Examination</th>
                <th>Doctor name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((consultation) => (
                <tr key={consultation.visitId}>
                  <td>{consultation.title}</td>
                  <td>{consultation.shortExaminationNames ? consultation.shortExaminationNames[0].name : 'cc'}</td>
                  <td>
                    {consultation.doctor ? (consultation.doctor.title + ' ' + consultation.doctor.name + ' ' + consultation.doctor.lastname) : ''}
                  </td>
                  <td> {consultation.clinic ? consultation.clinic.address : ''}</td>
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
