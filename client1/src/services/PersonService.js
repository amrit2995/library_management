import person from "../components/dashboard/person";
import api from "./api";

class PersonService {
    sendFormData = async (
        form_data
    ) => {
        try {
            const endpoint = 'person/';
            const response = await api.post(endpoint, form_data);
            console.log(response.status)
            console.log(response.data)
            return response;
        }
        catch {}
        finally {}
    };

    getPersonList = async () => {
        try {
            const endpoint = "person/";
            const response = await api.get(endpoint)
            console.log("test")
            console.log(response.status)
            console.log(response.data)
            return response.data
        }
        catch {}
        finally {}
    }
}

export default new PersonService();