<template>
    <base-card>
        <base-button @click="setTabStoredResources" :mode="storeResButtonMode">Stored Resource</base-button>
        <base-button @click="setTabAddResources" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component  :is="selectedTab" :selectedTab="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import AddResource from './AddResource.vue';
    import StoredResources from './StoredResources.vue';
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';
    
    
    
    export default{
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource
    },
    provide(){
        return {
            resources : this.storedResources,
            addResource : this.setAddResource,
            deleteResource : this.setRemoveResource,
            
        }
    },
    data()
    {
        return {
      //  selectedTab : 'stored-resources',
       /* storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google..',
          link: 'https://google.org',
        }, 
      ] */
     }
    },
    
    methods: {
        // setSelectedTab(tab)
        // {
        //     this.selectedTab = tab;
        //    /* if(this.selectedTab == 'add-resource')
        //     {
        //         this.isSelected = true;
        //     }
        //     else if(this.selectedTab == 'stored-resources')
        //     {
        //         this.isSelected = false;
        //     } */
        // },
     /*   addResource(title,description,url)
        {
            const newResource = {
                
                id: new Date().toISOString(),
                title: title,
                description : description,
                link:url
            };
            this.storedResources.unshift(newResource);
           
            this.setTabStoredResources();
          //  this.$store.state.selectedTab = 'stored-resources';
        },  */
       /* removeResource(resId)
        {
            const resIndex = this.storedResources.findIndex(res => res._id === resId);
            this.storedResources.splice(resIndex, 1);
        }, */
        ...mapActions(['setTabStoredResources','setTabAddResources','setInitResources','setAddResource','setRemoveResource'])
    },
    computed: {
        storeResButtonMode()
        {
            return this.selectedTab === "stored-resources" ? null : 'flat';
        },
        addResButtonMode()
        {
            return this.selectedTab === "add-resource" ? null : 'flat';
        },
        selectedTab()
        {
            return this.$store.state.selectedTab;
        },
        ...mapGetters(['storedResources'])

    },
watch: {
  /*  storedResources(newResources,oldResources )
    {
        var flag = true;
        if(flag && (newResources !== oldResources))
        {
        this.$forceUpdate();
        console.log(this.storedResources);
        flag = false;
        
        }
    } */
},
    mounted()
    {
        this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
        console.log(this.storedResources);
    },
  /*  updated()
    {
        this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
        console.log(this.storedResources);
    } */  
}

</script>