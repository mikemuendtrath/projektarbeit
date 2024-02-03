import React from 'react';
import { useLocation } from 'react-router-dom';
import { getUserTasks } from '../helper.js/backendConnector';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';

export default function TaskPage() {
    const location = useLocation();
    const [userID, setUserID] = React.useState(location.state.userID)
    const [projectMetadata, setProjectMetadata] = React.useState(location.state.projectMetadata)
    const [userTasks, setUserTasks] = React.useState()
    const [selectedTask,setSelectedTask] = React.useState()
    const navigate = useNavigate();

    React.useEffect(() => {
        handleTasks()
    }, [])

    async function handleTasks() {
        var result = await getUserTasks(userID)
        setUserTasks(result)
    }

    function handleTaskClick(e){
        setSelectedTask(e.value)
    }

    return (
        <div className="taskWrapper">
            <div className='taskOverviewHeader'>
                <span>Neue Aufgabe erstellen</span>
            </div>
            <div className='taskOverviewMain'>
                <DataTable value={userTasks} stripedRows  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                 selectionMode="single" 
                 selection={selectedTask}
                 onSelectionChange={(e) => handleTaskClick(e)}
                 >
                    <Column sortable  field="id" header="AufgabenID"></Column>
                    <Column sortable  field="mitarbeiterID" header="MitarbeiterID"></Column>
                    <Column sortable  field="projektID" header="ProjektID"></Column>
                    <Column sortable field="name" header="Aufgabenname"></Column>
                    <Column sortable  field="deadline" header="Deadline"></Column>
                    <Column sortable  field="description" header="Beschreibung"></Column>
                    <Column sortable  field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>
    );
} 