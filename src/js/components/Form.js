export default class Form {
  constructor(template) {
    this.template = template;
  }
  renderForm = () => {
    const form = this.template.content.firstElementChild.cloneNode(true);
    console.log(form);
    return form;
  }

  sendForm = (event) => {
    event.preventDefault();
    console.log('send!!!!');
  }
}