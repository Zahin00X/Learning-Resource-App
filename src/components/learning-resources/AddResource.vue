<template>
<base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="closeDialog">
    <template #default>
        <p>Unfortunately, at least one input field is invalid</p>
        <p>Please check all inputs and make sure you enter atleast a few characters</p>
    </template>
    <template #actions>
        <base-button @click="closeDialog">Okay</base-button>
    </template>
</base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">URL Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data()
  {
      return {
      //    inputIsInvalid : false,
          

      };
  },
  props: ['selectedTab'],
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
        )
        {
            this.inputIsInvalid = true;
            return;
        }
        this.addResource(enteredTitle, enteredDescription, enteredLink);
        
    },
    closeDialog()
    {
       this.inputIsInvalid = false;
    },
    
  },
  computed: {

    inputIsInvalid()
    {
      return this.$store.state.inputIsInvalid;
    }

  },

  mounted()
  {
    
      this.$refs.titleInput.focus();
      console.log(this.selectedTab);

    
  },
  activated()
  {
    
      this.$refs.titleInput.focus();
      console.log(this.selectedTab);
    
  },
  deactivated()
  {
    this.$refs.titleInput.value = "";
    this.$refs.descInput.value = "";
    this.$refs.linkInput.value = "";
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>