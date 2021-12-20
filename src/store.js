import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({

    state()
    {
        return{
            selectedTab : 'stored-resources',
            inputIsInvalid : false,
            storedResources: [],
        }
    },
    plugins: [createPersistedState({
        paths: ['storedResources']
    })],
    mutations: {
        setSelectedTab(state,payload)
        {
            state.selectedTab = payload.tab;
        },
        addResource(state,payload)
        {
            const newResource = {
                
                title: payload.title,
                description : payload.description,
                url: payload.url
            };
           
           
            axios.post('http://localhost:8081/users/add', newResource).then( response => (console.log(response.data)))
            state.storedResources.unshift(newResource);
            state.selectedTab = 'stored-resources';
        },
        removeResource(state,payload)
        {
           // const resIndex = state.storedResources.findIndex(res => res._id === payload.value);
            console.log(payload.value);
            console.log(state.storedResources);
            // state.storedResources.splice(resIndex, 1);
            axios.delete(`http://localhost:8081/users/${ payload.value }`).then( response => (console.log(response.data)))
            location.reload();
            
            
        },
        initResources(state,payload)
        {
            state.storedResources = payload.value;
           // console.log(state.storedResources);
        },
        setInputIsInvalid(state, payload)
        {
            state.inputIsInvalid = payload.value;
        }

    },

    actions: {
        setTabStoredResources(context)
        {
            context.commit('setSelectedTab',{ tab: 'stored-resources'});
        },
        setTabAddResources(context)
        {
            context.commit('setSelectedTab',{ tab: 'add-resource'});
        },
        setInitResources(context, payload)
        {
            context.commit('initResources', payload );
        },
        setAddResource(context, payload)
        {
            context.commit('addResource', payload );
        },
        commitInputIsInvalid(context, payload)
        {
            context.commit('setInputIsInvalid', payload );
        },
        setRemoveResource(context, payload)
        {
            context.commit('removeResource', payload);
        }
        
    },
    getters: {

    storedResources(state)
    {
        return state.storedResources;
    },
    inputIsInvalid(state)
    {
        return state.inputIsInvalid;
    }
        

    }
})

export default store;