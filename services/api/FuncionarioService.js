import axiosInstance from "../AxiosInstance";

export class FuncionarioService{
    constructor(http = axiosInstance) {
        this.http = http
    }

    async getAllFuncionariosByBarbeariaId(barbeariaId){
        try{
            const response = await this.http.get(`funcionario/${barbeariaId}`)
            return response;
        } catch (error) {
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro ao buscar funcionarios. Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }
}