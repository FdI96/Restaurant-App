const contentContactComponent = () => {
  const contentContact = document.createElement("div");
  contentContact.setAttribute("class", "text-center bg-dark");
  contentContact.setAttribute("style", "height: 400px;");

  const form = document.createElement("form");
  form.setAttribute("class", "text-light");

  let label = document.createElement("label");
  label.setAttribute("for", "name");
  label.innerHTML = "Name";

  let input = document.createElement("input");
  input.setAttribute("id", "name");
  input.setAttribute("type", "text");

  form.appendChild(label);
  form.appendChild(input);

  label = document.createElement("label");
  label.setAttribute("for", "message");

  label.innerHTML = "Message: ";

  input = document.createElement("input");
  input.setAttribute("id", "message");
  input.setAttribute("type", "text");

  form.appendChild(label);
  form.appendChild(input);

  input = document.createElement("input");
  input.setAttribute("type", "submit");
  input.setAttribute("value", "Submit");

  form.appendChild(input);

  contentContact.appendChild(form);

  return contentContact;
};

export default contentContactComponent;
