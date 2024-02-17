export async function checkLogin(username, password) {
    var url = ""
    var data = {
        username: username,
        password: password
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function getUserProjects(userID) {
    // var url = ""
    // var data = {
    //     userID: userID,
    // }
    // const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    return [{
        id: "1",
        name: "Test123",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang"
    },
    {
        id: "2",
        name: "232223",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang"
    },
    {
        id: "3",
        name: "Testdfdfdfdfd123",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang"
    },
    ]
}

export async function getUserTasks(userID) {
    return [{
        id: "1",
        name: "Test123",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang",
        mitarbeiterID: "8888888",
        projektID: "99999999",
        status: "offen"
    },
    {
        id: "2",
        name: "232223",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang",
        mitarbeiterID: "8888888",
        projektID: "99999999",
        status: "offen"
    },
    {
        id: "3",
        name: "Testdfdfdfdfd123",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang",
        mitarbeiterID: "8888888",
        projektID: "99999999",
        status: "offen"
    },

    ]
}

export async function createNewProject(projektName, projektleiter, projektdeadline, projektbeschreibung, projektersteller, erstelldatum) {
    // var url = ""
    // var data = {
    //     projektName: projektName,
    //     projektleiter: projektleiter,
    //     deadline: projektdeadline,
    //     beschreibung: projektbeschreibung,
    //     ersteller: projektersteller,
    //     erstelldatum: erstelldatum
    // }
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    var reuslt = true
    if (reuslt) {
        return true
    }
    else {
        return false
    }

}


export async function editProject(id,projektName, projektleiter, projektdeadline, projektbeschreibung, projektersteller, erstelldatum) {
    // var url = ""
    // var data = {
    //     id: id
    //     projektName: projektName,
    //     projektleiter: projektleiter,
    //     deadline: projektdeadline,
    //     beschreibung: projektbeschreibung,
    //     ersteller: projektersteller,
    //     erstelldatum: erstelldatum
    // }
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    var reuslt = true
    if (reuslt) {
        return true
    }
    else {
        return false
    }

}

export async function deleteProject(id) {
    // var url = ""
    // var data = {
    //     id: id
    // }
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    var reuslt = true
    if (reuslt) {
        return true
    }
    else {
        return false
    }

}

export async function deleteTask(id) {
    // var url = ""
    // var data = {
    //     id: id
    // }
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    var reuslt = true
    if (reuslt) {
        return true
    }
    else {
        return false
    }

}

export function createNewTask(taskName, taskWorker, taskDeadline, taskDescription) {
    // var url = ""
    // var data = {
    //     taskName: taskName,
    //     mitarbeiter: taskWorker,
    //     deadline: taskDeadline,
    //     beschreibung: taskDescription,
    // }
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    var reuslt = true
    if (reuslt) {
        return true
    }
    else {
        return false
    }

}

export async function addNewMitarbeiterToProject(mitarbeiterid) {
    // var url = ""
    // var data = {
    //     mitarbeiterid: mitarbeiterid,
    // }
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // return response.json();
    return [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }]
}


export async function getPossibleProjektleiter() {
    // var url = ""
    // const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    // return response.json();
    return [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }]
}

export async function getTasks(projectID) {
    // var url = ""
    // var data = {
    //     projectID: projectID,
    // }
    // const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    //     body: JSON.stringify(data),
    // return response.json();
    return [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }]
}

export async function editTasks(taskid,status) {
    // var url = ""
    // var data = {
    //     taskid: taskid,
    //     status: status
    // }
    // const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    //     body: JSON.stringify(data),
    // return response.json();
    return [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }]
}

export async function getProjectMitarbeiter(projectid) {
    // var url = ""
    // var data = {
    //     projectID: projectID,
    // }
    // const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    //     body: JSON.stringify(data),
    // return response.json();
}

export function getPossibleEmployee() {

    return [{ name: "Employee1" }, { name: "Employee2" }, { name: "Employee3" }]
}

