import React from 'react'

export default function Header() {
  return (
    <header className='my-4'>
      <div className='mx-auto max-w-6xl'>
        <div className='bg-gray-200 p-4 flex justify-between rounded-full'>
          <div>
            Agung Senjaya
          </div>
          <div>
            <ul className='flex gap-8'>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
