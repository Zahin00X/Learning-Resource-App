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
                
                id: new Date().toISOString(),
                title: payload.title,
                description : payload.description,
                link: payload.url
            };
            state.storedResources.unshift(newResource);
            state.selectedTab = 'stored-resources';
        },
        removeResource(state,resId)
        {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            state.storedResources.splice(resIndex, 1);
        },
        initResources(state,payload)
        {
            state.storedResources = payload.value;
           // console.log(state.storedResources);
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