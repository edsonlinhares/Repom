import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseService {

    protected UrlApi: string = environment.UrlApi;

    protected obterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected extractData(response: any) {
        return response || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === "Unknow Error") {
                customError.push("Ocorreu um erro desconhecico");
                response.error.errors = customError;
            }
        }
        return throwError(response);
    }
}