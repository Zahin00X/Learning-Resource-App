<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storeResButtonMode">Stored Resource</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab" :selectedTab="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import AddResource from './AddResource.vue';
    import StoredResources from './StoredResources.vue';
    export default{
    components: {
        'stored-resources': StoredResources,
        'add-resource' : AddResource
    },
    provide(){
        return {
            resources : this.storedResources,
            addResource : this.addResource,
            deleteResource : this.removeResource,
            
        }
    },
    data()
    {
        return {
        selectedTab : 'stored-resources',
        storedResources: [
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
      ]
     }
    },
    
    methods: {
        setSelectedTab(tab)
        {
            this.selectedTab = tab;
           /* if(this.selectedTab == 'add-resource')
            {
                this.isSelected = true;
            }
            else if(this.selectedTab == 'stored-resources')
            {
                this.isSelected = false;
            } */
        },
        addResource(title,description,url)
        {
            const newResource = {
                
                id: new Date().toISOString(),
                title: title,
                description : description,
                link:url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId)
        {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        }
    },
    computed: {
        storeResButtonMode()
        {
            return this.selectedTab === "stored-resources" ? null : 'flat';
        },
        addResButtonMode()
        {
            return this.selectedTab === "add-resource" ? null : 'flat';
        }
    },
    
    }
</script>