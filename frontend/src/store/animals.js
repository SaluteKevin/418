import {defineStore} from "pinia";
import {collection,getDocs} from "firebase/firestore";
import {db} from "@/firebase";

export const useAnimal = defineStore("animals",{
    state: () => ({
        animals: []
    }),

    getters:{
        getAnimals:(state) => {
            return state.animals
        }
    },

    actions:{
        async fetchAnimals(){
            const queryData = await getDocs(collection(db,"animals"));
            this.pets = queryData.docs.map((doc) => doc.data());
        }
    }
});