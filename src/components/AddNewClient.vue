<template>
  <div>
    <h2 class="text-center">Add New Client</h2>
    <div class="card p-5 mb-5 bg-body" style="border: none">
      <form @submit="onSubmit" class="row g-3">
        <div class="col-md-4">
          <label for="client_legal_name" class="form-label"
            >Client Legal Name</label
          >
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            :class="{ 'w-50': $mq === 'md' }"
            id="client_legal_name"
            v-model="formData.client_legal_name"
          />
        </div>
        <div class="col-md-4">
          <label for="department" class="form-label">Department</label>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            :class="{ 'w-50': $mq === 'md' }"
            id="department"
            v-model="formData.department"
          />
        </div>
        <div class="col-md-4">
          <label for="year" class="form-label">Year</label>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            :class="{ 'w-50': $mq === 'md' }"
            id="year"
            v-model="formData.year"
          />
        </div>
        <div class="col-md-4">
          <label for="type" class="form-label">Type</label>
        </div>
        <div class="col-md-8">
          <div
            class="form-check form-check-inline"
            v-for="option in typeOptions"
            :key="option.value"
          >
            <input
              type="checkbox"
              class="form-check-input"
              :value="option.value"
              v-model="formData.type"
            />
            {{ option.label }}
          </div>
        </div>

        <div class="col-md-4">
          <label for="status" class="form-label">Status</label>
        </div>
        <div class="col-md-2">
          <select id="status" v-model="formData.status" class="form-select">
            <option
              v-for="option in statusType"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <label class="form-label font-weight-bold">Executive Officer</label>
        <div class="col-md-4">
          <label for="first_name" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="first_name"
            v-model="formData.first_name"
          />
        </div>
        <div class="col-md-4">
          <label for="midddle_name" class="form-label">Middle Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="middle_name"
            v-model="formData.middle_name"
          />
        </div>
        <div class="col-md-4">
          <label for="last_name" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="last_name"
            v-model="formData.last_name"
          />
        </div>

        <div class="col-md-4">
          <label for="preferred_name" class="form-label">Preferred Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="preferred_name"
            v-model="formData.preferred_name"
          />
        </div>
        <div class="col-md-8">
          <label for="title_rank" class="form-label">Title/Rank</label>
          <div class="col-md-8">
            <input
              type="text"
              class="form-control w-50"
              id="title_rank"
              v-model="formData.title_rank"
            />
          </div>
        </div>
        <div class="col-md-4">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control w-100"
            id="email"
            v-model="formData.email"
          />
        </div>
        <div class="col-md-4">
          <label for="office_phone" class="form-label">Office Phone</label>
          <input
            type="text"
            class="form-control w-100"
            id="office_phone"
            v-model="formData.office_phone"
          />
        </div>
        <div class="col-md-4">
          <label for="cell_phone" class="form-label">Cell Phone</label>
          <input
            type="text"
            class="form-control w-100"
            id="cell_phone"
            v-model="formData.cell_phone"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Admin Address</label>
        </div>

        <div class="col-4">
          <label class="form-label">Address 1</label>
          <input
            type="text"
            class="form-control w-100"
            id="admin_address_address1"
            v-model="formData.admin_address_address1"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Address 2</label>
          <input
            type="text"
            class="form-control w-100"
            id="admin_address_address2"
            v-model="formData.admin_address_address2"
          />
        </div>
        <div class="col-4"></div>
        <div class="col-3">
          <label class="form-label">City</label>
          <input
            type="text"
            class="form-control w-100"
            id="admin_address_city"
            v-model="formData.admin_address_city"
          />
        </div>
        <div class="col-3">
          <label class="form-label">State</label>
          <input
            type="text"
            class="form-control w-100"
            id="admin_address_state"
            v-model="formData.admin_address_state"
          />
        </div>
        <div class="col-2">
          <label class="form-label">Zip</label>
          <input
            type="text"
            class="form-control w-100"
            id="admin_address_zip"
            v-model="formData.admin_address_zip"
          />
        </div>
        <!-- Billing -->
        <div class="col-4">
          <label class="form-label">Billing Address</label>
        </div>
        <div class="col-8">
          <input type="checkbox" v-model="formData.same_as_admin" />
          <label class="form-label m-3">Same as admin</label>
        </div>
        <div class="col-4"></div>
        <div class="col-4">
          <label class="form-label">Address 1</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_address1"
            v-model="formData.billing_address_address1"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Address 2</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_address2"
            v-model="formData.billing_address_address2"
          />
        </div>
        <div class="col-4"></div>
        <div class="col-3">
          <label class="form-label">City</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_city"
            v-model="formData.billing_address_city"
          />
        </div>
        <div class="col-3">
          <label class="form-label">State</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_state"
            v-model="formData.billing_address_state"
          />
        </div>
        <div class="col-2">
          <label class="form-label">Zip</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_zip"
            v-model="formData.billing_address_zip"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Approx # of Physicals</label>
        </div>
        <div class="col-3">
          <input
            type="number"
            class="form-control"
            id="approx_no_of_physicals"
            v-model="formData.approx_no_of_physicals"
          />
        </div>
        <div></div>
        <div class="col-4">
          <label class="form-label"># of Days</label>
        </div>
        <div class="col-3">
          <input
            type="number"
            class="form-control"
            id="no_of_days"
            v-model="formData.no_of_days"
          />
        </div>
        <div></div>

        <div class="col-4">
          <label class="form-label">Special Requirements</label>
        </div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            id="special_requirements"
            v-model="formData.special_requirements"
          />
          <button type="submit" class="btn mt-3">Add Field</button>
        </div>
        <div></div>

        <div class="col-4">
          <label class="form-label">Blood Draw</label>
        </div>
        <div class="col-6">
          <select id="status" v-model="formData.blood_draw" class="form-select">
            <option
              v-for="option in drawType"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="col-3">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        client_legal_name: "",
        department: "",
        year: "",
        type: [],
        status: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        preferred_name: "",
        title_rank: "",
        email: "",
        office_phone: "",
        cell_phone: "",
        point_of_contact: "",
        same_as_admin: false,
        admin_address_address1: "",
        admin_address_address2: "",
        admin_address_city: "",
        admin_address_state: "",
        admin_address_zip: "",
        billing_address_address1: "",
        billing_address_address2: "",
        billing_address_city: "",
        billing_address_state: "",
        billing_address_zip: "",
        exam_location_description: "",
        exam_location_address1: "",
        exam_location_address2: "",
        exam_location_city: "",
        exam_location_state: "",
        exam_location_zip: "",
        approx_no_of_physicals: null,
        no_of_days: null,
        special_requirements: "",
        blood_draw: "",
      },
      typeOptions: [
        { value: "fit-for-duty", label: "Fit-for-duty" },
        { value: "wellness", label: "Wellness" },
        { value: "pre-employment", label: "Pre-employment" },
      ],
      statusType: [
        { value: "prospect", label: "Prospect" },
        { value: "contract_negotiation", label: "Contract Negotiation" },
        { value: "active", label: "Active" },
        { value: "completed", label: "Completed" },
      ],
      drawType: [
        { value: "self_draw", label: "Self Draw" },
        { value: "on_site", label: "On Site" },
        { value: "at_lab", label: "At Lab" },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  margin: 20px 200px;
}
</style>
