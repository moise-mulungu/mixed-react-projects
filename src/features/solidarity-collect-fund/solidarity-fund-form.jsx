import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from './firebase'

export default function SolidarityFundForm() {
  const [fundName, setFundName] = useState('')
  const [collectorName, setCollectorName] = useState('')
  const [generatedCode, setGeneratedCode] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [latestMeetingName, setLatestMeetingName] = useState('')
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    const fetchMeetings = async () => {
      const q = query(collection(db, 'meetings'), orderBy('timestamp', 'desc'))
      const querySnapshot = await getDocs(q)
      const meetings = querySnapshot.docs.map((doc) => doc.data())
      setMeetings(meetings)
    }
    fetchMeetings()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    setGeneratedCode(code)
    try {
      await addDoc(collection(db, 'funds'), {
        fundName,
        collectorName,
        generatedCode,
      })
      setFundName('')
      setCollectorName('')
      setModalIsOpen(true)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Open Form
      </button>
      {meetings.map((meeting, index) => (
        <div key={index} className="ml-4 text-white font-bold py-2 px-4 rounded mt-4">
          Meeting {index + 1}: {meeting.fullName}, Share: {meeting.share}, Sum: {meeting.sum}, Debt:{' '}
          {meeting.debt}, Reimbursement: {meeting.reimbursement}, Meeting Registration Number:{' '}
          {meeting.meetingRegistrationNumber}, Weekly Sum: {meeting.weeklySum}, Weekly Total:{' '}
          {meeting.weeklyTotal}, Weekly Savings: {meeting.weeklySavings}
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Solidarity Fund Form"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
        style={{ content: { width: '75%', margin: 'auto' } }}
      >
        <div className="bg-white rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <input
              value={fundName}
              onChange={(e) => setFundName(e.target.value)}
              type="text"
              placeholder="Name of the solidarity fund"
              className="input-field mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              value={collectorName}
              onChange={(e) => setCollectorName(e.target.value)}
              type="text"
              placeholder="Name of the solidarity-fund collector"
              className="input-field mt-4 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Generate Code
            </button>
            {generatedCode && <p className="mt-4">Generated Code: {generatedCode}</p>}
          </form>
          <button
            onClick={() => setModalIsOpen(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
}
