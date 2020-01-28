import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import listaRegalos from '@assets/json/mock.json';

const regalos = listaRegalos || [];

localStorage.setItem('products', JSON.stringify(regalos));

const products = JSON.parse(localStorage.getItem('products')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/products') && method === 'GET':
                    return getProducts();
                case url.match(/\/products\/\d+$/) && method === 'GET':
                    return getProductById();
                default:
                    return next.handle(request);
            }
        }

        // route functions

        function getProducts() {
            return ok(products);
        }

        function getProductById() {
            const user = products.find(x => x.id === idFromUrl());
            return ok(user);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
