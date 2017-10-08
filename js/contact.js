// Anna Elde
// August 1, 2017
// This script validates a form.

(function ()
{
    // Get form ID and set event listeners
    var form = document.getElementById("contactForm");
    form.onsubmit = validateForm;
    form.onreset = reset;

    // Gather all form inputs
    var inputs = [].slice.call(form.getElementsByTagName("input"));
    inputs = inputs.concat([].slice.call(form.getElementsByTagName("fieldset")));
    inputs = inputs.concat([].slice.call(form.getElementsByTagName("select")));
    inputs = inputs.concat([].slice.call(form.getElementsByTagName("textarea")));

    // Entry point for form validation
    function validateForm()
    {
        var submit = true;

        // Iterate through form elements
        for (var i = 0; i < inputs.length; i++)
        {
            // Validate each element
            var validElement = validateElement(inputs[i]);

            // If invalid, set form submit to false
            if (!validElement)
            {
                showError(inputs[i]);
                submit = false;
            }
            // If valid, make sure errors aren't showing
            else hideError(inputs[i]);
        }

        // Show success message if everything was valid
        if (submit)
            document.getElementById("success").classList.add("show");

        // Return false so the form doesn't actually submit
        return false;
    }

    function validateElement(element)
    {
        var valid = true;
        var classes = element.classList;

        // Iterate through element's classes
        for (var i = 0; i < classes.length; i++)
        {
            // Execute validation function depending on class
            switch (classes[i])
            {
                case "required": valid = validateRequired(element); break;
                case "email": valid = validateEmail(element); break;
                case "copy": valid = validateConfirm(element); break;
            }

            // If invalid, stop the iteration and return invalid
            if (!valid) return valid;
        }

        return valid;
    }

    // Validates required fields based on field type
    function validateRequired(element)
    {
        // If text field, ensure it contains something
        if (element.type == "text" || element.type == "textarea")
        {
            if (element.value != "") return true;
        }
        // If fieldset, ensure at least one is checked
        else if (element.type == "fieldset")
        {
            var boxes = element.getElementsByTagName("input");
            for (var i = 0; i < boxes.length; i++)
                if (boxes[i].checked) return true;
        }
        // If select, ensure an option is picked
        else if (element.type == "select-one")
        {
            if (element.options[element.selectedIndex].value != "") return true;
        }

        // Return false if it didn't pass any checks
        return false;
    }

    // Validates emails using a regex
    function validateEmail(element)
    {
        // RFC 5322 Regex for Emails
        var r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return r.test(element.value);
    }

    // Validates a pair of fields that require identical content
    function validateConfirm(element)
    {
        // Get IDs of elements
        var id = element.id;
        var otherId = id.substring(0, id.length - 4);

        // Find matching element
        var other = document.getElementById(otherId);

        // Determine if elements hold same value
        if (element.value != other.value) return false;
        else return true;
    }

    function showError(element)
    {
        // Adds error class to fields
        element.classList.add("invalid");

        // Adds error class to field label
        var label = findLabel(element);
        if (label != null) label.classList.add("invalid");

        // Shows error message for field
        var error = findError(element)
        if (error != null) error.classList.add("show");
    }

    function hideError(element)
    {
        // Removes error class from field
        if (element.classList.contains("invalid"))
            element.classList.remove("invalid");

        // Removes error class from field label
        var label = findLabel(element);
        if (label != null && label.classList.contains("invalid")) label.classList.remove("invalid");

        // Hides error message for field
        var error = findError(element)
        if (error != null && error.classList.contains("show")) error.classList.remove("show");
    }

    // Returns a label associated with an element
    // Returns null if no label found
    function findLabel(element)
    {
        var labels = document.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++)
            if (labels[i].htmlFor == element.id) return labels[i];

        return null;
    }

    // Returns the error message associated with an element
    // Returns null if no error message is found
    function findError(element)
    {
        var errors = document.getElementsByClassName("error");

        for (var i = 0; i < errors.length; i++)
        {
            if (errors[i].getAttribute("data-for") == element.id)
                return errors[i];
        }

        return null;
    }

    // Resets the form to remove all information and messages
    function reset()
    {
        // Iterate through form elements to remove error messages and error styling
        for (var i = 0; i < inputs.length; i++)
        {
            if (inputs[i].type == "input")
            {
                if (inputs[i].getAttribute("type") == "text")
                    inputs[i].innerHTML = "";
                else if (inputs[i].getAttribute("type") == "checkbox")
                    inputs[i].checked = false;
            }
            else if (inputs[i].type == "textarea")
                inputs[i].innerHTML = "";

            hideError(inputs[i]);
        }

        // Remove the success message if it's there
        var success = document.getElementById("success");
        if (success.classList.contains("show"))
            success.classList.remove("show");
    }

})();