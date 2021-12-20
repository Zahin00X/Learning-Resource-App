<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <base-button mode="flat" @click="deleteResource({value : id})">Delete</base-button>
            </header>
            <p>{{ description }}</p>
            <nav>
            <a :href="url">View Resources</a>    
            </nav>
        </base-card>
    </li>
</template>

<script>

export default {
    inject: ['deleteResource'],
    props: {
        title: {
            type: String,
            required: true
        },
        description : {
            type: String,
            required : true
        },
        url : {
            type :String,
            required : true
        },
        id : {
          type: Number,
          required : true
        }
    }
}
</script>

<style scoped>

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

</style>