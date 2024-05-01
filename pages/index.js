import { Inter } from 'next/font/google'
import { useState } from 'react'
import Papa from 'papaparse'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [jsonData, setJsonData] = useState(null)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]

    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          setJsonData(result.data)
        },
        error: (error) => {
          alert(error.message)
        }
      })
    }
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <input type="file" name="file" accept=".csv" onChange={handleFileUpload} />
        {jsonData && (
          <pre>
            {JSON.stringify(jsonData, null, 2)}
          </pre>
        )}
      </div>
    </main>
  )
}
