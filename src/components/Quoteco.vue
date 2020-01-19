<template>
    <section class="pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <div class="text-xs-center ma-5 pt-5 pb-5" align="center">
                        <div class="flex display-1 font-weight-light pb-3">Get A Custom Quote Tailored To Your Needs
                        </div>
                        <div class="flex subheading font-weight-light">
                            Complete the form below and receive a custom quote that is tailored to your exact requirements.
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <div class="text-xs-center ma-5 pt-5 pb-5" align="center">
    
                        <div class="pipedriveWebForms" data-pd-webforms="https://pipedrivewebforms.com/form/783f0940dc254a846238ecfa9f7dbb6d7412041"></div>
                    </div>
                    
    <!--<v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
            Select an app
            <small>Summarize if needed</small>
        </v-stepper-step>
        
        <v-stepper-content step="1">
            <v-card color="grey lighten-5" class="mb-12" height="auto">
                <v-container fluid>
                    <v-combobox
                            v-model="model"
                            :items="items"
                            :search-input.sync="search"
                            hide-selected
                            hint="Maximum of 9 tags"
                            label="Add some tags"
                            multiple
                            persistent-hint
                            small-chips
                    >
                        <template v-slot:no-data>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-combobox>
                </v-container>
                <v-checkbox
                    v-model="allowSpaces"
                    label="Complete POS System (POS, Backoffice, Online Ordering, Web, iOS & Android Mobile Apps)"
                    class="justify-center ma-5 pt-5"
                >
                </v-checkbox>
                <v-checkbox
                        v-model="allowSpaces"
                        label="Online Ordering Only (Online Ordering, Backoffice, Web, iOS & Android Mobile Apps)"
                        class="justify-center ma-5 pt-5"
                >
                </v-checkbox>
                <v-checkbox
                        v-model="allowSpaces"
                        label="Online Ordering Only (Online Ordering, Mobile Apps)"
                        class="justify-center ma-5 pt-5"
                >
                </v-checkbox>
            </v-card>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
        </v-stepper-content>
        
        <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>
        
        <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
        </v-stepper-content>
        
        <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
        
        <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
        </v-stepper-content>
        
        <v-stepper-step step="4">View setup instructions</v-stepper-step>
        <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
        </v-stepper-content>
    </v-stepper>-->
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  export default {
    name: "Quoteco",
    data: () => ({
      items: ['Full POS Platform', 'Online Ordering', 'iOS App', 'Android App', 'Web App', 'BackOffice', 'Hardware', 'Marketing On-Demand', 'Consulting'],
      model: ['Full POS Platform'],
      search: null,
    }),

    watch: {
      model (val) {
        if (val.length > 1) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
  }
</script>

<style scoped>

</style>
