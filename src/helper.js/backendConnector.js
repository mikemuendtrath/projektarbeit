export async function checkLogin() {
    return true
}

export async function getUserProjects(userID) {
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
        status:"offen"
    },
    {
        id: "2",
        name: "232223",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang",
        mitarbeiterID: "8888888",
        projektID: "99999999",
        status:"offen"
    },
    {
        id: "3",
        name: "Testdfdfdfdfd123",
        deadline: "2023-12-01",
        description: " Hier osll was stehen was etwas länger ist weil beschreibung sind lang",
        mitarbeiterID: "8888888",
        projektID: "99999999",
        status:"offen"
    },

    ]
}

export function createNewProject(projektName,projektleiter, projektdeadline, projektbeschreibung){
    //fetch
    var reuslt = true
    if (reuslt) {
        return true
    }
    else{
        return false
    }

}

export function createNewTask(taskName, taskWorker, taskDeadline, taskDescription){
    //fetch
    var reuslt = true
    if (reuslt) {
        return true
    }
    else{
        return false
    }

}


export function getPossibleProjektleiter(){
    return [{name:"Name1"},{name:"Name2"},{name:"Name3"}]
}

export function getPossibleEmployee(){
    return [{name:"Employee1"},{name:"Employee2"},{name:"Employee3"}]
}

