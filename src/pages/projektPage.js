import React from 'react';
import { useLocation } from 'react-router-dom';
import { getUserProjects, createNewProject, getPossibleProjektleiter } from '../helper.js/backendConnector';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

export default function ProjektPage() {
    const location = useLocation();
    const [userID, setUserID] = React.useState(location.state.userID)
    const [role, setRole] = React.useState(location.state.role)
    const [userProjects, setUserProjects] = React.useState()
    const [selectedProduct, setSelectedProduct] = React.useState()
    const [openDialog, setOpenDialog] = React.useState(false);
    const [newProjektleiter, setNewProjektleiter] = React.useState("");
    const [newProjektname, setNewProjektname] = React.useState("");
    const [newProjektDeadline, setNewProjektDealine] = React.useState("");
    const [newProjektBeschreibung, setNewProjektbeschreibung] = React.useState("");
    const [possibleProjektleiter, setPossibleProjektleiter] = React.useState([])
    const toast = React.useRef(null);

    const navigate = useNavigate();

    React.useEffect(() => {
        handleProjects()
    }, [])

    async function handleProjects() {
        var result = await getUserProjects(userID)
        var possibleProjektleiterResult = await getPossibleProjektleiter()
        setPossibleProjektleiter(possibleProjektleiterResult)
        setUserProjects(result)
    }

    function handleProductClick(e) {
        setSelectedProduct(e.value)
        navigate('/aufgaben', { state: { projectMetadata: e.value, userID: userID } });
    }

    async function submitProject() {
        var result = await createNewProject(newProjektname, newProjektleiter, newProjektDeadline, newProjektBeschreibung)
        if (result) {
            showSuccess()
        }
        else {
            showError()
        }
    }


    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error!', detail: 'Beim erstellen des Projektes ist ein Fehler aufgetreten!', life: 3000 });
    }

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Erfolgreich!', detail: 'Das Projekt wurde erfolgreich ertsellt!', life: 3000 });
    }

    return (
        <div className="projektWrapper">
            <div className='projectOverviewHeader'>
                <div className='projectOverviewHeaderInnerWrapper'>
                    <h2>Verfügbare Projekte</h2>
                <Button label="Neues Projekt erstellen" icon="pi pi-plus" onClick={() => { setOpenDialog(true) }} />
                </div>
            </div>
            <div className='projectOverviewMain'>
                <div className='projectOverviewInnerWrapper'>
                    <DataTable value={userProjects} stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                        selectionMode="single"
                        selection={selectedProduct}
                        onSelectionChange={(e) => handleProductClick(e)}
                    >
                        <Column sortable field="id" header="ProjektID"></Column>
                        <Column sortable field="name" header="Projektname"></Column>
                        <Column sortable field="deadline" header="Deadline"></Column>
                        <Column sortable field="description" header="Beschreibung"></Column>
                    </DataTable>
                </div>
            </div>


            <Dialog header="Neues Projekt erstellen" visible={openDialog} style={{ width: '50vw' }} onHide={() => setOpenDialog(false)}>
                <Toast ref={toast} />
                <span className="p-float-label customTextBox">
                    <InputText id="projektname" value={newProjektname} onChange={(e) => setNewProjektname(e.target.value)} />
                    <label htmlFor="projektname">Projektname</label>
                </span>

                <span className="p-float-label customTextBox">
                    <Dropdown value={newProjektleiter} onChange={(e) => setNewProjektleiter(e.value)} options={possibleProjektleiter} optionLabel="name"
                        placeholder="Projektleiter wählen" className="w-full md:w-14rem" />
                </span>

                <span className="p-float-label customTextBox">
                    <Calendar id="deadline" value={newProjektDeadline} onChange={(e) => setNewProjektDealine(e.target.value)} />
                    <label htmlFor="deadline">Projektdealine</label>
                </span>

                <span className="p-float-label customTextBox">
                    <InputTextarea id="description" value={newProjektBeschreibung} onChange={(e) => setNewProjektbeschreibung(e.target.value)} rows={5} cols={30} />
                    <label htmlFor="description">Beschreibung</label>
                </span>

                <Button className='customButtom' onClick={() => { submitProject() }}>Erstellen</Button>


            </Dialog>
        </div>
    );
} 