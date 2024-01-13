import api from "./api"

class BookService {

    getBookData = async () => {
        try {
            const endpoint = 'book/';
            const response = await api.get(endpoint).then(
                function (response) {
                    console.log("Request executed")
                    console.log(response.status);
                    console.log(response.data)
                }
            )
            // console.log(test)
            return response.data;
        }
        catch (error) {
            console.error("Error in getBookData:", error);
        }
        finally {}
    }

    sendBookData = async ( form_data ) => {
        try {
            const endpoint = 'book/';
            const response = await api.post(endpoint, form_data)
            return response;
        }
        catch (error) {
            console.error("Error in sendBookData:", error);
        }
        finally {}
    }
}

export default new BookService();