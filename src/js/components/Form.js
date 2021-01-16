export default class Form {
  constructor(template) {
    this.template = template;
  }
  renderForm = () => {
    const form = this.template.content.firstElementChild.cloneNode(true);
    this.form = form;
    return form;
  }
}