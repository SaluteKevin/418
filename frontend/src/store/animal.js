import {defineStore} from "pinia";
import {collection,getDocs} from "firebase/firestore"
import {db } from "@/firebase/index.js"

export const useAnimal = defineStore('animals',{
    state: () => {
    return {
        animals: [],
    }
},
    getters:{
        getAnimals: (state) => state.animals
    },
    actions:{
        async fetchData(){
                const queryData = await getDocs(collection(db,"animals"));
                this.animals = queryData.docs.map((doc)=> doc.data());
                console.log(queryData.docs.map((doc)=> doc.data()));
        }
    }
})