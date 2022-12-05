import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public salvar(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getDados(key: string) {
    return localStorage.getItem(key)
  }
  public removerDados(key: string) {
    localStorage.removeItem(key);
  }

  public apagarTudo() {
    localStorage.clear();
  }
}
