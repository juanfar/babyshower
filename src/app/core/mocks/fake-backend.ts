import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import listaRegalos from '@assets/json/mock.json';

const regalos = listaRegalos || [];

localStorage.setItem('products', JSON.stringify(regalos));

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
        case url.endsWith('/products') && method === 'PUT':
          return sendProducts();
        case url.endsWith('/products') && method === 'GET':
          return getProducts();
        default:
          return next.handle(request);
      }
    }

    // route functions

    function getProducts() {
      return ok(JSON.parse(localStorage.getItem('products')) || []);
    }
    function sendProducts() {
      localStorage.setItem('products', JSON.stringify(body));
      return ok();
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
