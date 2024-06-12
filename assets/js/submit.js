var form = document.getElementById("formId");

function submitForm(event) {
  event.preventDefault();
  var email = document.getElementById("outEmail");
  var content = email.attributes.getNamedItem("href");
  content.value = content.value
    .replace("SubjectReplace", document.getElementById("subject").value)
    .replace("BodyReplace", document.getElementById("message").value);
  content.value +=
    "%0A%0A" +
    document.getElementById("name").value +
    "%0A" +
    document.getElementById("email").value;
  console.log(content);
  email.click();
}

form.addEventListener("submit", submitForm);
