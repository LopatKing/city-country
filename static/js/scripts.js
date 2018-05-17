var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

new Vue({
    el: '#test',
    delimiters: ['${','}'],
    data: {
        cities: [],
        countries: [],
        newCity: { 'name': null, 'country': {'name': null} },
        newCountry: {'name': null},
        currentCountry: {},
        currentCity: {},
    },
    mounted: function() {
        this.getCities();
        this.getCountries();
    },
    methods: {
        getCities: function () {
            let api_url = '/api/city';
            this.$http.get(api_url)
                .then((response) => {
                    this.cities = response.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getCountries: function () {
            let api_url = '/api/country';
            this.$http.get(api_url)
                .then((response) => {
                    this.countries = response.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getCountry: function(id) {
            this.$http.get(`/api/country/${id}/`)
                .then((response) => {
                    this.currentCountry = response.data;
                    $("#editCountryModal").modal('show');
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getCity: function(id) {
            this.$http.get(`/api/city/${id}/`)
                .then((response) => {
                    this.currentCity = response.data;
                    $("#editCityModal").modal('show');
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        deleteCity: function(id) {
            this.$http.delete(`/api/city/${id}/`, {
                headers: {
                    "X-CSRFToken": csrftoken
                }
            })
                .then((response) => {
                    this.getCities();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        addCity: function() {
            this.$http.post('/api/city/', city = this.newCity, {
                headers: {
                    "X-CSRFToken": csrftoken
                }
            })
                .then((response) => {
                    this.getCities();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        addCountry: function() {
            console.log(this.newCountry);
            this.$http.post('/api/country/', this.newCountry, {
                headers: {
                    "X-CSRFToken": csrftoken
                }
            })
                .then((response) => {
                    this.getCountries();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        deleteCountry: function(id) {
            this.$http.delete(`/api/country/${id}/`, {
                headers: {
                    "X-CSRFToken": csrftoken
                }
            })
                .then((response) => {
                    this.getCountries();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        updateCountry: function() {
            this.$http.put(`/api/country/${this.currentCountry.id}/`, this.currentCountry, {
                headers: {
                    "X-CSRFToken": csrftoken
                }
            })
                .then((response) => {
                    this.currentCountry = response.data;
                    this.getCountries();
                    this.getCities();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        updateCity: function() {
            this.$http.put(`/api/city/${this.currentCity.id}/`, this.currentCity, {
                headers: {
                    "X-CSRFToken": csrftoken
                }
            })
                .then((response) => {
                    this.currentCity = response.data;
                    this.getCities();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    },
});