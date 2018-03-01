import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../../../shared/common/rxjs/rxjs-operators';

import { Clients } from '../../models/';


@Injectable()
export class ClientsService {

    constructor(private http: Http) { }

    getClients() {
    const url = 'http://api';
    const headers = new Headers({ 'Authorization' : '' });
    const options = {
        headers : headers
    };

        return <Observable<Clients[]>>this.http
            .get(url, options)
            .map(response => {
                const _Clients = response.json();
                console.log(_Clients.Results);
                return <Clients[]>_Clients.Results;
            })
            .do(response => console.log(response))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        const msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

}
