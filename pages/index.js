import { useState } from 'react'
import { Button } from '@mui/material'
import Papa from 'papaparse'
import PdfMake from '../components/pdf-make/pdf-make'

export default function Home() {
  const [jsonData, setJsonData] = useState(null)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]

    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const data = result.data.map(row => ({
            ...row,
            HorasDecimal: row.Horas ? parseFloat(row.Horas.replace(',', '.')) : 0 // Definindo como 0 caso Horas seja undefined
          }))
          setJsonData(data)
        },
        error: (error) => {
          alert(error.message)
        },
      })
    }
  }

  const generatePDF = () => {
    PdfMake(jsonData)
    //alert('PDF Gerado com sucesso')
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <div>
        <h1 className="text-4xl font-bold">Tracking Time CSV to PDF</h1>
      </div>
      <div className="max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          <input type="file" name="file" accept=".csv" onChange={handleFileUpload} />
        </div>
        {jsonData && (
          <div className="mt-4">
            <Button variant="contained" onClick={generatePDF}>
              Gerar PDF
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
