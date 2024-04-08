<template>
  <div class="container">
    <div class="card p-3 bg-body rounded border-0">
      <div class="d-flex justify-content-between">
        <p>Total Number of Clients: {{ clients.length }}</p>
        <button class="btn btn-primary mb-3" @click="addClient">
          Add New Client
        </button>
      </div>

      <table class="border-end-0 border-start-0 table-striped">
        <thead>
          <tr>
            <th>Client Legal Name</th>
            <th>Client Department</th>
            <th>Type</th>
            <th>Admin Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(client, index) in clients"
            :key="index"
            :class="{ 'bg-gray-row': index % 2 === 0 }"
          >
            <td>
              <a :href="'/client/' + client.id">{{ client.legalName }}</a>
            </td>
            <td>{{ client.department }}</td>
            <td>{{ client.type }}</td>
            <td>{{ client.adminAddress }}</td>
            <td>{{ client.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          legalName: "City of Gulf Shores",
          department: "Gulf Shores Fire Department",
          type: "Wellness,Pre-employment",
          adminAddress: "430 Broadway, Dobbs Ferry, NY, USA",
          status: "Contract Negotiation",
        },
        {
          legalName: "City of Gulf Shores",
          department: "Gulf Shores Fire Department",
          type: "Wellness,Pre-employment",
          adminAddress: "430 Broadway, Dobbs Ferry, NY, USA",
          status: "Contract Negotiation",
        },
        {
          legalName: "City of Gulf Shores",
          department: "Gulf Shores Fire Department",
          type: "Wellness,Pre-employment",
          adminAddress: "430 Broadway, Dobbs Ferry, NY, USA",
          status: "Contract Negotiation",
        },
      ],
    };
  },
  methods: {
    addClient() {
      this.$router.push({ path: "/add_new_client" });
    },
  },
};
</script>

<style scoped>
.bg-gray-row {
  background-color: #f8f9fa;
}

td {
  color: gray !important;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
}
th {
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  background-color: #f8f9fa;
}
th,
td {
  padding: 8px;
}
</style>
