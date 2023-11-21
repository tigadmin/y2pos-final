<template>
        <v-parallax
                dark
                src="/img/img/pricing-pos.jpg"
                contain
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col class="text-center" cols="12">
                    <h1 class="display-2 pb-5 font-weight-thin">Watch Our Video Series</h1>
                    <h4 class="headline pb-5">
                        No Commission | No Hidden Fees | No Middle Man</h4>
                  <!--<router-link to="/restaurant-pos-quote-pricing">
                      <v-btn @click.stop="dialog = !dialog" aria-label="Website Pricing" color="light-blue darken-4" dark class="ma-2" round>
                          Learn More
                      </v-btn>
                  </router-link>-->
                  <div class="mt-2">
                      <img alt="Restaurant POS Review" height="20" responsive src="/img/img/top-local-marketing.png"></div>
                  <p class="font-weight-regular text--grey darken-1">
                      Call Now | (864) 508-7140
                  </p>
              </v-col>
          </v-row>
      </v-parallax>
</template>

<style scoped lang="scss">
  .v-text-field {
      padding-top: 12px;
      margin-top: 4px;
      -webkit-text-fill-color: white;
      -webkit-text-decoration-color: white;
  }
  .v-text-white {
      color: white;
      padding-top: 12px;
      margin-top: 4px;
  }
  .crazycenter {
      width: 100%;
      align-content: center;
      justify-content: center;
  }
  .v-text-field[data-v-1402b145] {
      padding-top: 12px;
      margin-top: 4px;
      -webkit-text-fill-color: white;
      -webkit-text-decoration-color: white;
  }
  .input {
      -webkit-writing-mode: horizontal-tb !important;
      text-rendering: auto;
      color: -internal-light-dark-color(#ffffff, white);
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      -webkit-appearance: textfield;
      background-color: -internal-light-dark-color(white, #ffffff);
      -webkit-rtl-ordering: logical;
      cursor: text;
      margin: 0em;
      font: 400 11px system-ui;
      padding: 1px;
      border-width: 2px;
      border-style: inset;
      border-color: initial;
      border-image: initial;
  }
</style>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Full name is required',
    ],
    lname: '',
    lnameRules: [
      v => !!v || 'Full name is required',
    ],
    company: '',
    companyRules: [
      v => !!v || 'Full name is required',
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    time: '',
    timeRules: [
      v => !!v || 'Time to call is required',
      v => (v && v.length <= 10) || 'Time must be completed'
    ],
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
