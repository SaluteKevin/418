import {defineStore} from "pinia";
import {collection,getDoc} from "firebase/firestore"

export const useAninal = defineStore('animals',{
    state: () => {
    return {
        animals: [],
        key:"",
    }
},
    getters:{
        getAnimals: (state) => state.animals
    },
    actions:{
        async frechData(){

        }
    }
})