import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';

// Importando as fontes
const { vfs } = vfsFonts.pdfMake;

// Carregar as fontes
pdfMake.vfs = vfs;

export default function PdfMake(jsonData) {

  const pdfContent = {
    content: [

      {
        columns: [
          {
            image: 'data:image/jpeg;base64,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A/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAjhCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQREAAAAAAAQAAAAAgAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0UAAAAGAAAAAAAAAAAAAAA7AAAA9AAAAAgAbABvAGcAbwAgAFMAQQBQAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD0AAAAOwAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAOwAAAABSZ2h0bG9uZwAAAPQAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAADsAAAAAUmdodGxvbmcAAAD0AAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxs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eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjAtYzAwMCA3OS4xNzFjMjdmLCAyMDIyLzA4LzE2LTE4OjAyOjQzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTExVDExOjQ5OjMwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAxLTA2VDE3OjAxOjUwLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMS0wNlQxNzowMTo1MC0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMDE2MDBkOC0xODUzLTEzNGMtYWQ5NS0zMTA2NWUxYjZlMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTQ0NjdBMDNFQURCRUExMUFGRTJBNDE5MUI4Q0ZDOUUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDQ2N0EwM0VBREJFQTExQUZFMkE0MTkxQjhDRkM5RSIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNDQ2N0EwM0VBREJFQTExQUZFMkE0MTkxQjhDRkM5RSIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0xMVQxMTo0OTozMC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNTQ2N0EwM0VBREJFQTExQUZFMkE0MTkxQjhDRkM5RSIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0xMVQxMTo0OTozMC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDE2MDBkOC0xODUzLTEzNGMtYWQ5NS0zMTA2NWUxYjZlMDciIHN0RXZ0OndoZW49IjIwMjMtMDEtMDZUMTc6MDE6NTAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDozQjU3Qjk0OTEwRjVFNTExQTM2NkZFRUE1M0I0MjA0MzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NTVFMTExRDBEM0YwRTkxMThGRTRDNzZFM0JFMDU5ODY8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAkBJQ0NfUFJPRklMRQABAQAAAjBBREJFAhAAAG1udHJSR0IgWFlaIAfPAAYAAwAAAAAAAGFjc3BBUFBMAAAAAG5vbmUAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtQURCRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmNwcnQAAAD8AAAAMmRlc2MAAAEwAAAAa3d0cHQAAAGcAAAAFGJrcHQAAAGwAAAAFHJUUkMAAAHEAAAADmdUUkMAAAHUAAAADmJUUkMAAAHkAAAADnJYWVoAAAH0AAAAFGdYWVoAAAIIAAAAFGJYWVoAAAIcAAAAFHRleHQAAAAAQ29weXJpZ2h0IDE5OTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQAAABkZXNjAAAAAAAAABFBZG9iZSBSR0IgKDE5OTgpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA81EAAQAAAAEWzFhZWiAAAAAAAAAAAAAAAAAAAAAAY3VydgAAAAAAAAABAjMAAGN1cnYAAAAAAAAAAQIzAABjdXJ2AAAAAAAAAAECMwAAWFlaIAAAAAAAAJwYAABPpQAABPxYWVogAAAAAAAANI0AAKAsAAAPlVhZWiAAAAAAAAAmMQAAEC8AAL6c/+4A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',
          },
          {
            text: 'Fernando Mattei',
            width: 200,
            fontSize: 16,
            style: 'header',
          },
          {
            text: 'Consultoria SAP',
            width: 200,
            fontSize: 16,
            style: 'header',
          },
        ],
      },
      { text: '\n' },
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          widths: [100, 'auto', 'auto', 'auto', 'auto', 'auto'],
          body: [
            ['Projeto', 'Atividade', 'Data', 'De', 'Até', 'Duração'],
            ...jsonData.map((row) => [
              row.Projeto || '',
              row.Notas || '',
              row.Data || '',
              row.Desde || '',
              row.Pra || '',
              row.Duração || '',
            ]),
          ]
        },
        layout: 'lightHorizontalLines'
      },
      {
        text: '\n',
      },
      {
        text: 'Total de horas: ' + jsonData.reduce((acc, row) => acc + row.HorasDecimal, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        style: 'subheader',
        alignment: 'right',
      },
    ],
  }

  pdfMake.createPdf(pdfContent).download('documento.pdf')
  return
}