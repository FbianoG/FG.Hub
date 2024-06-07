import UrlBack from "./Api";
import axios from 'axios'

const token = localStorage.getItem('Token')

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

async function Login(dataForm) {
    try {
        const response = await axios.post(`${UrlBack}/login`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) throw new Error(error.response.data.message)
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function CreateUser(dataForm) {
    try {
        const response = await axios.post(`${UrlBack}/createUser`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) throw new Error(error.response.data.message)
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function GetPlans() {
    try {
        const response = await axios.get(`${UrlBack}/getPlans`)
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function GetTerms() {
    try {
        const response = await axios.get(`${UrlBack}/getTerms`)
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function GetRamais() {
    try {
        const response = await axios.get(`${UrlBack}/getRamais`)
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function GetSites() {
    try {
        const response = await axios.get(`${UrlBack}/getSites`)
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function CreatePlan(dataForm) {
    try {
        const response = await axios.post(`${UrlBack}/createPlan`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function UpdatePlan(dataForm) {
    try {
        const response = await axios.put(`${UrlBack}/updatePlan`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

const CreateTerm = async (dataForm) => {
    try {
        const response = await axios.post(`${UrlBack}/createTerm`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

const UpdateTerm = async (dataForm) => {
    try {
        const response = await axios.post(`${UrlBack}/updateTerm`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

const CreateRamal = async (dataForm) => {
    try {
        const response = await axios.post(`${UrlBack}/createRamal`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

const UpdateRamal = async (dataForm) => {
    try {
        const response = await axios.post(`${UrlBack}/updateRamal`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function CreateSite(dataForm) {
    try {
        const response = await axios.post(`${UrlBack}/createSite`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function UpdateSite(dataForm) {
    try {
        const response = await axios.put(`${UrlBack}/updateSite`, { dataForm })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

async function DeleteIten(exType, _id) {
    try {
        console.log(_id)
        const response = await axios.post(`${UrlBack}/deleteIten`, { exType, _id })
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) setTimeout(() => { location.href = '/' }, 4000)
            throw new Error(error.response.data.message)
        }
        else if (error.request) throw new Error("Error de rede. Tente novamente.")
        else throw new Error(error.message)
    }
}

export { Login, CreateUser, GetPlans, GetTerms, GetRamais, GetSites, CreatePlan, UpdatePlan, CreateTerm, UpdateTerm, CreateRamal, UpdateRamal, CreateSite, UpdateSite, DeleteIten }
