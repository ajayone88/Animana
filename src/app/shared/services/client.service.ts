import { client } from '../modals/client.modal';

export class clientSerivce{
    clients: client[] = [
        new client('https://www.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png',
                   "Ajay Maurya",
                   'active'),
        new client('https://www.alfabetajuega.com/wp-content/uploads/2019/12/Dragon-Ball-Super-Vegeta-Lucha.jpg',
                   'Rishi Maurya',
                   'active'),
        new client('https://www.latercera.com/resizer/UOTjh46UCoXhf-AKaw5ghvY75Ig=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RJAJDVWT5FFSTC6PV74J4LWPLY.jpg',
                   'Ankit Maurya',
                   'active'), 
      ];

    getClients(){
        return this.clients.slice();
    }

    getClient(id: number){
        return this.clients[id];
    }
}