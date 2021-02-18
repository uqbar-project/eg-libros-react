import { Button } from 'primereact/button'
import { Column, DataTable } from 'primereact/datatable'
import { useState, useEffect, createRef } from 'react'
import { useHistory } from 'react-router-dom'
import { prestamoService } from '../services/prestamoService'
import { Toast } from 'primereact/toast'

export const PrestamosPendientes = function() {
  const [prestamosPendientes, setPrestamosPendientes] = useState([])
  const history = useHistory()
  const toast = createRef()

  useEffect(() => {
    const getPrestamosPendientes = async function() {
      try {
        const prestamos = await prestamoService.getPrestamosPendientes()
        setPrestamosPendientes(prestamos)
      } catch (e) {
        console.log(e)
        toast.current.show({ severity: 'error', summary: 'Ocurrió un error al traer los préstamos pendientes. Revise el log para más detalles.'})
      }
    }
    getPrestamosPendientes()
  }, [])

  function devolver(prestamo) {
    return <Button icon="pi pi-replay" tooltip="Devolver" className="p-button-secondary p-button-raised p-button-rounded" onClick={async () => {
      try {
        await prestamoService.devolver(prestamo)
        const prestamos = await prestamoService.getPrestamosPendientes()
        await setPrestamosPendientes(prestamos)
      } catch (e) {
        console.log(e)
        toast.current.show({ severity: 'error', summary: 'Ocurrió un error al intentar devolver el préstamo pendiente. Revise el log para más detalles.'})
      }
    }}
  />
  }
  
  return (
    <div>
      <Toast ref={toast} />
      <div className="titulo">Préstamos de libros</div>
      <DataTable value={prestamosPendientes}>
        <Column field="libro.titulo" header="Libro"></Column>
        <Column field="persona.nombre" header="Persona"></Column>
        <Column field="fechaAMostrar" header="Fecha del préstamo"></Column>
        <Column body={devolver} style={{width:'7em'}} />
      </DataTable>
      <Button icon="pi pi-plus" label="Prestar un nuevo libro" className="p-button-primary p-button-outlined p-button-rounded" onClick={() => { history.push('/nuevoPrestamo')}}></Button>
    </div>
  )
}