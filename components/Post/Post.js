import Api from './Api'

const forms = '/api/v1/forms'

export default {
    async SendForm( data ){
        const response = await Api.post( forms + '/SendForm', data)
        return response.data
    },
    async SendComment( data ){
        const response = await ApiHacienda.post( forms + '/Qualification', data)
        return response.data
    },
}