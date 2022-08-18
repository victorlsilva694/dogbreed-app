import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import requests from "../Services/ServiceApi";

class AuthContext {

  constructor() {
    makeAutoObservable(this);
  }

  public isAuthenticated = false;
  public userData = {
    email: '',
    tokenUser: ''
  };

  public images = {
    list: []
  }

  public imagesHusky = {
    list: []
  }


  public async login(email: string, password: string) {
    let user = {
      email: email,
      password: password
    }
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    try {
      const results = await requests.post("/register", user, {
        headers: headers
      }).then((dataUser) => {
        const token = dataUser.data.user.token;
        localStorage.setItem("token", token);
        runInAction(() => {
          this.isAuthenticated = true;
          this.userData.email = dataUser.data.user.email;
          this.userData.tokenUser = dataUser.data.user.token;
        })

        console.log(this.isAuthenticated)
      })
    } catch (err) {
      console.dir(err);
    }
  }

  public async listItemsHusky() {
    var token = localStorage.getItem("token");
    const headers = {
      'Authorization': `${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    let resultHusky = await requests.get("/list/?breed=husky", {
      headers: headers,
    }).then((husky) => {
      runInAction(() => {
        this.imagesHusky.list = husky.data.list;
      });
    });
  }

  public imagesPug = {
    breeds: 'pug',
    list: []
  }

  public async listItemsPug() {
    var token = localStorage.getItem("token");

    const headers = {
      'Authorization': `${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    let resultPug = await requests.get("/list/?breed=pug", {
      headers: headers,
    }).then((items) => {
      runInAction(() => {
        this.imagesPug.list = items.data.list;
      })
    });
  }

  public imagesLabrador = {
    list: []
  }
  
  public async listItemsLabrador() {
    var token = localStorage.getItem("token");
    const headers = {
      'Authorization': `${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    let resultLabrador = await requests.get("/list/?breed=labrador", {
      headers: headers,
    }).then((labrador) => {
      runInAction(() => {
        this.imagesLabrador.list = labrador.data.list;
      });
    });
  }

  public async listItemDefault() {
    var token = localStorage.getItem("token");
    const headers = {
      'Authorization': `${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    let results = await requests.get("/list", {
      headers: headers,
    }).then((items) => {
      runInAction(() => {
        this.images.list = items.data.list;
      })
    });
  }
  public async verifyToken() {
    runInAction(() => {
      this.isAuthenticated = true;
    })
  }
}
export const authContext = new AuthContext();
export const ContextAuth = createContext(authContext);
export const AuthProvider = ContextAuth.Provider;