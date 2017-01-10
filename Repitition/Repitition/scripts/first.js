$('document').ready(function () {
    first.personsDiv = $('#persons');
    first.searchDiv = $('#searchDiv');
    first.addPersonsDiv = $('#addPersonsDiv');
    first.divs = [first.personsDiv, first.searchDiv, first.addPersonsDiv];

    first.GetPersons(first.personsDiv);
    first.HideElements(first.divs);
    first.Listen();
    
});
    var first = {};


    first.Person = function (FirstName, LastName, Age, City) {
        this.FirstName = FirstName,
        this.LastName = LastName;
        this.Age = Age;
        this.City = City;
        this.FullName = function () {
            return this.FirstName + " " + this.LastName;
        }
    };

    first.Persons = [
        new first.Person("Kalle", "Hallberg", 22, "Helsingborg"),
        new first.Person("Palle", "Karlsson", 25, "Oslo"),
        new first.Person("Lisa", "Sävås", 22, "Köpenhamn"),
        new first.Person("Alfons", "Åberg", 11, "Stockholm")

    ];



    first.GetPersons = function (element) {
        var persons = first.Persons;
        element.html('');
        for (var i = 0; i < persons.length; i++) {
            element.append(
                "<p>" + persons[i].FullName() + ", " +
                persons[i].Age + " år bosatt i " + persons[i].City +
                "</p>"
                )

        }
    }

    first.AddPerson = function (form) {

        var newPerson = new first.Person(form.fName, form.lName, form.age, form.city);
        first.Persons.push(newPerson);
    }

    first.HideElements= function(elements){
        for(var i = 0; i < elements.length; i++){
            elements[i].hide();
        }
    }
    first.SearchPerson = function (searchInput) {

        var dfd = $.Deferred();
        var searchResult = [];
        $.each(first.Persons, function (key, value) {
            var firstname = value.FirstName;
            if (firstname.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.LastName.toLowerCase().includes(searchInput.toLowerCase())) {
                searchResult.push(value);
            }
        })

        if (searchResult.length > 0) {
            dfd.resolve(searchResult);
        }
        else {
            dfd.reject("Couldn't find any Users that match with: " + searchInput + ".");
        }

        return dfd.promise();
    }
    first.Listen = function () {
        $('#ShowPersonBtn').on('click', function () {
            first.HideElements(first.divs);
            $('#persons').slideToggle(100);
        })
        $('#ShowSearchBtn').on('click', function () {
            first.HideElements(first.divs);
            $('#searchDiv').slideToggle(100);
        })
        $('#AddPersonBtn').on('click', function () {
            first.HideElements(first.divs);
            $('#addPersonsDiv').slideToggle(100);
        })
        $('#searchBtn').on('click', function () {
            var searchInput = $('#search').val();
            var result = first.SearchPerson(searchInput).then(searchSuccess, searchError);



            function searchSuccess(result) {
                $('#searchResult').html('');
                $.each(result, function (key, value) {
                    $('#searchResult').append(
                    "<p>" + value.FullName() + ", " +
                    value.Age + " år from " + value.City +
                    "</p>"
                    )
                });
                $('#resultInfo').html("<p>Found: " + result.length +" matches.</p>")
            }
            function searchError(error) {
                $('#searchResult').html('');
                $('#resultInfo').html("<p>" + error + "</p>");
            }
            


        });
        $('#submitBtn').on('click', function () {
            var personForm = $('#personForm');
            var objForm = formToObject(personForm.serializeArray());

            first.AddPerson(objForm);
            first.GetPersons(first.personsDiv);
            $('#addPersonResult').html("Person Added.")
            personForm[0].reset();
            
        });

        function formToObject(form) {
            var formObj = {};
            $.each(form, function (key, value) {
                formObj[value.name] = value.value;
            });
            return formObj;
        }
    }

    
