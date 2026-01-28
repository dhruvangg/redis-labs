let dashboardValue = 100

export async function fetchDashboardFromDB(){
    await sleep(5000)
    return dashboardValue
}

export async function updateDashboardInDB(newValue){
    await sleep(1000)
    dashboardValue = newValue
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}