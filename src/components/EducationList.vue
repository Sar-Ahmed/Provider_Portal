<template>
  <div class="container">
    <div class="card p-3 my-5 bg-body rounded">
      <h5 class="mb-3 fw-bold">Educational Docs</h5>
      <table class="table">
        <thead>
          <tr>
            <th style="width: 5%">M</th>
            <th style="width: 5%">F</th>
            <th style="width: 70%">Description</th>
            <th>Category</th>
            <th style="width: 5%">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="education in educationList" :key="education.id">
            <td><input type="checkbox" v-model="education.var_m" /></td>
            <td><input type="checkbox" v-model="education.var_f" /></td>
            <td>
              {{ education.title }}<br />
              <div class="text-muted">{{ education.description }}</div>
            </td>
            <td>{{ education.category }}</td>
            <td>
              <button
                class="btn btn-danger"
                @click="deleteEducation(education.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card p-3 bg-body rounded">
      <form @submit.prevent="addNewEducation">
        <p>Add New Educational Doc</p>
        <div class="mb-3">
          <label for="file-upload" class="custom-file-upload">
            <i class="fas fa-upload"></i> Drop file here or click to upload.
          </label>
          <input
            id="file-upload"
            type="file"
            @change="handleFileUpload"
            style="display: none"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Add Description</label>
          <textarea
            id="description"
            class="form-control"
            rows="1"
            v-model="formValues.description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        description: "",
      },
      educationList: [
        {
          id: 1,
          var_m: true,
          var_f: true,
          title: "2022 COVID-19 Current State (Infographic)",
          description: "Center for Fire Rescue and EMS Health Research",
          category: "",
        },
        {
          id: 2,
          var_m: false,
          var_f: true,
          title: "2022 COVID-19 Current State (Infographic)",
          description: "Center for Fire Rescue and EMS Health Research",
          category: "Nutrition",
        },
        {
          id: 3,
          var_m: true,
          var_f: false,
          title: "2022 COVID-19 Current State (Infographic)",
          description: "Center for Fire Rescue and EMS Health Research",
          category: "",
        },
        {
          id: 4,
          var_m: false,
          var_f: false,
          title: "2022 COVID-19 Current State (Infographic)",
          description: "Center for Fire Rescue and EMS Health Research",
          category: "",
        },
        {
          id: 5,
          var_m: false, // Set to false instead of undefined
          var_f: false, // Set to false instead of undefined
          title: "2022 COVID-19 Current State (Infographic)",
          description: "Center for Fire Rescue and EMS Health Research",
          category: "",
        },
      ],
    };
  },
  methods: {
    addNewEducation() {
      console.log(this.formValues);
      const newId = Date.now();
      const body = {
        id: newId,
        var_m: true, // Set to false instead of undefined
        var_f: false, // Set to false instead of undefined
        title: `2024 ${this.formValues.description.toUpperCase} Health Research`,
        description: this.formValues.description,
        category: "",
      };
      console.log(body);
      this.educationList.push(body);
      this.formValues.description = "";
    },
    deleteEducation(id) {
      console.log(id, "id");
    },
  },
};
</script>
<style scoped>
.custom-file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed lightgray;
  padding: 50px;
  cursor: pointer;
}

.card {
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
