import React from 'react';
import { useLocation } from 'react-router-dom';
import { createNewTask, getPossibleEmployee, getUserTasks } from '../helper.js/backendConnector';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

export default function TaskPage() {
    const location = useLocation();
    const [userID, setUserID] = React.useState(location.state.userID)
    const [projectMetadata, setProjectMetadata] = React.useState(location.state.projectMetadata)
    const [userTasks, setUserTasks] = React.useState()
    const [selectedTask, setSelectedTask] = React.useState()
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = React.useState(false);
    const toast = React.useRef(null);

    const [newTaskName, setNewTaskname] = React.useState("");
    const [newTaskDescription, setNewDescription] = React.useState("");
    const [newTaskDeadline, setNewDeadline] = React.useState("");
    const [newTaskWorker, setNewTaskWorker] = React.useState("");
    const [possibleWorker, setPossibleWorker] = React.useState([])


    React.useEffect(() => {
        handleTasks();
        handleWorkers();
    }, [])

    async function handleTasks() {
        var result = await getUserTasks(userID)
        setUserTasks(result)
    }

    function handleTaskClick(e) {
        setSelectedTask(e.value)
    }

    async function submitTask() {
        if (newTaskName.length == 0) {
            showError("Ein Projektname muss eingegeben werden!");
            return;
        }
        if (newTaskDeadline.length == 0) {
            showError("Es muss eine Deadline festgelegt werden!");
            return;
        }
        if (newTaskWorker.length == 0) {
            showError("Diese Aufgabe muss einem Mitarbeiter zugewiesen werden!");
            return;
        }

        var result = await createNewTask(newTaskName, newTaskWorker, newTaskDeadline, newTaskDescription)

        if (result) {
            showSuccess("Das Projekt wurde erfolgreich erstellt!")
        }
        else {
            showError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut")
        }
    }

    const showError = (text) => {
        toast.current.show({ severity: 'error', summary: 'Error!', detail: text, life: 3000 });
    }

    const showSuccess = (text) => {
        toast.current.show({ severity: 'success', summary: 'Erfolgreich!', detail: text, life: 3000 });
    }

    async function handleWorkers() {
        var possibleWorker = await getPossibleEmployee()
        setPossibleWorker(possibleWorker)
    }


    return (
        <div className="taskWrapper">
            <div className='taskOverviewHeader'>
            <div className='taskOverviewHeaderInnerWrapper'>
                <h2>Verfügbaren Aufgaben</h2>
                <Button label="Neue Aufgabe erstellen" icon="pi pi-plus" onClick={() => { setOpenDialog(true) }} />
            </div>
            </div>
            <div className='taskOverviewMain'>
                <div className='taskOverviewInnerWrapper'>
                    <DataTable value={userTasks} stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                        selectionMode="single"
                        selection={selectedTask}
                        onSelectionChange={(e) => handleTaskClick(e)}
                    >
                        <Column sortable field="id" header="AufgabenID"></Column>
                        <Column sortable field="mitarbeiterID" header="MitarbeiterID"></Column>
                        <Column sortable field="projektID" header="ProjektID"></Column>
                        <Column sortable field="name" header="Aufgabenname"></Column>
                        <Column sortable field="deadline" header="Deadline"></Column>
                        <Column sortable field="description" header="Beschreibung"></Column>
                        <Column sortable field="status" header="Status"></Column>
                    </DataTable>
                </div>
            </div>
            <Dialog header="Neues Aufgabe erstellen" visible={openDialog} style={{ width: '50vw' }} onHide={() => setOpenDialog(false)}>
                <Toast ref={toast} />
                <span className="p-float-label customTextBox">
                    <InputText id="taskname" value={newTaskName} onChange={(e) => setNewTaskname(e.target.value)} />
                    <label htmlFor="taskname">Name der Aufgabe</label>
                </span>

                <span className="p-float-label customTextBox">
                    <InputTextarea id="taskDescription" value={newTaskDescription} onChange={(e) => setNewDescription(e.target.value)} />
                    <label htmlFor="taskDescription">Beschreibung</label>
                </span>

                <span className="p-float-label customTextBox">
                    <Dropdown value={newTaskWorker} onChange={(e) => setNewTaskWorker(e.value)} options={possibleWorker} optionLabel="name"
                        placeholder="Mitarbeiter wählen" className="w-full md:w-14rem" />
                </span>

                <span className="p-float-label customTextBox">
                    <Calendar id="taskDeadline" value={newTaskDeadline} onChange={(e) => setNewDeadline(e.target.value)} />
                    <label htmlFor="taskDeadline">Deadline</label>
                </span>


                <Button className='customButtom' onClick={() => { submitTask() }}>Erstellen</Button>
            </Dialog>
        </div>
    );
} 