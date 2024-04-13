<template>
  <div>
    <h2 class="text-center">Add New Client</h2>
    <div class="card p-5 mb-5 bg-body" style="border: none">
      <form @submit.prevent="onSubmit" class="row g-3">
        <div class="col-md-4">
          <label for="client_legal_name" class="form-label"
            >Client Legal Name</label
          >
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            id="client_legal_name"
            v-model="formData.client_legal_name"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="client_department" class="form-label">Department</label>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            id="client_department"
            v-model="formData.client_department"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="client_year" class="form-label">Year</label>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            id="client_year"
            v-model="formData.client_year"
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
          <label for="c_status" class="form-label">Status</label>
        </div>
        <div class="col-md-2">
          <select id="c_status" v-model="formData.c_status" class="form-select">
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
          <label for="executive_officer_firstname" class="form-label"
            >First Name</label
          >
          <input
            type="text"
            class="form-control w-100"
            id="executive_officer_firstname"
            v-model="formData.executive_officer_firstname"
          />
        </div>
        <div class="col-md-4">
          <label for="executive_officer_middlename" class="form-label"
            >Middle Name</label
          >
          <input
            type="text"
            class="form-control w-100"
            id="executive_officer_middlename"
            v-model="formData.executive_officer_middlename"
          />
        </div>
        <div class="col-md-4">
          <label for="executive_officer_lastname" class="form-label"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control w-100"
            id="executive_officer_lastname"
            v-model="formData.executive_officer_lastname"
          />
        </div>

        <div class="col-md-6">
          <label for="executive_officer_preferredname" class="form-label"
            >Preferred Name</label
          >
          <input
            type="text"
            class="form-control"
            id="executive_officer_preferredname"
            v-model="formData.executive_officer_preferredname"
          />
        </div>
        <div class="col-md-6">
          <label for="executive_officer_titlerank" class="form-label"
            >Title/Rank</label
          >
          <input
            type="text"
            class="form-control"
            id="executive_officer_titlerank"
            v-model="formData.executive_officer_titlerank"
          />
        </div>
        <div class="col-md-4">
          <label for="executive_officer_email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control w-100"
            id="executive_officer_email"
            v-model="formData.executive_officer_email"
          />
        </div>
        <div class="col-md-4">
          <label for="executive_officer_office_phone" class="form-label"
            >Office Phone</label
          >
          <input
            type="text"
            class="form-control w-100"
            id="executive_officer_office_phone"
            v-model="formData.executive_officer_office_phone"
          />
        </div>
        <div class="col-md-4">
          <label for="executive_officer_cell_phone" class="form-label"
            >Cell Phone</label
          >
          <input
            type="text"
            class="form-control w-100"
            id="executive_officer_cell_phone"
            v-model="formData.executive_officer_cell_phone"
          />
        </div>
        <!-- point of contact -->
        <div class="col-md-4">
          <label class="form-label font-weight-bold">Point of Contact</label>
        </div>
        <div class="col-md-8">
          <input
            type="checkbox"
            v-model="checkObj.same_as_executive"
            @click="updatePOCFields"
          />
          <label class="form-label m-3">Same as Executive Officer </label>
        </div>
        <div class="col-md-4">
          <label for="POC_firstname" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="POC_firstname"
            v-model="formData.POC_firstname"
          />
        </div>
        <div class="col-md-4">
          <label for="POC_middlename" class="form-label">Middle Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="POC_middlename"
            v-model="formData.POC_middlename"
          />
        </div>
        <div class="col-md-4">
          <label for="POC_lastname" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="POC_lastname"
            v-model="formData.POC_lastname"
          />
        </div>

        <div class="col-md-6">
          <label for="POC_preferredname" class="form-label"
            >Preferred Name</label
          >
          <input
            type="text"
            class="form-control"
            id="POC_preferredname"
            v-model="formData.POC_preferredname"
          />
        </div>
        <div class="col-md-6">
          <label for="POC_titlerank" class="form-label">Title/Rank</label>
          <input
            type="text"
            class="form-control"
            id="POC_titlerank"
            v-model="formData.POC_titlerank"
          />
        </div>
        <div class="col-md-4">
          <label for="POC_email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control w-100"
            id="POC_email"
            v-model="formData.POC_email"
          />
        </div>
        <div class="col-md-4">
          <label for="POC_office_phone" class="form-label">Office Phone</label>
          <input
            type="text"
            class="form-control w-100"
            id="POC_office_phone"
            v-model="formData.POC_office_phone"
          />
        </div>
        <div class="col-md-4">
          <label for="POC_cell_phone" class="form-label">Cell Phone</label>
          <input
            type="text"
            class="form-control w-100"
            id="POC_cell_phone"
            v-model="formData.POC_cell_phone"
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
            id="admin_address_1"
            v-model="formData.admin_address_1"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Address 2</label>
          <input
            type="text"
            class="form-control w-100"
            id="admin_address_2"
            v-model="formData.admin_address_2"
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
          <input
            type="checkbox"
            v-model="checkObj.same_as_admin"
            @click="updateBillingFields"
          />

          <label class="form-label m-3">Same as admin</label>
        </div>
        <div class="col-4"></div>
        <div class="col-4">
          <label class="form-label">Address 1</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_1"
            v-model="formData.billing_address_1"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Address 2</label>
          <input
            type="text"
            class="form-control w-100"
            id="billing_address_2"
            v-model="formData.billing_address_2"
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
        <div class="col-md-4">
          <label class="form-label">Exam Location</label>
        </div>
        <div class="col-md-6">
          <input
            type="radio"
            v-model="checkObj.selectedExamLocation"
            value="admin"
            @change="updateExamLocation"
          />
          <label class="form-label m-3">Same as admin</label>
          <input
            type="radio"
            v-model="checkObj.selectedExamLocation"
            value="billing"
            @change="updateExamLocation"
          />
          <label class="form-label m-3">Same as billing</label>
        </div>

        <div class="col-4">
          <label class="form-label">Approx # of Physicals</label>
        </div>
        <div class="col-3">
          <input
            type="number"
            class="form-control"
            id="no_of_physicals"
            v-model="formData.no_of_physicals"
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
            v-model="formData.special_requirements[0]"
            class="form-control"
            :class="{ 'error-input': requirementFlag }"
          />
          <div
            v-for="(requirement, index) in formData.special_requirements.slice(
              1
            )"
            :key="index + 1"
            class="d-flex"
          >
            <input
              v-model="formData.special_requirements[index + 1]"
              class="form-control"
              :class="{ 'error-input': isError(index + 1) }"
            />
            <button
              type="button"
              class="btn"
              @click="removeRequirement(index + 1)"
            >
              Remove
            </button>
          </div>
          <div>
            <button type="button" class="btn" @click="addMoreRequirements">
              Add Field
            </button>
          </div>
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
      newRequirement: "",
      formData: {
        client_legal_name: "",
        client_department: "",
        client_year: "",
        // type: [],
        c_status: "",
        executive_officer_firstname: "",
        executive_officer_middlename: "",
        executive_officer_lastname: "",
        executive_officer_preferredname: "",
        executive_officer_titlerank: "",
        executive_officer_email: "",
        executive_officer_office_phone: "",
        executive_officer_cell_phone: "",
        POC_firstname: "",
        POC_middlename: "",
        POC_lastname: "",
        POC_preferredname: "",
        POC_titlerank: "",
        POC_email: "",
        POC_office_phone: "",
        POC_cell_phone: "",
        admin_address_1: "",
        admin_address_2: "",
        admin_address_city: "",
        admin_address_state: "",
        admin_address_zip: "",
        billing_address_1: "",
        billing_address_2: "",
        billing_address_city: "",
        billing_address_state: "",
        billing_address_zip: "",
        exam_address_desc: "",
        exam_address_1: "",
        exam_address_2: "",
        exam_address_city: "",
        exam_address_state: "",
        exam_address_zip: "",
        no_of_physicals: null,
        no_of_days: null,
        special_requirements: [],
        blood_draw: "",
        client_submit: "submit",
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
      checkObj: {
        same_as_executive: false,
        same_as_admin: false,
        selectedExamLocation: "",
      },
      requirementFlag: false,
      errorIndices: [],
    };
  },
  methods: {
    updateBillingFields() {
      if (!this.checkObj.same_as_admin) {
        this.formData.billing_address_1 = this.formData.admin_address_1;
        this.formData.billing_address_2 = this.formData.admin_address_2;
        this.formData.billing_address_city = this.formData.admin_address_city;
        this.formData.billing_address_state = this.formData.admin_address_state;
        this.formData.billing_address_zip = this.formData.admin_address_zip;
      } else {
        this.formData.billing_address_1 = "";
        this.formData.billing_address_2 = "";
        this.formData.billing_address_city = "";
        this.formData.billing_address_state = "";
        this.formData.billing_address_zip = "";
      }
    },
    updatePOCFields() {
      if (!this.checkObj.same_as_executive) {
        this.formData.POC_firstname = this.formData.executive_officer_firstname;
        this.formData.POC_middlename =
          this.formData.executive_officer_middlename;
        this.formData.POC_lastname = this.formData.executive_officer_lastname;
        this.formData.POC_preferredname =
          this.formData.executive_officer_preferredname;
        this.formData.POC_titlerank = this.formData.executive_officer_titlerank;
        this.formData.POC_email = this.formData.executive_officer_email;
        this.formData.POC_office_phone =
          this.formData.executive_officer_office_phone;
        this.formData.POC_cell_phone =
          this.formData.executive_officer_cell_phone;
      } else {
        this.formData.POC_firstname = "";
        this.formData.POC_middlename = "";
        this.formData.POC_lastname = "";
        this.formData.POC_preferredname = "";
        this.formData.POC_titlerank = "";
        this.formData.POC_email = "";
        this.formData.POC_office_phone = "";
        this.formData.POC_cell_phone = "";
      }
    },
    updateExamLocation() {
      if (this.checkObj.selectedExamLocation === "admin") {
        this.formData.exam_address_1 = this.formData.admin_address_1;
        this.formData.exam_address_2 = this.formData.admin_address_2;
        this.formData.exam_address_city = this.formData.admin_address_city;
        this.formData.exam_address_state = this.formData.admin_address_state;
        this.formData.exam_address_zip = this.formData.admin_address_zip;
      } else if (this.checkObj.selectedExamLocation === "billing") {
        this.formData.exam_address_1 = this.formData.billing_address_1;
        this.formData.exam_address_2 = this.formData.billing_address_2;
        this.formData.exam_address_city = this.formData.billing_address_city;
        this.formData.exam_address_state = this.formData.billing_address_state;
        this.formData.exam_address_zip = this.formData.billing_address_zip;
      } else {
        this.formData.exam_address_1 = "";
        this.formData.exam_address_2 = "";
        this.formData.exam_address_city = "";
        this.formData.exam_address_state = "";
        this.formData.exam_address_zip = "";
      }
    },
    addMoreRequirements() {
      const firstReq = this.formData.special_requirements[0];
      if (firstReq === "" || firstReq === undefined) {
        this.requirementFlag = true;
      } else {
        this.requirementFlag = false;
        if (
          this.formData.special_requirements.slice(1).every((req) => req !== "")
        ) {
          this.errorIndices = []; // Reset error indices if all previous requirements are filled
          this.formData.special_requirements.push("");
        } else {
          this.errorIndices = this.formData.special_requirements
            .slice(1)
            .reduce((acc, req, index) => {
              if (req === "") acc.push(index + 1);
              return acc;
            }, []);
        }
      }
    },
    removeRequirement(index) {
      this.formData.special_requirements.splice(index, 1);
    },
    isError(index) {
      return this.errorIndices.includes(index);
    },
    onSubmit() {
      console.log(this.formData, "formData");
    },
  },
};
</script>

<style scoped>
.card {
  margin: 20px 200px;
}
.error-input {
  border-color: red;
}
</style>
