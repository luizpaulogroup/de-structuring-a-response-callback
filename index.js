import api from './api';

getProfileOnGithub = async () => {
        
        try{
         
                const response = await api.get('/users/luizpaulogroup/repos');

                const { data: dados, status, statusText: msg } = response;
                
                console.log(dados);
                console.log(status);
                console.log(msg);
                
        }catch(error){
                console.log(error);     
        }
        
}
